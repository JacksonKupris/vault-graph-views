var VaultGraphViews=(()=>{var Ul=Object.defineProperty;var $f=Object.getOwnPropertyDescriptor;var tp=Object.getOwnPropertyNames;var ep=Object.prototype.hasOwnProperty;var np=(i,t)=>{for(var e in t)Ul(i,e,{get:t[e],enumerable:!0})},ip=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of tp(t))!ep.call(i,s)&&s!==e&&Ul(i,s,{get:()=>t[s],enumerable:!(n=$f(t,s))||n.enumerable});return i};var sp=i=>ip(Ul({},"__esModule",{value:!0}),i);var Ly={};np(Ly,{VIEWS:()=>Fy,bench:()=>Xf,check:()=>Nl,checkInputs:()=>Fl,mountViews:()=>Dy});var Vs={top:{nodes:"array",links:"array",clusters:"array",wanted:"array"},node:{id:"string",name:"string",cluster:"number",folder:"string",inlinks:"number",outlinks:"number",words:"number"},link:{source:"string",target:"string",kind:"string"},cluster:{id:"number",name:"string",label:"string",size:"number"},strand:{days:"array",paths:"array",ids:"array",rows:"array"}},rp={n:"number",X:"array",stress:"number",grade:"string",domains:"array",loops:"array"},op={guide:"string",where:"string",notes:"array"},ap={ids:"array",level:"array",edges:"array",stats:"object"};var cn=i=>Array.isArray(i)?"array":i===null?"null":typeof i,ai=(i,t,e,n)=>{for(let[s,r]of Object.entries(n))cn(e[s])!==r&&i.push(`${t}.${s} should be ${r}, is ${cn(e[s])}`)};function Nl(i){let t=[];if(!i||typeof i!="object")return["data is not an object"];if(ai(t,"data",i,Vs.top),t.length)return t;i.nodes[0]&&ai(t,"nodes[0]",i.nodes[0],Vs.node),i.links[0]&&ai(t,"links[0]",i.links[0],Vs.link),i.clusters[0]&&ai(t,"clusters[0]",i.clusters[0],Vs.cluster);let e=new Set(i.nodes.map(s=>s.id));for(let s of i.wanted)e.add(s.id);let n=i.links.filter(s=>!e.has(s.source)||!e.has(s.target)).length;return n&&t.push(`${n} links point at a note that is in neither nodes nor wanted`),t}function Fl(i,t,e){let n=[],s=e||{};if(i==="genome"){let r=t&&t.strand;if(cn(r)!=="object")return[`data.strand should be object, is ${cn(r)}`];if(ai(n,"data.strand",r,Vs.strand),cn(s.fold)!=="object")return n.concat(`inputs.fold should be object, is ${cn(s.fold)}`);if(ai(n,"inputs.fold",s.fold,rp),n.length)return n;let o=s.fold;(r.rows.length!==r.days.length||r.paths.length!==r.days.length)&&n.push(`data.strand has ${r.days.length} days, ${r.rows.length} rows and ${r.paths.length} paths: they should be the same number`),(o.n!==r.days.length||o.X.length!==o.n)&&n.push(`inputs.fold is for ${o.n} days (${o.X.length} points) and data.strand has ${r.days.length}: the fold is from other data`);let a=o.loops.filter(l=>!(l.a>=0&&l.a<o.n&&l.b>=0&&l.b<o.n&&typeof l.count=="number")).length;a&&n.push(`${a} of inputs.fold.loops don't name two days of the strand and a count`)}if(i==="foodweb"){if(cn(s.web)!=="object")return n.concat(`inputs.web should be object, is ${cn(s.web)}`);if(ai(n,"inputs.web",s.web,ap),n.length)return n;let r=s.web;r.level.length!==r.ids.length&&n.push(`inputs.web has ${r.ids.length} ids and ${r.level.length} levels: they should be the same`);let o=r.edges.filter(a=>!(a[0]>=0&&a[0]<r.ids.length&&a[1]>=0&&a[1]<r.ids.length)).length;o&&n.push(`${o} of inputs.web.edges don't name two of its ids`);for(let a of["mean","maxLevel","incoherence"])typeof r.stats[a]!="number"&&n.push(`inputs.web.stats.${a} should be number, is ${cn(r.stats[a])}`);if(n.length)return n}if(i==="cas9"&&s.scan!=null){if(cn(s.scan)!=="object")return[`inputs.scan should be object, is ${cn(s.scan)}`];ai(n,"inputs.scan",s.scan,op),s.scan.ids!==void 0&&!Array.isArray(s.scan.ids)&&n.push(`inputs.scan.ids should be array, is ${cn(s.scan.ids)}`),!n.length&&s.scan.notes[0]&&(typeof s.scan.notes[0].path!="string"||typeof s.scan.notes[0].hits!="number")&&n.push("inputs.scan.notes[0] should be { path: string, hits: number }")}return s.hour!=null&&typeof s.hour!="number"&&n.push(`inputs.hour should be number, is ${cn(s.hour)}`),s.selected!=null&&typeof s.selected!="string"&&n.push(`inputs.selected should be string, is ${cn(s.selected)}`),n}var lp=["#4385BE","#879A39","#DA702C","#8B7EC8","#3AA99F","#D14D41","#D0A215","#CE5D97","#205EA6","#66800B","#BC5215","#5E409D","#24837B","#AF3029","#AD8301","#A02F6F"];function io(i){return Object.assign({bg:"#14161a",fg:"#dddddd",muted:"#8a8f98",accent:"#6aa9ff",warn:"#f59e0b",palette:lp},i||{})}var lu=0,mc=1,cu=2;var Sr=1,hu=2,Ss=3,_i=0,De=1,ge=2,Qn=0,bs=1,Oi=2,gc=3,xc=4,uu=5;var Vi=100,du=101,fu=102,pu=103,mu=104,gu=200,xu=201,_u=202,yu=203,_c=204,yc=205,Mu=206,vu=207,Su=208,bu=209,wu=210,Eu=211,Tu=212,Au=213,Ru=214,Uo=0,No=1,Fo=2,us=3,Do=4,Lo=5,Bo=6,ko=7,br=0,Cu=1,Iu=2,Bn=0,wr=1,Er=2,Tr=3,zi=4,Ar=5,Rr=6,Cr=7;var Mc=300,Gi=301,ws=302,_a=303,ya=304,ds=1e3,Fn=1001,Oo=1002,Ue=1003,Pu=1004;var Ir=1005;var on=1006,Ma=1007;var Kn=1008;var dn=1009,vc=1010,Sc=1011,Es=1012,va=1013,Pn=1014,wn=1015,qe=1016,Sa=1017,ba=1018,Hi=1020,bc=35902,wc=35899,Ec=1021,Tc=1022,Un=1023,Jn=1026,$n=1027,wa=1028,Ea=1029,yi=1030,Ta=1031;var Aa=1033,Pr=33776,Ur=33777,Nr=33778,Fr=33779,Ra=35840,Ca=35841,Ia=35842,Pa=35843,Ua=36196,Na=37492,Fa=37496,Da=37488,La=37489,Dr=37490,Ba=37491,ka=37808,Oa=37809,Va=37810,za=37811,Ga=37812,Ha=37813,Wa=37814,Za=37815,Ya=37816,Xa=37817,Ja=37818,qa=37819,ja=37820,Qa=37821,Ka=36492,$a=36494,tl=36495,el=36283,nl=36284,Lr=36285,il=36286;var Qs=2300,Vo=2301,Io=2302,ac=2303,lc=2400,cc=2401,hc=2402;var Uu=3200;var Ts=0,Nu=1,ti="",ze="srgb",Ks="srgb-linear",$s="linear",me="srgb";var Po=7680;var Fu=519,Du=512,Lu=513,Bu=514,Ac=515,ku=516,Ou=517,Rc=518,Cc=519,Vu=35044;var Ic="300 es",Mn=2e3,fs=2001;function cp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zu(){let i=tr("canvas");return i.style.display="block",i}var Rh={},ps=null;function Pc(...i){let t="THREE."+i.shift();ps?ps("log",t,...i):console.log(t,...i)}function Gu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=Gu(i);let t="THREE."+i.shift();if(ps)ps("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=Gu(i);let t="THREE."+i.shift();if(ps)ps("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Js(...i){let t=i.join(" ");t in Rh||(Rh[t]=!0,Xt(...i))}function Hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Wu={[Uo]:Uo,[Fo]:Bo,[Do]:Do,[us]:Lo,[No]:No,[Bo]:Fo,[ko]:ko,[Lo]:us},Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dl=Math.PI/180,zo=180/Math.PI;function Br(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function up(i,t){return(i%t+t)%t}function Ll(i,t,e){return(1-e)*i+e*t}function Zu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function dp(i,t){if(t.constructor===Float32Array)return i;let e=Uc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function fp(i,t){if(t.constructor===Float32Array)return i;let e=Uc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Pt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(f!==v||l!==u||h!==d||c!==m){let _=l*u+h*d+c*m+f*v;_<0&&(u=-u,d=-d,m=-m,v=-v,_=-_);let p=1-a;if(_<.9995){let y=Math.acos(_),M=Math.sin(y);p=Math.sin(p*y)/M,a=Math.sin(a*y)/M,l=l*p+u*a,h=h*p+d*a,c=c*p+m*a,f=f*p+v*a}else{l=l*p+u*a,h=h*p+d*a,c=c*p+m*a,f=f*p+v*a;let y=1/Math.sqrt(l*l+h*h+c*c+f*f);l*=y,h*=y,c*=y,f*=y}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+c*f+l*d-h*u,t[e+1]=l*m+c*u+h*f-a*d,t[e+2]=h*m+c*d+a*u-l*f,t[e+3]=c*m-a*f-l*u-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*c*f+h*d*m,this._y=h*d*f-u*c*m,this._z=h*c*m+u*d*f,this._w=h*c*f-u*d*m;break;case"YXZ":this._x=u*c*f+h*d*m,this._y=h*d*f-u*c*m,this._z=h*c*m-u*d*f,this._w=h*c*f+u*d*m;break;case"ZXY":this._x=u*c*f-h*d*m,this._y=h*d*f+u*c*m,this._z=h*c*m+u*d*f,this._w=h*c*f-u*d*m;break;case"ZYX":this._x=u*c*f-h*d*m,this._y=h*d*f+u*c*m,this._z=h*c*m-u*d*f,this._w=h*c*f+u*d*m;break;case"YZX":this._x=u*c*f+h*d*m,this._y=h*d*f+u*c*m,this._z=h*c*m-u*d*f,this._w=h*c*f-u*d*m;break;case"XZY":this._x=u*c*f-h*d*m,this._y=h*d*f-u*c*m,this._z=h*c*m+u*d*f,this._w=h*c*f+u*d*m;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-l)*d,this._y=(r-h)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+h)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-h)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+c)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+h)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let h=Math.acos(a),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ch.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),c=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*h+o*f-a*c,this.y=n+l*c+a*h-r*f,this.z=s+l*f+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bl.copy(this).projectOnVector(t),this.sub(Bl)}reflect(t){return this.sub(Bl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bl=new V,Ch=new Ge,$t=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],f=n[7],u=n[2],d=n[5],m=n[8],v=s[0],_=s[3],p=s[6],y=s[1],M=s[4],x=s[7],b=s[2],w=s[5],g=s[8];return r[0]=o*v+a*y+l*b,r[3]=o*_+a*M+l*w,r[6]=o*p+a*x+l*g,r[1]=h*v+c*y+f*b,r[4]=h*_+c*M+f*w,r[7]=h*p+c*x+f*g,r[2]=u*v+d*y+m*b,r[5]=u*_+d*M+m*w,r[8]=u*p+d*x+m*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],f=c*o-a*h,u=a*l-c*r,d=h*r-o*l,m=e*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=f*v,t[1]=(s*h-c*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(c*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*l-h*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return Js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kl.makeScale(t,e)),this}rotate(t){return Js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kl.makeRotation(-t)),this}translate(t,e){return Js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kl=new $t,Ih=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ph=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pp(){let i={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?$s:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ks]:{primaries:t,whitePoint:n,transfer:$s,toXYZ:Ih,fromXYZ:Ph,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Ih,fromXYZ:Ph,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var ae=pp();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ji,Go=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ji===void 0&&(ji=tr("canvas")),ji.width=t.width,ji.height=t.height;let s=ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mp=0,ms=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Br(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ol(s[o].image)):r.push(Ol(s[o]))}else r=Ol(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Go.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var gp=0,Vl=new V,an=class i extends Dn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=on,o=Kn,a=Un,l=dn,h=i.DEFAULT_ANISOTROPY,c=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Br(),this.name="",this.source=new ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Mc;an.DEFAULT_ANISOTROPY=1;var we=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],c=l[4],f=l[8],u=l[1],d=l[5],m=l[9],v=l[2],_=l[6],p=l[10];if(Math.abs(c-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-_)<.01){if(Math.abs(c+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+_)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(h+1)/2,x=(d+1)/2,b=(p+1)/2,w=(c+u)/4,g=(f+v)/4,S=(m+_)/4;return M>x&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=g/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=g/r,s=S/r),this.set(n,s,r,e),this}let y=Math.sqrt((_-m)*(_-m)+(f-v)*(f-v)+(u-c)*(u-c));return Math.abs(y)<.001&&(y=1),this.x=(_-m)/y,this.y=(f-v)/y,this.z=(u-c)/y,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ho=class extends Dn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ms(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ne=class extends Ho{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},er=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wo=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ht=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,h,c,f,u,d,m,v,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,c,f,u,d,m,v,_)}set(t,e,n,s,r,o,a,l,h,c,f,u,d,m,v,_){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=v,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*c,d=o*f,m=a*c,v=a*f;e[0]=l*c,e[4]=-l*f,e[8]=h,e[1]=d+m*h,e[5]=u-v*h,e[9]=-a*l,e[2]=v-u*h,e[6]=m+d*h,e[10]=o*l}else if(t.order==="YXZ"){let u=l*c,d=l*f,m=h*c,v=h*f;e[0]=u+v*a,e[4]=m*a-d,e[8]=o*h,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=d*a-m,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*c,d=l*f,m=h*c,v=h*f;e[0]=u-v*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*c,e[9]=v-u*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*c,d=o*f,m=a*c,v=a*f;e[0]=l*c,e[4]=m*h-d,e[8]=u*h+v,e[1]=l*f,e[5]=v*h+u,e[9]=d*h-m,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*h,m=a*l,v=a*h;e[0]=l*c,e[4]=v-u*f,e[8]=m*f+d,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=d*f+m,e[10]=u-v*f}else if(t.order==="XZY"){let u=o*l,d=o*h,m=a*l,v=a*h;e[0]=l*c,e[4]=-f,e[8]=h*c,e[1]=u*f+v,e[5]=o*c,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*c,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xp,t,_p)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),li.crossVectors(n,fn),li.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),li.crossVectors(n,fn)),li.normalize(),so.crossVectors(fn,li),s[0]=li.x,s[4]=so.x,s[8]=fn.x,s[1]=li.y,s[5]=so.y,s[9]=fn.y,s[2]=li.z,s[6]=so.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],f=n[5],u=n[9],d=n[13],m=n[2],v=n[6],_=n[10],p=n[14],y=n[3],M=n[7],x=n[11],b=n[15],w=s[0],g=s[4],S=s[8],P=s[12],T=s[1],U=s[5],D=s[9],L=s[13],N=s[2],Z=s[6],H=s[10],O=s[14],z=s[3],C=s[7],Y=s[11],k=s[15];return r[0]=o*w+a*T+l*N+h*z,r[4]=o*g+a*U+l*Z+h*C,r[8]=o*S+a*D+l*H+h*Y,r[12]=o*P+a*L+l*O+h*k,r[1]=c*w+f*T+u*N+d*z,r[5]=c*g+f*U+u*Z+d*C,r[9]=c*S+f*D+u*H+d*Y,r[13]=c*P+f*L+u*O+d*k,r[2]=m*w+v*T+_*N+p*z,r[6]=m*g+v*U+_*Z+p*C,r[10]=m*S+v*D+_*H+p*Y,r[14]=m*P+v*L+_*O+p*k,r[3]=y*w+M*T+x*N+b*z,r[7]=y*g+M*U+x*Z+b*C,r[11]=y*S+M*D+x*H+b*Y,r[15]=y*P+M*L+x*O+b*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],f=t[6],u=t[10],d=t[14],m=t[3],v=t[7],_=t[11],p=t[15],y=l*d-h*u,M=a*d-h*f,x=a*u-l*f,b=o*d-h*c,w=o*u-l*c,g=o*f-a*c;return e*(v*y-_*M+p*x)-n*(m*y-_*b+p*w)+s*(m*M-v*b+p*g)-r*(m*x-v*w+_*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],h=t[6],c=t[10];return e*(o*c-a*h)-n*(r*c-a*l)+s*(r*h-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],f=t[9],u=t[10],d=t[11],m=t[12],v=t[13],_=t[14],p=t[15],y=e*a-n*o,M=e*l-s*o,x=e*h-r*o,b=n*l-s*a,w=n*h-r*a,g=s*h-r*l,S=c*v-f*m,P=c*_-u*m,T=c*p-d*m,U=f*_-u*v,D=f*p-d*v,L=u*p-d*_,N=y*L-M*D+x*U+b*T-w*P+g*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/N;return t[0]=(a*L-l*D+h*U)*Z,t[1]=(s*D-n*L-r*U)*Z,t[2]=(v*g-_*w+p*b)*Z,t[3]=(u*w-f*g-d*b)*Z,t[4]=(l*T-o*L-h*P)*Z,t[5]=(e*L-s*T+r*P)*Z,t[6]=(_*x-m*g-p*M)*Z,t[7]=(c*g-u*x+d*M)*Z,t[8]=(o*D-a*T+h*S)*Z,t[9]=(n*T-e*D-r*S)*Z,t[10]=(m*w-v*x+p*y)*Z,t[11]=(f*x-c*w-d*y)*Z,t[12]=(a*P-o*U-l*S)*Z,t[13]=(e*U-n*P+s*S)*Z,t[14]=(v*M-m*b-_*y)*Z,t[15]=(c*b-f*M+u*y)*Z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,f=a+a,u=r*h,d=r*c,m=r*f,v=o*c,_=o*f,p=a*f,y=l*h,M=l*c,x=l*f,b=n.x,w=n.y,g=n.z;return s[0]=(1-(v+p))*b,s[1]=(d+x)*b,s[2]=(m-M)*b,s[3]=0,s[4]=(d-x)*w,s[5]=(1-(u+p))*w,s[6]=(_+y)*w,s[7]=0,s[8]=(m+M)*g,s[9]=(_-y)*g,s[10]=(1-(u+v))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Qi.set(s[0],s[1],s[2]).length(),a=Qi.set(s[4],s[5],s[6]).length(),l=Qi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Tn.copy(this);let h=1/o,c=1/a,f=1/l;return Tn.elements[0]*=h,Tn.elements[1]*=h,Tn.elements[2]*=h,Tn.elements[4]*=c,Tn.elements[5]*=c,Tn.elements[6]*=c,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,e.setFromRotationMatrix(Tn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Mn,l=!1){let h=this.elements,c=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===Mn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===fs)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=f,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Mn,l=!1){let h=this.elements,c=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===Mn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===fs)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=f,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=m,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qi=new V,Tn=new Ht,xp=new V(0,0,0),_p=new V(1,1,1),li=new V,so=new V,fn=new V,Uh=new Ht,Nh=new Ge,hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yp=0,Fh=new V,Ki=new Ge,Gn=new Ht,ro=new V,zs=new V,Mp=new V,vp=new Ge,Dh=new V(1,0,0),Lh=new V(0,1,0),Bh=new V(0,0,1),kh={type:"added"},Sp={type:"removed"},$i={type:"childadded",child:null},zl={type:"childremoved",child:null},Je=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new hn,n=new Ge,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new $t}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Dh,t)}rotateY(t){return this.rotateOnAxis(Lh,t)}rotateZ(t){return this.rotateOnAxis(Bh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dh,t)}translateY(t){return this.translateOnAxis(Lh,t)}translateZ(t){return this.translateOnAxis(Bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ro.copy(t):ro.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(zs,ro,this.up):Gn.lookAt(ro,zs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Gn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),$i.child=t,this.dispatchEvent($i),$i.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),zl.child=t,this.dispatchEvent(zl),zl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,Mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,vp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let f=l[h];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new V(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},bp={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let v of t.hand.values()){let _=e.getJointPose(v,n),p=this._getHandJoint(h,v);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}let c=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],u=c.position.distanceTo(f.position),d=.02,m=.005;h.inputState.pinching&&u>d+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=d-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Gl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=up(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Gl(o,r,t+1/3),this.g=Gl(o,r,t),this.b=Gl(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=Yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return ae.workingToColorSpace($e.copy(this),t),Math.round(ce($e.r*255,0,255))*65536+Math.round(ce($e.g*255,0,255))*256+Math.round(ce($e.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let f=o-a;switch(h=c<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=ze){ae.workingToColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(oo);let n=Ll(ci.h,oo.h,e),s=Ll(ci.s,oo.s,e),r=Ll(ci.l,oo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new xt;xt.NAMES=Yu;var ir=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},sr=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},An=new V,Hn=new V,Hl=new V,Wn=new V,ts=new V,es=new V,Oh=new V,Wl=new V,Zl=new V,Yl=new V,Xl=new we,Jl=new we,ql=new we,fi=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Hn.subVectors(n,e),Hl.subVectors(t,e);let o=An.dot(An),a=An.dot(Hn),l=An.dot(Hl),h=Hn.dot(Hn),c=Hn.dot(Hl),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(h*l-a*c)*u,m=(o*c-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Xl.setScalar(0),Jl.setScalar(0),ql.setScalar(0),Xl.fromBufferAttribute(t,e),Jl.fromBufferAttribute(t,n),ql.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xl,r.x),o.addScaledVector(Jl,r.y),o.addScaledVector(ql,r.z),o}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Hn.subVectors(t,e),An.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),An.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ts.subVectors(s,n),es.subVectors(r,n),Wl.subVectors(t,n);let l=ts.dot(Wl),h=es.dot(Wl);if(l<=0&&h<=0)return e.copy(n);Zl.subVectors(t,s);let c=ts.dot(Zl),f=es.dot(Zl);if(c>=0&&f<=c)return e.copy(s);let u=l*f-c*h;if(u<=0&&l>=0&&c<=0&&l-c>0)return o=l/(l-c),e.copy(n).addScaledVector(ts,o);Yl.subVectors(t,r);let d=ts.dot(Yl),m=es.dot(Yl);if(m>=0&&d<=m)return e.copy(r);let v=d*h-l*m;if(v<=0&&h>=0&&m<=0)return a=h/(h-m),e.copy(n).addScaledVector(es,a);let _=c*m-d*f;if(_<=0&&f-c>=0&&d-m>=0)return Oh.subVectors(r,s),a=(f-c)/(f-c+(d-m)),e.copy(s).addScaledVector(Oh,a);let p=1/(_+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vn=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(t.matrixWorld),this.union(ao)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),lo.subVectors(this.max,Gs),ns.subVectors(t.a,Gs),is.subVectors(t.b,Gs),ss.subVectors(t.c,Gs),hi.subVectors(is,ns),ui.subVectors(ss,is),Ci.subVectors(ns,ss);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ci.z,Ci.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ci.z,0,-Ci.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ci.y,Ci.x,0];return!jl(e,ns,is,ss,lo)||(e=[1,0,0,0,1,0,0,0,1],!jl(e,ns,is,ss,lo))?!1:(co.crossVectors(hi,ui),e=[co.x,co.y,co.z],jl(e,ns,is,ss,lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new V,new V,new V,new V,new V,new V,new V,new V],Rn=new V,ao=new vn,ns=new V,is=new V,ss=new V,hi=new V,ui=new V,Ci=new V,Gs=new V,lo=new V,co=new V,Ii=new V;function jl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),h=e.dot(Ii),c=n.dot(Ii);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var Pe=new V,ho=new Pt,wp=0,mn=class extends Dn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vu,this.updateRanges=[],this.gpuType=wn,this.version=0,this._normalizationScale=t!==void 0?Uc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ho.fromBufferAttribute(this,e),ho.applyMatrix3(t),this.setXY(e,ho.x,ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):dp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):fp(t,this.array)}};var rr=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var or=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Vt=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ep=new vn,Hs=new V,Ql=new V,Ln=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ep.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hs.subVectors(t,this.center);let e=Hs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hs.copy(t.center).add(Ql)),this.expandByPoint(Hs.copy(t.center).sub(Ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tp=0,yn=new Ht,Kl=new Je,rs=new V,pn=new vn,Ws=new vn,Ve=new V,oe=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cp(t)?or:rr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Kl.lookAt(t),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(pn.min,Ws.min),pn.expandByPoint(Ve),Ve.addVectors(pn.max,Ws.max),pn.expandByPoint(Ve)):(pn.expandByPoint(Ws.min),pn.expandByPoint(Ws.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Ve.fromBufferAttribute(a,h),l&&(rs.fromBufferAttribute(t,h),Ve.add(rs)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],h=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new V,l[P]=new V;let c=new V,f=new V,u=new V,d=new Pt,m=new Pt,v=new Pt,_=new V,p=new V;function y(P,T,U){h[P]=h[T]=h[U]=1,c.fromBufferAttribute(n,P),f.fromBufferAttribute(n,T),u.fromBufferAttribute(n,U),d.fromBufferAttribute(r,P),m.fromBufferAttribute(r,T),v.fromBufferAttribute(r,U),f.sub(c),u.sub(c),m.sub(d),v.sub(d);let D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(_.copy(f).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(D),p.copy(u).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(D),a[P].add(_),a[T].add(_),a[U].add(_),l[P].add(p),l[T].add(p),l[U].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,T=M.length;P<T;++P){let U=M[P],D=U.start,L=U.count;for(let N=D,Z=D+L;N<Z;N+=3)y(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let x=new V,b=new V,w=new V,g=new V;function S(P){w.fromBufferAttribute(s,P),g.copy(w);let T=a[P];x.copy(T),x.sub(w.multiplyScalar(w.dot(T))).normalize(),b.crossVectors(g,T);let D=b.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,D)}for(let P=0,T=n.count;P<T;++P)h[P]&&S(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,h=new V,c=new V,f=new V;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),v=t.getX(u+1),_=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,_),c.subVectors(o,r),f.subVectors(s,r),c.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,_),a.add(c),l.add(c),h.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),c.subVectors(o,r),f.subVectors(s,r),c.cross(f),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,f=a.normalized,u=new h.constructor(l.length*c),d=0,m=0;for(let v=0,_=l.length;v<_;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*c;for(let p=0;p<c;p++)u[m++]=h[d++]}return new mn(u,c,f)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,f=h.length;c<f;c++){let u=h[c],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let f=0,u=h.length;f<u;f++){let d=h[f];c.push(d.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],f=r[h];for(let u=0,d=f.length;u<d;u++)c.push(f[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $l=new V,Ap=new V,Rp=new $t,Cn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$l.subVectors(n,e).cross(Ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta($l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rp.getNormalMatrix(t),s=this.coplanarPoint($l).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cp=0,Sn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=bs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=yc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Cn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Yn=new V,tc=new V,uo=new V,fo=new V,xs=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tc.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),fo.copy(this.origin).sub(tc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(uo),a=fo.dot(this.direction),l=-fo.dot(uo),h=fo.lengthSq(),c=Math.abs(1-o*o),f,u,d,m;if(c>0)if(f=o*l-a,u=o*a-l,m=r*c,f>=0)if(u>=-m)if(u<=m){let v=1/c;f*=v,u*=v,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+h}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+h;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+h;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+h):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+h):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+h);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(tc).addScaledVector(uo,u),d}intersectSphere(t,e){if(t.radius<0)return null;Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,o=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,o=(t.min.y-u.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,h=a.y,c=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,m=e.x-o.x,v=e.y-o.y,_=e.z-o.z,p=n.x-o.x,y=n.y-o.y,M=n.z-o.z,x=Math.abs(l),b=Math.abs(h),w=Math.abs(c),g,S,P,T,U,D,L,N,Z,H,O,z;if(x>=b&&x>=w?(P=l,D=f,Z=m,z=p,l>=0?(g=h,S=c,T=u,U=d,L=v,N=_,H=y,O=M):(g=c,S=h,T=d,U=u,L=_,N=v,H=M,O=y)):b>=w?(P=h,D=u,Z=v,z=y,h>=0?(g=c,S=l,T=d,U=f,L=_,N=m,H=M,O=p):(g=l,S=c,T=f,U=d,L=m,N=_,H=p,O=M)):(P=c,D=d,Z=_,z=M,c>=0?(g=l,S=h,T=f,U=u,L=m,N=v,H=p,O=y):(g=h,S=l,T=u,U=f,L=v,N=m,H=y,O=p)),P===0)return null;let C=g/P,Y=S/P,k=1/P,G=T-C*D,K=U-Y*D,B=L-C*Z,I=N-Y*Z,nt=H-C*z,dt=O-Y*z,at=nt*I-dt*B,ut=G*dt-K*nt,_t=B*K-I*G;if(s){if(at<0||ut<0||_t<0)return null}else if((at<0||ut<0||_t<0)&&(at>0||ut>0||_t>0))return null;let pt=at+ut+_t;if(pt===0)return null;let Ct=k*(at*D+ut*Z+_t*z);return(pt>0?Ct<0:Ct>0)?null:this.at(Ct/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class extends Sn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vh=new Ht,Pi=new xs,po=new Ln,zh=new V,mo=new V,go=new V,xo=new V,ec=new V,_o=new V,Gh=new V,yo=new V,qt=class extends Je{constructor(t=new oe,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){_o.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],f=r[l];c!==0&&(ec.fromBufferAttribute(f,t),o?_o.addScaledVector(ec,c):_o.addScaledVector(ec.sub(e),c))}e.add(_o)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(po.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(po,zh)===null||Pi.origin.distanceToSquared(zh)>(t.far-t.near)**2))&&(Vh.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let _=u[m],p=o[_.materialIndex],y=Math.max(_.start,d.start),M=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let x=y,b=M;x<b;x+=3){let w=a.getX(x),g=a.getX(x+1),S=a.getX(x+2);s=Mo(this,p,t,n,h,c,f,w,g,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let _=m,p=v;_<p;_+=3){let y=a.getX(_),M=a.getX(_+1),x=a.getX(_+2);s=Mo(this,o,t,n,h,c,f,y,M,x),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let _=u[m],p=o[_.materialIndex],y=Math.max(_.start,d.start),M=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let x=y,b=M;x<b;x+=3){let w=x,g=x+1,S=x+2;s=Mo(this,p,t,n,h,c,f,w,g,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let _=m,p=v;_<p;_+=3){let y=_,M=_+1,x=_+2;s=Mo(this,o,t,n,h,c,f,y,M,x),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Ip(i,t,e,n,s,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===_i,a),l===null)return null;yo.copy(a),yo.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(yo);return h<e.near||h>e.far?null:{distance:h,point:yo.clone(),object:i}}function Mo(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,mo),i.getVertexPosition(l,go),i.getVertexPosition(h,xo);let c=Ip(i,t,e,n,mo,go,xo,Gh);if(c){let f=new V;fi.getBarycoord(Gh,mo,go,xo,f),s&&(c.uv=fi.getInterpolatedAttribute(s,a,l,h,f,new Pt)),r&&(c.uv1=fi.getInterpolatedAttribute(r,a,l,h,f,new Pt)),o&&(c.normal=fi.getInterpolatedAttribute(o,a,l,h,f,new V),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new V,materialIndex:0};fi.getNormal(mo,go,xo,u.normal),c.face=u,c.barycoord=f}return c}var ar=class extends an{constructor(t=null,e=1,n=1,s,r,o,a,l,h=Ue,c=Ue,f,u){super(null,o,a,l,h,c,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lr=class extends mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},os=new Ht,Hh=new Ht,vo=[],Wh=new vn,Pp=new Ht,Zs=new qt,Ys=new Ln,fe=class extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Wh.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(Wh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Ys.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),t.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),Hh.multiplyMatrices(n,os),Zs.matrixWorld=Hh,Zs.raycast(t,vo);for(let o=0,a=vo.length;o<a;o++){let l=vo[o];l.instanceId=r,l.object=this,e.push(l)}vo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(s*this.count),s,this.count,wa,wn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ui=new Ln,Up=new Pt(.5,.5),So=new V,pi=class{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],h=r[3],c=r[4],f=r[5],u=r[6],d=r[7],m=r[8],v=r[9],_=r[10],p=r[11],y=r[12],M=r[13],x=r[14],b=r[15];if(s[0].setComponents(h-o,d-c,p-m,b-y).normalize(),s[1].setComponents(h+o,d+c,p+m,b+y).normalize(),s[2].setComponents(h+a,d+f,p+v,b+M).normalize(),s[3].setComponents(h-a,d-f,p-v,b-M).normalize(),n)s[4].setComponents(l,u,_,x).normalize(),s[5].setComponents(h-l,d-u,p-_,b-x).normalize();else if(s[4].setComponents(h-l,d-u,p-_,b-x).normalize(),e===Mn)s[5].setComponents(h+l,d+u,p+_,b+x).normalize();else if(e===fs)s[5].setComponents(l,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);let e=Up.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(So.x=s.normal.x>0?t.max.x:t.min.x,So.y=s.normal.y>0?t.max.y:t.min.y,So.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zh=new Ht,Zo=class i{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Zh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new pi),n[s].setFromProjectionMatrix(Zh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new pi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Fe=class extends Sn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yo=new V,Xo=new V,Yh=new Ht,Xs=new xs,bo=new Ln,nc=new V,Xh=new V,Jo=class extends Je{constructor(t=new oe,e=new Fe){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Yo.fromBufferAttribute(e,s-1),Xo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Yo.distanceTo(Xo);t.setAttribute("lineDistance",new Vt(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,t.ray.intersectsSphere(bo)===!1)return;Yh.copy(s).invert(),Xs.copy(t.ray).applyMatrix4(Yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=d,_=m-1;v<_;v+=h){let p=c.getX(v),y=c.getX(v+1),M=wo(this,t,Xs,l,p,y,v);M&&e.push(M)}if(this.isLineLoop){let v=c.getX(m-1),_=c.getX(d),p=wo(this,t,Xs,l,v,_,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,_=m-1;v<_;v+=h){let p=wo(this,t,Xs,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=wo(this,t,Xs,l,m-1,d,m-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Yo.fromBufferAttribute(a,s),Xo.fromBufferAttribute(a,r),e.distanceSqToSegment(Yo,Xo,nc,Xh)>n)return;nc.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(nc);if(!(h<t.near||h>t.far))return{distance:h,point:Xh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Jh=new V,qh=new V,He=class extends Jo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Jh.fromBufferAttribute(e,s),qh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jh.distanceTo(qh);t.setAttribute("lineDistance",new Vt(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _s=class extends Sn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jh=new Ht,uc=new xs,Eo=new Ln,To=new V,cr=class extends Je{constructor(t=new oe,e=new _s){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;jh.copy(s).invert(),uc.copy(t.ray).applyMatrix4(jh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,f=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=u,v=d;m<v;m++){let _=h.getX(m);To.fromBufferAttribute(f,_),Qh(To,_,l,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=u,v=d;m<v;m++)To.fromBufferAttribute(f,m),Qh(To,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qh(i,t,e,n,s,r,o){let a=uc.distanceSqToPoint(i);if(a<e){let l=new V;uc.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var hr=class extends an{constructor(t=[],e=Gi,n,s,r,o,a,l,h,c){super(t,e,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ur=class extends an{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qn=class extends an{constructor(t,e,n=Pn,s,r,o,a=Ue,l=Ue,h,c=Jn,f=1){if(c!==Jn&&c!==$n)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},dr=class extends qn{constructor(t,e=Pn,n=Gi,s,r,o=Ue,a=Ue,l,h=Jn){let c={width:t,height:t,depth:1},f=[c,c,c,c,c,c];super(t,t,e,n,s,r,o,a,l,h),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fr=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ln=class i extends oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],f=[],u=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(f,2));function m(v,_,p,y,M,x,b,w,g,S,P){let T=x/g,U=b/S,D=x/2,L=b/2,N=w/2,Z=g+1,H=S+1,O=0,z=0,C=new V;for(let Y=0;Y<H;Y++){let k=Y*U-L;for(let G=0;G<Z;G++){let K=G*T-D;C[v]=K*y,C[_]=k*M,C[p]=N,h.push(C.x,C.y,C.z),C[v]=0,C[_]=0,C[p]=w>0?1:-1,c.push(C.x,C.y,C.z),f.push(G/g),f.push(1-Y/S),O+=1}}for(let Y=0;Y<S;Y++)for(let k=0;k<g;k++){let G=u+k+Z*Y,K=u+k+Z*(Y+1),B=u+(k+1)+Z*(Y+1),I=u+(k+1)+Z*Y;l.push(G,K,I),l.push(K,B,I),z+=6}a.addGroup(d,z,P),d+=z,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var In=class i extends oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new V,c=new Pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[u]/t+1)/2,c.y=(o[u+1]/t+1)/2,l.push(c.x,c.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ve=class i extends oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],f=[],u=[],d=[],m=0,v=[],_=n/2,p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(d,2));function y(){let x=new V,b=new V,w=0,g=(e-t)/n;for(let S=0;S<=r;S++){let P=[],T=S/r,U=T*(e-t)+t;for(let D=0;D<=s;D++){let L=D/s,N=L*l+a,Z=Math.sin(N),H=Math.cos(N);b.x=U*Z,b.y=-T*n+_,b.z=U*H,f.push(b.x,b.y,b.z),x.set(Z,g,H).normalize(),u.push(x.x,x.y,x.z),d.push(L,1-T),P.push(m++)}v.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){let T=v[P][S],U=v[P+1][S],D=v[P+1][S+1],L=v[P][S+1];(t>0||P!==0)&&(c.push(T,U,L),w+=3),(e>0||P!==r-1)&&(c.push(U,D,L),w+=3)}h.addGroup(p,w,0),p+=w}function M(x){let b=m,w=new Pt,g=new V,S=0,P=x===!0?t:e,T=x===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,_*T,0),u.push(0,T,0),d.push(.5,.5),m++;let U=m;for(let D=0;D<=s;D++){let N=D/s*l+a,Z=Math.cos(N),H=Math.sin(N);g.x=P*H,g.y=_*T,g.z=P*Z,f.push(g.x,g.y,g.z),u.push(0,T,0),w.x=Z*.5+.5,w.y=H*.5*T+.5,d.push(w.x,w.y),m++}for(let D=0;D<s;D++){let L=b+D,N=U+D;x===!0?c.push(N,N+1,L):c.push(N+1,N,L),S+=3}h.addGroup(p,S,x===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ys=class i extends ve{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qo=class i extends oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),h(n),c(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new V,x=new V,b=new V;for(let w=0;w<e.length;w+=3)d(e[w+0],M),d(e[w+1],x),d(e[w+2],b),l(M,x,b,y)}function l(y,M,x,b){let w=b+1,g=[];for(let S=0;S<=w;S++){g[S]=[];let P=y.clone().lerp(x,S/w),T=M.clone().lerp(x,S/w),U=w-S;for(let D=0;D<=U;D++)D===0&&S===w?g[S][D]=P:g[S][D]=P.clone().lerp(T,D/U)}for(let S=0;S<w;S++)for(let P=0;P<2*(w-S)-1;P++){let T=Math.floor(P/2);P%2===0?(u(g[S][T+1]),u(g[S+1][T]),u(g[S][T])):(u(g[S][T+1]),u(g[S+1][T+1]),u(g[S+1][T]))}}function h(y){let M=new V;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(y),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function c(){let y=new V;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let x=_(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;o.push(x,1-b)}m(),f()}function f(){for(let y=0;y<o.length;y+=6){let M=o[y+0],x=o[y+2],b=o[y+4],w=Math.max(M,x,b),g=Math.min(M,x,b);w>.9&&g<.1&&(M<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,M){let x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function m(){let y=new V,M=new V,x=new V,b=new V,w=new Pt,g=new Pt,S=new Pt;for(let P=0,T=0;P<r.length;P+=9,T+=6){y.set(r[P+0],r[P+1],r[P+2]),M.set(r[P+3],r[P+4],r[P+5]),x.set(r[P+6],r[P+7],r[P+8]),w.set(o[T+0],o[T+1]),g.set(o[T+2],o[T+3]),S.set(o[T+4],o[T+5]),b.copy(y).add(M).add(x).divideScalar(3);let U=_(b);v(w,T+0,y,U),v(g,T+2,M,U),v(S,T+4,x,U)}}function v(y,M,x,b){b<0&&y.x===1&&(o[M]=y.x-1),x.x===0&&x.z===0&&(o[M]=b/2/Math.PI+.5)}function _(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let c=n[s],u=n[s+1]-c,d=(o-c)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Pt:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new V,s=[],r=[],o=[],a=new V,l=new Ht;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new V)}r[0]=new V,o[0]=new V;let h=Number.MAX_VALUE,c=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),u<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ce(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ce(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},pr=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=h-this.aY;l=u*c-d*f+this.aX,h=u*f+d*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},jo=class extends pr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,f){let u=(o-r)/h-(a-r)/(h+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+f)+(l-a)/f;u*=c,d*=c,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Kh=new V,$h=new V,ic=new Nc,sc=new Nc,rc=new Nc,Qo=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new V){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:($h.subVectors(s[0],s[1]).add(s[0]),h=$h);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(Kh.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Kh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(h.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(c),d);v<1e-4&&(v=1),m<1e-4&&(m=v),_<1e-4&&(_=v),ic.initNonuniformCatmullRom(h.x,f.x,u.x,c.x,m,v,_),sc.initNonuniformCatmullRom(h.y,f.y,u.y,c.y,m,v,_),rc.initNonuniformCatmullRom(h.z,f.z,u.z,c.z,m,v,_)}else this.curveType==="catmullrom"&&(ic.initCatmullRom(h.x,f.x,u.x,c.x,this.tension),sc.initCatmullRom(h.y,f.y,u.y,c.y,this.tension),rc.initCatmullRom(h.z,f.z,u.z,c.z,this.tension));return n.set(ic.calc(l),sc.calc(l),rc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function tu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Np(i,t){let e=1-i;return e*e*t}function Fp(i,t){return 2*(1-i)*i*t}function Dp(i,t){return i*i*t}function qs(i,t,e,n){return Np(i,t)+Fp(i,e)+Dp(i,n)}function Lp(i,t){let e=1-i;return e*e*e*t}function Bp(i,t){let e=1-i;return 3*e*e*i*t}function kp(i,t){return 3*(1-i)*i*i*t}function Op(i,t){return i*i*i*t}function js(i,t,e,n,s){return Lp(i,t)+Bp(i,e)+kp(i,n)+Op(i,s)}var Ko=class extends bn{constructor(t=new Pt,e=new Pt,n=new Pt,s=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$o=class extends bn{constructor(t=new V,e=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y),js(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ta=class extends bn{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends bn{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends bn{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qs(t,s.x,r.x,o.x),qs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ni=class extends bn{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qs(t,s.x,r.x,o.x),qs(t,s.y,r.y,o.y),qs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(tu(a,l.x,h.x,c.x,f.x),tu(a,l.y,h.y,c.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Pt().fromArray(s))}return this}},Vp=Object.freeze({__proto__:null,ArcCurve:jo,CatmullRomCurve3:Qo,CubicBezierCurve:Ko,CubicBezierCurve3:$o,EllipseCurve:pr,LineCurve:ta,LineCurve3:ea,QuadraticBezierCurve:na,QuadraticBezierCurve3:Ni,SplineCurve:ia});var jn=class i extends qo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Fi=class i extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,f=t/a,u=e/l,d=[],m=[],v=[],_=[];for(let p=0;p<c;p++){let y=p*u-o;for(let M=0;M<h;M++){let x=M*f-r;m.push(x,-y,0),v.push(0,0,1),_.push(M/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let M=y+h*p,x=y+h*(p+1),b=y+1+h*(p+1),w=y+1+h*p;d.push(M,x,w),d.push(x,b,w)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Di=class i extends oe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],h=[],c=[],f=t,u=(e-t)/s,d=new V,m=new Pt;for(let v=0;v<=s;v++){for(let _=0;_<=n;_++){let p=r+_/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),h.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,c.push(m.x,m.y)}f+=u}for(let v=0;v<s;v++){let _=v*(n+1);for(let p=0;p<n;p++){let y=p+_,M=y,x=y+n+1,b=y+n+2,w=y+1;a.push(M,x,w),a.push(x,b,w)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var de=class i extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),h=0,c=[],f=new V,u=new V,d=[],m=[],v=[],_=[];for(let p=0;p<=n;p++){let y=[],M=p/n,x=o+M*a,b=t*Math.cos(x),w=Math.sqrt(t*t-b*b),g=0;p===0&&o===0?g=.5/e:p===n&&l===Math.PI&&(g=-.5/e);for(let S=0;S<=e;S++){let P=S/e,T=s+P*r;f.x=-w*Math.cos(T),f.y=b,f.z=w*Math.sin(T),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),_.push(P+g,1-M),y.push(h++)}c.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let M=c[p][y+1],x=c[p][y],b=c[p+1][y],w=c[p+1][y+1];(p!==0||o>0)&&d.push(M,x,w),(p!==n-1||l<Math.PI)&&d.push(x,b,w)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Li=class i extends oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],f=[],u=new V,d=new V,m=new V;for(let v=0;v<=n;v++){let _=o+v/n*a;for(let p=0;p<=s;p++){let y=p/s*r;d.x=(t+e*Math.cos(_))*Math.cos(y),d.y=(t+e*Math.cos(_))*Math.sin(y),d.z=e*Math.sin(_),h.push(d.x,d.y,d.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),m.subVectors(d,u).normalize(),c.push(m.x,m.y,m.z),f.push(p/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let _=1;_<=s;_++){let p=(s+1)*v+_-1,y=(s+1)*(v-1)+_-1,M=(s+1)*(v-1)+_,x=(s+1)*v+_;l.push(p,y,x),l.push(y,M,x)}this.setIndex(l),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var mr=class i extends oe{constructor(t=new Ni(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new V,l=new V,h=new Pt,c=new V,f=[],u=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(d,2));function v(){for(let M=0;M<e;M++)_(M);_(r===!1?e:0),y(),p()}function _(M){c=t.getPointAt(M/e,c);let x=o.normals[M],b=o.binormals[M];for(let w=0;w<=s;w++){let g=w/s*Math.PI*2,S=Math.sin(g),P=-Math.cos(g);l.x=P*x.x+S*b.x,l.y=P*x.y+S*b.y,l.z=P*x.z+S*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){let b=(s+1)*(M-1)+(x-1),w=(s+1)*M+(x-1),g=(s+1)*M+x,S=(s+1)*(M-1)+x;m.push(b,w,S),m.push(w,g,S)}}function y(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)h.x=M/e,h.y=x/s,d.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Vp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(eu(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(eu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=Wi(i[e]);for(let s in n)t[s]=n[s]}return t}function eu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var ei={clone:Wi,merge:tn},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends Sn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ms=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Te=class extends Sn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var un=class extends Sn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xt(16777215),this.specular=new xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=br,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Bi=class extends Sn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=br,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},sa=class extends Sn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ra=class extends Sn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function as(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ao(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var mi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},oa=class extends mi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lc,endingEnd:lc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case cc:r=t,a=2*e-n;break;case hc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cc:o=t,l=2*n-e;break;case hc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let h=(n-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),v=m*m,_=v*m,p=-u*_+2*u*v-u*m,y=(1+u)*_+(-1.5-2*u)*v+(-.5+u)*m+1,M=(-1-d)*_+(1.5+d)*v+.5*m,x=d*_-d*v;for(let b=0;b!==a;++b)r[b]=p*o[c+b]+y*o[h+b]+M*o[l+b]+x*o[f+b];return r}},aa=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(n-e)/(s-e),f=1-c;for(let u=0;u!==a;++u)r[u]=o[h+u]*f+o[l+u]*c;return r}},la=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ca=class extends mi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this.inTangents,f=this.outTangents;if(!c||!f){let m=(n-e)/(s-e),v=1-m;for(let _=0;_!==a;++_)r[_]=o[h+_]*v+o[l+_]*m;return r}let u=a*2,d=t-1;for(let m=0;m!==a;++m){let v=o[h+m],_=o[l+m],p=d*u+m*2,y=f[p],M=f[p+1],x=t*u+m*2,b=c[x],w=c[x+1],g=Zp(n,e,y,b,s);r[m]=Xu(g,v,M,w,_)}return r}};function Xu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Wp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Zp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Xu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Wp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=as(e,this.TimeBufferType),this.values=as(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:as(t.times,Array),values:as(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ao(t.settings)&&(n.settings={inTangents:as(t.settings.inTangents,Array),outTangents:as(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ca(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case Vo:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break;case ac:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return ac}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ao(this.settings)&&(nu(this.settings.inTangents,t),nu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ao(this.settings)&&(iu(this.settings.inTangents,t),iu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&hp(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){Kt("KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){let v=e[f+m];if(v!==e[u+m]||v!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ao(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function iu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Vo;var gi=class extends gn{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Qs;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};ha.prototype.ValueTypeName="color";var ua=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};ua.prototype.ValueTypeName="number";var da=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),h=t*a;for(let c=h+a;h!==c;h+=4)Ge.slerpFlat(r,0,o,h-a,o,h,l);return r}},gr=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new da(this.times,this.values,this.getValueSize(),t)}};gr.prototype.ValueTypeName="quaternion";gr.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends gn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Qs;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};fa.prototype.ValueTypeName="vector";var pa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return h.push(c,f),this},this.removeHandler=function(c){let f=h.indexOf(c);return f!==-1&&h.splice(f,2),this},this.getHandler=function(c){for(let f=0,u=h.length;f<u;f+=2){let d=h[f],m=h[f+1];if(d.global&&(d.lastIndex=0),d.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ju=new pa,ma=class{constructor(t){this.manager=t!==void 0?t:Ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=class extends Je{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var oc=new Ht,su=new V,ru=new V,ga=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pi,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;su.setFromMatrixPosition(t.matrixWorld),e.position.copy(su),ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ru),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(oc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===fs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+h,0,0,.5,.5,0,0,0,1),e.multiply(oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ro=new V,Co=new Ge,Nn=new V,_r=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ro,Co,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Co,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ro,Co,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Co,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},di=new V,ou=new Pt,au=new Pt,sn=class extends _r{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,ou,au),e.subVectors(au,ou)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ki=class extends _r{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},dc=class extends ga{constructor(){super(new ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new dc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Mr=class extends xr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ls=-90,cs=1,vs=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(ls,cs,t,e);s.layers=this.layers,this.add(s);let r=new sn(ls,cs,t,e);r.layers=this.layers,this.add(r);let o=new sn(ls,cs,t,e);o.layers=this.layers,this.add(o);let a=new sn(ls,cs,t,e);a.layers=this.layers,this.add(a);let l=new sn(ls,cs,t,e);l.layers=this.layers,this.add(l);let h=new sn(ls,cs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},xa=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},vr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Yp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Yp(){this._document.hidden===!1&&this.reset()}var Dc="\\[\\]\\.:\\/",Xp=new RegExp("["+Dc+"]","g"),Lc="[^"+Dc+"]",Jp="[^"+Dc.replace("\\.","")+"]",qp=/((?:WC+[\/:])*)/.source.replace("WC",Lc),jp=/(WCOD+)?/.source.replace("WCOD",Jp),Qp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lc),Kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lc),$p=new RegExp("^"+qp+jp+Qp+Kp+"$"),tm=["material","materials","bones","map"],fc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xp,"")}static parseTrackName(t){let e=$p.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=fc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Oy=new Float32Array(1);var pc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Bc(i,t,e,n){let s=em(n);switch(e){case Ec:return i*t;case wa:return i*t/s.components*s.byteLength;case Ea:return i*t/s.components*s.byteLength;case yi:return i*t*2/s.components*s.byteLength;case Ta:return i*t*2/s.components*s.byteLength;case Tc:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case Aa:return i*t*4/s.components*s.byteLength;case Pr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:case Pa:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case Ia:return Math.max(i,8)*Math.max(t,8)/2;case Ua:case Na:case Da:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fa:case Dr:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ka:case $a:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lr:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function em(i){switch(i){case dn:case vc:return{byteLength:1,components:1};case Es:case Sc:case qe:return{byteLength:2,components:1};case Sa:case ba:return{byteLength:2,components:4};case Pn:case va:case wn:return{byteLength:4,components:1};case bc:case wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function gd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function im(i){let t=new WeakMap;function e(a,l){let h=a.array,c=a.usage,f=h.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,h,c),a.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,h){let c=l.array,f=l.updateRanges;if(i.bindBuffer(h,a),f.length===0)i.bufferSubData(h,0,c);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let v=f[d];i.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
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
#endif`,om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Rm=`vec3 transformedNormal = objectNormal;
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
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
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
}`,Zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
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
#endif`,eg=`uniform sampler2D dfgLUT;
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
}`,ng=`
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xg=`#if defined( USE_MORPHCOLORS )
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
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,Mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
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
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gg=`float getShadowMask() {
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
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qg=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`uniform float backgroundBlurriness;
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`#include <common>
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
}`,h0=`#if DEPTH_PACKING == 3200
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
}`,u0=`#define DISTANCE
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
}`,d0=`#define DISTANCE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
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
}`,g0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,_0=`uniform vec3 diffuse;
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
}`,y0=`#define LAMBERT
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
}`,M0=`#define LAMBERT
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
}`,v0=`#define MATCAP
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
}`,S0=`#define MATCAP
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
}`,b0=`#define NORMAL
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
}`,w0=`#define NORMAL
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
}`,E0=`#define PHONG
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
}`,T0=`#define PHONG
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
}`,A0=`#define STANDARD
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
}`,R0=`#define STANDARD
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
}`,C0=`#define TOON
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
}`,I0=`#define TOON
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
}`,P0=`uniform float size;
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
}`,U0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,F0=`uniform vec3 color;
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
}`,D0=`uniform float rotation;
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
}`,L0=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:sm,alphahash_pars_fragment:rm,alphamap_fragment:om,alphamap_pars_fragment:am,alphatest_fragment:lm,alphatest_pars_fragment:cm,aomap_fragment:hm,aomap_pars_fragment:um,batching_pars_vertex:dm,batching_vertex:fm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:xm,bumpmap_pars_fragment:_m,clipping_planes_fragment:ym,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:vm,clipping_planes_vertex:Sm,color_fragment:bm,color_pars_fragment:wm,color_pars_vertex:Em,color_vertex:Tm,common:Am,defaultnormal_vertex:Rm,displacementmap_pars_vertex:Cm,displacementmap_vertex:Im,emissivemap_fragment:Pm,emissivemap_pars_fragment:Um,colorspace_fragment:Nm,colorspace_pars_fragment:Fm,envmap_fragment:Dm,envmap_common_pars_fragment:Lm,envmap_pars_fragment:Bm,envmap_pars_vertex:km,envmap_physical_pars_fragment:qm,envmap_vertex:Om,fog_vertex:Vm,fog_pars_vertex:zm,fog_fragment:Gm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Zm,lights_lambert_fragment:Ym,lights_lambert_pars_fragment:Xm,lights_pars_begin:Jm,lights_toon_fragment:jm,lights_toon_pars_fragment:Qm,lights_phong_fragment:Km,lights_phong_pars_fragment:$m,lights_physical_fragment:tg,lights_physical_pars_fragment:eg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,lightprobes_pars_fragment:rg,logdepthbuf_fragment:og,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:lg,logdepthbuf_vertex:cg,map_fragment:hg,map_pars_fragment:ug,map_particle_fragment:dg,map_particle_pars_fragment:fg,metalnessmap_fragment:pg,metalnessmap_pars_fragment:mg,morphinstance_vertex:gg,morphcolor_vertex:xg,morphnormal_vertex:_g,morphtarget_pars_vertex:yg,morphtarget_vertex:Mg,normal_fragment_begin:vg,normal_fragment_maps:Sg,normal_pars_fragment:bg,normal_pars_vertex:wg,normal_vertex:Eg,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Ig,opaque_fragment:Pg,packing:Ug,premultiplied_alpha_fragment:Ng,project_vertex:Fg,dithering_fragment:Dg,dithering_pars_fragment:Lg,roughnessmap_fragment:Bg,roughnessmap_pars_fragment:kg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:Vg,shadowmap_vertex:zg,shadowmask_pars_fragment:Gg,skinbase_vertex:Hg,skinning_pars_vertex:Wg,skinning_vertex:Zg,skinnormal_vertex:Yg,specularmap_fragment:Xg,specularmap_pars_fragment:Jg,tonemapping_fragment:qg,tonemapping_pars_fragment:jg,transmission_fragment:Qg,transmission_pars_fragment:Kg,uv_pars_fragment:$g,uv_pars_vertex:t0,uv_vertex:e0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:r0,backgroundCube_frag:o0,cube_vert:a0,cube_frag:l0,depth_vert:c0,depth_frag:h0,distance_vert:u0,distance_frag:d0,equirect_vert:f0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:x0,meshbasic_frag:_0,meshlambert_vert:y0,meshlambert_frag:M0,meshmatcap_vert:v0,meshmatcap_frag:S0,meshnormal_vert:b0,meshnormal_frag:w0,meshphong_vert:E0,meshphong_frag:T0,meshphysical_vert:A0,meshphysical_frag:R0,meshtoon_vert:C0,meshtoon_frag:I0,points_vert:P0,points_frag:U0,shadow_vert:N0,shadow_frag:F0,sprite_vert:D0,sprite_frag:L0},Ut={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},On={basic:{uniforms:tn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:tn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:tn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:tn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:tn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new xt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:tn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:tn([Ut.points,Ut.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:tn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:tn([Ut.common,Ut.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:tn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:tn([Ut.sprite,Ut.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:tn([Ut.common,Ut.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:tn([Ut.lights,Ut.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};On.physical={uniforms:tn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var sl={r:0,b:0,g:0},B0=new Ht,xd=new $t;xd.set(-1,0,0,0,1,0,0,0,1);function k0(i,t,e,n,s,r){let o=new xt(0),a=s===!0?0:1,l,h,c=null,f=0,u=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let x=y.backgroundBlurriness>0;M=t.get(M,x)}return M}function m(y){let M=!1,x=d(y);x===null?_(o,a):x&&x.isColor&&(_(x,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,M){let x=d(M);x&&x.isCubeTexture?(h===void 0&&(h=new qt(new ln(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Wi(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(B0.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(xd),h.material.toneMapped=ae.getTransfer(x.colorSpace)!==me,(c!==x||f!==x.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,c=x,f=x.version,u=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new qt(new Fi(2,2),new We({name:"BackgroundMaterial",uniforms:Wi(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ae.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||f!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,c=x,f=x.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function _(y,M){y.getRGB(sl,Fc(i)),e.buffers.color.setClear(sl.r,sl.g,sl.b,M,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,_(o,a)},render:m,addToRenderList:v,dispose:p}}function O0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(U,D,L,N,Z){let H=!1,O=f(U,N,L,D);r!==O&&(r=O,h(r.object)),H=d(U,N,L,Z),H&&m(U,N,L,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(U,D,L,N),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function h(U){return i.bindVertexArray(U)}function c(U){return i.deleteVertexArray(U)}function f(U,D,L,N){let Z=N.wireframe===!0,H=n[D.id];H===void 0&&(H={},n[D.id]=H);let O=U.isInstancedMesh===!0?U.id:0,z=H[O];z===void 0&&(z={},H[O]=z);let C=z[L.id];C===void 0&&(C={},z[L.id]=C);let Y=C[Z];return Y===void 0&&(Y=u(l()),C[Z]=Y),Y}function u(U){let D=[],L=[],N=[];for(let Z=0;Z<e;Z++)D[Z]=0,L[Z]=0,N[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:N,object:U,attributes:{},index:null}}function d(U,D,L,N){let Z=r.attributes,H=D.attributes,O=0,z=L.getAttributes();for(let C in z)if(z[C].location>=0){let k=Z[C],G=H[C];if(G===void 0&&(C==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),C==="instanceColor"&&U.instanceColor&&(G=U.instanceColor)),k===void 0||k.attribute!==G||G&&k.data!==G.data)return!0;O++}return r.attributesNum!==O||r.index!==N}function m(U,D,L,N){let Z={},H=D.attributes,O=0,z=L.getAttributes();for(let C in z)if(z[C].location>=0){let k=H[C];k===void 0&&(C==="instanceMatrix"&&U.instanceMatrix&&(k=U.instanceMatrix),C==="instanceColor"&&U.instanceColor&&(k=U.instanceColor));let G={};G.attribute=k,k&&k.data&&(G.data=k.data),Z[C]=G,O++}r.attributes=Z,r.attributesNum=O,r.index=N}function v(){let U=r.newAttributes;for(let D=0,L=U.length;D<L;D++)U[D]=0}function _(U){p(U,0)}function p(U,D){let L=r.newAttributes,N=r.enabledAttributes,Z=r.attributeDivisors;L[U]=1,N[U]===0&&(i.enableVertexAttribArray(U),N[U]=1),Z[U]!==D&&(i.vertexAttribDivisor(U,D),Z[U]=D)}function y(){let U=r.newAttributes,D=r.enabledAttributes;for(let L=0,N=D.length;L<N;L++)D[L]!==U[L]&&(i.disableVertexAttribArray(L),D[L]=0)}function M(U,D,L,N,Z,H,O){O===!0?i.vertexAttribIPointer(U,D,L,Z,H):i.vertexAttribPointer(U,D,L,N,Z,H)}function x(U,D,L,N){v();let Z=N.attributes,H=L.getAttributes(),O=D.defaultAttributeValues;for(let z in H){let C=H[z];if(C.location>=0){let Y=Z[z];if(Y===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor)),Y!==void 0){let k=Y.normalized,G=Y.itemSize,K=t.get(Y);if(K===void 0)continue;let B=K.buffer,I=K.type,nt=K.bytesPerElement,dt=I===i.INT||I===i.UNSIGNED_INT||Y.gpuType===va;if(Y.isInterleavedBufferAttribute){let at=Y.data,ut=at.isInterleavedBuffer===!0?at.stride:at.itemSize,_t=Y.offset;if(at.isInstancedInterleavedBuffer||at.isInstancedBufferAttribute){for(let pt=0;pt<C.locationSize;pt++)p(C.location+pt,at.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let pt=0;pt<C.locationSize;pt++)_(C.location+pt);i.bindBuffer(i.ARRAY_BUFFER,B);for(let pt=0;pt<C.locationSize;pt++)M(C.location+pt,G/C.locationSize,I,k,ut*nt,(_t+G/C.locationSize*pt)*nt,dt)}else{if(Y.isInstancedBufferAttribute){for(let at=0;at<C.locationSize;at++)p(C.location+at,Y.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let at=0;at<C.locationSize;at++)_(C.location+at);i.bindBuffer(i.ARRAY_BUFFER,B);for(let at=0;at<C.locationSize;at++)M(C.location+at,G/C.locationSize,I,k,G*nt,G/C.locationSize*at*nt,dt)}}else if(O!==void 0){let k=O[z];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(C.location,k);break;case 3:i.vertexAttrib3fv(C.location,k);break;case 4:i.vertexAttrib4fv(C.location,k);break;default:i.vertexAttrib1fv(C.location,k)}}}}y()}function b(){P();for(let U in n){let D=n[U];for(let L in D){let N=D[L];for(let Z in N){let H=N[Z];for(let O in H)c(H[O].object),delete H[O];delete N[Z]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let D=n[U.id];for(let L in D){let N=D[L];for(let Z in N){let H=N[Z];for(let O in H)c(H[O].object),delete H[O];delete N[Z]}}delete n[U.id]}function g(U){for(let D in n){let L=n[D];for(let N in L){let Z=L[N];if(Z[U.id]===void 0)continue;let H=Z[U.id];for(let O in H)c(H[O].object),delete H[O];delete Z[U.id]}}}function S(U){for(let D in n){let L=n[D],N=U.isInstancedMesh===!0?U.id:0,Z=L[N];if(Z!==void 0){for(let H in Z){let O=Z[H];for(let z in O)c(O[z].object),delete O[z];delete Z[H]}delete L[N],Object.keys(L).length===0&&delete n[D]}}}function P(){T(),o=!0,r!==s&&(r=s,h(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:_,disableUnusedAttributes:y}}function V0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,c){c!==0&&(i.drawArraysInstanced(n,l,h,c),e.update(h,n,c))}function a(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,c);let u=0;for(let d=0;d<c;d++)u+=h[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function z0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Un&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let S=g===qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==dn&&g!==wn&&!S&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(Xt("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,maxSamples:b,samples:w}}function G0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Cn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=c(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,v=f.clipIntersection,_=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!_)r?c(null):h();else{let y=r?0:n,M=y*4,x=p.clippingState||null;l.value=x,x=c(m,u,M,d);for(let b=0;b!==M;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(f,u,d,m){let v=f!==null?f.length:0,_=null;if(v!==0){if(_=l.value,m!==!0||_===null){let p=d+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<p)&&(_=new Float32Array(p));for(let M=0,x=d;M!==v;++M,x+=4)o.copy(f[M]).applyMatrix4(y,a),o.normal.toArray(_,x),_[x+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,_}}var Vr=class extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new hr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Qn});r.uniforms.tEquirect.value=e;let o=new qt(s,r),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=on),new vs(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},qu=256,H0=3,W0=20,_d=256,yd=16,Z0=3,Y0=new V,X0=new xt,ol=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vs(1,10,null),this._boxMesh=new qt(new ln(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Y0}=r,l=this._renderer;this._setSize(o);let h=this._allocateTarget(),c=this._getSourceTarget(!0);e>0&&(c.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(X0));let _=new vs(n,s,c);return _.position.copy(a),_.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=m,t.background=v,e>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(qu,Zu(t))}_fromTexture(t,e){t.mapping===Gi||t.mapping===ws?this._setSize(t.image.length===0?qu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=ju(t,!1,!1),n=Math.log2(t)-H0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ju(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Gi||t.mapping===ws?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=J0(),this._integrationMaterial=q0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/yd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Z0)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(_d*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=j0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function ju(i,t,e){return new Vr(i,{minFilter:Kn,generateMipmaps:t,type:qe,colorSpace:Ks,depthBuffer:e})}function zr(i,t,e){return new We({name:i,uniforms:t,vertexShader:re.cube_vert,fragmentShader:e,side:De,blending:Qn,depthTest:!1,depthWrite:!1})}function J0(){return zr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${_d}u

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
	`)}function q0(){return zr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yd}},`

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
	`)}function j0(){return zr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${W0}
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
	`)}function Qu(){return zr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ku(){return zr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Q0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===_a||d===ya)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new Vr(m.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",h),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,m=d===_a||d===ya,v=d===Gi||d===ws;if(m||v){let _=e.get(u),p=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ol(i)),_=m?n.fromEquirectangular(u,_):n.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{let y=u.image;return m&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new ol(i)),_=m?n.fromEquirectangular(u):n.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",c),_.texture):null}}}return u}function a(u,d){return d===_a?u.mapping=Gi:d===ya&&(u.mapping=ws),u}function l(u){let d=0,m=6;for(let v=0;v<m;v++)u[v]!==void 0&&d++;return d===m}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function K0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Js("WebGLRenderer: "+n+" extension not supported."),s}}}function $0(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let _ in m.attributes)t.remove(m.attributes[_]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let v=r.get(m);v&&(t.remove(v),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function h(m,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function c(m){let v=m.attributes;for(let _ in v)t.update(v[_],i.ARRAY_BUFFER)}function f(m){let v=m.index,_=m.attributes.position,p=0;if(_===void 0)return;let y=v!==null?v.array.length:_.array.length/3-1,M=_.count>=65535?or:rr,x=new M(Math.ceil(y/3)*6,1),b=x.array;if(v!==null){let g=v.array;p=v.version;for(let S=0,P=0;S<y;S+=3){let T=g[S+0],U=g[S+1],D=g[S+2];b[P++]=T,b[P++]=U,b[P++]=U,b[P++]=D,b[P++]=D,b[P++]=T}}else{p=_.version;for(let g=0,S=0;g<y;g+=3){let P=g+0,T=g+1,U=g+2;b[S++]=P,b[S++]=T,b[S++]=T,b[S++]=U,b[S++]=U,b[S++]=P}}x.version=p;let w=r.get(m);w&&t.remove(w),r.set(m,x)}function u(m){let v=r.get(m);if(v){let _=m.index;_!==null&&v.version<_.version&&f(m)}else f(m);return r.get(m)}function d(){for(let m in s){let v=s[m].deref();v!==void 0&&l(v)}}return{get:h,update:c,getWireframeAttribute:u,dispose:d}}function tx(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function h(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function c(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function ex(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nx(i,t,e){let n=new WeakMap,s=new we;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==f){let P=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),v===!0&&(M=3);let x=a.attributes.position.count*M,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*b*4*f),g=new er(w,x,b,f);g.type=wn,g.needsUpdate=!0;let S=M*4;for(let T=0;T<f;T++){let U=_[T],D=p[T],L=y[T],N=x*b*4*T;for(let Z=0;Z<U.count;Z++){let H=Z*S;d===!0&&(s.fromBufferAttribute(U,Z),w[N+H+0]=s.x,w[N+H+1]=s.y,w[N+H+2]=s.z,w[N+H+3]=0),m===!0&&(s.fromBufferAttribute(D,Z),w[N+H+4]=s.x,w[N+H+5]=s.y,w[N+H+6]=s.z,w[N+H+7]=0),v===!0&&(s.fromBufferAttribute(L,Z),w[N+H+8]=s.x,w[N+H+9]=s.y,w[N+H+10]=s.z,w[N+H+11]=L.itemSize===4?s.w:1)}}u={count:f,texture:g,size:new Pt(x,b)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<h.length;v++)d+=h[v];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ix(i,t,e,n,s){let r=new WeakMap;function o(h){let c=s.render.frame,f=h.geometry,u=t.get(h,f);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){let d=h.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),n.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}var sx={[wr]:"LINEAR_TONE_MAPPING",[Er]:"REINHARD_TONE_MAPPING",[Tr]:"CINEON_TONE_MAPPING",[zi]:"ACES_FILMIC_TONE_MAPPING",[Rr]:"AGX_TONE_MAPPING",[Cr]:"NEUTRAL_TONE_MAPPING",[Ar]:"CUSTOM_TONE_MAPPING"};function rx(i,t,e,n,s,r){let o=new Ne(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,h=null,c=new oe;c.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vt([0,2,0,0,2,0],2));let f=new Ms({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new qt(c,f),d=new ki(-1,1,1,-1,0,1),m=null,v=null,_=!1,p,y=null,M=[],x=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let g=0;g<M.length;g++){let S=M[g];S.setSize&&S.setSize(b,w)}},this.setEffects=function(b){M=b,x=M.length>0&&M[0].isRenderPass===!0;let w=o.width,g=o.height;M.length>0&&a===null&&(a=new Ne(w,g,{type:qe,depthBuffer:!1,stencilBuffer:!1}),l=new Ne(w,g,{type:qe,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&M.some(P=>P.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&h===null&&(h=new qn(w,g),r===!0&&(h.format=$n,h.type=Hi)),o.dispose(),o.depthTexture=S?h:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let P=0;P<M.length;P++){let T=M[P];T.setSize&&T.setSize(w,g),S&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(h)}},this.begin=function(b,w){if(_||b.toneMapping===Bn&&M.length===0)return!1;if(y=w,w!==null){let g=w.width,S=w.height;(o.width!==g||o.height!==S)&&this.setSize(g,S)}return x===!1&&b.setRenderTarget(o),p=b.toneMapping,b.toneMapping=Bn,!0},this.hasRenderPass=function(){return x},this.end=function(b,w){b.toneMapping=p,_=!0;let g=o,S=a;for(let P=0;P<M.length;P++){let T=M[P];T.enabled!==!1&&(T.render(b,S,g,w),T.needsSwap!==!1&&(g=S,S=S===a?l:a))}if(m!==b.outputColorSpace||v!==b.toneMapping){m=b.outputColorSpace,v=b.toneMapping,f.defines={},ae.getTransfer(m)===me&&(f.defines.SRGB_TRANSFER="");let P=sx[v];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,b.setRenderTarget(y),b.render(u,d),y=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var Md=new an,vd=new qn(1,1),Sd=new dr(1),bd=new er,wd=new Wo,Ed=new hr,$u=[],td=[],ed=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$u[s];if(r===void 0&&(r=new Float32Array(s),$u[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ll(i,t){let e=td[t];e===void 0&&(e=new Int32Array(t),td[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ox(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function hx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Le(e,n))return;id.set(n),i.uniformMatrix2fv(this.addr,!1,id),Be(e,n)}}function ux(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Le(e,n))return;nd.set(n),i.uniformMatrix3fv(this.addr,!1,nd),Be(e,n)}}function dx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Le(e,n))return;ed.set(n),i.uniformMatrix4fv(this.addr,!1,ed),Be(e,n)}}function fx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function xx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function cl(i){return i.version===0&&(i.compareFunction=Cc,i.needsUpdate=!0),i}function vx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=cl(vd):r=Md,e.setTexture2D(t||r,s)}function Sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wd,s)}function bx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=cl(Sd):r=Ed,e.setTextureCube(t||r,s)}function wx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bd,s)}function Ex(i){switch(i){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return _x;case 36295:return yx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return wx}}function Tx(i,t){i.uniform1fv(this.addr,t)}function Ax(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Rx(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Cx(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ix(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Px(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ux(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Nx(i,t){i.uniform1iv(this.addr,t)}function Fx(i,t){i.uniform2iv(this.addr,t)}function Dx(i,t){i.uniform3iv(this.addr,t)}function Lx(i,t){i.uniform4iv(this.addr,t)}function Bx(i,t){i.uniform1uiv(this.addr,t)}function kx(i,t){i.uniform2uiv(this.addr,t)}function Ox(i,t){i.uniform3uiv(this.addr,t)}function Vx(i,t){i.uniform4uiv(this.addr,t)}function zx(i,t,e){let n=this.cache,s=t.length,r=ll(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=cl(vd):o=Md;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Gx(i,t,e){let n=this.cache,s=t.length,r=ll(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wd,r[o])}function Hx(i,t,e){let n=this.cache,s=t.length,r=ll(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=cl(Sd):o=Ed;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Wx(i,t,e){let n=this.cache,s=t.length,r=ll(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bd,r[o])}function Zx(i){switch(i){case 5126:return Tx;case 35664:return Ax;case 35665:return Rx;case 35666:return Cx;case 35674:return Ix;case 35675:return Px;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Fx;case 35668:case 35672:return Dx;case 35669:case 35673:return Lx;case 5125:return Bx;case 36294:return kx;case 36295:return Ox;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Wx}}var Vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ex(e.type)}},zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zx(e.type)}},Gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},kc=/(\w+)(\])?(\[|\.)?/g;function sd(i,t){i.seq.push(t),i.map[t.id]=t}function Yx(i,t,e){let n=i.name,s=n.length;for(kc.lastIndex=0;;){let r=kc.exec(n),o=kc.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){sd(e,h===void 0?new Vc(a,i,t):new zc(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Gc(a),sd(e,f)),e=f}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Yx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function rd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Xx=37297,Jx=0;function qx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var od=new $t;function jx(i){ae._getMatrix(od,ae.workingColorSpace,i);let t=`mat3( ${od.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case $s:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ad(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+qx(i.getShaderSource(t),a)}else return r}function Qx(i,t){let e=jx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Kx={[wr]:"Linear",[Er]:"Reinhard",[Tr]:"Cineon",[zi]:"ACESFilmic",[Rr]:"AgX",[Cr]:"Neutral",[Ar]:"Custom"};function $x(i,t){let e=Kx[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rl=new V;function t_(){ae.getLuminanceCoefficients(rl);let i=rl.x.toFixed(4),t=rl.y.toFixed(4),e=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function n_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Or(i){return i!==""}function ld(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function cd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(i){return i.replace(s_,r_)}function r_(i,t){let e=re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Hc(e)}var o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(i){return i.replace(o_,a_)}function a_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ud(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var l_={[Sr]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function c_(i){return l_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var h_={[ws]:"ENVMAP_MODE_REFRACTION"};function u_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":h_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var d_={[br]:"ENVMAP_BLENDING_MULTIPLY",[Cu]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function f_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":d_[i.combine]||"ENVMAP_BLENDING_NONE"}function p_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=c_(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=u_(e),f=f_(e),u=e_(e),d=n_(r),m=s.createProgram(),v,_,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Or).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Or).join(`
`),_.length>0&&(_+=`
`)):(v=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),_=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?re.tonemapping_pars_fragment:"",e.toneMapping!==Bn?$x("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Qx("linearToOutputTexel",e.outputColorSpace),t_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),o=Hc(o),o=ld(o,e),o=cd(o,e),a=Hc(a),a=ld(a,e),a=cd(a,e),o=hd(o),a=hd(a),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",e.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=p+v+o,M=p+_+a,x=rd(s,s.VERTEX_SHADER,y),b=rd(s,s.FRAGMENT_SHADER,M);s.attachShader(m,x),s.attachShader(m,b),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(T){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(x)||"",L=s.getShaderInfoLog(b)||"",N=U.trim(),Z=D.trim(),H=L.trim(),O=!0,z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,x,b);else{let C=ad(s,x,"vertex"),Y=ad(s,b,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+N+`
`+C+`
`+Y)}else N!==""?Xt("WebGLProgram: Program Info Log:",N):(Z===""||H==="")&&(z=!1);z&&(T.diagnostics={runnable:O,programLog:N,vertexShader:{log:Z,prefix:v},fragmentShader:{log:H,prefix:_}})}s.deleteShader(x),s.deleteShader(b),g=new As(s,m),S=i_(s,m)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(m,Xx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=b,this}var m_=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zc(t),e.set(t,n)),n}},Zc=class{constructor(t){this.id=m_++,this.code=t,this.usedTimes=0}};function g_(i){return i===yi||i===Dr||i===Lr}function x_(i,t,e,n,s,r){let o=new nr,a=new Wc,l=new Set,h=[],c=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return l.add(g),g===0?"uv":`uv${g}`}function m(g,S,P,T,U,D){let L=T.fog,N=U.geometry,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?T.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,O=t.get(g.envMap||Z,H),z=u[g.type],C=n.precision;g.precision!==null&&(C=n.getMaxPrecision(g.precision),C!==g.precision&&Xt("WebGLProgram.getParameters:",g.precision,"not supported, using",C,"instead."));let Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,k=Y!==void 0?Y.length:0,G=0;N.morphAttributes.position!==void 0&&(G=1),N.morphAttributes.normal!==void 0&&(G=2),N.morphAttributes.color!==void 0&&(G=3);let K,B,I,nt;if(z){let It=On[z];K=It.vertexShader,B=It.fragmentShader}else{K=g.vertexShader,B=g.fragmentShader;let It=a.getVertexShaderStage(g),_e=a.getFragmentShaderStage(g);a.update(g,It,_e),I=It.id,nt=_e.id}let dt=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),ut=U.isInstancedMesh===!0,_t=U.isBatchedMesh===!0,pt=!!g.map,Ct=!!g.matcap,vt=!!O,Q=vt&&O.isPMREMTexture===!0,Ft=!!g.aoMap,Dt=!!g.lightMap,Yt=!!g.bumpMap&&g.wireframe===!1,Wt=!!g.normalMap,Lt=!!g.displacementMap,Qt=!!g.emissiveMap,ee=!!g.metalnessMap,Ae=!!g.roughnessMap,Se=g.anisotropy>0,J=g.clearcoat>0,q=g.diffuseRoughness>0,St=g.dispersion>0,Jt=g.retroreflectivity>0,ct=g.iridescence>0,ne=g.sheen>0,Rt=g.transmission>0,st=Se&&!!g.anisotropyMap,R=J&&!!g.clearcoatMap,E=J&&!!g.clearcoatNormalMap,F=J&&!!g.clearcoatRoughnessMap,j=q&&!!g.diffuseRoughnessMap,$=ct&&!!g.iridescenceMap,ot=ct&&!!g.iridescenceThicknessMap,gt=ne&&!!g.sheenColorMap,it=ne&&!!g.sheenRoughnessMap,ht=!!g.specularMap,Mt=!!g.specularColorMap,W=!!g.specularIntensityMap,ft=Rt&&!!g.transmissionMap,lt=Rt&&!!g.thicknessMap,wt=!!g.gradientMap,bt=!!g.alphaMap,Et=g.alphaTest>0,Gt=!!g.alphaHash,se=!!g.extensions,yt=Bn;g.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(yt=i.toneMapping);let Zt=Q?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,ie={shaderID:z,shaderType:g.type,shaderName:g.name,vertexShader:K,fragmentShader:B,defines:g.defines,customVertexShaderID:I,customFragmentShaderID:nt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:C,batching:_t,batchingColor:_t&&U._colorsTexture!==null,instancing:ut,instancingColor:ut&&U.instanceColor!==null,instancingMorph:ut&&U.morphTexture!==null,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:pt,matcap:Ct,envMap:vt,envMapMode:vt&&O.mapping,envMapPMREM:Q,envMapMaxLod:Q?Zt.length-1:null,envMapSize:Q?Zt[0].width:null,aoMap:Ft,lightMap:Dt,bumpMap:Yt,normalMap:Wt,displacementMap:Lt,emissiveMap:Qt,normalMapObjectSpace:Wt&&g.normalMapType===Nu,normalMapTangentSpace:Wt&&g.normalMapType===Ts,packedNormalMap:Wt&&g.normalMapType===Ts&&g_(g.normalMap.format),metalnessMap:ee,roughnessMap:Ae,anisotropy:Se,anisotropyMap:st,clearcoat:J,clearcoatMap:R,clearcoatNormalMap:E,clearcoatRoughnessMap:F,diffuseRoughness:q,diffuseRoughnessMap:j,dispersion:St,retroreflection:Jt,iridescence:ct,iridescenceMap:$,iridescenceThicknessMap:ot,sheen:ne,sheenColorMap:gt,sheenRoughnessMap:it,specularMap:ht,specularColorMap:Mt,specularIntensityMap:W,transmission:Rt,transmissionMap:ft,thicknessMap:lt,gradientMap:wt,opaque:g.transparent===!1&&g.blending===bs&&g.alphaToCoverage===!1,alphaMap:bt,alphaTest:Et,alphaHash:Gt,combine:g.combine,mapUv:pt&&d(g.map.channel),aoMapUv:Ft&&d(g.aoMap.channel),lightMapUv:Dt&&d(g.lightMap.channel),bumpMapUv:Yt&&d(g.bumpMap.channel),normalMapUv:Wt&&d(g.normalMap.channel),displacementMapUv:Lt&&d(g.displacementMap.channel),emissiveMapUv:Qt&&d(g.emissiveMap.channel),metalnessMapUv:ee&&d(g.metalnessMap.channel),roughnessMapUv:Ae&&d(g.roughnessMap.channel),anisotropyMapUv:st&&d(g.anisotropyMap.channel),clearcoatMapUv:R&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:j&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:$&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:it&&d(g.sheenRoughnessMap.channel),specularMapUv:ht&&d(g.specularMap.channel),specularColorMapUv:Mt&&d(g.specularColorMap.channel),specularIntensityMapUv:W&&d(g.specularIntensityMap.channel),transmissionMapUv:ft&&d(g.transmissionMap.channel),thicknessMapUv:lt&&d(g.thicknessMap.channel),alphaMapUv:bt&&d(g.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Wt||Se),vertexNormals:!!N.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(pt||bt),fog:!!L,useFog:g.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||N.attributes.normal===void 0&&Wt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:at,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:G,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:pt&&g.map.isVideoTexture===!0&&ae.getTransfer(g.map.colorSpace)===me,decodeVideoTextureEmissive:Qt&&g.emissiveMap.isVideoTexture===!0&&ae.getTransfer(g.emissiveMap.colorSpace)===me,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ge,flipSided:g.side===De,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:se&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&g.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function v(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let P in g.defines)S.push(P),S.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(_(S,g),p(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function _(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function p(g,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function y(g){let S=u[g.type],P;if(S){let T=On[S];P=ei.clone(T.uniforms)}else P=g.uniforms;return P}function M(g,S){let P=c.get(S);return P!==void 0?++P.usedTimes:(P=new p_(i,S,g,s),h.push(P),c.set(S,P)),P}function x(g){if(--g.usedTimes===0){let S=h.indexOf(g);h[S]=h[h.length-1],h.pop(),c.delete(g.cacheKey),g.destroy()}}function b(g){a.remove(g)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:y,acquireProgram:M,releaseProgram:x,releaseShaderCache:b,programs:h,dispose:w}}function __(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function y_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function dd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,v,_,p){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:_,group:p},i[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=m,y.materialVariant=o(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=_,y.group=p),t++,y}function l(u,d,m,v,_,p,y){y.reversedDepth===!0&&(_=-_);let M=a(u,d,m,v,_,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):e.push(M)}function h(u,d,m,v,_,p){let y=a(u,d,m,v,_,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function c(u,d){e.length>1&&e.sort(u||y_),n.length>1&&n.sort(d||dd),s.length>1&&s.sort(d||dd)}function f(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:h,finish:f,sort:c}}function M_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new fd,i.set(n,[o])):s>=r.length?(o=new fd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function v_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new xt};break;case"SpotLight":e={position:new V,direction:new V,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function S_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var b_=0;function w_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function E_(i){let t=new v_,e=S_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new V);let s=new V,r=new Ht,o=new Ht;function a(h){let c=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,m=0,v=0,_=0,p=0,y=0,M=0,x=0,b=0,w=0,g=0,S=0,P=0,T=0;h.sort(w_);for(let D=0,L=h.length;D<L;D++){let N=h[D],Z=N.color,H=N.intensity,O=N.distance,z=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===yi?z=N.shadow.map.texture:z=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)c+=Z.r*H,f+=Z.g*H,u+=Z.b*H;else if(N.isLightProbe){for(let C=0;C<9;C++)n.probe[C].addScaledVector(N.sh.coefficients[C],H);T++}else if(N.isSunLight){let C=t.get(N);if(C.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Y=N.shadow,k=e.get(N);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[m]=k,n.sunShadowMap[m]=z;let G=Y.getViewportCount();for(let K=0;K<G;K++)n.sunShadowMatrix[v+K]=Y.getMatrix(K),n.sunShadowCascade[v+K]=Y._cascadeData[K];v+=G,m++}n.sun[d]=C,d++}else if(N.isDirectionalLight){let C=t.get(N);if(C.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Y=N.shadow,k=e.get(N);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.directionalShadow[_]=k,n.directionalShadowMap[_]=z,n.directionalShadowMatrix[_]=N.shadow.matrix,b++}n.directional[_]=C,_++}else if(N.isSpotLight){let C=t.get(N);C.position.setFromMatrixPosition(N.matrixWorld),C.color.copy(Z).multiplyScalar(H),C.distance=O,C.coneCos=Math.cos(N.angle),C.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),C.decay=N.decay,n.spot[y]=C;let Y=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,Y.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[y]=Y.matrix,N.castShadow){let k=e.get(N);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.spotShadow[y]=k,n.spotShadowMap[y]=z,g++}y++}else if(N.isRectAreaLight){let C=t.get(N);C.color.copy(Z).multiplyScalar(H),C.halfWidth.set(N.width*.5,0,0),C.halfHeight.set(0,N.height*.5,0),n.rectArea[M]=C,M++}else if(N.isPointLight){let C=t.get(N);if(C.color.copy(N.color).multiplyScalar(N.intensity),C.distance=N.distance,C.decay=N.decay,N.castShadow){let Y=N.shadow,k=e.get(N);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=N.shadow.matrix,w++}n.point[p]=C,p++}else if(N.isHemisphereLight){let C=t.get(N);C.skyColor.copy(N.color).multiplyScalar(H),C.groundColor.copy(N.groundColor).multiplyScalar(H),n.hemi[x]=C,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=f,n.ambient[2]=u;let U=n.hash;(U.sunLength!==d||U.directionalLength!==_||U.pointLength!==p||U.spotLength!==y||U.rectAreaLength!==M||U.hemiLength!==x||U.numSunShadows!==m||U.numDirectionalShadows!==b||U.numPointShadows!==w||U.numSpotShadows!==g||U.numSpotMaps!==S||U.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=_,n.spot.length=y,n.rectArea.length=M,n.point.length=p,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=T,U.sunLength=d,U.directionalLength=_,U.pointLength=p,U.spotLength=y,U.rectAreaLength=M,U.hemiLength=x,U.numSunShadows=m,U.numDirectionalShadows=b,U.numPointShadows=w,U.numSpotShadows=g,U.numSpotMaps=S,U.numLightProbes=T,n.version=b_++)}function l(h,c){let f=0,u=0,d=0,m=0,v=0,_=0,p=c.matrixWorldInverse;for(let y=0,M=h.length;y<M;y++){let x=h[y];if(x.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),f++}else if(x.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(x.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function pd(i){let t=new E_(i),e=[],n=[],s=[];function r(f){c.camera=f,e.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):e.push(f)}function a(f){n.push(f)}function l(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function h(f){t.setupView(e,f)}let c={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:c,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function T_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new pd(i),t.set(s,[a])):r>=o.length?(a=new pd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
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
}`,C_=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],I_=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],md=new Ht,kr=new V,Oc=new V;function P_(i,t,e){let n=new pi,s=new Pt,r=new Pt,o=new we,a=new sa,l=new ra,h={},c=e.maxTextureSize,f={[_i]:De,[De]:_i,[ge]:ge},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:A_,fragmentShader:R_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new oe;m.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new qt(m,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let p=this.type;this.render=function(w,g,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===hu&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);let P=i.getRenderTarget(),T=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Qn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let L=p!==this.type;L&&g.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(Z=>Z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,Z=w.length;N<Z;N++){let H=w[N],O=H.shadow;if(O===void 0){Xt("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let z=O.getFrameExtents();s.multiply(z),r.copy(O.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/z.x),s.x=r.x*z.x,O.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/z.y),s.y=r.y*z.y,O.mapSize.y=r.y));let C=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=C,O.map===null||L===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ss){if(H.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ne(s.x,s.y,{format:yi,type:qe,minFilter:on,magFilter:on,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new qn(s.x,s.y,wn),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=Jn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ue,O.map.depthTexture.magFilter=Ue}else H.isPointLight?(O.map=new Vr(s.x),O.map.depthTexture=new dr(s.x,Pn)):(O.map=new Ne(s.x,s.y),O.map.depthTexture=new qn(s.x,s.y,Pn)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=Jn,this.type===Sr?(O.map.depthTexture.compareFunction=C?Rc:Ac,O.map.depthTexture.minFilter=on,O.map.depthTexture.magFilter=on):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ue,O.map.depthTexture.magFilter=Ue);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let Y=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();H.isPointLight!==!0&&O.updateMatrices(H,S);let k=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let G=0;G<Y;G++){let K=O.getCamera(G);if(H.isPointLight){let B=O.camera,I=O.matrix,nt=H.distance||B.far;nt!==B.far&&(B.far=nt,B.updateProjectionMatrix()),kr.setFromMatrixPosition(H.matrixWorld),B.position.copy(kr),Oc.copy(B.position),Oc.add(C_[G]),B.up.copy(I_[G]),B.lookAt(Oc),B.updateMatrixWorld(),I.makeTranslation(-kr.x,-kr.y,-kr.z),md.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),O._frustum.setFromProjectionMatrix(md,B.coordinateSystem,B.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,G),i.clear();else{G===0&&(i.setRenderTarget(O.map),i.clear());let B=O.getViewport(G);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),D.viewport(o)}n=O.getFrustum(G),x(g,S,K,H,k,this.type)}O.isPointLightShadow!==!0&&this.type===Ss&&y(O,S),O.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(P,T,U)};function y(w,g){let S=t.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ne(s.x,s.y,{format:yi,type:qe}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(g,null,S,u,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(g,null,S,d,v,null)}function M(w,g,S,P){let T=null,U=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)T=U;else if(T=S.isPointLight===!0?l:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let D=T.uuid,L=g.uuid,N=h[D];N===void 0&&(N={},h[D]=N);let Z=N[L];Z===void 0&&(Z=T.clone(),N[L]=Z,g.addEventListener("dispose",b)),T=Z}if(T.visible=g.visible,T.wireframe=g.wireframe,P===Ss?T.side=g.shadowSide!==null?g.shadowSide:g.side:T.side=g.shadowSide!==null?g.shadowSide:f[g.side],T.alphaMap=g.alphaMap,T.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,T.map=g.map,T.clipShadows=g.clipShadows,T.clippingPlanes=g.clippingPlanes,T.clipIntersection=g.clipIntersection,T.displacementMap=g.displacementMap,T.displacementScale=g.displacementScale,T.displacementBias=g.displacementBias,T.wireframeLinewidth=g.wireframeLinewidth,T.linewidth=g.linewidth,S.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let D=i.properties.get(T);D.light=S}return T}function x(w,g,S,P,T,U){if(w.visible===!1)return;if(w.layers.test(T)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===Ss)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let N=t.update(w),Z=w.material;if(Array.isArray(Z)){let H=N.groups;for(let O=0,z=H.length;O<z;O++){let C=H[O],Y=Z[C.materialIndex];if(Y&&Y.visible){let k=M(w,Y,P,U);w.onBeforeShadow(i,w,g,S,N,k,C),i.renderBufferDirect(S,null,N,k,w,C),w.onAfterShadow(i,w,g,S,N,k,C)}}}else if(Z.visible){let H=M(w,Z,P,U);w.onBeforeShadow(i,w,g,S,N,H,null),i.renderBufferDirect(S,null,N,H,w,null),w.onAfterShadow(i,w,g,S,N,H,null)}}let L=w.children;for(let N=0,Z=L.length;N<Z;N++)x(L[N],g,S,P,T,U)}function b(w){w.target.removeEventListener("dispose",b);for(let S in h){let P=h[S],T=w.target.uuid;T in P&&(P[T].dispose(),delete P[T])}}}function U_(i,t){function e(){let W=!1,ft=new we,lt=null,wt=new we(0,0,0,0);return{setMask:function(bt){lt!==bt&&!W&&(i.colorMask(bt,bt,bt,bt),lt=bt)},setLocked:function(bt){W=bt},setClear:function(bt,Et,Gt,se,yt){yt===!0&&(bt*=se,Et*=se,Gt*=se),ft.set(bt,Et,Gt,se),wt.equals(ft)===!1&&(i.clearColor(bt,Et,Gt,se),wt.copy(ft))},reset:function(){W=!1,lt=null,wt.set(-1,0,0,0)}}}function n(){let W=!1,ft=!1,lt=null,wt=null,bt=null;return{setReversed:function(Et){if(ft!==Et){let Gt=t.get("EXT_clip_control");Et?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),ft=Et;let se=bt;bt=null,this.setClear(se)}},getReversed:function(){return ft},setTest:function(Et){Et?at(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(Et){lt!==Et&&!W&&(i.depthMask(Et),lt=Et)},setFunc:function(Et){if(ft&&(Et=Wu[Et]),wt!==Et){switch(Et){case Uo:i.depthFunc(i.NEVER);break;case No:i.depthFunc(i.ALWAYS);break;case Fo:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case Do:i.depthFunc(i.EQUAL);break;case Lo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Et}},setLocked:function(Et){W=Et},setClear:function(Et){bt!==Et&&(bt=Et,ft&&(Et=1-Et),i.clearDepth(Et))},reset:function(){W=!1,lt=null,wt=null,bt=null,ft=!1}}}function s(){let W=!1,ft=null,lt=null,wt=null,bt=null,Et=null,Gt=null,se=null,yt=null;return{setTest:function(Zt){W||(Zt?at(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Zt){ft!==Zt&&!W&&(i.stencilMask(Zt),ft=Zt)},setFunc:function(Zt,ie,It){(lt!==Zt||wt!==ie||bt!==It)&&(i.stencilFunc(Zt,ie,It),lt=Zt,wt=ie,bt=It)},setOp:function(Zt,ie,It){(Et!==Zt||Gt!==ie||se!==It)&&(i.stencilOp(Zt,ie,It),Et=Zt,Gt=ie,se=It)},setLocked:function(Zt){W=Zt},setClear:function(Zt){yt!==Zt&&(i.clearStencil(Zt),yt=Zt)},reset:function(){W=!1,ft=null,lt=null,wt=null,bt=null,Et=null,Gt=null,se=null,yt=null}}}let r=new e,o=new n,a=new s,l={},h=new WeakMap,c={},f={},u={},d=new WeakMap,m=[],v=null,_=!1,p=null,y=null,M=null,x=null,b=null,w=null,g=null,S=new xt(0,0,0),P=0,T=!1,U=null,D=null,L=null,N=null,Z=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,z=0,C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(C)[1]),O=z>=1):C.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),O=z>=2);let Y=null,k={},G=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),B=new we().fromArray(G),I=new we().fromArray(K);function nt(W,ft,lt,wt){let bt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(W,Et),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<lt;Gt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(ft+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Et}let dt={};dt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(us),Yt(!1),Wt(mc),at(i.CULL_FACE),Ft(Qn);function at(W){c[W]!==!0&&(i.enable(W),c[W]=!0)}function ut(W){c[W]!==!1&&(i.disable(W),c[W]=!1)}function _t(W,ft){return u[W]!==ft?(i.bindFramebuffer(W,ft),u[W]=ft,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function pt(W,ft){let lt=m,wt=!1;if(W){lt=d.get(ft),lt===void 0&&(lt=[],d.set(ft,lt));let bt=W.textures;if(lt.length!==bt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Gt=bt.length;Et<Gt;Et++)lt[Et]=i.COLOR_ATTACHMENT0+Et;lt.length=bt.length,wt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(lt)}function Ct(W){return v!==W?(i.useProgram(W),v=W,!0):!1}let vt={[Vi]:i.FUNC_ADD,[du]:i.FUNC_SUBTRACT,[fu]:i.FUNC_REVERSE_SUBTRACT};vt[pu]=i.MIN,vt[mu]=i.MAX;let Q={[gu]:i.ZERO,[xu]:i.ONE,[_u]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[Su]:i.DST_COLOR,[Mu]:i.DST_ALPHA,[yu]:i.ONE_MINUS_SRC_COLOR,[yc]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[vu]:i.ONE_MINUS_DST_ALPHA,[Eu]:i.CONSTANT_COLOR,[Tu]:i.ONE_MINUS_CONSTANT_COLOR,[Au]:i.CONSTANT_ALPHA,[Ru]:i.ONE_MINUS_CONSTANT_ALPHA};function Ft(W,ft,lt,wt,bt,Et,Gt,se,yt,Zt){if(W===Qn){_===!0&&(ut(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),W!==uu){if(W!==p||Zt!==T){if((y!==Vi||b!==Vi)&&(i.blendEquation(i.FUNC_ADD),y=Vi,b=Vi),Zt)switch(W){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oi:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",W);break}else switch(W){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gc:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",W);break}M=null,x=null,w=null,g=null,S.set(0,0,0),P=0,p=W,T=Zt}return}bt=bt||ft,Et=Et||lt,Gt=Gt||wt,(ft!==y||bt!==b)&&(i.blendEquationSeparate(vt[ft],vt[bt]),y=ft,b=bt),(lt!==M||wt!==x||Et!==w||Gt!==g)&&(i.blendFuncSeparate(Q[lt],Q[wt],Q[Et],Q[Gt]),M=lt,x=wt,w=Et,g=Gt),(se.equals(S)===!1||yt!==P)&&(i.blendColor(se.r,se.g,se.b,yt),S.copy(se),P=yt),p=W,T=!1}function Dt(W,ft){W.side===ge?ut(i.CULL_FACE):at(i.CULL_FACE);let lt=W.side===De;ft&&(lt=!lt),Yt(lt),W.blending===bs&&W.transparent===!1?Ft(Qn):Ft(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let wt=W.stencilWrite;a.setTest(wt),wt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Qt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(W){U!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),U=W)}function Wt(W){W!==lu?(at(i.CULL_FACE),W!==D&&(W===mc?i.cullFace(i.BACK):W===cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),D=W}function Lt(W){W!==L&&(O&&i.lineWidth(W),L=W)}function Qt(W,ft,lt){W?(at(i.POLYGON_OFFSET_FILL),(N!==ft||Z!==lt)&&(N=ft,Z=lt,o.getReversed()&&(ft=-ft,lt=-lt),i.polygonOffset(ft,lt))):ut(i.POLYGON_OFFSET_FILL)}function ee(W){W?at(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Ae(W){W===void 0&&(W=i.TEXTURE0+H-1),Y!==W&&(i.activeTexture(W),Y=W)}function Se(W,ft,lt){lt===void 0&&(Y===null?lt=i.TEXTURE0+H-1:lt=Y);let wt=k[lt];wt===void 0&&(wt={type:void 0,texture:void 0},k[lt]=wt),(wt.type!==W||wt.texture!==ft)&&(Y!==lt&&(i.activeTexture(lt),Y=lt),i.bindTexture(W,ft||dt[W]),wt.type=W,wt.texture=ft)}function J(){let W=k[Y];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function q(){try{i.compressedTexImage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function St(){try{i.compressedTexImage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function Jt(){try{i.texSubImage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function ct(){try{i.texSubImage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function st(){try{i.texStorage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function R(){try{i.texStorage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function E(){try{i.texImage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function F(){try{i.texImage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function j(W){return f[W]!==void 0?f[W]:i.getParameter(W)}function $(W,ft){f[W]!==ft&&(i.pixelStorei(W,ft),f[W]=ft)}function ot(W){B.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),B.copy(W))}function gt(W){I.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),I.copy(W))}function it(W,ft){let lt=h.get(ft);lt===void 0&&(lt=new WeakMap,h.set(ft,lt));let wt=lt.get(W);wt===void 0&&(wt=i.getUniformBlockIndex(ft,W.name),i.uniformBlockBinding(ft,wt,wt),lt.set(W,wt))}function ht(W,ft,lt){let bt=h.get(ft).get(W);l[bt]!==lt&&(i.bindBufferBase(i.UNIFORM_BUFFER,bt,lt),l[bt]=lt)}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},f={},Y=null,k={},u={},l={},d=new WeakMap,m=[],v=null,_=!1,p=null,y=null,M=null,x=null,b=null,w=null,g=null,S=new xt(0,0,0),P=0,T=!1,U=null,D=null,L=null,N=null,Z=null,B.set(0,0,i.canvas.width,i.canvas.height),I.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:ut,bindFramebuffer:_t,drawBuffers:pt,useProgram:Ct,setBlending:Ft,setMaterial:Dt,setFlipSided:Yt,setCullFace:Wt,setLineWidth:Lt,setPolygonOffset:Qt,setScissorTest:ee,activeTexture:Ae,bindTexture:Se,unbindTexture:J,compressedTexImage2D:q,compressedTexImage3D:St,texImage2D:E,texImage3D:F,pixelStorei:$,getParameter:j,updateUBOMapping:it,uniformBlockBinding:ht,texStorage2D:st,texStorage3D:R,texSubImage2D:Jt,texSubImage3D:ct,compressedTexSubImage2D:ne,compressedTexSubImage3D:Rt,scissor:ot,viewport:gt,reset:Mt}}function N_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pt,c=new WeakMap,f=new Set,u,d=new WeakMap,m=new Set,v=new FinalizationRegistry(R=>m.delete(R)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,E){return _?new OffscreenCanvas(R,E):tr("canvas")}function y(R,E,F){let j=1,$=st(R);if(($.width>F||$.height>F)&&(j=F/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ot=Math.floor(j*$.width),gt=Math.floor(j*$.height);u===void 0&&(u=p(ot,gt));let it=E?p(ot,gt):u;return it.width=ot,it.height=gt,it.getContext("2d").drawImage(R,0,0,ot,gt),Xt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ot+"x"+gt+")."),it}else return"data"in R&&Xt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function M(R){return R.generateMipmaps}function x(R){i.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,E,F,j,$,ot=!1){if(R!==null){if(i[R]!==void 0)return i[R];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let gt;j&&(gt=t.get("EXT_texture_norm16"),gt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=E;if(E===i.RED&&(F===i.FLOAT&&(it=i.R32F),F===i.HALF_FLOAT&&(it=i.R16F),F===i.UNSIGNED_BYTE&&(it=i.R8),F===i.UNSIGNED_SHORT&&gt&&(it=gt.R16_EXT),F===i.SHORT&&gt&&(it=gt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(it=i.R8UI),F===i.UNSIGNED_SHORT&&(it=i.R16UI),F===i.UNSIGNED_INT&&(it=i.R32UI),F===i.BYTE&&(it=i.R8I),F===i.SHORT&&(it=i.R16I),F===i.INT&&(it=i.R32I)),E===i.RG&&(F===i.FLOAT&&(it=i.RG32F),F===i.HALF_FLOAT&&(it=i.RG16F),F===i.UNSIGNED_BYTE&&(it=i.RG8),F===i.UNSIGNED_SHORT&&gt&&(it=gt.RG16_EXT),F===i.SHORT&&gt&&(it=gt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(it=i.RG8UI),F===i.UNSIGNED_SHORT&&(it=i.RG16UI),F===i.UNSIGNED_INT&&(it=i.RG32UI),F===i.BYTE&&(it=i.RG8I),F===i.SHORT&&(it=i.RG16I),F===i.INT&&(it=i.RG32I)),E===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(it=i.RGB8UI),F===i.UNSIGNED_SHORT&&(it=i.RGB16UI),F===i.UNSIGNED_INT&&(it=i.RGB32UI),F===i.BYTE&&(it=i.RGB8I),F===i.SHORT&&(it=i.RGB16I),F===i.INT&&(it=i.RGB32I)),E===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),F===i.UNSIGNED_INT&&(it=i.RGBA32UI),F===i.BYTE&&(it=i.RGBA8I),F===i.SHORT&&(it=i.RGBA16I),F===i.INT&&(it=i.RGBA32I)),E===i.RGB&&(F===i.UNSIGNED_SHORT&&gt&&(it=gt.RGB16_EXT),F===i.SHORT&&gt&&(it=gt.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),E===i.RGBA){let ht=ot?$s:ae.getTransfer($);F===i.FLOAT&&(it=i.RGBA32F),F===i.HALF_FLOAT&&(it=i.RGBA16F),F===i.UNSIGNED_BYTE&&(it=ht===me?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&gt&&(it=gt.RGBA16_EXT),F===i.SHORT&&gt&&(it=gt.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function g(R,E){let F;return R?E===null||E===Pn||E===Hi?F=i.DEPTH24_STENCIL8:E===wn?F=i.DEPTH32F_STENCIL8:E===Es&&(F=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pn||E===Hi?F=i.DEPTH_COMPONENT24:E===wn?F=i.DEPTH_COMPONENT32F:E===Es&&(F=i.DEPTH_COMPONENT16),F}function S(R,E){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ue&&R.minFilter!==on?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){let E=new WeakRef(R);n.get(R).__ref=E,m.add(E),v.register(R,E,E)}function T(R){let E=n.get(R).__ref;E!==void 0&&(m.delete(E),v.unregister(E))}function U(R){L(R.target)}function D(R){N(R.target)}function L(R){R.removeEventListener("dispose",U),T(R),H(R),R.isVideoTexture&&c.delete(R),R.isHTMLTexture&&f.delete(R)}function N(R){R.removeEventListener("dispose",D),T(R),z(R)}function Z(){for(let R of m){let E=R.deref();E!==void 0&&(E.isRenderTarget===!0?N(E):L(E))}m.clear(),f.clear()}function H(R){let E=n.get(R);if(E.__webglInit===void 0)return;let F=R.source,j=d.get(F);if(j){let $=j[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&O(R),Object.keys(j).length===0&&d.delete(F)}n.remove(R)}function O(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let F=R.source,j=d.get(F);delete j[E.__cacheKey],o.memory.textures--}function z(R){let E=n.get(R);E.__depthDisposeCallback&&E.__depthDisposeCallback();let F=R.depthTexture;if(F&&F.renderTarget===R&&L(F),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let ot=0;ot<E.__webglFramebuffer[$].length;ot++)i.deleteFramebuffer(E.__webglFramebuffer[$][ot]);else i.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)i.deleteFramebuffer(E.__webglFramebuffer[$]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let j=R.textures;for(let $=0,ot=j.length;$<ot;$++){let gt=n.get(j[$]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(j[$])}n.remove(R)}let C=0;function Y(){C=0}function k(){return C}function G(R){C=R}function K(){let R=C;return R>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function B(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.mipmapsAutoUpdate),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function I(R,E){let F=n.get(R);if(R.isVideoTexture&&ne(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){let j=R.image;if(j===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(F,R,E);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function nt(R,E){let F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){Dt(F,R,E);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function dt(R,E){let F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){Dt(F,R,E);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function at(R,E){let F=n.get(R);if(R.version>0&&F.__version!==R.version){Yt(F,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}let ut={[ds]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Oo]:i.MIRRORED_REPEAT},_t={[Ue]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},pt={[Du]:i.NEVER,[Cc]:i.ALWAYS,[Lu]:i.LESS,[Ac]:i.LEQUAL,[Bu]:i.EQUAL,[Rc]:i.GEQUAL,[ku]:i.GREATER,[Ou]:i.NOTEQUAL};function Ct(R,E){if(E.type===wn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===on||E.magFilter===Ma||E.magFilter===Ir||E.magFilter===Kn||E.minFilter===on||E.minFilter===Ma||E.minFilter===Ir||E.minFilter===Kn)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ut[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ut[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ut[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,_t[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,_t[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,pt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ue||E.minFilter!==Ir&&E.minFilter!==Kn||E.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function vt(R,E){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",U),P(E));let j=E.source,$=d.get(j);$===void 0&&($={},d.set(j,$));let ot=B(E);if(ot!==R.__cacheKey){$[ot]===void 0&&($[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[ot].usedTimes++;let gt=$[R.__cacheKey];gt!==void 0&&($[R.__cacheKey].usedTimes--,gt.usedTimes===0&&O(E)),R.__cacheKey=ot,R.__webglTexture=$[ot].texture}return F}function Q(R,E,F){return Math.floor(Math.floor(R/F)/E)}function Ft(R,E,F,j){let ot=R.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,F,j,E.data);else{ot.sort((W,ft)=>W.start-ft.start);let gt=0;for(let W=1;W<ot.length;W++){let ft=ot[gt],lt=ot[W],wt=ft.start+ft.count,bt=Q(lt.start,E.width,4),Et=Q(ft.start,E.width,4);lt.start<=wt+1&&bt===Et&&Q(lt.start+lt.count-1,E.width,4)===bt?ft.count=Math.max(ft.count,lt.start+lt.count-ft.start):(++gt,ot[gt]=lt)}ot.length=gt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),ht=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let W=0,ft=ot.length;W<ft;W++){let lt=ot[W],wt=Math.floor(lt.start/4),bt=Math.ceil(lt.count/4),Et=wt%E.width,Gt=Math.floor(wt/E.width),se=bt,yt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(i.TEXTURE_2D,0,Et,Gt,se,yt,F,j,E.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function Dt(R,E,F){let j=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=i.TEXTURE_3D);let $=vt(R,E),ot=E.source;e.bindTexture(j,R.__webglTexture,i.TEXTURE0+F);let gt=n.get(ot);if(ot.version!==gt.__version||$===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let yt=ae.getPrimaries(ae.workingColorSpace),Zt=E.colorSpace===ti?null:ae.getPrimaries(E.colorSpace),ie=E.colorSpace===ti||yt===Zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ht=y(E.image,!1,s.maxTextureSize);ht=Rt(E,ht);let Mt=r.convert(E.format,E.colorSpace),W=r.convert(E.type),ft=w(E.internalFormat,Mt,W,E.normalized,E.colorSpace,E.isVideoTexture);Ct(j,E);let lt,wt=E.mipmaps,bt=E.isVideoTexture!==!0,Et=gt.__version===void 0||$===!0,Gt=ot.dataReady,se=S(E,ht);if(E.isDepthTexture)ft=g(E.format===$n,E.type),Et&&(bt?e.texStorage2D(i.TEXTURE_2D,1,ft,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,ft,ht.width,ht.height,0,Mt,W,null));else if(E.isDataTexture)if(wt.length>0){bt&&Et&&e.texStorage2D(i.TEXTURE_2D,se,ft,wt[0].width,wt[0].height);for(let yt=0,Zt=wt.length;yt<Zt;yt++)lt=wt[yt],bt?Gt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,lt.width,lt.height,Mt,W,lt.data):e.texImage2D(i.TEXTURE_2D,yt,ft,lt.width,lt.height,0,Mt,W,lt.data);E.generateMipmaps=!1}else bt?(Et&&e.texStorage2D(i.TEXTURE_2D,se,ft,ht.width,ht.height),Gt&&Ft(E,ht,Mt,W)):e.texImage2D(i.TEXTURE_2D,0,ft,ht.width,ht.height,0,Mt,W,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){bt&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,se,ft,wt[0].width,wt[0].height,ht.depth);for(let yt=0,Zt=wt.length;yt<Zt;yt++)if(lt=wt[yt],E.format!==Un)if(Mt!==null)if(bt){if(Gt)if(E.layerUpdates.size>0){let ie=Bc(lt.width,lt.height,E.format,E.type);for(let It of E.layerUpdates){let _e=lt.data.subarray(It*ie/lt.data.BYTES_PER_ELEMENT,(It+1)*ie/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,It,lt.width,lt.height,1,Mt,_e)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,lt.width,lt.height,ht.depth,Mt,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,ft,lt.width,lt.height,ht.depth,0,lt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bt?Gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,lt.width,lt.height,ht.depth,Mt,W,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,ft,lt.width,lt.height,ht.depth,0,Mt,W,lt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{bt&&Et&&e.texStorage2D(i.TEXTURE_2D,se,ft,wt[0].width,wt[0].height);for(let yt=0,Zt=wt.length;yt<Zt;yt++)lt=wt[yt],E.format!==Un?Mt!==null?bt?Gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,lt.width,lt.height,Mt,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,ft,lt.width,lt.height,0,lt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?Gt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,lt.width,lt.height,Mt,W,lt.data):e.texImage2D(i.TEXTURE_2D,yt,ft,lt.width,lt.height,0,Mt,W,lt.data)}else if(E.isDataArrayTexture)if(bt){if(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,se,ft,ht.width,ht.height,ht.depth),Gt)if(E.layerUpdates.size>0){let yt=Bc(ht.width,ht.height,E.format,E.type);for(let Zt of E.layerUpdates){let ie=ht.data.subarray(Zt*yt/ht.data.BYTES_PER_ELEMENT,(Zt+1)*yt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Zt,ht.width,ht.height,1,Mt,W,ie)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Mt,W,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,ht.width,ht.height,ht.depth,0,Mt,W,ht.data);else if(E.isData3DTexture)bt?(Et&&e.texStorage3D(i.TEXTURE_3D,se,ft,ht.width,ht.height,ht.depth),Gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Mt,W,ht.data)):e.texImage3D(i.TEXTURE_3D,0,ft,ht.width,ht.height,ht.depth,0,Mt,W,ht.data);else if(E.isFramebufferTexture){if(Et)if(bt)e.texStorage2D(i.TEXTURE_2D,se,ft,ht.width,ht.height);else{let yt=ht.width,Zt=ht.height;for(let ie=0;ie<se;ie++)e.texImage2D(i.TEXTURE_2D,ie,ft,yt,Zt,0,Mt,W,null),yt>>=1,Zt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let yt=i.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),ht.parentNode!==yt){yt.appendChild(ht),f.add(E),yt.onpaint=Zt=>{let ie=Zt.changedElements;for(let It of f)ie.includes(It.image)&&(It.needsUpdate=!0)},yt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ht);else{let ie=i.RGBA,It=i.RGBA,_e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ie,It,_e,ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(bt&&Et){let yt=st(wt[0]);e.texStorage2D(i.TEXTURE_2D,se,ft,yt.width,yt.height)}for(let yt=0,Zt=wt.length;yt<Zt;yt++)lt=wt[yt],bt?Gt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Mt,W,lt):e.texImage2D(i.TEXTURE_2D,yt,ft,Mt,W,lt);E.generateMipmaps=!1}else if(bt){if(Et){let yt=st(ht);e.texStorage2D(i.TEXTURE_2D,se,ft,yt.width,yt.height)}Gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,W,ht)}else e.texImage2D(i.TEXTURE_2D,0,ft,Mt,W,ht);M(E)&&E.mipmapsAutoUpdate===!0&&x(j),gt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Yt(R,E,F){if(E.image.length!==6)return;let j=vt(R,E),$=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);let ot=n.get($);if($.version!==ot.__version||j===!0){e.activeTexture(i.TEXTURE0+F);let gt=ae.getPrimaries(ae.workingColorSpace),it=E.colorSpace===ti?null:ae.getPrimaries(E.colorSpace),ht=E.colorSpace===ti||gt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Mt=E.isCompressedTexture||E.image[0].isCompressedTexture,W=E.image[0]&&E.image[0].isDataTexture,ft=[];for(let It=0;It<6;It++)!Mt&&!W?ft[It]=y(E.image[It],!0,s.maxCubemapSize):ft[It]=W?E.image[It].image:E.image[It],ft[It]=Rt(E,ft[It]);let lt=ft[0],wt=r.convert(E.format,E.colorSpace),bt=r.convert(E.type),Et=w(E.internalFormat,wt,bt,E.normalized,E.colorSpace),Gt=E.isVideoTexture!==!0,se=ot.__version===void 0||j===!0,yt=$.dataReady,Zt=S(E,lt);Ct(i.TEXTURE_CUBE_MAP,E);let ie;if(E.isDepthTexture){if(Et=g(E.format===$n,E.type),se)if(Gt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Et,lt.width,lt.height);else for(let It=0;It<6;It++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Et,lt.width,lt.height,0,wt,bt,null)}else if(Mt){Gt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,Et,lt.width,lt.height);for(let It=0;It<6;It++){ie=ft[It].mipmaps;for(let _e=0;_e<ie.length;_e++){let ke=ie[_e];E.format!==Un?wt!==null?Gt?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e,0,0,ke.width,ke.height,wt,ke.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e,Et,ke.width,ke.height,0,ke.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e,0,0,ke.width,ke.height,wt,bt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e,Et,ke.width,ke.height,0,wt,bt,ke.data)}}}else{if(ie=E.mipmaps,Gt&&se){ie.length>0&&Zt++;let It=st(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,Et,It.width,It.height)}for(let It=0;It<6;It++)if(W){Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,ft[It].width,ft[It].height,wt,bt,ft[It].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Et,ft[It].width,ft[It].height,0,wt,bt,ft[It].data);for(let _e=0;_e<ie.length;_e++){let ri=ie[_e].image[It].image;Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e+1,0,0,ri.width,ri.height,wt,bt,ri.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e+1,Et,ri.width,ri.height,0,wt,bt,ri.data)}}else{Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,wt,bt,ft[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Et,wt,bt,ft[It]);for(let _e=0;_e<ie.length;_e++){let ke=ie[_e];Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e+1,0,0,wt,bt,ke.image[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e+1,Et,wt,bt,ke.image[It])}}}M(E)&&E.mipmapsAutoUpdate===!0&&x(i.TEXTURE_CUBE_MAP),ot.__version=$.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Wt(R,E,F,j,$,ot){let gt=r.convert(F.format,F.colorSpace),it=r.convert(F.type),ht=w(F.internalFormat,gt,it,F.normalized,F.colorSpace),Mt=n.get(E),W=n.get(F);if(W.__renderTarget=E,!Mt.__hasExternalTextures){let ft=Math.max(1,E.width>>ot),lt=Math.max(1,E.height>>ot);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,ot,ht,ft,lt,E.depth,0,gt,it,null):e.texImage2D($,ot,ht,ft,lt,0,gt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ct(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,W.__webglTexture,0,Jt(E)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,$,W.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(R,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){let j=E.depthTexture,$=j&&j.isDepthTexture?j.type:null,ot=g(E.stencilBuffer,$),gt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ct(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(E),ot,E.width,E.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(E),ot,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ot,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,R)}else{let j=E.textures;for(let $=0;$<j.length;$++){let ot=j[$],gt=r.convert(ot.format,ot.colorSpace),it=r.convert(ot.type),ht=w(ot.internalFormat,gt,it,ot.normalized,ot.colorSpace);ct(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(E),ht,E.width,E.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(E),ht,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ht,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(R,E,F){let j=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(E.depthTexture);$.__renderTarget=E;let ot=j?E.depthTexture.image[0]:E.depthTexture.image;(!$.__webglTexture||ot.width!==E.width||ot.height!==E.height)&&(ot.width=E.width,ot.height=E.height,E.depthTexture.needsUpdate=!0),j?at(E.depthTexture,0):I(E.depthTexture,0);let gt=$.__webglTexture,it=Jt(E),ht=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Mt=E.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Jn)ct(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,ht,gt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,ht,gt,0);else if(E.depthTexture.format===$n)ct(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,ht,gt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,ht,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(R){let E=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){let $=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),E.__depthDisposeCallback=$}E.__boundDepthTexture=j}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(F)for(let j=0;j<6;j++)Qt(E.__webglFramebuffer[j],R,j);else R.texture.mipmaps.length>0?Qt(E.__webglFramebuffer[0],R,0):Qt(E.__webglFramebuffer,R,0);else if(F){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=i.createRenderbuffer(),Lt(E.__webglDepthbuffer[j],R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ot)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Lt(E.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(R,E,F){let j=n.get(R);E!==void 0&&Wt(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ee(R)}function Se(R){let E=R.texture,F=n.get(R),j=n.get(E);R.addEventListener("dispose",D),P(R);let $=R.textures,ot=R.isWebGLCubeRenderTarget===!0,gt=$.length>1;if(gt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=E.version,o.memory.textures++),ot){F.__webglFramebuffer=[];for(let it=0;it<6;it++)if(E.mipmaps.length>0){F.__webglFramebuffer[it]=[];for(let ht=0;ht<E.mipmaps.length;ht++)F.__webglFramebuffer[it][ht]=i.createFramebuffer()}else F.__webglFramebuffer[it]=i.createFramebuffer()}else{if(E.mipmaps.length>0){F.__webglFramebuffer=[];for(let it=0;it<E.mipmaps.length;it++)F.__webglFramebuffer[it]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(gt)for(let it=0,ht=$.length;it<ht;it++){let Mt=n.get($[it]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ct(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let it=0;it<$.length;it++){let ht=$[it];F.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[it]);let Mt=r.convert(ht.format,ht.colorSpace),W=r.convert(ht.type),ft=w(ht.internalFormat,Mt,W,ht.normalized,ht.colorSpace,R.isXRRenderTarget===!0),lt=Jt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,ft,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,F.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,E);for(let it=0;it<6;it++)if(E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)Wt(F.__webglFramebuffer[it][ht],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ht);else Wt(F.__webglFramebuffer[it],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);M(E)?x(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let it=0,ht=$.length;it<ht;it++){let Mt=$[it],W=n.get(Mt),ft=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,W.__webglTexture),Ct(ft,Mt),Wt(F.__webglFramebuffer,R,Mt,i.COLOR_ATTACHMENT0+it,ft,0),M(Mt)&&x(ft)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(it=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,j.__webglTexture),Ct(it,E),E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)Wt(F.__webglFramebuffer[ht],R,E,i.COLOR_ATTACHMENT0,it,ht);else Wt(F.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,it,0);M(E)?x(it):E.mipmaps.length>0&&i.texParameteri(it,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&ee(R)}function J(R){let E=R.textures;for(let F=0,j=E.length;F<j;F++){let $=E[F];if(M($)&&$.mipmapsAutoUpdate===!0){let ot=b(R),gt=n.get($).__webglTexture;e.bindTexture(ot,gt),x(ot),e.unbindTexture()}}}let q=[];function St(R){if(R.samples>0){if(ct(R)===!1){let E=R.textures,F=R.width,j=R.height,$=i.COLOR_BUFFER_BIT,ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(R),it=E.length>1;if(it)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Mt]);let W=n.get(E[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,W,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,$,i.NEAREST),l===!0&&(q.length=0,q.push(i.COLOR_ATTACHMENT0+Mt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&q.push(ot),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Mt]);let W=n.get(E[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,W,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Jt(R){return Math.min(s.maxSamples,R.samples)}function ct(R){let E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ne(R){let E=o.render.frame;c.get(R)!==E&&(c.set(R,E),R.update())}function Rt(R,E){let F=R.colorSpace,j=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Ks&&F!==ti&&(ae.getTransfer(F)===me?(j!==Un||$!==dn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",F)),E}function st(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.getTextureUnits=k,this.setTextureUnits=G,this.setTexture2D=I,this.setTexture2DArray=nt,this.setTexture3D=dt,this.setTextureCube=at,this.rebindTextures=Ae,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Wt,this.useMultisampledRTT=ct,this.dispose=Z}function F_(i,t){function e(n,s=ti){let r,o=ae.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vc)return i.BYTE;if(n===Sc)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===qe)return i.HALF_FLOAT;if(n===Ec)return i.ALPHA;if(n===Tc)return i.RGB;if(n===Un)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===wa)return i.RED;if(n===Ea)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===Aa)return i.RGBA_INTEGER;if(n===Pr||n===Ur||n===Nr||n===Fr)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Ia||n===Pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Na||n===Fa||n===Da||n===La||n===Dr||n===Ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Na)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Da)return r.COMPRESSED_R11_EAC;if(n===La)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Dr)return r.COMPRESSED_RG11_EAC;if(n===Ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ka||n===Oa||n===Va||n===za||n===Ga||n===Ha||n===Wa||n===Za||n===Ya||n===Xa||n===Ja||n===qa||n===ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===$a||n===tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ka)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===nl||n===Lr||n===il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===el)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`,Yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:D_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xc=class extends Dn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,f=null,u=null,d=null,m=null,v=typeof XRWebGLBinding<"u",_=new Yc,p={},y=e.getContextAttributes(),M=null,x=null,b=[],w=[],g=new Pt,S=null,P=null,T=new sn;T.viewport=new we;let U=new sn;U.viewport=new we;let D=[T,U],L=new xa,N=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let I=b[B];return I===void 0&&(I=new gs,b[B]=I),I.getTargetRaySpace()},this.getControllerGrip=function(B){let I=b[B];return I===void 0&&(I=new gs,b[B]=I),I.getGripSpace()},this.getHand=function(B){let I=b[B];return I===void 0&&(I=new gs,b[B]=I),I.getHandSpace()};function H(B){let I=w.indexOf(B.inputSource);if(I===-1)return;let nt=b[I];nt!==void 0&&(nt.update(B.inputSource,B.frame,h||o),nt.dispatchEvent({type:B.type,data:B.inputSource}))}function O(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",z);for(let B=0;B<b.length;B++){let I=w[B];I!==null&&(w[B]=null,b[B].disconnect(I))}N=null,Z=null,_.reset();for(let B in p)delete p[B];if(t.setRenderTarget(M),d=null,u=null,f=null,s=null,x=null,K.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(g.width,g.height,!1),P!==null){let B=P.camera;B.fov=P.fov,B.zoom=P.zoom,B.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(B){h=B},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",O),s.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(g),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,dt=null,at=null;y.depth&&(at=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=y.stencil?$n:Jn,dt=y.stencil?Hi:Pn);let ut={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Ne(u.textureWidth,u.textureHeight,{format:Un,type:dn,depthTexture:new qn(u.textureWidth,u.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let nt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ne(d.framebufferWidth,d.framebufferHeight,{format:Un,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),K.setContext(s),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(B){for(let I=0;I<B.removed.length;I++){let nt=B.removed[I],dt=w.indexOf(nt);dt>=0&&(w[dt]=null,b[dt].disconnect(nt))}for(let I=0;I<B.added.length;I++){let nt=B.added[I],dt=w.indexOf(nt);if(dt===-1){for(let ut=0;ut<b.length;ut++)if(ut>=w.length){w.push(nt),dt=ut;break}else if(w[ut]===null){w[ut]=nt,dt=ut;break}if(dt===-1)break}let at=b[dt];at&&at.connect(nt)}}function C(B,I){I===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(I.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let I=B.near,nt=B.far;_.texture!==null&&(_.depthNear>0&&(I=_.depthNear),_.depthFar>0&&(nt=_.depthFar)),L.near=U.near=T.near=I,L.far=U.far=T.far=nt,(N!==L.near||Z!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,Z=L.far),L.layers.mask=B.layers.mask|6,T.layers.mask=L.layers.mask&-5,U.layers.mask=L.layers.mask&-3;let dt=B.parent,at=L.cameras;C(L,dt);for(let ut=0;ut<at.length;ut++)C(at[ut],dt);L.projectionMatrix.copy(T.projectionMatrix),L.projectionMatrixInverse.copy(T.projectionMatrixInverse),P===null&&B.isPerspectiveCamera&&(P={camera:B,fov:B.fov,zoom:B.zoom}),Y(B,L,dt)};function Y(B,I,nt){nt===null?B.matrix.copy(I.matrixWorld):(B.matrix.copy(nt.matrixWorld),B.matrix.invert(),B.matrix.multiply(I.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(I.projectionMatrix),B.projectionMatrixInverse.copy(I.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=zo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(L)},this.getCameraTexture=function(B){return p[B]};let k=null;function G(B,I){if(c=I.getViewerPose(h||o),m=I,c!==null){let nt=c.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let dt=!1;nt.length!==L.cameras.length&&(L.cameras.length=0,dt=!0);for(let pt=0;pt<nt.length;pt++){let Ct=nt[pt],vt=null;if(d!==null)vt=d.getViewport(Ct);else{let Ft=f.getViewSubImage(u,Ct);vt=Ft.viewport,pt===0&&(t.setRenderTargetTextures(x,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(x))}let Q=D[pt];Q===void 0&&(Q=new sn,Q.layers.enable(pt),Q.viewport=new we,D[pt]=Q),Q.matrix.fromArray(Ct.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ct.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(vt.x,vt.y,vt.width,vt.height),pt===0&&(L.matrix.copy(Q.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),dt===!0&&L.cameras.push(Q)}let at=s.enabledFeatures;if(at&&at.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let pt=f.getDepthInformation(nt[0]);pt&&pt.isValid&&pt.texture&&_.init(pt,s.renderState)}if(at&&at.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let pt=0;pt<nt.length;pt++){let Ct=nt[pt].camera;if(Ct){let vt=p[Ct];vt||(vt=new fr,p[Ct]=vt);let Q=f.getCameraImage(Ct);vt.sourceTexture=Q}}}}for(let nt=0;nt<b.length;nt++){let dt=w[nt],at=b[nt];dt!==null&&at!==void 0&&at.update(dt,I,h||o)}k&&k(B,I),I.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:I}),m=null}let K=new gd;K.setAnimationLoop(G),this.setAnimationLoop=function(B){k=B},this.dispose=function(){}}},B_=new Ht,Td=new $t;Td.set(-1,0,0,0,1,0,0,0,1);function k_(i,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Fc(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,y,M,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(_,p):p.isMeshLambertMaterial?(r(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(_,p),f(_,p)):p.isMeshPhongMaterial?(r(_,p),c(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(_,p),u(_,p),p.isMeshPhysicalMaterial&&d(_,p,x)):p.isMeshMatcapMaterial?(r(_,p),m(_,p)):p.isMeshDepthMaterial?r(_,p):p.isMeshDistanceMaterial?(r(_,p),v(_,p)):p.isMeshNormalMaterial?r(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,y,M):p.isSpriteMaterial?h(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===De&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===De&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let y=t.get(p),M=y.envMap,x=y.envMapRotation;M&&(_.envMap.value=M,_.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Td),_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,y,M){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*y,_.scale.value=M*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function f(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function u(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function d(_,p,y){_.ior.value=p.ior,p.diffuseRoughness>0&&(_.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.retroreflectivity>0&&(_.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function v(_,p){let y=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O_(i,t,e,n){let s={},r={};function o(y,M){let x=M.program;n.uniformBlockBinding(y,x,s[y.id])}function a(y,M){let x=s[y.id];x===void 0&&(m(y),x=l(y),s[y.id]=x,y.addEventListener("dispose",_));let b=M.program;n.updateUBOMapping(y,b);let w=t.render.frame;r[y.id]!==w&&(h(y),r[y.id]=w)}function l(y){let M=i.createBuffer(),x=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,x,b),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function h(y){let M=s[y.id],x=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,g=x.length;w<g;w++){let S=x[w];if(Array.isArray(S))for(let P=0,T=S.length;P<T;P++)c(S[P],w,P,b);else c(S,w,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function c(y,M,x,b){if(u(y,M,x,b)===!0){let w=y.__offset,g=y.value;if(Array.isArray(g)){let S=0;for(let P=0;P<g.length;P++){let T=g[P],U=v(T,!0);f(T,y.__data,S),S+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,y.__data)}}function f(y,M,x){typeof y=="number"||typeof y=="boolean"?M[x]=y:y.isMatrix3?(M[x]=y.elements[0],M[x+1]=y.elements[1],M[x+2]=y.elements[2],M[x+3]=0,M[x+4]=y.elements[3],M[x+5]=y.elements[4],M[x+6]=y.elements[5],M[x+7]=0,M[x+8]=y.elements[6],M[x+9]=y.elements[7],M[x+10]=y.elements[8],M[x+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-x),x):y.toArray(M,x)}function u(y,M,x,b){let w=y.value,g=M+"_"+x;if(Array.isArray(w)){b[g]===void 0&&(b[g]=[]);let S=b[g],P=!1;for(let T=0;T<w.length;T++)d(w[T],S,T)===!0&&(P=!0);return P}return d(w,b,g)}function d(y,M,x){if(M[x]===void 0)return typeof y=="number"||typeof y=="boolean"?M[x]=y:ArrayBuffer.isView(y)?M[x]=y.slice():M[x]=y.clone(),!0;{let b=M[x];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return M[x]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(b.equals(y)===!1)return b.copy(y),!0}}return!1}function m(y){let M=y.uniforms,x=0,b=16;for(let g=0,S=M.length;g<S;g++){let P=Array.isArray(M[g])?M[g]:[M[g]];for(let T=0,U=P.length;T<U;T++){let D=P[T],L=Array.isArray(D.value)?D.value:[D.value],N=Array.isArray(M[g])||Array.isArray(D.value),Z=x;for(let O=0,z=L.length;O<z;O++){let C=L[O],Y=v(C,N),k=x%b,G=k%Y.boundary,K=k+G;x+=G,K!==0&&b-K<Y.storage&&(x+=b-K),O===0&&(Z=x),x+=Y.storage}let H=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new H((x-Z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=Z}}let w=x%b;return w>0&&(x+=b-w),y.__size=x,y.__cache={},this}function v(y,M){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=16,x.storage=48):y.isMatrix4?(x.boundary=16,x.storage=64):y.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(x.boundary=16,x.storage=y.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function _(y){let M=y.target;M.removeEventListener("dispose",_),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:p}}var V_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function z_(){return kn===null&&(kn=new ar(V_,16,16,yi,qe),kn.name="DFG_LUT",kn.minFilter=on,kn.magFilter=on,kn.wrapS=Fn,kn.wrapT=Fn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var al=class{constructor(t={}){let{canvas:e=zu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=dn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let v=d,_=new Set([Aa,Ta,Ea]),p=new Set([dn,Pn,Es,Hi,Sa,ba]),y=new Uint32Array(4),M=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},b=null,w=null,g=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,U=!1,D=null,L=null,N=null,Z=null;this._outputColorSpace=ze;let H=0,O=0,z=null,C=-1,Y=null,k=new we,G=new we,K=null,B=new xt(0),I=0,nt=e.width,dt=e.height,at=1,ut=null,_t=null,pt=new we(0,0,nt,dt),Ct=new we(0,0,nt,dt),vt=!1,Q=new pi,Ft=new Zo,Dt=!1,Yt=!1,Wt=new Ht,Lt=new V,Qt=new we,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Se(){return z===null?at:1}let J=n;function q(A,X){return e.getContext(A,X)}let St,Jt,ct,ne,Rt,st,R,E,F,j,$,ot,gt,it,ht,Mt,W,ft,lt,wt,bt,Et,Gt;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Zt,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",It,!1),J===null){let X="webgl2";if(J=q(X,A),J===null)throw q(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(A){throw e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Kt("WebGLRenderer: "+A.message),A}function se(){St=new K0(J),St.init(),bt=new F_(J,St),Jt=new z0(J,St,t,bt),ct=new U_(J,St),Jt.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),L=J.createFramebuffer(),N=J.createFramebuffer(),Z=J.createFramebuffer(),ne=new ex(J),Rt=new __,st=new N_(J,St,ct,Rt,Jt,bt,ne),R=new Q0(T),E=new im(J),Et=new O0(J,E),F=new $0(J,E,ne,Et),j=new ix(J,F,E,Et,ne),ft=new nx(J,Jt,st),ht=new G0(Rt),$=new x_(T,R,St,Jt,Et,ht),ot=new k_(T,Rt),gt=new M_,it=new T_(St),W=new k0(T,R,ct,j,m,l),Mt=new P_(T,j,Jt),Gt=new O_(J,ne,Jt,ct),lt=new V0(J,St,ne),wt=new tx(J,St,ne),ne.programs=$.programs,T.capabilities=Jt,T.extensions=St,T.properties=Rt,T.renderLists=gt,T.shadowMap=Mt,T.state=ct,T.info=ne}v!==dn&&(P=new rx(v,e.width,e.height,a,s,r));let yt=new Xc(T,J);this.xr=yt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(A){A!==void 0&&(at=A,this.setSize(nt,dt,!1))},this.getSize=function(A){return A.set(nt,dt)},this.setSize=function(A,X,rt=!0){if(yt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=A,dt=X,e.width=Math.floor(A*at),e.height=Math.floor(X*at),rt===!0&&(e.style.width=A+"px",e.style.height=X+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(nt*at,dt*at).floor()},this.setDrawingBufferSize=function(A,X,rt){nt=A,dt=X,at=rt,e.width=Math.floor(A*rt),e.height=Math.floor(X*rt),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(v===dn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(pt)},this.setViewport=function(A,X,rt,tt){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,X,rt,tt),ct.viewport(k.copy(pt).multiplyScalar(Se()).round())},this.getScissor=function(A){return A.copy(Ct)},this.setScissor=function(A,X,rt,tt){A.isVector4?Ct.set(A.x,A.y,A.z,A.w):Ct.set(A,X,rt,tt),ct.scissor(G.copy(Ct).multiplyScalar(Se()).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(A){ct.setScissorTest(vt=A)},this.setOpaqueSort=function(A){ut=A},this.setTransparentSort=function(A){_t=A},this.getClearColor=function(A){return A.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,rt=!0){let tt=0;if(A){let et=!1;if(z!==null){let At=z.texture.format;et=_.has(At)}if(et){let At=z.texture.type,Bt=p.has(At),Tt=W.getClearColor(),Nt=W.getClearAlpha(),zt=Tt.r,te=Tt.g,he=Tt.b;Bt?(y[0]=zt,y[1]=te,y[2]=he,y[3]=Nt,J.clearBufferuiv(J.COLOR,0,y)):(M[0]=zt,M[1]=te,M[2]=he,M[3]=Nt,J.clearBufferiv(J.COLOR,0,M))}else tt|=J.COLOR_BUFFER_BIT}X&&(tt|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(tt|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&J.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",It,!1),W.dispose(),gt.dispose(),it.dispose(),st.dispose(),Rt.dispose(),R.dispose(),j.dispose(),F.dispose(),Et.dispose(),Gt.dispose(),$.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",_h),yt.removeEventListener("sessionend",yh),Ti.stop()};function Zt(A){A.preventDefault(),Pc("WebGLRenderer: Context Lost."),U=!0}function ie(){Pc("WebGLRenderer: Context Restored."),U=!1;let A=ne.autoReset,X=Mt.enabled,rt=Mt.autoUpdate,tt=Mt.needsUpdate,et=Mt.type;se(),ne.autoReset=A,Mt.enabled=X,Mt.autoUpdate=rt,Mt.needsUpdate=tt,Mt.type=et}function It(A){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _e(A){let X=A.target;X.removeEventListener("dispose",_e),ke(X)}function ke(A){ri(A),Rt.remove(A)}function ri(A){let X=Rt.get(A).programs;X!==void 0&&(X.forEach(function(rt){$.releaseProgram(rt)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,rt,tt,et,At){X===null&&(X=ee);let Bt=et.isMesh&&et.matrixWorld.determinantAffine()<0,Tt=jf(A,X,rt,tt,et);ct.setMaterial(tt,Bt);let Nt=rt.index,zt=1;if(tt.wireframe===!0){if(Nt=F.getWireframeAttribute(rt),Nt===void 0)return;zt=2}let te=rt.drawRange,he=rt.attributes.position,kt=te.start*zt,ue=(te.start+te.count)*zt;At!==null&&(kt=Math.max(kt,At.start*zt),ue=Math.min(ue,(At.start+At.count)*zt)),Nt!==null?(kt=Math.max(kt,0),ue=Math.min(ue,Nt.count)):he!=null&&(kt=Math.max(kt,0),ue=Math.min(ue,he.count));let Ie=ue-kt;if(Ie<0||Ie===1/0)return;Et.setup(et,tt,Tt,rt,Nt);let Me,ye=lt;if(Nt!==null&&(Me=E.get(Nt),ye=wt,ye.setIndex(Me)),et.isMesh)tt.wireframe===!0?(ct.setLineWidth(tt.wireframeLinewidth*Se()),ye.setMode(J.LINES)):ye.setMode(J.TRIANGLES);else if(et.isLine){let je=tt.linewidth;je===void 0&&(je=1),ct.setLineWidth(je*Se()),et.isLineSegments?ye.setMode(J.LINES):et.isLineLoop?ye.setMode(J.LINE_LOOP):ye.setMode(J.LINE_STRIP)}else et.isPoints?ye.setMode(J.POINTS):et.isSprite&&ye.setMode(J.TRIANGLES);if(et.isBatchedMesh)if(St.get("WEBGL_multi_draw"))ye.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let je=et._multiDrawStarts,Ot=et._multiDrawCounts,nn=et._multiDrawCount,xe=Nt?E.get(Nt).bytesPerElement:1,Ai=Rt.get(tt).currentProgram.getUniforms();for(let Qe=0;Qe<nn;Qe++)Ai.setValue(J,"_gl_DrawID",Qe),ye.render(je[Qe]/xe,Ot[Qe])}else if(et.isInstancedMesh)ye.renderInstances(kt,Ie,et.count);else if(rt.isInstancedBufferGeometry){let je=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ot=Math.min(rt.instanceCount,je);ye.renderInstances(kt,Ie,Ot)}else ye.render(kt,Ie)};function xh(A,X,rt,tt){D!==null&&A.isNodeMaterial&&D.setObject(tt,A),Dt===!0&&ht.setState(A,rt,!1),A.transparent===!0&&A.side===ge&&A.forceSinglePass===!1?(A.side=De,A.needsUpdate=!0,Os(A,X,tt),A.side=_i,A.needsUpdate=!0,Os(A,X,tt),A.side=ge):Os(A,X,tt)}this.compile=function(A,X,rt=null){rt===null&&(rt=A),D!==null&&D.renderStart(A,X,rt),w=it.get(rt),w.init(X),S.push(w),rt.traverseVisible(function(et){et.isLight&&et.layers.test(X.layers)&&(w.pushLight(et),et.castShadow&&w.pushShadow(et))}),A!==rt&&A.traverseVisible(function(et){et.isLight&&et.layers.test(X.layers)&&(w.pushLight(et),et.castShadow&&w.pushShadow(et))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),Yt=this.localClippingEnabled,Dt=ht.init(this.clippingPlanes,Yt),Dt===!0&&ht.setGlobalState(this.clippingPlanes,X),D!==null&&Mt.render(w.state.shadowsArray,rt,X);let tt=new Set;return A.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let At=et.material;if(At)if(Array.isArray(At))for(let Bt=0;Bt<At.length;Bt++){let Tt=At[Bt];xh(Tt,rt,X,et),tt.add(Tt)}else xh(At,rt,X,et),tt.add(At)}),w=S.pop(),D!==null&&D.renderEnd(),tt},this.compileAsync=function(A,X,rt=null){let tt=this.compile(A,X,rt);return new Promise(et=>{function At(){if(tt.forEach(function(Bt){let Nt=Rt.get(Bt).currentProgram;(Nt===void 0||Nt.isReady())&&tt.delete(Bt)}),tt.size===0){et(A);return}setTimeout(At,10)}St.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Il=null;function Jf(A){Il&&Il(A)}function _h(){Ti.stop()}function yh(){Ti.start()}let Ti=new gd;Ti.setAnimationLoop(Jf),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){Il=A,yt.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},yt.addEventListener("sessionstart",_h),yt.addEventListener("sessionend",yh),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;D!==null&&D.renderStart(A,X);let rt=yt.enabled===!0&&yt.isPresenting===!0,tt=P!==null&&(z===null||rt)&&P.begin(T,z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(X),X=yt.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,X,z),w=it.get(A,S.length),w.init(X),w.state.textureUnits=st.getTextureUnits(),S.push(w),Wt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?Ft.setFromArrayCamera(X):Q.setFromProjectionMatrix(Wt,Mn,X.reversedDepth),Yt=this.localClippingEnabled,Dt=ht.init(this.clippingPlanes,Yt),b=gt.get(A,g.length),b.init(),g.push(b),this.info.render.frame++,yt.enabled===!0&&yt.isPresenting===!0){let Bt=T.xr.getDepthSensingMesh();Bt!==null&&Pl(Bt,X,-1/0,T.sortObjects)}Pl(A,X,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(w.state.lightsArray),T.sortObjects===!0&&b.sort(ut,_t),Ae=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,Ae&&W.addToRenderList(b,A),this.info.autoReset===!0&&this.info.reset(),Dt===!0&&ht.beginShadows();let et=w.state.shadowsArray;if(Mt.render(et,A,X),Dt===!0&&ht.endShadows(),(tt&&P.hasRenderPass())===!1){let Bt=b.opaque,Tt=b.transmissive;if(w.setupLights(),X.isArrayCamera){let Nt=X.cameras;if(Tt.length>0)for(let zt=0,te=Nt.length;zt<te;zt++){let he=Nt[zt];vh(Bt,Tt,A,he)}Ae&&W.render(A);for(let zt=0,te=Nt.length;zt<te;zt++){let he=Nt[zt];Mh(b,A,he,he.viewport)}}else Tt.length>0&&vh(Bt,Tt,A,X),Ae&&W.render(A),Mh(b,A,X)}z!==null&&O===0&&(st.updateMultisampleRenderTarget(z),st.updateRenderTargetMipmap(z)),tt&&P.end(T),A.isScene===!0&&A.onAfterRender(T,A,X),Et.resetDefaultState(),C=-1,Y=null,S.pop(),S.length>0?(w=S[S.length-1],st.setTextureUnits(w.state.textureUnits),Dt===!0&&ht.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?b=g[g.length-1]:b=null,D!==null&&D.renderEnd()};function Pl(A,X,rt,tt){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){let Bt=X.isArrayCamera?Ft:Q;if(!A.frustumCulled||A.intersectsFrustum(Bt)){tt&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Wt);let Tt=j.update(A),Nt=A.material;Nt.visible&&b.push(A,Tt,Nt,rt,Qt.z,null,X)}}else if(A.isMesh||A.isLine||A.isPoints){let Bt=X.isArrayCamera?Ft:Q;if(!A.frustumCulled||A.intersectsFrustum(Bt)){let Tt=j.update(A),Nt=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Qt.copy(Tt.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(Wt)),Array.isArray(Nt)){let zt=Tt.groups;for(let te=0,he=zt.length;te<he;te++){let kt=zt[te],ue=Nt[kt.materialIndex];ue&&ue.visible&&b.push(A,Tt,ue,rt,Qt.z,kt,X)}}else Nt.visible&&b.push(A,Tt,Nt,rt,Qt.z,null,X)}}}let At=A.children;for(let Bt=0,Tt=At.length;Bt<Tt;Bt++)Pl(At[Bt],X,rt,tt)}function Mh(A,X,rt,tt){let{opaque:et,transmissive:At,transparent:Bt}=A;w.setupLightsView(rt),Dt===!0&&ht.setGlobalState(T.clippingPlanes,rt),tt&&ct.viewport(k.copy(tt)),et.length>0&&eo(et,X,rt),At.length>0&&eo(At,X,rt),Bt.length>0&&eo(Bt,X,rt),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function vh(A,X,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[tt.id]===void 0){let kt=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[tt.id]=new Ne(1,1,{generateMipmaps:!0,type:kt?qe:dn,minFilter:Kn,samples:Math.max(4,Jt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let At=w.state.transmissionRenderTarget[tt.id],Bt=tt.viewport||k;At.setSize(Bt.z*T.transmissionResolutionScale,Bt.w*T.transmissionResolutionScale);let Tt=T.getRenderTarget(),Nt=T.getActiveCubeFace(),zt=T.getActiveMipmapLevel();T.setRenderTarget(At),T.getClearColor(B),I=T.getClearAlpha(),I<1&&T.setClearColor(16777215,.5),T.clear(),Ae&&W.render(rt);let te=T.toneMapping;T.toneMapping=Bn;let he=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),w.setupLightsView(tt),Dt===!0&&ht.setGlobalState(T.clippingPlanes,tt),eo(A,rt,tt),st.updateMultisampleRenderTarget(At),st.updateRenderTargetMipmap(At),St.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ue=0,Ie=X.length;ue<Ie;ue++){let Me=X[ue],{object:ye,geometry:je,material:Ot,group:nn}=Me;if(Ot.side===ge&&ye.layers.test(tt.layers)){let xe=Ot.side;Ot.side=De,Ot.needsUpdate=!0,Sh(ye,rt,tt,je,Ot,nn),Ot.side=xe,Ot.needsUpdate=!0,kt=!0}}kt===!0&&(st.updateMultisampleRenderTarget(At),st.updateRenderTargetMipmap(At))}T.setRenderTarget(Tt,Nt,zt),T.setClearColor(B,I),he!==void 0&&(tt.viewport=he),T.toneMapping=te}function eo(A,X,rt){let tt=X.isScene===!0?X.overrideMaterial:null;for(let et=0,At=A.length;et<At;et++){let Bt=A[et],{object:Tt,geometry:Nt,group:zt}=Bt,te=Bt.material;te.allowOverride===!0&&tt!==null&&(te=tt),Tt.layers.test(rt.layers)&&Sh(Tt,X,rt,Nt,te,zt)}}function Sh(A,X,rt,tt,et,At){D!==null&&et.isNodeMaterial&&D.setObject(A,et),A.onBeforeRender(T,X,rt,tt,et,At),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),et.onBeforeRender(T,X,rt,tt,A,At),et.transparent===!0&&et.side===ge&&et.forceSinglePass===!1?(et.side=De,et.needsUpdate=!0,T.renderBufferDirect(rt,X,tt,et,A,At),et.side=_i,et.needsUpdate=!0,T.renderBufferDirect(rt,X,tt,et,A,At),et.side=ge):T.renderBufferDirect(rt,X,tt,et,A,At),A.onAfterRender(T,X,rt,tt,et,At)}function bh(A){let X=0;for(let rt of A)rt.texture!==null&&X++;return X}function Os(A,X,rt){X.isScene!==!0&&(X=ee);let tt=Rt.get(A),et=w.state.lights,At=w.state.shadowsArray,Bt=et.state.version,Tt=$.getParameters(A,et.state,At,X,rt,w.state.lightProbeGridArray),Nt=$.getProgramCacheKey(Tt),zt=tt.programs;tt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,tt.fog=X.fog;let te=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;tt.envMap=R.get(A.envMap||tt.environment,te),tt.envMapRotation=tt.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",_e),zt=new Map,tt.programs=zt,tt.programVariants=new Map);let he=zt.get(Nt);if(he!==void 0){if(tt.currentProgram===he&&tt.lightsStateVersion===Bt)return Eh(A,Tt),he}else Tt.uniforms=$.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,rt,Tt),A.onBeforeCompile(Tt,T),he=$.acquireProgram(Tt,Nt),zt.set(Nt,he),tt.uniforms=Tt.uniforms;let kt=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=ht.uniform),Eh(A,Tt),tt.needsLights=Kf(A),tt.lightsStateVersion=Bt,tt.needsLights&&(kt.ambientLightColor.value=et.state.ambient,kt.lightProbe.value=et.state.probe,kt.sunLights.value=et.state.sun,kt.sunLightShadows.value=et.state.sunShadow,kt.directionalLights.value=et.state.directional,kt.directionalLightShadows.value=et.state.directionalShadow,kt.spotLights.value=et.state.spot,kt.spotLightShadows.value=et.state.spotShadow,kt.rectAreaLights.value=et.state.rectArea,kt.ltc_1.value=et.state.rectAreaLTC1,kt.ltc_2.value=et.state.rectAreaLTC2,kt.pointLights.value=et.state.point,kt.pointLightShadows.value=et.state.pointShadow,kt.hemisphereLights.value=et.state.hemi,kt.sunShadowMatrix.value=et.state.sunShadowMatrix,kt.sunShadowCascade.value=et.state.sunShadowCascade,kt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,kt.spotLightMatrix.value=et.state.spotLightMatrix,kt.spotLightMap.value=et.state.spotLightMap,kt.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.numLightProbeGrids=bh(w.state.lightProbeGridArray),tt.currentProgram=he,tt.uniformsList=null,he}function qf(A,X,rt,tt,et){let At=Rt.get(A),Bt=At.currentProgram.id+","+tt+","+et,Tt=At.programVariants.get(Bt);return Tt===void 0?(Tt=Os(A,X,rt),At.programVariants.set(Bt,Tt)):(At.currentProgram=Tt,At.uniformsList=null,At.outputColorSpace=tt,At.toneMapping=et),Tt}function wh(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=As.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Eh(A,X){let rt=Rt.get(A);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function jf(A,X,rt,tt,et){X.isScene!==!0&&(X=ee),st.resetTextureUnits();let At=X.fog,Bt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?X.environment:null,Tt=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ae.workingColorSpace,Nt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,zt=R.get(tt.envMap||Bt,Nt),te=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,he=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),kt=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,Ie=!!rt.morphAttributes.color,Me=Bn;tt.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Me=T.toneMapping);let ye=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,je=ye!==void 0?ye.length:0,Ot=Rt.get(tt),nn=w.state.lights;if(Dt===!0&&(Yt===!0||A!==Y)){let Ee=A===Y&&tt.id===C;ht.setState(tt,A,Ee)}let xe=!1,Ai=!1;tt.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==nn.state.version||et.isBatchedMesh&&Ot.batching===!1||!et.isBatchedMesh&&Ot.batching===!0||et.isBatchedMesh&&Ot.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Ot.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Ot.instancing===!1||!et.isInstancedMesh&&Ot.instancing===!0||et.isSkinnedMesh&&Ot.skinning===!1||!et.isSkinnedMesh&&Ot.skinning===!0||et.isInstancedMesh&&Ot.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Ot.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Ot.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Ot.instancingMorph===!1&&et.morphTexture!==null||Ot.envMap!==zt||tt.fog===!0&&Ot.fog!==At||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ht.numPlanes||Ot.numIntersection!==ht.numIntersection)||Ot.vertexAlphas!==te||Ot.vertexTangents!==he||Ot.morphTargets!==kt||Ot.morphNormals!==ue||Ot.morphColors!==Ie||Ot.morphTargetsCount!==je||Ot.numLightProbeGrids!==bh(w.state.lightProbeGridArray)?xe=!0:(Ot.outputColorSpace!==Tt||Ot.toneMapping!==Me)&&(Ai=!0):(xe=!0,Ot.__version=tt.version);let Qe=Ot.currentProgram;(xe===!0||Ai===!0)&&(Qe=Ai===!0?qf(tt,X,et,Tt,Me):Os(tt,X,et),D&&tt.isNodeMaterial&&D.onUpdateProgram(tt,Qe,Ot));let no=!1,oi=!1,Ri=!1,pe=Qe.getUniforms(),Xe=Ot.uniforms;if(ct.useProgram(Qe.program)&&(no=!0,oi=!0,Ri=!0),tt.id!==C&&(C=tt.id,oi=!0),no||Y!==A){ct.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),pe.setValue(J,"projectionMatrix",A.projectionMatrix),pe.setValue(J,"viewMatrix",A.matrixWorldInverse);let Oe=pe.map.cameraPosition;Oe!==void 0&&Oe.setValue(J,Lt.setFromMatrixPosition(A.matrixWorld)),Jt.logarithmicDepthBuffer&&pe.setValue(J,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&pe.setValue(J,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,oi=!0,Ri=!0)}if(Ot.needsLights&&(nn.state.sunShadowMap.length>0&&pe.setValue(J,"sunShadowMap",nn.state.sunShadowMap,st),nn.state.directionalShadowMap.length>0&&pe.setValue(J,"directionalShadowMap",nn.state.directionalShadowMap,st),nn.state.spotShadowMap.length>0&&pe.setValue(J,"spotShadowMap",nn.state.spotShadowMap,st),nn.state.pointShadowMap.length>0&&pe.setValue(J,"pointShadowMap",nn.state.pointShadowMap,st)),et.isSkinnedMesh){pe.setOptional(J,et,"bindMatrix"),pe.setOptional(J,et,"bindMatrixInverse");let Ee=et.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),pe.setValue(J,"boneTexture",Ee.boneTexture,st))}et.isBatchedMesh&&(pe.setOptional(J,et,"batchingTexture"),pe.setValue(J,"batchingTexture",et._matricesTexture,st),pe.setOptional(J,et,"batchingIdTexture"),pe.setValue(J,"batchingIdTexture",et._indirectTexture,st),pe.setOptional(J,et,"batchingColorTexture"),et._colorsTexture!==null&&pe.setValue(J,"batchingColorTexture",et._colorsTexture,st));let En=rt.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&ft.update(et,rt,Qe),(oi||Ot.receiveShadow!==et.receiveShadow)&&(Ot.receiveShadow=et.receiveShadow,pe.setValue(J,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&X.environment!==null&&(Xe.envMapIntensity.value=X.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=z_()),oi){if(pe.setValue(J,"toneMappingExposure",T.toneMappingExposure),Ot.needsLights&&Qf(Xe,Ri),At&&tt.fog===!0&&ot.refreshFogUniforms(Xe,At),ot.refreshMaterialUniforms(Xe,tt,at,dt,w.state.transmissionRenderTarget[A.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let Ee=x,Oe=0;for(let zn of w.state.lightProbeGridArray)zn.texture!==null&&(Ee.textures[Oe]=zn.texture,Ee.min[Oe]=zn.boundingBox.min,Ee.max[Oe]=zn.boundingBox.max,Ee.resolution[Oe]=zn.resolution,Oe++);for(let zn in Ee)Ee[zn].length=Oe;Xe.probesSH.value=Ee.textures,Xe.probesMin.value=Ee.min,Xe.probesMax.value=Ee.max,Xe.probesResolution.value=Ee.resolution}As.upload(J,wh(Ot),Xe,st)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(As.upload(J,wh(Ot),Xe,st),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&pe.setValue(J,"center",et.center),pe.setValue(J,"modelViewMatrix",et.modelViewMatrix),pe.setValue(J,"normalMatrix",et.normalMatrix),pe.setValue(J,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){let Ee=tt.uniformsGroups;for(let Oe=0,zn=Ee.length;Oe<zn;Oe++){let Ah=Ee[Oe];Gt.update(Ah,Qe),Gt.bind(Ah,Qe)}}return Qe}function Qf(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Kf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,X,rt){let tt=Rt.get(A);tt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Rt.get(A.texture).__webglTexture=X,Rt.get(A.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:rt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let rt=Rt.get(A);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,rt=0){z=A,H=X,O=rt;let tt=null,et=!1,At=!1;if(A){let Tt=Rt.get(A);if(Tt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(J.FRAMEBUFFER,Tt.__webglFramebuffer),k.copy(A.viewport),G.copy(A.scissor),K=A.scissorTest,ct.viewport(k),ct.scissor(G),ct.setScissorTest(K),C=-1;return}else if(Tt.__webglFramebuffer===void 0)st.setupRenderTarget(A);else if(Tt.__hasExternalTextures)st.rebindTextures(A,Rt.get(A.texture).__webglTexture,Rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let te=A.depthTexture;if(Tt.__boundDepthTexture!==te){if(te!==null&&Rt.has(te)&&(A.width!==te.image.width||A.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(A)}}let Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);let zt=Rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[X])?tt=zt[X][rt]:tt=zt[X],et=!0):A.samples>0&&st.useMultisampledRTT(A)===!1?tt=Rt.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?tt=zt[rt]:tt=zt,k.copy(A.viewport),G.copy(A.scissor),K=A.scissorTest}else k.copy(pt).multiplyScalar(at).floor(),G.copy(Ct).multiplyScalar(at).floor(),K=vt;if(rt!==0&&(tt=L),ct.bindFramebuffer(J.FRAMEBUFFER,tt)&&ct.drawBuffers(A,tt),ct.viewport(k),ct.scissor(G),ct.setScissorTest(K),et){let Tt=Rt.get(A.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+X,Tt.__webglTexture,rt)}else if(At){let Tt=X;for(let Nt=0;Nt<A.textures.length;Nt++){let zt=Rt.get(A.textures[Nt]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Nt,zt.__webglTexture,rt,Tt)}}else if(A!==null&&rt!==0){let Tt=Rt.get(A.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Tt.__webglTexture,rt)}C=-1};function Th(A){let X=Rt.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=Jt.textureFormatReadable(A.format),X.__typeReadable=Jt.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,rt,tt,et,At,Bt,Tt=0){if(!(A&&A.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt){ct.bindFramebuffer(J.FRAMEBUFFER,Nt);try{let zt=A.textures[Tt],te=zt.format,he=zt.type;A.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Tt);let kt=Th(zt);if(kt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-tt&&rt>=0&&rt<=A.height-et&&J.readPixels(X,rt,tt,et,bt.convert(te),bt.convert(he),At)}finally{let zt=z!==null?Rt.get(z).__webglFramebuffer:null;ct.bindFramebuffer(J.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,X,rt,tt,et,At,Bt,Tt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt)if(X>=0&&X<=A.width-tt&&rt>=0&&rt<=A.height-et){ct.bindFramebuffer(J.FRAMEBUFFER,Nt);let zt=A.textures[Tt],te=zt.format,he=zt.type;A.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Tt);let kt=Th(zt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,ue),J.bufferData(J.PIXEL_PACK_BUFFER,At.byteLength,J.STREAM_READ),J.readPixels(X,rt,tt,et,bt.convert(te),bt.convert(he),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);let Ie=z!==null?Rt.get(z).__webglFramebuffer:null;ct.bindFramebuffer(J.FRAMEBUFFER,Ie);let Me=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await Hu(J,Me,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,ue),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,At),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(ue),J.deleteSync(Me),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,rt=0){let tt=Math.pow(2,-rt),et=Math.floor(A.image.width*tt),At=Math.floor(A.image.height*tt),Bt=X!==null?X.x:0,Tt=X!==null?X.y:0;st.setTexture2D(A,0),J.copyTexSubImage2D(J.TEXTURE_2D,rt,0,0,Bt,Tt,et,At),ct.unbindTexture()},this.copyTextureToTexture=function(A,X,rt=null,tt=null,et=0,At=0){let Bt,Tt,Nt,zt,te,he,kt,ue,Ie,Me=A.isCompressedTexture?A.mipmaps[At]:A.image;if(rt!==null)Bt=rt.max.x-rt.min.x,Tt=rt.max.y-rt.min.y,Nt=rt.isBox3?rt.max.z-rt.min.z:1,zt=rt.min.x,te=rt.min.y,he=rt.isBox3?rt.min.z:0;else{let pe=Math.pow(2,-et);Bt=Math.floor(Me.width*pe),Tt=Math.floor(Me.height*pe),A.isDataArrayTexture?Nt=Me.depth:A.isData3DTexture?Nt=Math.floor(Me.depth*pe):Nt=1,zt=0,te=0,he=0}tt!==null?(kt=tt.x,ue=tt.y,Ie=tt.z):(kt=0,ue=0,Ie=0);let ye=bt.convert(X.format),je=bt.convert(X.type),Ot;X.isData3DTexture?(st.setTexture3D(X,0),Ot=J.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(st.setTexture2DArray(X,0),Ot=J.TEXTURE_2D_ARRAY):(st.setTexture2D(X,0),Ot=J.TEXTURE_2D),ct.activeTexture(J.TEXTURE0),ct.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,X.flipY),ct.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),ct.pixelStorei(J.UNPACK_ALIGNMENT,X.unpackAlignment);let nn=ct.getParameter(J.UNPACK_ROW_LENGTH),xe=ct.getParameter(J.UNPACK_IMAGE_HEIGHT),Ai=ct.getParameter(J.UNPACK_SKIP_PIXELS),Qe=ct.getParameter(J.UNPACK_SKIP_ROWS),no=ct.getParameter(J.UNPACK_SKIP_IMAGES);ct.pixelStorei(J.UNPACK_ROW_LENGTH,Me.width),ct.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Me.height),ct.pixelStorei(J.UNPACK_SKIP_PIXELS,zt),ct.pixelStorei(J.UNPACK_SKIP_ROWS,te),ct.pixelStorei(J.UNPACK_SKIP_IMAGES,he);let oi=A.isDataArrayTexture||A.isData3DTexture,Ri=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let pe=Rt.get(A),Xe=Rt.get(X),En=Rt.get(pe.__renderTarget),Ee=Rt.get(Xe.__renderTarget);ct.bindFramebuffer(J.READ_FRAMEBUFFER,En.__webglFramebuffer),ct.bindFramebuffer(J.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Oe=0;Oe<Nt;Oe++)oi&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Rt.get(A).__webglTexture,et,he+Oe),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Rt.get(X).__webglTexture,At,Ie+Oe)),J.blitFramebuffer(zt,te,zt+Bt,te+Tt,kt,ue,kt+Bt,ue+Tt,J.DEPTH_BUFFER_BIT,J.NEAREST);ct.bindFramebuffer(J.READ_FRAMEBUFFER,null),ct.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(et!==0||A.isRenderTargetTexture||Rt.has(A)){let pe=Rt.get(A),Xe=Rt.get(X);ct.bindFramebuffer(J.READ_FRAMEBUFFER,N),ct.bindFramebuffer(J.DRAW_FRAMEBUFFER,Z);for(let En=0;En<Nt;En++)oi?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,pe.__webglTexture,et,he+En):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,pe.__webglTexture,et),Ri?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Xe.__webglTexture,At,Ie+En):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Xe.__webglTexture,At),et!==0?J.blitFramebuffer(zt,te,zt+Bt,te+Tt,kt,ue,kt+Bt,ue+Tt,J.COLOR_BUFFER_BIT,J.NEAREST):Ri?J.copyTexSubImage3D(Ot,At,kt,ue,Ie+En,zt,te,Bt,Tt):J.copyTexSubImage2D(Ot,At,kt,ue,zt,te,Bt,Tt);ct.bindFramebuffer(J.READ_FRAMEBUFFER,null),ct.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Ri?A.isDataTexture||A.isData3DTexture?J.texSubImage3D(Ot,At,kt,ue,Ie,Bt,Tt,Nt,ye,je,Me.data):X.isCompressedArrayTexture?J.compressedTexSubImage3D(Ot,At,kt,ue,Ie,Bt,Tt,Nt,ye,Me.data):J.texSubImage3D(Ot,At,kt,ue,Ie,Bt,Tt,Nt,ye,je,Me):A.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,At,kt,ue,Bt,Tt,ye,je,Me.data):A.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,At,kt,ue,Me.width,Me.height,ye,Me.data):J.texSubImage2D(J.TEXTURE_2D,At,kt,ue,Bt,Tt,ye,je,Me);ct.pixelStorei(J.UNPACK_ROW_LENGTH,nn),ct.pixelStorei(J.UNPACK_IMAGE_HEIGHT,xe),ct.pixelStorei(J.UNPACK_SKIP_PIXELS,Ai),ct.pixelStorei(J.UNPACK_SKIP_ROWS,Qe),ct.pixelStorei(J.UNPACK_SKIP_IMAGES,no),At===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&J.generateMipmap(Ot),ct.unbindTexture()},this.initRenderTarget=function(A){Rt.get(A).__webglFramebuffer===void 0&&st.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?st.setTextureCube(A,0):A.isData3DTexture?st.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?st.setTexture2DArray(A,0):st.setTexture2D(A,0),ct.unbindTexture()},this.resetState=function(){H=0,O=0,z=null,ct.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var Cs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},G_=new ki(-1,1,1,-1,0,1),Jc=class extends oe{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}},H_=new Jc,Mi=class{constructor(t){this._mesh=new qt(H_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,G_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var hl=class extends xn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ei.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Mi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Gr=class extends xn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ul=class extends xn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var dl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Pt);this._width=n.width,this._height=n.height,e=new Ne(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hl(Cs),this.copyPass.material.blending=Qn,this.timer=new vr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Gr!==void 0&&(o instanceof Gr?n=!0:o instanceof ul&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fl=class extends xn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Ad={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Is=class i extends xn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Pt(t.x,t.y):new Pt(256,256),this.clearColor=new xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ne(r,o,{type:qe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let f=new Ne(r,o,{type:qe,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+c,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Ne(r,o,{type:qe,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Ad;this.highPassUniforms=ei.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Pt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ei.clone(Cs.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:Cs.vertexShader,fragmentShader:Cs.fragmentShader,premultipliedAlpha:!0,blending:Oi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xt,this._oldClearAlpha=1,this._basic=new le,this._fsQuad=new Mi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,h=a+l;s.push((o*a+(o+1)*l)/h),r.push(h)}return new We({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Pt(.5,.5)},direction:{value:new Pt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Is.BlurDirectionX=new Pt(1,0);Is.BlurDirectionY=new Pt(0,1);var Hr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var pl=class extends xn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ei.clone(Hr.uniforms),this.material=new Ms({name:Hr.name,uniforms:this.uniforms,vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader}),this._fsQuad=new Mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Er?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Rr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Cr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ar&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function ml(i,t,{fog:e=[40,120],light:n="fixed",ambient:s=.6,glow:r=null}={}){let o=new al({antialias:!0});o.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2)),o.setClearColor(new xt(t.bg)),i.appendChild(o.domElement),r&&(o.toneMapping=zi);let a=new sr;e&&(a.fog=new ir(new xt(t.bg),e[0],e[1]));let l=new sn(50,1,.1,400);a.add(new Mr(16777215,s));let h=new yr(16777215,2.2);n==="camera"?(h.position.set(-.5,.9,.45),l.add(h),l.add(h.target),h.target.position.set(0,0,-1),a.add(l)):(h.position.set(20,30,25),a.add(h));function c(){let S=i.clientWidth||300,P=i.clientHeight||300;o.setSize(S,P),f&&(f.setPixelRatio(o.getPixelRatio()),f.setSize(S,P)),l.aspect=S/P,l.updateProjectionMatrix()}let f=null;r&&(f=new dl(o),f.addPass(new fl(a,l)),f.addPass(new Is(new Pt(256,256),r.strength??.8,r.radius??.6,r.threshold??.55)),f.addPass(new pl)),c();let u=new V,d=new V,m=new vn,v=new V,_=new Ht,p=new V,y=1,M="",x=()=>{let S=0;return a.traverse(P=>{(P.isMesh||P.isLine||P.isPoints)&&!P.userData.backdrop&&(S+=1+(P.isInstancedMesh?P.count:0)+(P.geometry&&P.geometry.attributes.position?P.geometry.attributes.position.count:0))}),S},b=S=>{S.sort((T,U)=>T-U);let P=S.length;return(S[Math.floor(P*.02)]+S[Math.min(P-1,Math.floor(P*.98))])/2};function w(S){a.updateMatrixWorld(!0);let P=[];a.traverse(L=>{if(!(!(L.isMesh||L.isLine||L.isPoints)||L.userData.backdrop)){if(L.isInstancedMesh)for(let N=0;N<L.count;N++)L.getMatrixAt(N,_),P.push(v.setFromMatrixPosition(_).applyMatrix4(L.matrixWorld).clone());else if(m.makeEmpty().expandByObject(L),!m.isEmpty())for(let N=0;N<8;N++)P.push(p.set(N&1?m.max.x:m.min.x,N&2?m.max.y:m.min.y,N&4?m.max.z:m.min.z).clone())}}),M=x();let T=P.filter(L=>Number.isFinite(L.x+L.y+L.z));if(!T.length){u.set(0,0,0),y=1;return}u.set(b(T.map(L=>L.x)),b(T.map(L=>L.y)),b(T.map(L=>L.z)));let U=T.map(L=>L.distanceTo(u)).sort((L,N)=>L-N),D=U[Math.min(U.length-1,Math.floor(U.length*.98))]*1.05;if(!(D>0)){y=1;return}y=Math.max(.3,Math.min(30,2.4*D/S))}let g=null;return{renderer:o,scene:a,camera:l,resize:c,canvas:o.domElement,fit:w,changed:()=>x()!==M,centre:u,orbit(S,P,T,U){let D=y/Math.min(1,l.aspect*1.15),L=T*D,N=U?(d.set(u.x+U.x*L,u.y,u.z+U.z*L),d):u;e&&(a.fog.near=e[0]*D,a.fog.far=e[1]*D),l.position.set(N.x+Math.sin(S)*Math.cos(P)*L,N.y+Math.sin(P)*L,N.z+Math.cos(S)*Math.cos(P)*L),l.lookAt(N),g&&g.position.copy(l.position),l.updateMatrixWorld()},sky({top:S,haze:P,stars:T=0,starColor:U="#ffffff"}){g&&(a.remove(g),g.traverse(C=>{C.geometry&&(C.geometry.dispose(),C.material.dispose())}));let D=300,L=new de(D,24,16),N=L.getAttribute("position"),Z=[],H=new xt(P),O=new xt(S),z=new xt;for(let C=0;C<N.count;C++){let Y=Math.max(0,Math.min(1,N.getY(C)/D/.5));z.copy(H).lerp(O,Y*Y*(3-2*Y)),Z.push(z.r,z.g,z.b)}if(L.setAttribute("color",new Vt(Z,3)),g=new qt(L,new le({vertexColors:!0,side:De,fog:!1,depthTest:!1,depthWrite:!1})),g.renderOrder=-10,g.frustumCulled=!1,g.userData.backdrop=!0,T>0){let C=[];for(let k=0;k<T;k++){let G=k*2654435761%6283/1e3,K=.12+k*40503%1e3/1e3*.85,B=Math.sqrt(1-K*K);C.push(Math.cos(G)*B*D*.98,K*D*.98,Math.sin(G)*B*D*.98)}let Y=new cr(new oe().setAttribute("position",new Vt(C,3)),new _s({color:U,size:1.6,sizeAttenuation:!1,fog:!1,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.8}));Y.renderOrder=-9,Y.frustumCulled=!1,Y.userData.backdrop=!0,g.add(Y)}a.add(g),g.position.copy(l.position),o.setClearColor(H),e&&a.fog.color.copy(H)},render(){f?f.render():o.render(a,l)},snapshot(){return this.render(),o.domElement.toDataURL("image/png")},dispose(){a.traverse(S=>{S.geometry&&S.geometry.dispose(),S.material&&S.material.dispose(),S.isInstancedMesh&&S.dispose()}),f&&f.dispose(),o.dispose(),o.domElement.remove()}}}function Rd(i,{yaw:t=.6,pitch:e=.3,dist:n=48,min:s=15,max:r=110,minPitch:o=.3,maxPitch:a=1.4,pan:l=!1,onChange:h,onClick:c,onHover:f}){let u=i.canvas,d={yaw:t,pitch:e,dist:n,x:0,z:0},m=new Map,v=e,_=.75,p=!1,y=null,M=0;u.style.touchAction="none";let x=T=>Math.max(s,Math.min(r,T)),b=T=>Math.max(o,Math.min(a,T)),w=T=>Math.max(-.7,Math.min(.7,T)),g=(T,U)=>{let D=2*Math.tan(25*Math.PI/180)/(u.clientHeight||300);d.x=w(d.x-(Math.cos(d.yaw)*T+Math.sin(d.yaw)*U)*D),d.z=w(d.z+(Math.sin(d.yaw)*T-Math.cos(d.yaw)*U)*D)},S=()=>{let[T,U]=[...m.values()];return Math.hypot(T.x-U.x,T.y-U.y)},P={pointerdown(T){m.set(T.pointerId,{x:T.clientX,y:T.clientY});try{u.setPointerCapture(T.pointerId)}catch{}m.size===1?(p=!1,y={x:T.clientX,y:T.clientY}):(p=!0,M=S())},pointermove(T){let U=m.get(T.pointerId);if(!U){T.pointerType==="mouse"&&f&&f(T.clientX,T.clientY);return}let D=T.clientX-U.x,L=T.clientY-U.y;if(U.x=T.clientX,U.y=T.clientY,m.size===2){let N=S();M>0&&N>0&&(d.dist=x(d.dist*M/N),h()),M=N;return}!p&&Math.abs(T.clientX-y.x)+Math.abs(T.clientY-y.y)>4&&(p=!0),p&&(l?g(D,L):(d.yaw-=D*.008,d.pitch=b(d.pitch+L*.008)),h())},pointerup(T){m.delete(T.pointerId)&&!p&&!m.size&&c&&c(T.clientX,T.clientY)},pointercancel(T){m.delete(T.pointerId)},wheel(T){T.preventDefault(),d.dist=x(d.dist*(1+Math.sign(T.deltaY)*.08)),h()}};for(let[T,U]of Object.entries(P))u.addEventListener(T,U,{passive:T!=="wheel"});return{get yaw(){return d.yaw},get pitch(){return d.pitch},get dist(){return d.dist},get x(){return d.x},get z(){return d.z},set(T){Object.assign(d,T),d.dist=x(d.dist),d.pitch=b(d.pitch),d.x=w(d.x),d.z=w(d.z),h()},get tilted(){return d.pitch<v-.2},tilt(T=!(d.pitch<v-.2)){return d.pitch=b(T?_:v),h(),T},apply(){i.orbit(d.yaw,d.pitch,d.dist,d)},dispose(){for(let[T,U]of Object.entries(P))u.removeEventListener(T,U)}}}var gl=new V;function Ps(i,t){let e=i.camera,n=i.canvas.clientWidth,s=i.canvas.clientHeight;gl.set(t[0],t[1],t[2]).applyMatrix4(e.matrixWorldInverse);let r=-gl.z;if(r<=e.near)return null;let o=s/(2*Math.tan(e.fov*Math.PI/360));return{x:n/2+gl.x*o/r,y:s/2-gl.y*o/r,depth:r,px:o/r}}function Cd(i,t,e,n,s=8){let r=null,o=1/0,a=null,l=1/0;for(let h of t){let c=Ps(i,h.at);if(!c)continue;let f=Math.hypot(c.x-e,c.y-n),u=h.r*c.px;f<=u?c.depth<o&&(o=c.depth,r=h.key):f-u<=s&&f-u<l&&(l=f-u,a=h.key)}return r||a}var Wr=(i,t)=>(Object.assign(i.style,t),i);function Id(i,t){getComputedStyle(i).position==="static"&&(i.style.position="relative");let e=`0 0 3px ${t.bg}, 0 0 3px ${t.bg}, 0 1px 2px ${t.bg}`,n=`color-mix(in srgb, ${t.bg} 72%, transparent)`,s=(T,U,D)=>{let L=document.createElement(T);return Wr(L,U),(D||r).appendChild(L),L},r=Wr(document.createElement("div"),{position:"absolute",inset:"0",pointerEvents:"none",overflow:"hidden",font:"13px system-ui, sans-serif",color:t.fg,userSelect:"none"});r.className="vgv-frame",i.appendChild(r);let o=s("div",{position:"absolute",left:"12px",top:"10px",right:"12px",color:t.muted,textShadow:e});o.className="vgv-stat";let a=s("div",{position:"absolute",left:"12px",top:"34px",right:"12px",display:"flex",flexWrap:"wrap",gap:"2px 12px",fontSize:"11px",color:t.muted,textShadow:e});a.className="vgv-legend";let l=s("div",{position:"absolute",left:"10px",right:"10px",bottom:"112px",maxHeight:"55%",overflowY:"auto",display:"none",flexDirection:"column",gap:"8px",padding:"10px 12px",borderRadius:"10px",background:t.bg,border:`1px solid ${t.muted}`,pointerEvents:"auto",userSelect:"text"});l.className="vgv-insights";let h=s("div",{position:"absolute",top:"34px",left:"0",right:"0",display:"none",justifyContent:"center"}),c=s("div",{position:"absolute",inset:"0"});c.className="vgv-labels";let f=s("div",{position:"absolute",inset:"0",pointerEvents:"none"});f.className="vgv-rings";let u=s("div",{position:"absolute",left:"0",right:"0",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"0 12px"});u.className="vgv-controls";let d=s("div",{position:"absolute",display:"none",maxWidth:"260px",padding:"4px 8px",borderRadius:"6px",background:t.bg,border:`1px solid ${t.muted}`,color:t.fg,fontSize:"12px"});d.className="vgv-tip",r.appendChild(l);let m=40,v=24;function _(T,{label:U,title:D,run:L,off:N},Z){let H=s("button",Object.assign({pointerEvents:N?"none":"auto",cursor:"pointer",minHeight:m+"px",height:"auto",minWidth:m+"px",width:"auto",padding:"6px 14px",margin:"0",borderRadius:"8px",border:`1px solid ${t.muted}`,background:t.bg,color:t.fg,font:"600 13px system-ui, sans-serif",boxShadow:"none",opacity:N?"0.35":"1",lineHeight:"1.2"},Z||{}),T);return H.type="button",H.textContent=U,H.disabled=!!N,D&&(H.title=D,H.setAttribute("aria-label",D)),H.addEventListener("click",O=>{O.stopPropagation(),L()}),H}let p=T=>{let U=T.canvas.getBoundingClientRect(),D=r.getBoundingClientRect();return{x:U.left-D.left,y:U.top-D.top}},y=[],M=null,x=!1,b={},w=null,g=[],S=()=>{let T=a.querySelector(".vgv-mark");if(T&&T.remove(),!w)return;let U=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},a);U.className="vgv-mark",s("i",{width:"9px",height:"9px",borderRadius:"50%",border:`2px solid ${t.warn}`,boxSizing:"border-box"},U),U.append(w)},P=()=>{if(l.style.display=M&&x?"flex":"none",l.replaceChildren(),!(!M||!x)){if(M.plain){let T=s("div",{color:t.fg,lineHeight:"1.35",fontWeight:"600"},l);T.textContent=M.plain}M.about&&(s("div",{color:t.fg,lineHeight:"1.35"},l).textContent=M.about);for(let T of M.insights||[]){let U=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},l);s("div",{color:t.muted,flex:"1 1 160px",lineHeight:"1.35"},U).textContent=T.text;let D=[...T.run?[{label:T.label||"Show",title:T.title||T.label||"Show",run:T.run}]:[],...T.extra||[]];for(let L of D)_(U,L,{minHeight:m+"px",padding:"4px 10px",fontWeight:"500"})}}};return{stat(T){o.textContent=T||""},explain(T){M=T||null,a.replaceChildren();for(let U of M&&M.legend||[]){let D=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},a);s("i",{width:"9px",height:"9px",borderRadius:"50%",background:U.color,display:"inline-block",flex:"none"},D),s("span",{},D).textContent=U.text}M||(x=!1),S(),P(),this.controls(b)},card(T){x=!!T&&!!M,P(),this.controls(b)},mark(T){w=T||null,S()},rings(T,U){for(;g.length<T.length;){let L=s("div",{position:"absolute",left:"0",top:"0",borderRadius:"50%",boxSizing:"border-box",willChange:"transform"},f);g.push(L)}let D=p(U);g.forEach((L,N)=>{let Z=T[N],H=Z&&Ps(U,Z.at);if(!H){L.style.display="none";return}H.x+=D.x,H.y+=D.y;let O=Math.max(4,Math.min(24,Z.r*H.px))+4,z=2*O+(Z.n>1?8:0);Wr(L,{display:"",width:z+"px",height:z+"px",border:`2px solid ${t.warn}`,boxShadow:Z.n>1?`inset 0 0 0 2px transparent, inset 0 0 0 3.5px ${t.warn}`:"none",transform:`translate(${Math.round(H.x-z/2)}px, ${Math.round(H.y-z/2)}px)`})})},controls(T={}){b=T;let{at:U="bottom",lines:D=[],buttons:L=[]}=T,N=M&&U==="bottom"?[...L,{label:x?"Close":"Insights",title:x?"Close the insights":"How the notes relate to this view and how to improve them",run:()=>{x=!x,P(),this.controls(b)}}]:L;if(u.replaceChildren(),Wr(u,U==="centre"?{top:"50%",bottom:"auto",transform:"translateY(-50%)"}:{top:"auto",bottom:"18px",transform:"none"}),D.forEach((Z,H)=>{s("div",{textAlign:"center",textShadow:e,color:H||U!=="centre"?t.muted:t.fg,fontWeight:H||U!=="centre"?"400":"600",fontSize:H||U!=="centre"?"13px":"14px"},u).textContent=Z}),N.length){let Z=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"center",maxWidth:"100%"},u);N.forEach(H=>_(Z,H,H.wide?{maxWidth:"70vw",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null))}},chip(T,U){h.replaceChildren(),h.style.display=T?"flex":"none",T&&_(h,{label:`${T}  \u2715`,title:`${T}. Clear`,run:U},{borderRadius:"18px",fontWeight:"400"})},labels(T){c.replaceChildren(),y=T.map(U=>{let D={position:"absolute",left:"0",top:"0",whiteSpace:"nowrap",color:U.color||t.fg,textShadow:e,font:`${U.strong?"700 15px":"12px"} system-ui, sans-serif`,willChange:"transform",background:n,borderRadius:"5px",padding:"1px 5px"},L=U.run?_(c,{label:U.text,title:U.title,run:U.run},Object.assign(D,{minHeight:v+"px",minWidth:v+"px",padding:"3px 5px",border:"none",background:n})):s("div",D,c);return U.run||(L.textContent=U.text),{l:U,n:L,w:L.offsetWidth,h:L.offsetHeight}})},tip(T,U,D){d.style.display=T?"block":"none",T&&(d.textContent=T,Wr(d,{left:Math.max(4,Math.min(r.clientWidth-264,U+14))+"px",top:Math.max(4,D+16)+"px"}))},place(T){let U=r.clientWidth,D=r.clientHeight,L=[],N=p(T);for(let{l:Z,n:H,w:O,h:z}of y){let C=Ps(T,Z.at);C&&(C.x+=N.x,C.y+=N.y);let Y=!!C&&C.x>-O&&C.x<U+O&&C.y>-z&&C.y<D+z,k=0,G=0;Y&&(k=Math.max(6,Math.min(U-O-6,Z.side==="right"?C.x+(Z.dx||0):C.x-O/2)),G=Math.max(34+(a.offsetHeight?a.offsetHeight+6:0),Math.min(D-110,C.y+(Z.dy||0)-z/2)),Y=!L.some(K=>k<K[0]+K[2]&&k+O>K[0]&&G<K[1]+K[3]&&G+z>K[1])),H.style.display=Y?"":"none",Y&&(H.style.transform=`translate(${Math.round(k)}px, ${Math.round(G)}px)`,L.push([k,G,O,z]))}},dispose(){r.remove()}}}function Pd(i,t,e){let n=ml(i,e.theme,t.stage),s=Id(i,e.theme),r=0,o=!1,a=null,l=new Map,h=()=>s.rings(l.size?v.targets().filter(p=>p.key.kind==="note"&&l.has(p.key.id)).map(p=>({at:p.at,r:p.r,n:l.get(p.key.id)})):[],n),c=()=>{n.changed()&&_(),m.apply(),v.frame&&v.frame(),s.place(n),h()},f=()=>{r=0,!o&&(c(),n.render())},u=()=>{!r&&!o&&(r=requestAnimationFrame(f))},d=(p,y)=>{let M=n.canvas.getBoundingClientRect();return m.apply(),Cd(n,v.targets(),p-M.left,y-M.top)},m=Rd(n,{...t.home,onChange:u,onClick(p,y){let M=d(p,y);M&&(v.click(M),u())},onHover(p,y){let M=d(p,y),x=n.canvas.getBoundingClientRect();n.canvas.style.cursor=M?"pointer":"",s.tip(M&&M.tip?M.tip:null,p-x.left,y-x.top),(M&&M.kind+M.id)!==(a&&a.kind+a.id)&&(a=M,v.hover&&(v.hover(M),u()))}}),v=t.build({stage:n,frame:s,orbit:m,invalidate:u,...e}),_=()=>n.fit(t.home&&t.home.dist||48);return _(),u(),{view:t.id,resize(){n.resize(),u()},keyAt:d,noteAt(p,y){let M=d(p,y);return M&&M.kind==="note"?M.id:null},pageAt(p){m.apply();let y=Ps(n,p),M=n.canvas.getBoundingClientRect();return y&&{x:y.x+M.left,y:y.y+M.top}},mark(p,y){l=p instanceof Map?p:new Map(Object.entries(p||{})),s.mark(l.size?y||"needs attention":null),u()},update(p){v.update(p||{}),_(),u()},stat:()=>v.stat(),today:()=>v.today?v.today():null,turn(p){return p&&m.set(p),{yaw:m.yaw,pitch:m.pitch,dist:m.dist}},snapshot(){return c(),n.snapshot()},api:v.api||{},dispose(){o=!0,cancelAnimationFrame(r),m.dispose(),v.dispose&&v.dispose(),s.dispose(),n.dispose()}}}var W_=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],mt=(i,t)=>`${i} ${t}${i===1?"":"s"}`,jt=(i,t)=>i.length>t?i.slice(0,t-1)+"\u2026":i,vi=i=>{let[,t,e]=i.split("-");return`${W_[+t-1]} ${+e}`},xl=(i,t)=>Math.round(Math.abs(Date.parse(t)-Date.parse(i))/864e5);function Z_(i,t=18){let e=i.length,n=Math.PI*(3-Math.sqrt(5));return i.map((s,r)=>{let o=e>1?1-r/(e-1)*2:0,a=Math.sqrt(1-o*o),l=r*n;return{x:Math.cos(l)*a*t,y:o*t,z:Math.sin(l)*a*t,size:.5+Math.sqrt((s.inlinks||0)+(s.outlinks||0))*.35}})}var Ud={id:"bodies",name:"Notes",hint:"Every note as a sphere",home:{yaw:.6,pitch:.3,dist:48,min:15,max:110},build({stage:i,frame:t,data:e,onOpen:n}){let s=e.nodes,r=Z_(s),o=new fe(new de(1,20,14),new Te({roughness:.5}),Math.max(s.length,1));o.count=s.length;let a=new Ht,l=new xt;r.forEach((f,u)=>{a.makeScale(f.size,f.size,f.size).setPosition(f.x,f.y,f.z),o.setMatrixAt(u,a),o.setColorAt(u,l.setHSL((s[u].cluster||0)*.137%1,.6,.55))}),i.scene.add(o);let h=r.map((f,u)=>({at:[f.x,f.y,f.z],r:f.size,key:{kind:"note",id:s[u].id,tip:s[u].name}})),c=()=>mt(s.length,"note");return t.stat(c()),{targets:()=>h,click:f=>n(f.id),update(){},stat:c}}};var Nd={source:"PDB 5F9R (Jiang et al., Science 351:867, 2016) and 1BNA (Drew et al., PNAS 78:2179, 1981); public domain",q:.55914,lo:[-59.037,-52.177,-45.243],radius:1.8,protein:8622,rna:[[1,23],[2,18],[3,14],[4,16],[5,14],[6,14],[7,15],[8,15],[9,15],[10,15],[11,15],[12,16],[13,15],[14,15],[15,13],[16,16],[17,17],[18,13],[19,15],[20,14],[21,14],[22,14],[23,14],[24,10],[25,14],[26,14],[27,21],[28,22],[29,17],[30,15],[31,15],[32,17],[33,16],[34,18],[35,15],[36,16],[37,19],[38,15],[39,13],[40,17],[41,15],[42,19],[43,20],[44,16],[45,17],[46,17],[47,20],[48,20],[49,18],[50,16],[51,15],[52,17],[53,14],[54,17],[55,18],[56,16],[57,16],[58,15],[59,18],[60,16],[61,17],[62,15],[63,15],[64,17],[65,16],[66,17],[67,16],[68,17],[69,16],[70,16],[71,15],[72,16],[73,16],[74,17],[75,20],[76,16],[77,20],[78,14],[79,15],[80,16],[81,17],[82,18],[83,19],[84,19],[85,19],[86,15],[87,14],[88,16],[89,14],[90,18],[91,19],[92,20],[93,14],[94,15],[95,18],[96,15],[97,17],[98,19],[99,22],[100,20],[101,16],[102,17],[103,14],[104,15],[105,17],[106,19],[107,22],[108,19],[109,17],[110,16],[111,16],[112,15],[113,16],[114,15],[115,20],[116,20]],target:[[1,15],[2,15],[3,16],[4,16],[5,16],[6,15],[7,16],[8,15],[9,14],[10,18],[11,19],[12,16],[13,16],[14,18],[15,15],[16,15],[17,16],[18,14],[19,16],[20,15],[21,15],[22,13],[23,16],[24,17],[25,14],[26,16],[27,14],[28,18],[29,17],[30,17]],other:[[12,21],[13,19],[14,18],[15,16],[16,18],[17,19],[18,13],[19,22],[20,19],[21,14],[22,14],[23,15],[24,14],[25,16],[26,15],[27,15],[28,16],[29,16],[30,22]],spacer:20,pam:[[10,21],[9,22],[8,23]],flank:[[7,24],[6,25],[5,26],[4,27],[3,28],[2,29],[1,30]],step:{turn:.62351,rise:3.2376},pair:[[9.699,0,-2.305,0,0],[10.839,.901,-2.582,0,0],[9.939,-1.059,-1.289,0,0],[8.473,.907,-1.868,0,0],[8,1.916,-2.762,0,0],[6.881,2.551,-2.001,0,0],[5.884,1.565,-1.789,0,0],[7.28,2.993,-.605,0,0],[7.569,4.393,-.583,0,0],[6.113,2.528,.278,0,0],[5.076,2.087,-.754,0,0],[4.225,.946,-.343,0,1],[2.882,1.115,-.303,0,1],[2.389,2.221,-.546,0,1],[2.101,.031,-.017,0,1],[2.619,-1.208,.254,0,1],[1.832,-2.138,.454,0,1],[4.007,-1.353,.26,0,1],[4.641,-2.674,.601,0,1],[4.803,-.254,-.061,0,1],[-9.607,1.703,2.313,1,0],[-10.67,2.703,2.57,1,0],[-9.986,.564,1.436,1,0],[-8.324,2.485,1.789,1,0],[-7.756,3.509,2.615,1,0],[-6.674,4.18,1.825,1,0],[-5.519,3.332,1.755,1,0],[-7.034,4.586,.4,1,0],[-6.674,5.949,.158,1,0],[-6.253,3.555,-.414,1,0],[-5.004,3.39,.428,1,0],[-4.379,2.059,.236,1,1],[-4.984,.831,.172,1,1],[-4.103,-.178,.07,1,1],[-2.905,.441,.079,1,1],[-1.572,-.063,.016,1,1],[-1.289,-1.392,-.053,1,1],[-.579,.825,.041,1,1],[-.854,2.124,.134,1,1],[-2.04,2.718,.212,1,1],[-3.03,1.798,.18,1,1]],tails:{near:{o:[46.898,-16.831,-6.652],x:[.205,-.031,.978],y:[-.292,-.956,.03],z:[.934,-.292,-.205],phase:1.8705},far:{o:[-33.927,-16.831,-6.652],x:[-.732,-.357,.58],y:[-.659,.585,-.472],z:[-.17,-.728,-.664],phase:1.8705}},atoms:"TxsjTBsjTB4lTR8kTBklSh0nSSAoSyAqTB4rRx8pSyIrTSMtTCUuSycuTyMsUCUrUScsTyYoUSkqTygnUSsmTSUxTygzUSczSyc0SSYzTys0US03UC43Ui4yVC8zVC4uUy47VS87VTE8VzQ/VTRBVjU7VTU4VTc3WDQ3WTVAWTZCXThCWjREWTdHXDRIWjpCWzxCXD5EWz1GWj5AWDw+Wz8+Vz48Xj9DX0BFYUJEYUJCYURGY0ZFZkdCY0hHZUZJYUhIZkNEaEBCaj9AakFFa0NGbEVFa0NJZj9BYT5AZjtCZDtEYzs9YTo8YjY6YTs6Xjo4YT46YDY+YDQ+XjI8XDM8XzE6Xyw4XTE2YDE1YjI1YS8zZDE0Yy8zXy0yYSsxYywwWyw4Wyo4WSk2Vyo2Wik6WSc1VyQ0WCI0ViUvWSkwVCM0UyE1UiAzUSIyUiE3UCI3VCI5TiI5UB0xThwyTR0zURsvVBswURstTRoxShkxSxg0SRg1SRgvRhgwRRgyRRguTRYzTRU1UBU4TxM0Txg3URo5VRk7UBk8TRk8TBs9TBc8Shs9SRc8SBk9Rho9VBk3Vxg2WBo1VxszVxY1Whs1XRoyXR41Xxw2Xx8zXBwtXx4tWh0rWB4tWR4vXxorYhsnYBomYxgrZRkqYx0nZB0kZh4jaB8lYh8jZx0haSAfZyAdahweayIfayQebSQdbyQdaiYgaCYhaCYkZiUgZSYlZCUhYyUkbCYabiYZcCgabyobbScWcigZdykXeCocdCcedS0Xdy4Wei4Wei4YdjAVdDETczMTdDARezAVfTEVfy8Ufi4Sgy0UhCsVhioVhS4ShjAUhjAWhzITgioXgygYgiUXgSUWgigbgCgbgyscgyQZgiEYgCAZfh8YhB8ZhyAZhyEXiB8afyEbfSEceiQafCEfeiEZdCMYeCAVeiETfCIUeyARfiISfSERdSAacx8edR4ecR4achwaciAfbx8jbiAjcyEjdiEjcyAmeCIkbx0kbhwpbBklax4oaB8sZx4qbCIqaCAuZCIvZSQuZh8xZhsxaR0yYiIvYCQvXiYyXiQuZig1YSU3YCc5YyM3YCU7ZCo3Ziw4ZS45aDQ5ajQ5ZzI9ZzY5aDg4aDo7Zzo2aDw1ajw0Zj40bzs9bjg+cDc/bDlAbUA8bUI7bUQ/a0M5aUM7aEY7aEE7ZkY9ZUI8ZUQ9cEg+bEk+cUo+dEk9dEc+dUo7bUpBbE5Aa0tFa0lGaE5AaFA/Z1JDalZCZ1hBbFdCblVCcVZCcVlCclVCaFlEZltFZ11DaV1CZVtHZ1xIZFlIZV9EZ2NEZ2VEZGJBZ2JGamVIa2dIZ2NLaGRNZ2NPZ2FPZ2RRbGNIbmRHb2ZFcGdFcGJHbmVDbmZBbmtBbWU/bWM/bWc9a2lDa21Fa29EZm1FZG1GZGxJYmhIY2pMbGxHbm1IcG5HcHBHbmxKbWxNamtMbmpPc25Ec3JCdGxCdmtEdmpGeGlHeWdFb3ZBa3I9aXE8Z3A9aGw9ZW0/bXRDbXZFb3lGa3ZHbHRJaXVHcXZGc3ZGdXpFdXRHdXhAdXxAdHc+dnU9dXM7c3I8c3A7dHA5cW87cXtAcH1AcYFCbXxAbHw+anw9aHo+Z3g9Z3g7Znc+cX5Ecn9GdIBFdYNFc35IcX9Lc39NdX1Ndn1Pd39QeHxQdn9FeIBEeIJCeYRCen5De31FfX5He3tGfX1Je3lIfXtKfnpMd4FAd4M+doU/doc+dYI8c4E8doA6dIVAcodBdItDcIdCboZBbIRCaoNAaIFCZ4E+dYhEeYxFeIdIeohJfYdJfYVLf4RKgYVJgIJMeolCfIpBfI5AfYg/foo9gIs+gow9hI0+d5I/dY49dY06d4w6c405dpBCdpJEeJVEdZFGc5BGcY9Jco1JdY5MdIpMepJEfZNEfpdCf5FEf5BHgZNEf5JJfJRAfJU9e5c9e5k8e5M7fpE7d5k/eZ0/dZlAc5c8cZY/cpY7cJQ+cJQ8b5M6fp9De5tGfJ1Ifp5Iep9IgJxAgaA+gpo/hZc/hZc9hpZBfp49fZ87fKI8faM6e546ep83d583dp04d6A1e6I+e6Q/fag/eaRBd6NBeaZCdaNDgaZAhac+g6RCgqVFgKZFg6RGf6ZHgqRJgKVJg6U6h6g5gqQ4g6Q2g6k5hKw4h645gq03f604f6o5fq45ha08hq4+i64/ha5Ag7A/hLI/hbNAgrQ+iao+iqY/jaVBjKREjKdFjKo7jqo5j6w6ka05jao3jq47j7A7kbA+krE+jbI8jLM6irU7i7c7ibk8kK4/ka5Bk6xBlqxBkaxGjq9Ek6pAlKg/kqY9laZBl6RBl6M/mKRDlac7lKY5lKM5k6I3lqc3mac3maU5mqg2lp09mJ85mqA6lJ8+k5pAkqBCkZ9Ekp5Ijp1Hj51IkJw+jpo+j5g9j5Y9jJs9ipxBiZ49iZ5Ch58/h59BkZk7k5c6lJY7lJM7lJg4kpk2kZs2kpk0kJw0kJszlZc9lZRAlpJBmJdAmpg/nJpBmptCm55Ak5VBkpNCkI9CkJVDkJZGkZhGjZdGkYw8jpA7jI87ipA9ipI+iI89lI49lo08l4w/mYs/l447mZA8m5E6m5A4m5M7loxBl4xDmYlFlY1Fk4tFlohClYRBlYFClIBEln9AlH5Fln1BlXxDmoU/n4dAnIY7moU5mIU6m4c3ooQ/o4c+ooc8pII/poJAo4A/pYg/poo+p4k8p4s6qItAqY0/q45BrJBArI1CqIc7qYY5qIc1qoQ5q4M3rIA3rH85rH81pYY4o4Y2oYk2oIk1oYQ2o4I1pYI0ooA2oYw5o482oY07n482n5E0opU0nZIzn5Q4oJY5oZY7opQ7npg5n5s5n5w7oJw4oJ47oJ45opc9o5c/n5VBo5lApppAqJlBqpk/p5dCo5RCopJEn5FHpJBEppFFqJBGq5FHq5FJqpBLrZJJnpdInphGophKpJdNppZKppZOqJZMmZZImZhJmJlHmJRKmpNLnJRLmZpLmJxLmJ1Nl5tPlp9NlpxRm55Kn6FGnqJLm6RNnKFPmaVPm6FRmaNRn55HoZ1Fo51GpZxFpJ9Hpp9Ip55KpZ1Lp6JJpaNLpqJNo6RKqZ5Lp5xRq5tNrJpLrJlPrplLqZ9QqaFTpqFVqqNTqqRQqqVVo6NSoKBUoaRQo6ZQo6dRo6dNop5SoJxSoZtVn5tWoZpQo5xVpJtYopxbp5tYp5taqJpWop9ZoaFan6BbnqBdoaNZnZ9Zm55ZmZxdmp5XlZ5Yl5pXk51ZlZlYk5pYkZlZnJhcnZlenJhgnpdbnJNZnpZWm5NWnZRVnptfn5xhnJxkoZ1hpJxipJxkop1mpZplnJ9imqBjl59lmqNimKRkmKdjlqhllqplmJ1hlphflJ1fkaBhlKFekaNhlKNekqdgl5VjlpJgmJVllpdnlpllkJVgkJdgj5JjjpRkkZFljpRfjJZdiplfi5RbipZaiZNdi5hYiJtliJVlhJNjiJFjg5Fiho9ig45hjZxli6BkkJxlkptpkZdpkphriaBfiKJfjZ5djKBbjaJbjZ9YiJ5ghZ5ghaBihKJihJxhhJpfgppegZhdgJZef5dgf5Rdhp9khaFmhaVmh6BohqJrh6Fth6NviKJxiKRliaZkh6pjjKZjjahijapkjqxkj65mhahfgqpfhaZch6VZiKlbgKdifqtkf6VkfKZlfqNigqtng61mga9ng6pqgqhrgKdqhKdsha1mhq9lg7Bhia9kirFjhbNjg7VhhbZghbhfgrZig7hkgLVkibZeibVbiLNbjLVfjLZii7dijbRjirZajrRWirdWirdTirlRirhPirpNi7FXjK9Wja9Ui7BSjK1Yjq1Tj6xRi6pRkatQkqpOkalNk6xNjKtNiqpMiaZMiqtJiKtIhqxJiKxFjaRLjaNOi6FOkKRLkaRIk6RIlaZJl6ZJmKVHmKhKjaRQjKNSiaFTjqRUkKRUkaVWkaJUiaVRhqVRg6FRhadQhqlSgqdRhaxShqJOhaBMhJxOh6BKhJ1IiJxJhJtHiJpIhZdGiJtQhplTi5tRj5tQjJlOhp1UhJ1WgZpVhJ9XgZ1Tf51Sf5pRfZlRfp9QfqFRfaNPfKFTgJpPgZdOgJNPg5dMgpZSgpRUf5FVhJRVg5JZhpFXg5BbhY9afJVWeZNVe5hXfJlZe5tafZ1beZRQeJBPeZVOeJhPeJRMeJlNfI5Pe4pQf45OgItNgotMg4lLhYlKeY5YfYtWf4pVf4dUgItUgYdTgopTgohSdo1VdY9WdI5ZdI9ac49Uco1Tco1RcI5PbopPbY5Ocotbb4pYbIhbaotca4VdaYdgbYZhaohjbIdjaIlaZopaZIlbYolbZYpXZ4xWaYtVZo5Vao1UZ5BUao9TY4dfX4hhZIVgZoNfZ4JhZIFeYophYYxiYI5hYZBgYo1kZItlYY9mZYxnXY5hXJBfXJJhXJJjWY9fWY1dV41cVY5eVoxaXJRfXJdgX5hgYJdfX5liYppmYJpnYpxiYJ5iYJ5kX59gZJlmZZlpZ5tqaZtqZpdqZZVqYpVqZZRnZp1qZ59rZ55vZqJraKRraaRtaKVpa55ubJ1wa6Fzbp5wb55tbJ9saZ5zZ591aZ93a6B3ZZ11aJ15aZ17bZx8aJx9a5p5bZh5cJZ7b5l4cZh3bJd9bZZ/a5WAaZaAbpiBa5OBaZGCaJOEZpOEao+DaI2EbI6BapSGaZWIZ5eHZZeJa5eJZ5mGZpuGY5qFYZqGZ52EY5iDYZiCXpaEYpZ/ZJd8Ypp9YJOHX5SJXZSKYpGIYJaKX5iMW5mMYZqMY5mOYJyOZZqPXZqJV5qIW5yFWZ6EWp+CXJ+BWKGCWpeGWJWGVZSIWZOFWJKDWZCCVpGEWJSKV5ONVpWOVJWPWZOOWJKRW5GOVpeNVZmOUZqNVpyNVZ6NV6CMWKCLVqKNUpmKUJiJT5aKTJaKUZiGUpaGUpqFUJSKT5KLTJKOUJCLT5SPTpWRTJeRSpaTUJaTTJiQSpqPSJmORpqOS5yOTZ6PTqCOT6CMTaKPSJeNRpaLQ5WNR5SKRZKJQ5SHRpCHRZKRSJKURY+QRJOURJSXQ5KYRJKbQ5aYQpCXQo6YRIyZRIubQIyWPouWPI2WPI+VOo2YRoyYSIuYSoyXS4uWSIiYSYeZS4iaSYWaTY+XT42YUI2aTpGYTJGaSpCaUY2WU4uXVYyWVo2UU4mWUYeWVYeXUIWVV42YW4qYWpCZWJKaVpGbWJSYXY2WX4yWYoqYYY2UYI2aYY2cZI2cZYydYYudYougZY6aZ46ZaYyYa4yYZ4uXaYmVaoqTaIuRZ4eVaIWTZoaXbImTbYqQbYeOcImRcoqPcYyOdImOa4qNaomKbIeHaIuKbYuIb4uGcYmHc4qHcI2GcYeHcoWHcYKHcoCHdIWJb4OIbYGIa3+Fa4GKa4OCbYOAbIN+aYWCZ4WDZYOCZ4aFb4OBcYN/coGAdIF+c4WAdYZ+cn+Bc32BcXt9cnuDdXp+dXl8dHd8dXV8eHl7cnd8cHV8bnV7bXd6cHR+cXF/cXCBcG99bHN7anN6aXZ9aXB7ZnB6Z3Z5ZXh6Y3h+ZHh4Y3R8YnOCYHF9X3B+ZXJ/Z3KCZ3WDZ3WFaXGBZ3eCZ3mDZXqGaHuBY3mDYHmEX3mIX3iCXHiDW3qDWneBYXaGYXSIYXaMYnKIZXiNZHqNY3uPaHiMaXaLaHSKa3aLY3uLYn2LX3+OYX+JY4GIY4KLZoCIXHuOW3qSWnmMW3eMWXqKWXWOX3iSYHmWYXaSYX6VX3+ZYoCUZICTZn6VZ3+WZnyUXX+WWH2XWYKXWoSYWoSaXYWXWX2aWHubVXubVX2cWXqdWnyeW32cVHqbUXqbUHuYTnuYUnuXUnqSVHmSU36TUn+RUICQToCST4GOUHmRUHeQUnqNTnaPU3aMUneIUniGVXSJUHaITnaHTHmHS3mGTHSHSnSFSnWESXKFTXqJTHyKS4CIS4KHTYOGToSESYSHSYaKSIiKSYSMT4OIUYSIU4KHVIOGUoWLUoCIVH6HVX2DUX2BUn9/U399Tn2BUoR/VYR/VoR9UoaBT4eATYZ/T4mBWYOBXIB/WoODWYCFWoWFWoCHWX19V3t+V4F4WYN2VIN4VIR2VYZ2VIJ0WoR5XIV5XoR4YIV3XYd7W4h8XoF5YIB4YH92YX11YX56YX99YX1/ZIB8Xn91Xn5yXXxyXXtwXHt0Wnl0V3tyWnh3XHd7XnZ3Vnh0VHhzUXV1U3ZxVXZvUXZvUnl2UHl4TXl3TXl1UXt6U3x4U3x2THl5SXl5SHt7SXp9SHd5Rnd4RXl4RXV3Rnx7Q319QX5+RYB8Qnt8QHp8P3l+PXl/P3h6QXiAQHiCQHqGQnWDQXWFQn6EQICGRX+DR32DSX6DR3uEPYGCO4CBOYGBPoN/QIWAQYZ+QIWCQ4d+QoeCQ4iAO36COXyBNX1/N3yENnqENXqGNXmCOXx9N317N3h7OX15NoB3OX90NHt5Mnl4NHd3NHV2MHl3NXh1N3dzOXd0Onl1NnhxNnZvNXRvNXJvM3RxO3ZzPXZzPXlwPnRyQXNyQnR0QnJxQHlzQXtyRHxyRX10QH5yRntxSHtxSX1wSX1uSXhxS35xTYBwT39wUH5xTIJxSoNxSoZySYNvUYBuU4NrVH1sVn1tVXlqWXlsVoNtWYZoWYZuW4dyV4lwWYJqW4FoWYFlWoJjXH9oWn1pV4BmVYBjVYRkU39kVINgVIVfUYZfUIhfVYZdVIRbUoJcVYRZT4RgTYVgS4dkS4NgS4FiTIJeToZkTodnTIppUYdoUIdsUopqUIlvU4xtUotvUoxxTotlSY5nTo9kUJBlUZBnUpFjR4xjRYtlRItmRothR41fSY5fRo1dRodoRIhsR4VoR4NmSYJmRYNlR4prSIxtRI5vSo1tS49vSpFuSo5xQ5BrQY9rP5BsQ5JoRZRoR5NpRZVmQY1qP4tqPIttP4loPYdoPYZqPIdmP4lwPop0QYdxQod0Q4V1RYl0QI9zPpBzPZF1QpBzPZBxO5FwOZBxN5ByOpJuOY1xOItyOIt1Not2OYlxOox5OY96OZB8PIt6Po16PIl5P458OZF4OZN4PZR4O5d4PZl4Ppl6QJp7PJt3Opx4OZt6OZ13PZd8Ppd/QZZ/Q5h/PZaAQZR+RJN/RZN8RZJ7RJF/R5V8SJV5TJV4R5d4S5d7Tph7T5Z8Upd8Tpp9TJx8Spx7TZ59T5R9UJN+U5F9TpGATZGCSpKATI+DUJF6UZB4U5J3VJB1T5B3TY54S413Tox6Sot3TYp6S4p5U5R3VZV2WZV2VJh1VZt4UZt3WJV7XJJ7V5V+WY56W453XY13V4x6WpB2W5BzXZF0X5BzWZFyXpN1YJR1ZJN2YJd2Xpd4Xpd6XJh3YpB6Y455ZY55YI98YY5+YpB/X4x/Yo13Y4t1ZotzYYp0YItyZI5zZpByaJBzapByZZJxaJB1apF3a453bo54apJ5aox3a4p4bYd2aYl5aod7aId3aIV8bIlyb4lxcIdxa4pvcItyc4tydYx1c45ydI9vdpFwdY1uc4h1dId3eIh4c4V3dIR5eIZ1e4V0foh0e4Nzeolze4tye45ze5ByeolufY1ufYhteZB3e5F4fZB5eI95fJN3fpR4fpZ6fZh5f5V2fpZ8fpd+fJl+eph/gJl+gZqAgph9fJt9ep19e555e59+eaF+eqN9d6F/d556d593d6J3d6N1dJ52dJ90cqB4eKN5eKZ4e6l4d6d7fKV4f6V4gKh0gKN4gKJ6g6R4gKN9fqVzfqZxe6VweqRxgKRwf6RtgKJwe6VteaVseKJpeKdrfp1rfqBoepxse5tufJhtfZdveJpvd5tteJ1se5drfJVqfpVqgJRre5Roe5JnepBpepFlf5dpg5hqgplmgJlkgplshJpuhpdwg5xvgpRxhZFxgJJxgJByhpBsipBthpBphI9ohIxpgotriZRti5VujpNxi5duiphrjZhviptripRyipN0i5B0jZB1iJN2io9zi4xyjYxyj4tziYtwh4pxholvhIdwg4ZsgYVvkZBtlZJtlo9ql5JsmJFrmpFqk5F1k493lY93kpR2kpZ0lJVykZd0kY53kox5lYl6j4t6jY17i4x8i4l8iY19k4p2lIh1mId2k4hyl4VwlINul4Nvmox0nYp3mo50nY90n45znZF1oJB0oJF1m4x7m4p8nYl9mY59mZB8l5J9lpF/l5R9mYZ8nIJ8l4R8lYZ+loeAk4Z9nIV5nYR3oIR4oYN5nYV1n4Rzn4Fzn4VxoId5o4d6pYV9o4p6oot4pYt7oYZ+oYWAo4GBnoWBnoaDn4SFnoiEoIF+oX5+pHx+n318n3t8n3l+nXp6pH98p397qX99qn59p4F5poF3p4J1poJyp4RxqIF+qoKBqX+Cq36DqYSCp3+Dp32EqXmFpHyFo36GoX2GpH2JqHqBqXiArXaBqXd9qnZ8pnZ9rXqAr3qAsHqCsnmDsH1/sH18sX97sX94tHx4sn11r3uEr3qHsXeIrnyIrnyLrH2Nqn2MrX6PrXSIrnGIqnSJqXeLp3aMpnSNpniMrXKFrXF/q2+CqW6Ep22Dqm2GsnN/snF9s3J7tHSAtXKCsnKDsm99s217sWx4tGt8smp+sWuAsm2Br2qBr256rW15rG93qm92qmx6rXR2rnZ3rXh2rnl0rntzq3x3rH90r3JzsHFxrnBwrnBtsnBxrG9xq21wqG5wp25uqmtxqGlwqGdxqWdzpmVxqHBxpXFxo3NupXB2onR0pHF4p3duqHlrqHlwpXtyp3h0pHt0pnl2pXp2qnRpqXJlrXRprnZqr3dor3dssHlosHltsXprqXBpqG5no25oqGxpqGlop2lmqWhppW5koWxjn2xiom9hpHJgpHNeo3JcpXVdompjoGhjoGdloGVmoWZhpGVioGhnoGhqnmlrnmltomhrpGZqo2NrpWFqpF9rnGpqmmtrm21tmm5vmWptmGhrl2hpl2ZsnW5tnnBunHJsnnRunXhqn3lvm3xvn31tmn5vnn9tmoJtoHVqoXVoo3RnnnJnnHFmmHJlmXRol3Volndll3Zrk3dqlXltkXhqk3pukXpsj3ttmnplmXpgm3xlm31om35kmH5onXhinnhgnHVdoHhgoXpgoHxfo3thm3FgmXFfmHNemG9flW9elG5hkW5glW5jk25lknJllW1nkG9njnBnj3Bri29ni21pjHNqjHRtjXJwinZtindviHlvh3ptiHtxinFuiW9wjG1wjGxyh21vhmtwhGpvg2ttg2hwjWxuj2tukmtxkGpsjmlqj2hokGpnj2ZnkW5vk29wk3JvlHZymXVylXdzmHdzkG13kW15jXF3jnV2inR2jnd2inZ1jHh1i3p1kGx2kGl3lGd5j2d1j2V2jmN0j2B1jmB3lGp2l2l2mmp5mGpznGhznmh0nmxzn2p0mW56mW9+mXF5lnJ5mnF3lnV5lG1/l22Dkmx/kWyBjmuBjWuEi2qEl2qAnGmEmGaBmGZ+l2h+m2uAnmyBnm6Cn2+Dn21+n2p9oW5+oGt6m2+Cm3GEm3GGnHKImXSBlnWBm3aCmW6Jm22Km22Ml22Jl2qIlGmIk2qJlGeHnWyJn2uKoW2Lo2yLoGmIoXGLoHKNnnKNonOJo3KHo3SEpXaGonOPoXSRn3eRnneSo3STonWVoHSWo3aXoHiPn3qOnXqNm3mOnHuLmnuKl36LmniJmXeKnHeIl3qMlXqOk3uMkXqLlXuQk36MkX+Lj36HkoKLj4OKkIaKkoeKjoeJk36Hk32EkHqClnyEmH6Dmn2Dl4CCknmGkHeGjniGjHeFkXWIkXOHlHOGkXGJjXqHi3uHiHuEin2JiH2Ki3yMi32Ei36BiXx+jX+BjYKCj4SBjoaCkIiAjHh/iHZ9jXZ/jnR9kHN9jHJ+hnWBhHaBgnaAhXSEhnKEiHGFhHCEgnuAgnx8gn2Cgn2Egn+FgYGEgoODhIODgYSChXp6hX13g3l4gnZ5gHZ3f3d1f3R4h356ioB6i4J6hoJ6hoR5hoR3hoZ6jH55j312j3x7knt7k3t5k319kYB3koF0kYBwlH90ln92loB4mH11joFzjIFxjoRvioFxhIBygn5vgX1zjYJsjYNqioVrjoFoiYhnhYdmiopmjYtnjYtpj4tqi4xqiIVkh4Bih4RgiIZfhYhehYhchIdag4VbhIhYhH9lgX5khH9ogoBph39pgHxlfntlenxlfnhlf3hogXhpfXhqgndrfXdsgHdtfH1oen5pd4Fpe35sfYBsfoBueYNldoRje4RkfYVlfYZngIVkdoFkdIBicoFjcIFic4JmcYNnb4dncYNqcoFqc4dlc4plcYlhdYpkd4pmdY1jeYtlcI9ha41jbI5lb41mb5VdbZBaapNZZpFaZ5NZa5ZgbpdhbplhaZZiZ5VhZpNgaJFgZJJgb5ZicZdkdJpicpZmcpNlcZZoc5Jnc5ZgdZdedZtcdZVcd5Ndd5FdeZNfeZBeepFfcZtbcZ9cbptbbZ1abp1Xap1ZcZ1fcZ9gdKBgdKJgdp9geKBgeqJdep5heZ1je5tkfZtie5pmd6FZd6VYdp9YdqBVd55Tc6FUdKNac6ZadKhcdKpbcKVbbqdbbKdcbqlaa6lbbKpadaddd6hfealeeaxed6dhfKlbfaxZfqZagKdYgKNbeqpYeatWea9Wd6pVd6hTdadSeahRdq5Zd7Fad7Rac7BbcrJccLFebrBebLFdbLNdaq9cebBbe7JcfbJaf7NbfbBefbNUfrNSgK9Vga5Xg7BXhLFWhbBZebhQd7NSdrRVc7NVcrJTcrRXe7hUfLpUfrtTfr1TfLtXerpYeLpXerpaf7lSgbpQgblOgbtMg7hRhbtVg7dWhbtXg7dYhLlZgLZLfLZMg7NLhLJNhbNJhrJOh7NKirJNfbdIerhIebZHd7VHerpGfblEfrhGerRFebJEdq9Ge7FDfbBEf7FFfa1Ega9Gf6xFga1GeK5Kda5Ne61LfLBOf61NcrNLcLNMdbZNc7NJcbJHbq9HcrNEcLRDcLVBbrNDcaxHcapJcqhJc6pFc6xDcqtBda1DcatLcapNb6ZOcaxQb61Qba1Sa65TbLBVbrBWarFVbalNa6hNaqRLaKlMaKtOZaxOZaxMZKxQbKZJbaRHbqBIbqVFbaZDbqZBbac/a6U+cZ5NdKJMdaRKdqFNd6VLbqBQa5xQbKJRbqNTbKVVaqRWbadVa59Nap1La5tKaplKaZ5JbZtKb5lJb5VLcptGc5hIdJxFb5hNcJdPbZRRcZhScZZUdJhVb5ZVaZZRZpNQZ5hRaZpSZZhTaJVNZ5NLaZBLaJRIZJNGZ5FFYpJEZpBEY5BDZZBLZY1LYI1KZIxOY4pOYolRYoZRYYVTYIZVYINSY4tIYYpHYIdJYohFZIpDYIdDZYhBW4hJWYlJWotIXItHWoNKWX5GWn9MWIBNWIFPVn5MVYFQVH5NUYBRUoJHUoVIUoVKUolHU4dLU4lKU4tLWIRBWYI9WYdBWYg+V4lCW4JBXYBAX4M+XoI5Yn46YXw7X309Yog4Yoo6YYg8ZIs7YYM0YYIyXoQwYYAxYYMtYIQrX4IqYIIoYYYqYIcoYYonY4kmZYslZI0lZ4okXoArXX4qX3wpX3snYXwqY3oqY3ksZXcsZXspZHwlZn8nYXgtYXcwX3YwXXcwYngyYnc0YHMxXnIxXXI0W3E1Xm8xYW8yYmwyYWszYmg0Y2czYWc2XnQ4W3c6YHQ5YXA6Y3I3Ym46ZG83ZG04XXg2XHs3WHk1XXw1WHw3VX03VX83UoA2VHs5U388Vnw9VH8+V3o9WXk/WXtBVoE3VoM4VoQzWIU4V4c4Wok3Woc0U4Y1UoczU4s1UIczT4k1T4UzVIsxVY0xU48wUo8uV40vWYwwW4wuXYsvX4wwX48vYYswU5EyUZMxUpUvUZUtUZUzVZUvVpYtV5QsV5IsWJguV5ovWZUrW5MpXpQqX5QoWpMnWZEmWo4nXI4nWY0oXpUsYJcsYZMvYJkuXpotXZwuW54uX50wZJUuZZczaJUvaZQsapMxY5M2Z5I4YpE3YJA1YZE5X442Zpc9ZJc9Z5s5apk3Z5dBZJpDaZdDa5ZBZJ1AYp0+YJ4/Zp8/aaBCap4/a6BDbJ9Ba509bp5BbZw9b50/Ypw8X5w7XJk6YJw4Yps1X5k9XZY+WZU+X5VAXpE/XJNDXY9AW5BDW45CWphAU5g+V5pCWJlFWJdGVpZGWZZHVZo6Vpk4VJg3Vp06VJ48Vp4+WJ0+VJ9AWJg4V5Q2VpM1W5Y1W5QzXJg1V5M4U5I8WJA7V408Wo86UpA5T486T4w7To84S484S5A6So43UI8+UI1ATopBUI9CUpBCU5JEVJFGVZJITI1ASYxASYhASYo8SYg7SoQ7SYg4T4U8UYY8UYg+S39DTYVFSYJBR4FAR30/Q4E+QYM9QYU9P4I8SX89Sn07THo8S345TYA5TndBU3pDUHxGVHhFUXtIU3lISnhESXdCSHRCSHlGSnpIR3dHSXpKSHhARnY+SHU9R3M8RXg9Q3k+Qns8Qnw6QHw9SnU9THM7THE8TW87TnQ6UHU8UnY8VHU9VXM7VHM5V3I8TG9ASmtBTW9DT3FCUXFFU25ESG9BRWw+Q29CQ3FARHFEQ2pBQmk/P2s+QmZARGVARWRCRWQ+P2g8PGQ9PWg4Pmo3Pmw4P2o1P244QGw0QG41OGI5NGU8M2Q9M2I+OGA8OF46Nl05Nlw3OVw8NF46Ml44MF80L146MFw8MF0+MFo8MmQ2MGU3LWY2LGM2LGc4OGQyOGcyOmczOGMwNmEwNGIxN2gwOGowN24yNmsuN2orOWsqNmgrNW02N204MWs1MG40MHA1MG4yN285OW87OG4+Nmw9OXE8O3I6O3U6PXY4Png4OG5AOG1CN29EOHFEOWtDOWpFOmlBNW9FN25JMnBIMHFGLnBHMHNGNXBOOHVNOHZLNnVJOXBQOG9SNW9VOm5TNnJTNXRVMXZUNnZWOHVYOnNXOHVaO3NZOnNbMnRRMHRQLnRRLnJSMHNOLnNMLHVRKnVSKXNRJ3JSKXdTKnlVKXtVKnhXKHFNKG1OKHJLJnNKJXZLJnRHLGxRK2pRL21OMGpNMGpLMWlPMWdKMmdOMmZMM2RLLG1TK21VK29XLnBYLHNaMHJbJ21UJGxUI2hTI25SInBUInBWIXJSIXJXIXRUIXRWIHZXJmlRJmdQJWNSKGVNJ2RLKmNOJ2JKKmFNKGBLKWRUJ2FXK2RVLGJXLGZXJGVZIWFZI2daIWZcJWhcIWRWH2NVHl9UHmRTImBTI11SIlpUJV1RJ1pRJFtYIltaIllbJlxaIF1ZHl1bHFxZGlxaHV9cG2BdG15fHGJfHFtXG1pWGldWGVZVG1pTGVpSHVhSG1ZYG1NZG1NbG1FcHVJYHVJVG1FUHFFRGlBQG1VdGFRgFlVgG1dhGlZjHVhgFFBjFVBlFU5fFU5dFEtcFUtZFElYElFjEFFmD09mDU9lD1RmD05oDUxpDk5tDkpqDUhrD0lnCk5sCU9uCE1wCEtvBlBtB1FrBVJvCE1yB0t0BUpzBUh0B0x2BEtyAUpxAkluAEhtA0ptBElqBEdqBkZrBktpBEZoBENnBkNlB0FlAkJmB0VkCURiCkdiCUljCERgDEdiDUldEEhhEEZgDkVhDE5eDlJfCU9eD1FcEFNbDVVcEVNYEVdcEFldEFpZElteEVxgEVpiE15hDVtbC11ZCV1aCV9cDGBWDWJVDGRXDmVXCmRYCmZZC2ZcDGhdB2daC2RdDWNfD2RfEGVgDGFfCmBhCl1hClxgCV1kE2RcFGZdFWdeFGNaFGFZFGBXFF1WFF1UEmhcEmpcE21fEWxaEGpfEGtiEmtkEmxlDmljE2ljFWhlF2pkGGtmFmZkFWRjGGVnE2NlF2tiGnBkGW1eG29eGmtdFnJjFnRnE3NiFHRgFHZfE3JeFXBnFXBqGHBrGHFtFG5rFG1tEnBvEmtuHG5rH29rHGtsGmpuGmhvGmxwIG5mInFkH2xkIGpkIGhiIWlmIGZiIWZmIWVkH3JmH3VlIHZoIHhoHXZkIHVqIHZsI3duHnVuHHRtHXdwI3NtJXJuJnFqJXBwI3ByI3JzIm5yKXJtK3FrK29qK25oLXFtLnRuLnZsL3htLnlvK3lvL3twKm1sKmtrKGptKGpvLGlrJmhsJWVuJWNsImhtIGdvImttJWRwJWFxIWFxJmFzJV50JWJ1I11wIVxwHVxyIVlvH1hvIlltIFx0H1x3Hl93HF54IVx5H2B2HWN2GWN0H2V1IGZ3IWh2Iml0Imp4GWFwGmBuGF5sGV9qGVxsGF5zFlx0FV52E112F1p1Fl93FmB5FWN5E2R6GGB7FmR3FWd3E2d0E2l0F2h2GGp4Fmp6Gmt4E2VzEWVxDWRxE2RvEWRtEGZrEWFsD2VpD2FqDmNpDWJnDl9yDGB0CmBzD11xDVpuEVxtDVlsEVtrD1pqDWB2DGF4CmN4CWR5DWF6C2V2C2d2CWh0B2l0DWl2CGZwBmRwBGRwCWZuCmhtB2ZsCWttBWBwAl5yB15vCF5sBl9qBV1pBmFqBV13A1x4A2F3A2J6B1l2Clp5CFh0B1hyBFhyCFdwA1hvB1duBVdtB1d6CFZ8DFZ9B1R+C1R6DVN5DlN3DFN1DlB6DlB9EFN2EVNzElFzE1B0ElZzElZwEVd1ElFwFE9vFU9tE1BrEkxvF1BtGFFrGU9qG05rGlNsGVVuG1RpF1ZtGk1mHE5kG01iGEtlGUlkHU9kH1BiIVFiI1FhIlJlJFNlJFNoIlNpJFZlJldmJFdiJlNpJ1JrKFRsKVZrKVBrKFRvKVZwJ1pxK1ZxLFhzLVpyLVd1KVpuKVxtKVxqKlppK15uKV5pK19lLWBmJ2BmJGBmI2FoI19kIWBpIV5lIF9nK11jLl5iL2JhLlxgLllhL1ljLlhfLGFfLGNeKmRiKmNcLGdfK2lhK2tfK2tdLWljLGtkKm1gK3JgJ3BfJm5eI29eJm5bLXFgL3NiL3ZgL3diL3ZeL3hdLXxeMXZaMHpZKXpeKX1hJ3heJHlfI3tdJHlhIXxeInpiIHxgHn1hKntlLH1lLH5mK3lnKHVlJ3dpJnRmLnxkMH5jL4JjMn1iM3tjM3tlNHphLoBgLIJfKoNhKoVhK4FdLYBbLH9ZL4NbKYJiJ4NkKIRmJ4VnJYFkKoNnK4RoLYdoLYhpLYNqLYdlLolkLI1lMIhiModjMYthNIZhK4piKYxhJo5jKIxfKIleKo1dJohfJYtmIotmIYxnJY1oIopjH4piH4hhH4hfH4xhHY1fG45gHIteHYdiHYRhG4NjGoZfGIZdGYZaGIZZFoldG4haHIhYHYVVHopYHoRZIIJYHn5WIYFaGn5ZGX9WGH1VGH9bGX5dGXtdGX9fGYFVGIFTG4BRGIRTFoVRFoNPFodRGH9PGH1NG35KFnxMF3pLF3tIF31HGXlHGIFLGYNJHINJHYRHF4VJFYRJE4ZJFIhKEYZIH4RMI4NMH4VOHodPHIdOHohRIIBLIn5LJn5JIXxKIHtIH3lHH3dJIHhFJ4JGKYJGJIFDI4BBIX9DI38/JoRHJohKJYlIKIlLI4tIKINMKYFOK4BNLYBOJ4BPJYFRJH5RJoJTLX1KMX1JK3tIKnpJLXdKKnhNLoBIMIJHNINJL4RFMoVCModFMINLMoRNNoNPMIVPL4dOMYVRLYhQM4BONH5POH5OM3xQNHpQMXxSNn5LN31JO39KNn1HOH1FOHpFN31DOYFKOoNKPoNNOYZKOIZIO4hLPIJRP4BSOoJTOoRVOIZTOINXQ3xOPXpOPHlQP3hOQH5LQn5JRoBJQX9HQX1FP3xFQX9DRYNMRoRPRYJQRIZLRIZJQoVIRoZHQYVGRYZFQ4ZESIVQSIVSSYlVS4NTTIRVSoRXSIJXS4VZSolRS4tRR41QTIxPTY9PTZBNTZBRSY5UR5BURpFTRJJSR5FXSJNRR5RPRpNNRJRMSZZPR5FNRpBLQ49LQY9KR45KSo5JS4xJSotGQ45NQI1OPY9OQIxRQopRPotRQolTQJFPPpNQO5VNQJVRP5dSQJlTQJlWQppSP5RMPpVJO5RHQJZIQJdFP5VDQJNEP5ZCO5BHN49HPI1IP41HPoxEQYxDQYtAP4o/Q4tANpFMNZRMM5RNNpBON41RNYxNNpVKNZhKMphJMZlJNplJMpZHL5VGK5VIL5NELZNDMJFFLpRKLJNMLJRQLZBNLY9KK49JLo1KK41HLotJLIpFLZdOLphQK5pQK5tSMJpPKppPJ5tPJJpSJptNJZlMJ5hKI5hMJZZKI5ZKJpZVJJVXJZNSI5FOIZVQKJdWKZZYKplZK5pYKpRZKplbK5tdKptfLJ1hLJ9gLJ1jL51dMp1cNZpeM6BdNaBdNqBbNqBfMpxhM5piMpdiNJZiMZtlMJdhMJVgMpJeLZJeLJVhMpZcNJVaNpRbN5NaNJdYMpdXMZVVNJRUN5ZdOZVeOZJfO5FfOpdgOplfPZpgPpxgPZ5fN5JhN49iN4tgNY9jNZFlNpBnN45nN5JpOIpaNI5aMoxYNItWMopaOY5aPI5ZPYxbP4taPZBYPYxdP4tfQIdfPoxhPIhePIVePIZaOYRePoJbP4FZP39ZP35bQoJZP35XP3tXQHpVQXtUPHpWO3tbOHtYOXtdNnxaN3xcNnxeQXdWQ3ZVQnNUQHNWRXZWRHVYRnhWQnJSQXBRP3JPP25OPWpNP25KQnFLQnRKPXJHQHZIPXVGPndGOWlMOWdKO2dJOGZJOGRIN2NEOGFJOWFLPGFLPV9KPmBHP1xIMmhDMmpFMGRFMGJGLmFHMWBDMWpALmxBLWtDMGw8Lm5AK29BKW4/J25ALHJBKXNCKnZBKHdCKHlCKntCJnpDKm49KG07Jmo7KW05J2dAJWZAKmU+KmI+KWI7K2E/J2hCJmlEIWhDJ2pGKWlHJWtIKmpJI2xCIXA/IW9EHG9EHnNEIW0+IW47IGw5H204IWo5IGg4HWY6ImY3JGc3IGQ1JmQ2HGg3GWU2GmQ0GGk3FmQ3E2I0EmQ1FWA3FVw1EV42E2EyEWIwD2ExDWMxEWAuE2EsE2AqFWEoFWAmDl8yDF8zCmE2DFw0CVs1B1wzCFwxBVw0DWI5DmQ5DGY5EGE7EF88EGU4EGg4EWk6Ems6Emc8E2g+Fmc+FmU8EmdAF2g/GWVCG2tCG2s+HWVBHmNDHWJHIWFAIWFFIF9AHmZGHWdIG2dJGmdLHmtLH2pNHm5KF2dIFmVJFWRLFWhGFmtFFWxGF2tEF2NHFmBIFl5LGF9GFl5EFVxEFmBCE1xCFF9AE11AGGBRHWBNIWBMHlxMFmRQFGNQE2NSFmdQGGhRGGhUGmlVGmlYE2JOEGFOEGBKD2NODGJOD11MD1xKDVpLDFlKEVpKEFpGEldHDFtNCVpOCldPC1dRCVVOCVNPDFFRB1FODVJND1JNEVRNElVLEFBLElRPFFZPFlVOGFVQFFdSEVlSEldVF1VMG1hLGFNIF1FIFlBFFlJEFVJBFlBAFFRAH1VMIVROI1VPJVVOIlZRI1lIJFdEJlpJJ1tHJ11GKVpGKF5FKltEKl1DJVVIJlNGJFFFJFBDJ1FIKlJJK1NGLFBFIlFGH1BFHlJDHlFBHlBHHk5JG09MG0tKHlZCHlY9HllDHFpEG1hFHVxFIlZAI1U+I1M6JlY+J1g+KFQ8JlpAIk89IE49H00+I00+KEw8KE8/Kkw9Kk4/HlA7HE87G084G1E3GlE9Gk43GU41Fk81FlAzGEs0G0ozHEoyG0k1FU83E1A4ElQ3ElA6FFE8GFc1GFU0GFg6Flg8F1k+FFo7GFk1GlkyHloxGVwxGlwvGV4zHVo1IFo1IVk0I1kzIFo4Hlw5H185HVw7HmA6HF48HGA8IVY0I1QzI1UxJVQwIlI0IVYvIVYtJVgrH1csI1ouJFwtJ1wuKF0tI14uIV8tIV8rH2AuKloxLVkvKVk0KFs1LFg0Kl01KlcuK1UtLFcrLlYpKVMrK1kqLVspL1wqMF4pK10oMFssMlstNF8rM1kuNlsqOFwpOFonNlknOlwqOlomOlgkPVclP1glO1kiO1cgOFohPVQmP1MmQFIkQ1IlPlEoQE8oP1IiQVEgQlMfQlMdQlUgQ1cfRlceR1UfQ1ogR1gdSlgdS1gfTFkgS1UfTVUiTlMhTVEhTFQkSlclSFckS1gmUVMhUlEgUk8iUU8kVVIgVlMhVE0iVEskVkwmVUsoVUkjU0ghUUgiU0kfV04lWFAnV1IoVFIoW1EmXU8mXU0nXk8kX0smYE0lWFQoVlYoVVcsVVcmU1UqUVQrUVQwT1IqTVIsTFMuTE8sS1IvS1AuVFIuVVIwVlQzV1AwVU0wWFAyVU0tV1UwWFcwV1oxWFwxWlgvU1sxUVszUFwzUVsuUV0tUV8uUl0rUlk0UVk3U1w4UVY3UFQ2UVI3TlQ2UFo6UFw8Uls+Ulk+Tl09U11AVFxBV10/WVtCW1tCW1g/XVpEXFhFXlo+X1k8YVU7YVs7YF08X1w/YFY/YVRAYFI/YVA/YVRDXFA/XE07WVE/WVJCWE8/WlBEXFE6XFE4XU41XFM3YUs4YUk2ZE45Zkw4aE05a0s4bU05YEo6X0g7XUU4WUU0V0o3VUk1VEw6XEgxXUUvXkowXkouX00tYEktXkAxYkM1ZEU1ZEUyZUMxZEcxWz81Wj0yWj83WD03WUE4WUAyV0AvWD4sVkIvVUIsVEMxW0EtXEArXTwpXkEqYEEoYUMoY0MlZEUkXDcsXjcxYToxWDctVzcrVzUqVTkvUzcuVjgxVzkpVzknWTgmWDckVzwmVT0nVD0oVD8lWzgnXTYmXDIkXzcnYTUmZDYmZDgmZTQoWzMoWjEpWDAnWS4mWTArWzAtWjAwXS4tVzEmVS8hUzIlUTEjUTInVzIiWTIfWi8dWjQfWikfXSwjXikjXy0jUikhVSglVSYmVyQmWCIkVSceUycdUikcUCkaUiscUi4cTy4cTi8bUi4ZTC0fTSwjSiseRyseRiofRi0cQysfRC0dSi8iSi8lSCsmSDElSisqSCsrRi0rTCwsTS4sTC8pRyktRSkuRSswQy0wRScvSy0zRiw2QSw1Qik3STA1STM5SzM0TDMyTTU2TTUwTjI+UDI9TC8+Sy9BSi09TTQ/TjZDTDVETzg/TTpAUDg9TTw/UDZEUDlIUTpHUjVIUjVLVDNMVTJKVDNOTjxKTjxNTjtOSz1KSjxISz1FS0BFTz5NUD9QTj9STj9UUUFQTD9RSUBSST1TSDtSR0FQST1VSDtXRjtYRT1ZSjlYSjpbTT1ZSz5dRDlZQjpaQjpdQjheQDhZQDhXQjhVPjhWQzxeQzxhQDxiPzxgRD5hRz5hSEBjRkJjSkFjQDtkPj9mPzloQDppPzdnO0NqNz9oNz5qNj5mOz9rPEBuP0FtP0NuPD5vQEBsQ0FsREVrRD9qQUNoQUVnQUlnPkdqPklrP0ptQExuO0lsQUhuQ0hwRktwQ0ZxSEtsR01rSE9rSUlqSkdqS0ZsSkVoRU1qRE9pQlFrQVNqQk9nQVFmQ1FuQlJvQ1VwRVVxQlFyQldvQllwQ1h0QFtvRVtyR1t0Rlp5SV10RF13Q115QVt6QVp8QV96QmJ6Q2J9QWF/QFp4P1d4QVV5QFR7Pld2Q1V4RFN5RVR8RVJ9RlN3RlZ8R1d+RVWCR1l+Sll9SFqBS1x9Q1eAQVeCQFSEPlmBP1OAP1GBQVCCQE6EP09+PVB9PU96Pk16O095RVCFRU6HRVKGRVOJQ1KKQ1GMRlWJR1aHRlaLSlWIQVKJP1GKPk6NPFKJQE2JQEuJQkiNQUmHQUeHP0WIPUaIP0OHREyLRkuNRkuRSE2MQ0+SRFGTQ1KVRlKSR1STRFeRSlSSS1aTRliURVqUR16URFuWSFuRSl2QSmGOTFuPTl2OS1qNUFyMR16ORV+MRGGORGONRF6LRF2IR1yIQluHRGGQQ2KRRGaTQWGTR2OTSWWTSmmSS2SUSmiNSWeLSmaKTWiNT2iPT2aRUGqQUGeTUWqSR2mLRmiJRmqGRmyHQ2mKRGuLRmqNRmmER2qCRWmARWaASWqBSmx/S2uDRGp+Q2l8R2l7QWp7RmZ3SGd0RGR1QmR0QWZ1QmRyRmp2Rmx0SW11Sm1zRW50RW93Qm10SW13TG14TWt5T2t6S296TWd5UGR3S2V5S2J6TGF3TmJ7T2d1UGZyU2ZzVGVxT2dwTWZvTmRtUGNuTWRrVGd1Vmd1VmN3V2l3Wml3Wmh5W2p2WWR1WmF1WV94XGF0XV90YF9yYWFyYF1xXGJ5XWF7WmB/X2J8WWJ8V2N+VGB/VWV9VGZ/UWV/VWaCVWB7U156U1p9U114Ult3T1x3U1l2Tlp2UVd1T1h1TVZ0V1t8WFl9V1l/V1iBWll8W1l6XVl5WlZ5V1yAV1yDVVqGWF+EV1+GWF6IVWGHV1+KVWKJVWGNU1yDUFuDUFiDTleDTl2CTl+ETV+GUGGDTGGHT2OFTmOHTmWIUViBUVWAUVGCUlV+UVN8U1R6UVF9VVOFVFOHVVKJWFOFWVOCW1OCXFOAXFSDUlWIUVWKU1aOUFOLTlSNTlaOTVKNVViLVlmMWVmPWVaNXFOKWVKPYE+LY1OMZVKIZlWKYVCIYU2HY0mHYE2EXE2EXEuCZ0yMZ0qNaU2IaU2FaEuEak6EaEuBak6BaU2AaU1+aE6PZk6RZ02TaVKSalKNYk2TYlCUYk+XYkuUYEuWYEuYXkqVYlKTYlSVYFWUX1WSZFWVZVaSZ1iTZ1mVaFmRX1eVXVmUYFyTXFqWXl2PXV+PW1+QXlyMXlmJYVqMXmGPXWSPXWWNXmWLX2WRXmeSXGiRX2iUW2eNWmiLXGqKXGuJWGmLV2iNV2mJVWqOXmuMX22MYW2IYW2OY2uLZWqJZWaHZ2mKY2mFYWiEY2eCY2WBX2mDXWeEW2iDXmSDZGmAZWl+aGh/aWd+Zmt9Z2p6amiDa2WDbGSDa2mFamyFa2yDam2HaGGEaGF/ZmCEZ2GJY2CIZmGLYmGKZGGMY2GOal6Ba11/aFp/bVx/b12Ab2CAcVyBaFx7Z1p6aVh5all3ZVt4ZFl2ZF15alR5aVJ3ZlJ3a1N7bFB6bVB4a097alF1a0x2ak9xalFwalRxaVJualVvaVRtZ0l2a0d2ZUh2Y0l3ZUV3Y0p6aUdya0Zxa0pvakVvaEZubERtcEpwb0lsc0lwckdycEZycU1tcE5qckxpck1mcVBqb1Jsb1RtcVRub1ZrdEtqdUpodEhndUdld0lqeEprc0ZocURnb0RjcENpckFqc0Jscz9pdUFtdD5qdT9sbkdmbEdka0pka0tmakZkaEZmZUdlZ0NoaktjaU5jZU1iak9hZk5mZE9mY1FoZVFqY0xoYExoX0poYlNnYlVpX1VqX1ZrYldnX1dlXlVlXlllW1NqXlFuWlFpW05pWlJuWlJxWlByWk90V1NyV1ZwV1R0WVhxWU5wWktwXEtxXUlyWUpuVkpuVUxuVUhtXkxwYExxYU5zY05zYkxuZEtvZUpwZkxtXlF4YFR0YlVxYVdxY1huYlpuYlJ5ZFV8YlB9Y1F/YE59YVZ+YliAY1eCYlaEYFmAYFyCYl2AXl2CZleFaFmGaFuFaFWEaVSGalaCaFmIalqJbV2IalqMbVmHcFmGb1SGclmIcleKcVeCcVSBc1OBc1GAcVV+c1d+dVZ9c1l+dlKEdk6GeFOFeVWEfFWDfFKBflKAck6Ib0uIcFCKcVKLclOKb1ONcUyEcEuDcEaDcEyAdEmEdUeEd0eCeUiDd0aAeUZ+eEh9dkh8eUN9ekl7eUt6eUp3eEt2e016fkx5eUh3d0V0eENzfEZ0fEZxekZwfkZwdkV2dEN2cUV5dUB3dD52cT52dTx2cEJ3cEB8bD94aj96a0B1bUN9bUN/bT+Aa0SAakZ+a0V8cEGCcT+Dc0CEc0KGcDyFbzqGbTqKcDiGbzaEcDSEcDOGcTKCcDyJcD6Mbj+MbT+Ocj+MdT6Mdz+Md0GNeT6Ma0KKZ0GKbESIaUaIbkWJZDyJaDyFZTuEaT2DZzmMZjuPZjqQaTeNZj2OZj+QZECQYkGRaECRYUKNX0CLXkGKZEaMYkePYEmNXz6LXj2KWz2KWj2JXzqKWz2NWD2OVUCNWT2RWj+SXECQWkCUWESMVkWJWkaNWUiMWEqOWkqLV0yNWkyKWE2LV0+LWEOGVUKDW0KEXUaFX0OEX0aFYEGDY0WEY0CDZEKDVD6GUj+HUD+GVDuHUkGJUEKKT0SITUWIUEOMTkSOT0SQUUSRTUWSUUeFT0eBU0iEU0qGVkuFUkyFT0KBS0J/UECAUD5+Tj1+UUB8TEGDSUGESEOERUOESUCGST2HSDyHTD2HSUWER0iBRkqBSUmFSEZ/R0d9SUl8SEp6RUd8S0p9TEx9Tkx5TU1/TE+DS1B/Ukl6UUd5T0V5VEh8VUp9VUV+UkZ2UUV1UkJ1VEJ3UkVyUkNxVUZyUkB0Uz50Vz10UTxzUTxwTz5vTj9wUD5sVj9xWD9xXEBzWEBuWUJ0W0N1W0J4XUJ4WUZ2WUB4Wj96XTx7Vz57WD2AWDp+WDyCWDiAWDqCWzx3XTp2YTl3XDl0WTh0WTd2WDhyYj51ZT54YkB0YkBxYj5wY0FwY0B8ZT1/YUF9YUR9X0V+Y0V9Yjl9ZDh8ZTZ8YDh+Xjp+YDaAZjd4aTd5ajZ4Zjl1aDdzZjZyZDRzYjNxazh8bjV9bDp+ajOAai9/aDOCZzWDZjSFZDSEZjWHaTF8aTB6ay95ay13ZzB4bTF5bzB4cDJ3cjN2bzR4cDd3cDd0bjdzcThzczhvdTlwcTxwbz9wbTxwczZudTVtdTZqdDhqdDJscjJqdzZpeDdndjdjejdmfTdnfTZpfzdrfDRqdDVmczRkcDVicjFlcDBjcS9hby5kbjllcDtkcD1kbjpnbThpbDZobThrcDphcTxgcD5fcEBgcjtebj5ebD9ebUFcbkNda0FgbkNYbUZWaEhaZURXZERbZUBaZENeZT9cZEBeZklXZkxYY0xXYktVZ05WZ01UaU5YakxTYUxZX0xYXU1UXk5aX01dXk5fXUxhXE1jYE9VX1BSXk9PYVJSYFNPYlNNZFROZlRNaFVOZ1JLYU1RYUtPY0lPZUpPZ0dRaUlOXUlRW0dUWEZVVkdWWERTWUxRV01QVU1MVk9RVk9TWFFQWk1KWUtJWEtHXU5KWUdJVkdJVUZHWkRKWkVNXERKVUhLUkhLUElHUUlNUUdPUUdRUEVTUEhWUENXU0tIUk1GUktEUUtCVE9GU1FIVVNJVlNHVFRLVUlBWEhBWEc/WUdDWkY+UURCTUNAUUJFUURHU0FFTkZDS0dDSUg/SklETUk/TUo9TEg5T0w8T049TlA7T1A/TVI8TlI+T0Q6TEI3UUM7UUA5U0Q6SUE7RkE4SEE+RkY1RUc0REc5Q0c7QUU7QEU5QUM9SEY1SUYzSEQvTEczTEk0TUcwT0o0SkIySkAxRz4vSz4zTj0yTj0wTz8zQz8yQD8vQkA1Pz02PkE0Q0IvQkMtREMrQ0MpQkYuREcuR0EpRz8oRz8mSkIqS0QqTkQqT0QoUEMnUEAoUUMlRTspQjomRjkrSDksSjkpSTYoQTwpPj4nPkAoPTwrPzgsPTovPT4lPUAjOkIiP0AhQT8iP0IfOT4iNz4hNT4lNzwfMz8hLz0gMEIjMUMlM0QkMEQnNEYmMUYoM0coNEgpKzsiKT0hKj8gKjolKTsnKTsoJzshJTwgIkAgIzsfJD4kIz8lJEEmJEIoIj4nJkIlKEQmKUUqJ0YmLEAqLj8pLj0oKj8sMD8qMjsrNEArNDsoNTgoOTkpNTclMzgkNjUlNDchNzYrOjEtODUvNzcwNzgzNzozNzs2Nzk3Nz02OzMqPTEpPy4rPjEmPDIkPjIiQDEiPDIgQDIsQDUwRDMtRjIuRTIqQTIyQDM0RDI2PzE1QjY2Qjc8Rjs5RTo1RDQ+RjVASDVAQzA8RDBBRC48RTZCRjdERjVGRDVIRTlFQjlGRDtDSDRHSTNJSjRLTDVLSjFISS9HSy1GRy5JSTRNSjVPTTJPSDVRTjVRUTBTUjZSUjhRTjJVTjFXTixXTDJYSzBaSTFcSzRdTTNeTC5USyxTTipSTihTSixRRy1SRS1QRixUTytQUSpPVChRUitNVCpMUCxLUytTVStVVSdXVS1WVi1YUSdZUSRXUSNYTidZTilbUCpcTCpbUSVVUSNTVB9TUCNRTiBPUiBOTh5OUh5NUB1NVSNUWCJUWCFWWiBWWiRTWSZRXCdRXiZQXyZOXidMYSVOVx5dVyRcWSVdWidbXChcWypdUx1bUxpZUhlZUB1bTx9dUSBdTR9dVRpYVhhWWBhWWRdUVBlUUhlUURZUUBtUThZUThpUTRhUWhlYXxlVXRZYXh1TXx9TXiFSXB1RWxpQXBhQWRpPXBZPWBhOWRZOYSFWYyNUZCJSYyFYXyBbYh1aXh9cYRxcXx1dXRteYyVUZSdTZihVZilWYylSaShUbSpRbSdWbylXayZYay1TbC9Rby9OazFRaTJRaTVSajZQazhNZzdOcC9Scy9SdC1Rdi1QdDBUcy5WcS9XcTBZby9WcytQdipLcidPciZScyVNcSRScytLcytJcS1Iby1JcylHbyhIcSVGcC5GbC5Eay9CbzFDcTNFczNEcDRGaypDZipEaydDbSZCbihAbiRBcCc+byNAcCU+ciQ8aCtHZitIYi1IZyxLai9KZzFMazFLYzBEYC5DZTJDZjRFaDVEZTVHaDZGZzZHYy1BYitAYCpBXylAZCo+YCdEXCdFYSZHZCVGZSRHZCREZyNGZiNEXCxHWCxFXS5KXC1MXzBLWi1AVis/Wy4+WSY/WyQ/WSE9WSBBWR49WR5BVxs+VSVFUSZFViZIWCRIWSRLWCFHUi1EUy5GUTBHVS5HUCg+TCY+USg8SiFBUCBBTx5CUh8/SyRFRyRFTCVISiZJTSRJSSdDRyhCRiZARCZARyU+RiQ8QiE9RyM6SSI7SCU5RiE/RR5AQh9CQR5CRh1CQyJDQSNEPSNEQiVFQiRIQyZJQCRJPyRBPSU/OSI+PSY9PyU7Pik+PSQ5PB49ORw/Ph08OhxENhxFPBxGOCBFNSFFNSNENSVFNSFINh9JNB1KOB5KNBtMOBxLNhtMNxlOMCZBMCg/MiM+MyE+MyBBLyZDLSdDLilFLCtFKyZFKCZEJyhFJSlFJClCMClFMStHMyxGNC5HMSpJMixLLy1MMitONixCNzBBNitANCs+NS08NC47Nyw7MzBBMzJBNTZCMDNALzJCNDNFNTVGOTdHNTRJNTVLNTRNNDJNNTZPOTNFPDRFPTVDPzZDPTFFOzRBPDY+OjlAOzU8ODU8PDU6Pjk9Pjw9Ozw5QD08Oj48OD87Nj48NT8+Mzs7Mzo+NDk/Mjk5MDo/LjhBLDlAMTtDLz1DLj1FLz9BLD9FLUBCLEFEKkJELTZDKzZDLDdHKjNDKDdHKDhJKjdMJTlKJTlMJTxIJzRLKDJMKTNPKzJPKjFLJzRQJzVSJzJVJTdTIzVTITZVIzNSKjRVLDJXKjJZKzFbLjNXLzNVLjVYKTRaJzRcJjJcJTFeJjdcJTJaIzBaJC1aIytaIjBXJy1ZKCtZKShcKyxYLSpYLCdXLiVYKipgKCxiKSxkLSpgLi1gLilfMC1iJixhJC1jJCtlIiplIi1hJixmJippJStqJC1qKSppJCpsIytuJC1wIy9xIilwISdvJy1wKC9xJzNwKy5xKyxvLixuLy1vLyptKDFtKDNrKTVsKTdtJTRrLDVrLjdsLjtqMDVrLThoLDpmLjtlMDplKjxnLj1kMD9jMT5hMz5gMDxfMTtdNTheMTxbNjxeODtfOTdgOT1hODdkODNjNjdmNzloNjVoNDViMzNgNTBdMTRgNjRdNzRbOjNbOjFZODZaOzNdPTJePi5dPzNgOy9fOixgOSteOildOC1iOC1cNyxaOilXNi1YPCxYPixXQChWQC5XPylaQCdbPyVbPyNaQSdePihfPCVbOyNaOyJYOyBXOCRbOyRWOyNUPiFSOyVSOyRPPSdSOSJPQiJUQiBVRB5URCRVRiRURiVRRiJPQR9XQRxYQRhXQBxbPh1bPBxZPR5cPhlTQBhRPxdQPBpSQhpRRBlQRRdRRxZQRRtPRRdURxZVRhNVRBJURhdYSBJWRw9WRg5YRQ1YSg5WSw9YSw9URhBaRQ9cRBFeRRNeRw5eQhFeQRNfQBNiPxJjPxRbPRZfPBRaQhVjQhVmQRllRBVnRRNmRBZqPhdoPRpoPhtqPhpsOhloPh1qPh9sOx9tOyBvPyFsOh5sNx5tNRxwNR5rOBpuNxhvNxZuNxZsOBRvOBFuOhFsOxNrNhBtOg9qOw9oOg5mOA5mPg1oOw5kOg5iPA1gPg5fORBhOwtfPQpdPAtaOgxaPAddPgtZPgxXPgtVPwlVPw5WPAtTPAlRPwxPOgpPOQ1QOg1TQAhPQghOQgpLRAtLQwZNQApKQBBIPwpGQAhFPgxEQghEPQ5KPBBLOxFJOhNJPRJMPRFPOhRPOhJSOhBHNRFHOBBBOA1DNhNEMxREMRNDMhJBMxdEMRhELxhCMBhGLxJELhFDLBJBLBE/LBRBKxY/KxY7KhhALxY9MBY7MBQ4Mxc8NBY+Mxo9MRA7NA86NA44NRE6OBE6ORE8ORI+OBQ4Ow87PQ89QBI8Pw08PhI/PxVAQxZAPhZCPBdBPhVEQxNCRRBDRA5ERRRFSBRGShRESBZITBVGSxZIRxdKTBdJSBhLSxhLSA9DTA5FSQtBSglCSQdBTAhCSQxISwxKTQpKTgpLSQtMTQlITwdHUQhGUwdGUAlEUgpCUwxCVQ1BUQhAUQ5CUxJDVRNDTxJCThE/ThE9SxFAUxFFVRJHWRJHVBBKUhFLUBFKUhNNThJLUBROThNNWA9FWg5EXRBCWgtEWRFBWhI/XRZAWBM9VhM+WBE7WxdEXxhFWRhGWhlIVhhFXRRGYBRHZBVFXxFHYBFKXhBMXA5LWg5MWQ9OWQxLYRNCYxNAYxZAZhdAYhI+ZBA+Yw5AZQw/ZApBYho/YxtBZRxAXxs/Xx4/Xho9ZBxFaBxGYxtHYR1IYh9JXx1GahhEaxhBbRdBahVFbBRFaRlAaho9bBs9bB0+aBs8Zxk7ZBo5ZRw3cBw8cSA6cho6cRg7bhg7bx44ayE3bx80biEycCMxciMybyQvbiQ3bCU4byg3aig7aiQ7bCk1bCs0bC01ay41aysxbCkuaScwby42cjE1cC86by07cTE7bC48bzQ2cDU0cDg2bzYycDgxbzMwcjk2cj00dD0zdTw4dT45dz87d0E9dEE/cT81cEEzc0Iyc0M0bkIzdEIwdEYtd0ItdUIrdz8udkcxeUsyc0oydEk1cUo2cUg4cEw2eU8vd1EyeVAte1IteU8qe1I0elU0e1YyfVI2fU83ek04e1A7eVY1eFk1eFk5dlkzdFk1dlgxeFw3eF45e2E4e2A8fWI8f2E7gF86gWM6g2I4hl85hGU3gWU0gmg1f2YzgWo0f2gyhWI8h2E+hmFAhWJBiWI9iWQ9iGBCiGFEiWVDimBGil1GjF1Ii1pJjVlLhmhGiGlHiWtHhGhHgmdFf2hHf2lJfWdFiWdJi2hKjWlJjmhIjGZMimVNjmxJj21Ikm1LjHBHkXFHjHNHl25Gl2hIlWZJlmRIlWdMmW1KnG1GnW5Mm21NmmxMn3BHom1HonJFpHJHpXRGpHZFpXhFomxDo2pEpWlBpGpAomhEo2VFoWNFn2NGnWJFnmBEm2JGpmhCqGdAp2U+qGM+qmZBqmVDqmVFqmJDpWU+pGI9omM7oWU6omE/oV89omE5oWE3nmA4nGE2omA1oV02oVs0ol04m187l2E7nF09nVs8nFk7nVc6nVY9m2M7mWU8mWY4m2c9m2dAm2VBnGlBlmc6lGg4k2w7kmQ4kGg3kGM4lGw3lG83kG83lHA0knE6j3I7jHM5kHM9jnM+jnNBkHRCjXdDkXhDj3Y2kHY0knQ0j3k3jHo3ink4iHo4h3s1kHcykXcwlXYwkHgtkngrkXkpk3gnknollHowl3owmHozmnozl30wln4ulnwslYAul3k0mXY3mHQ3lng5lXs5lX04lH85kno9kX88kHs+kH4+m3Y3nXQ3nXQ7oHU2oXM2oXE1o3M3nHE5nG87nm88n24/m206nG04m283oG87o3E9pXE/pW46o3Y+oXhBpHc8m3VCmnVDm3g+nHo9nHo7nH4+nXw6nX47noE6mnBCmHBBl3JAl25BlW1Ak2tAk2tDkmo/kmZAlGY/jWo+jGtAi2s8i21Aim08im4+kWRAkmJBjmBBk2FDlF5FlV5BkV5AjVw+i1w/jltCkFpEjVw7i1w6ilo5i1g5jV03j1w4kFw6hlg5hlc2hVk1hFk6hFk8glc6h1U2hFQzg1I0iFIziFExi1M0g1Uxf1EvgFYuglItgk8shlAqgE8qgFAogVAmgFMoglEkgFQmgVMkgVUihkwriEwqhkomiUorikouikwmjkskik4ji04giFAjjEgijkgdjEQgjkMfkEIhjUAekUgfkkkdlEgclUYdlEwdkk4elUsglUgamUgXmEkVlkQXlEUWmEMWm0kYnEoWn0oXoEgXm00WoEwXo0wXpE4Yo1AYpEwVpU4aplAcqk4bpU8eo1Afpk0fqlIcrFIcrlAfrVAgrVQdrFYbrVkbrlkdrVoZsFAesU4gtE8gtU8esUwgtU8it1AiuFMhtlQhulMhu1Uhu1Yeu1gdvlYhu1Qdu1QauFQZuFQXvFIZu08atFQas1MWs1YatE8Zs04XsE0Xr00ZtUsXr00VrEkWrEgUq00Tq1ATqlARqlEVq0kYp0YYpkgZq0Uaq0IarEEYqkAWqj0XpkQXo0MapEEbo0IVpEMToUQboEQdnUQdnEUcoUUfpEUgoUgenEMfmkMfmUMimkEjmEEemT4flzwelzofmjkgmEQil0UllUYlk0cjmUYmmkglnEomnUkonUsllEYnkkoplEoqkUYqkEQqj0MsjkQokUwokU4oj08qjU4pklAmklInlFMoklQkkFAsjlEtjlYtiFUpilUmh1cojFYmiVkuhVwtiVwxil4wjFsxhFwwgl0wgWAtgF4yf1szfl8xflw1hGEvhWMvhmMshWUqhmUwh2cwiWgyiGg1h2EsiGEphmAnh2Alil8qjF8rjVsrkF0sgl4ngV4jgF0of1snfVooe1kneVgoeVgrd1cngWElgGIjgmMhgWIff2UkfWQlhGMihmQgiGIdiGUiimUghlwbiFshilgfhlcgilYehlUeiVQegVwcgV0agF0Yf1wef1ogfVohe1sgfFgjgmAagmEYg18UgmQZgmYXgmgYgWoWf2oVhmEXiGAVi18XimIUiGQTh2YTiGMQjFkXjlkYiFgXh1gVh1sVjVkUj1kTkVsUk1oVj1gRjVgQkFYQjFYOkF0UkV8Ukl8XlGAYkGEUj2ERjWARkGIQkF4ZkV4blF0djl0cjlsgjl8gjlsjjl8jjl0kkloblFgbl1kamFgck1YakFMaklQel1oYml0ZnF0ZmVwVmV4amWAcml8enGAfl2IcmV0fmlwhnVsjmFohnVofn1ken1cdoVYdnVUanlUXnVcXm1Mam1Idm1AdmlQfm08fmlMhmlAhmk8knlMWn1QTnlATolQTnVIQnFAOmk4Qm0wRnk8NmE8QlE0Qk04PlVAUk04Vl1EVlEsRkkkPkEoQj0kSkkcQj0wPjE0QiUsRi08OikkPiUcPiUURiEQRiEYMh0gLh0oLhUcJi0YSjEQUjEYWjUUYjkMTj0IRkUERjUARikcWhUgZiUsYjEwXiU0ai08WiEYchkUdhUcfhkgghkMdhkEbhEIfhz8cg0gfgkkhgUcjf0YjgEsggU0fgE0cgVAbf1EZgkglgUcpgkkrhEUoh0Img0Emf0cqfkgsf0cugEUue0gse0cpfUYpfkgwf0cze0Qyfkg1f0c3fkk5f0g7f0o9fUA0fD0ye0A1fEI6eUQ4fEM8eUU6ekY+fz4ugDwvgT8sgEIsfjoufzcvgTYtgTcrfTYvfTMvfTMyejIvgzUvhTQthTEuhTEwhzUthzcsiDcqhjktiDkohzsrhzsphjAtiSwsii0qhSsshSkthCcsgigrhCUtjSotjCgtiycrjisvjy4vjS8xkS8wjSYvjSQviyMwiSQwkCMwkiUxkSYzjyU0kigzjCEyih8ziCA0hyA2ix41jh00jhwyjxw2hiEyhCMzhSU0gyY2hyY1iCoziig3iyo4jio4jyw5kS03kSw1ki84hTA2hjA4gi01gCszfis0fCkzeikzhjI1hTY1hTYziTQ2izM3ijM6izE7jzM8jjA+hDg2hDw2hT03gTo3fjk2fDk5fTw6hD00hkAzg0M1hUExh0MwikEwh0QuhkM5hkY4hUg5h0M7iEY3iUk2i0g0i0Yzi0o4jEw3jEo0jkoykEkzkkkxjkwxkEg1kkc2kkY5k0Y6j0M7jUE6jkU9jkM/jkVBj0dBjkRDij0+jDs5jTw3jjk2jDw1hjs+hTg9hTc7gzw+hD4/gUA/fz8+gUI/hTc/hDQ/gjQ+gDU+hDNChjREhTNGhDVHgzVKgjI8gDI6fi85fy49fiw9fSs/fixBgCo9gCg5eyo/eilBeidCeiVAdypAdiw/dS5BdC9Bdi1EeiZEeCNFdiNGeyRIfCJJfSBIfSNLdh9Ddh1FdxxFdh5AdR5HdRxJcxtJcRxJdR5LeBtOdh5QcxhKcRdKcBhOchRKdBVJdRdJbRdMaxhOaxhSaRdNaBdKbRVQbRRTbhZWbxFScRZTchhUcRpVcRtXdBhTdhZSdxVUdRVQdxNPeBJRehBQbh1UbB5YbB5SayBSbh5PaxtWaRtYahpaahtcZxlXZhpVZBtVZhlTbBlabhlcbhtfcBdccRVgcxhechVidRhgdBdicB9dbiBebiFgcSBbdSBYdSBdaiFeaSJiaCFcZCFfZSRcYiNgYyZdYCZfaR5gaB1jah5naBpiZhphZRdhYxtibB1kbh1mcCBocRxlbyRlbidocCVjcCRhaSVoaShnailoaiVraSNsaiFraCNuaR9taCBvaCdlZyljZStkZS1jZylhaSpfaS1gaSldai5eaitbay1cbC9aYyplYStlYCpoXSpoXypjYSlpYShsXyZrXiVtXyptXyVpXSNoWyJqWyBrXyFoWiRrWCNsVSJqVyZtViBtVB5tUx1vVB5xUxtvUhlxVRhxURdwThdwVRh0WBd1WBV0WxVzVxd3VRl4Uxh2VxNzVxFyWRFwWxBwVQ9yWBJuWRJsXRRqVxNqVhVrVxdqVBVrXhduYBVvYhVuXRlwXBtvWhpuXB1wXxNwYRJxYRBvYw9vYBBzYBJ2YBB4Yg54XhB5YA9tYA5rYg9qZA5pXg1qXA1rWgxqWgtoWAtrYhFpYxNoZxNoYhVnZhNraBNsbBFsZxRvaRNxbBRxbBZwbRJyaQ1sagxqbAxpaAttZwlvZwtxZgdvaQ1oag1mbg5kaA5kaQ1haQtgag9gagteaw9dawxdbhJnchFnbhVocBZpbBZncBBqcg9rcw1qdQxqcQ5ucQxocgpndglkcAhmbwZobQVnbAVlbARpdhBgcg1fcQtecAlfcQpcbwhecAhcdw5jeRBkfRFiehBmew5gfQ5ffhBbfQteewpdewpaeQleeQlaeAlcexBdexRbdxNbdhFacxFadQ5XchBZcQxXfBVdfhdegBhafxdgfRhiehdifhlkhBRbgxRYhRVXhRJchhNehRRgiBJfgRNYgBNVgRZSfhFVfw9WfA1Vew5VfAtWfhlVgRtSfRpWehpWfR1WeRtZhRtWhxxShhtYhRtaiRxXhR5bhRhThhdRhRhOhhlNhhRRiBNShxBShg9RiA9TgxlOghpMgx1KfxpNfhlLfBdLfBZNexZKgx1OhCBOhyFMhCFQgSFRhSNQgSJUiB5Oih5Nix1LjB5JixxPjhtOiRtKihtHih5EiBlGiRZHiBRGhhVFiBJHhx5GhiBFhCFGgSJDgyVFgCRCgidEgCdCiSNHjiZFiyVKiSZMkCFFjyFCkSFBkR9GjSFBjCE/jSQ8ih8/iR88hx08hR49gx87hB85gSA8iCg+hyo+hiY9jCxDjy5DiytGiCtGiy5HhypIkytDky1FlS5FlCxBlCs8kyg/kyxHky1KkS1LlytKmSpLmStNmClPmyxKmy9JmzBLmi9Hmi1Omi1RmC1SmCxUnC9Sli5SlC5TkytTkitVki9RkzJRlDJPkzNTkypRkihSkyZUkiZQkSRQjiNRkSJNlyZWlidYliVamSZVmiVTmSNSnCZSlilYlSpbkylckylelS1amC5amDFZmjJZmzRZkSlajyhbjiVdjShYiyZZjSpYkSFbkiFdkR9fkiBZkh9Vjx5XlCJelSJgkyNikyJklyRgmSRikiVhkCZjjSRmjyhijSNiiyFiix5liiBghh5hiRxghRxiiBpghRphhBhhkBxlkB1nkBxpkhtkkhpikBpglBlhkR9okSBqjyBukiNqiiFsiR9rhx9riSNriiVsiSZujCdriihvjCltiRpqiBpthhhtihlpiRpviBpxhhtyhBp0ihpzihl1ixp3iBh1hR1xgx9xgRxwgyFwfx5yfB1yex90fCF0fyB0ehtveRtseB5pdxlseBdudxhqdxVudh5tdSBsdiNpcyFuciNtcSRwcyVxdCRzcyFzdiR0eCNseiVsfCVueyZwfCdyfydxfCd0fCJpfSFnfCFlfSJjfh9ngB9pghxpghtngxxreSFleCFjdSBkdyhkeSthdypmdClndCpqdixqciprfylffylkfy1mfipofSdafSJdfyFefCFbfh5eeidceClbeixZdCdcdSxccihdeyxcfC5cfi5afy9Zfi5efTBgey9ifTJhejFjezJjgStYgitUgihYhSZbhipbfitVfStSfi1ReypSeiZReSdVeSRReCVVeSNTfi9SgjNOfzNTgDVSgTJVhS9PhS9Lhy1QiSxPiy5PiipQgi1MgSxKfixIfilMgihLfTFJfzJGfDJLejFNei9NejNPezJGfDNDfDZDezdFeTNCeTQ/ezM+dzQ/fjdCfjlCgjlDgD1EgjxIgkBFhjtJhzxMiD5MiTpJijxHiD1GhTxOhT1QhjtShjlSgz5Qhz1UiDtWhjpYhDtXiT1XhzlZhTdbhjZdiDZdhDZahjRWhTFaiDJVhzBYiDBWhTVfhTFhgzFghjVjhzhjhzllhTlnhTpphzBihi5jhi1lhCxmiCxihylihShhiChkhCZhhCNkhy9nhy9phjNriC1rhCttgilthCdqgidsijFqizRrjTRpjjZpjDRtijRviTJvijZwjTJnjzNljjRjjTNikDBlji9kkS9njjZjkTdfjjpijTtkjTxgjzVbjjdZjDdYjjFcjzJYjS9ckDlYjzhUkT1XkT5ZkT1bkkBZjzxSjjtQkDpOkjxOjDxPjT9Pi0FPi0NPi0VNi0RLjEdOkDlNkjhLkTlJjzhHkjVLlTVJlDVHlzVFmDdGkTtIlDtEkT9Gj0BJkENJkERHkEdHkUhKkEhGkTxCkjs/kz4+kj89kTo+kTdBjTc/kDVCjDZAjTJDlj8/lkE+mEM7mEJAmkBAl0NClz86mD84lj42lTw2mj43nD85lkA0lD8ylT4wlD4ukkEyk0IwkUI0lz0xmTwvmDkulzksmzwvnT4vnEAxnUIxnEQzlzgvljYvkzQslTQxkzQykzM0kTI1lTE1kDgskTgpjzcojzotjDosjjowkzkpkzomkzgilTsmmD4olD8nlDUlkjEkki8kljIjlzQhljUfmjQhkDImjjAnjDAljTEpijAmhjElhTEnhy0khiwniSsjhTMkgTIjhDcjhDsigTokfTMmejYofzAoejAofi4qejYkeDgkdjUjezshez0ifDoffT4hfjwgdTcmczYncTooczUqdDcrdTMudjcvbjYnbDgpbTgrajYmajQnaTkpaTosaDgvZjssZj0uZDorZD8uZzMtaTItaTAuZTItZTEqYzQtbTErbC8qbi0qaiwnay0kbCskZywnZCspaCoray8jbC8hbzIhazEgaC4eZjEgZS0dZDAgYy4fYS4ecC4hcy8idC8gdC0jcy0mdCsndiomcyopdjEfejIeejMgdzQcdzYddDQbezAdgDAbfi0ffCwhfCohfSkjfCkmeikmfSgngTIehjIdhzIfhDUcgTYbhjYbgTUZhzAcjDIaii0bjSwbjiwdjisajjQekDMdkjMejjYgjDchjDgjijgfkzIakzMXkzIVky8aki4clDUXlDYVljgVlzkXkjcTkTkVjzgXjzYXjjoYOj1ROkFRPT9UPj9POz5MPkFMPz1MPDpLQDpJPT1IPz5GPj9EPD1DPUJDP0NDPEFAOj9DOD9EOD5HNj9IMUFJMkVBNUJCP0ZEQEdDP0VGPEdEO0hBOUlBN0hCOUtDOk1CNU1CNUlENUhGNkZHNUZJM0dJMkZNLk1JMkpHOlBEPFFDO09GOFFEOFNFNVRFNFJGNVVHNVhHMFZHL1JMM0xPNE1LNE9KN1lIOFtHOVdJNlpKM1xKMlxMMVlMM1xOM15PL11QMFlOM1VOM1NPM1BTLlVXL1ZTNl9QNmJQN15PNV9TM2BTMV1VM19YNGFZMF5bMVtXMVdaNlNVNVdUNFlVNmJaN2RaOGBYN2BcNWFeNV9gOWBjNlxkNVtgN1pcOFlbOlRaOVRgOFZgO2FjPGNkPGBgPV9kPF5mPVxnPFpmQFtnQVxoQFhpPVhmPlRkP1ZcPllfPllhRF1oRV9qRF9lRVtnRlppR1doSVhmS1lnSlRnR1RlRVhiRVhgRVZbSFJeR1JhTVhoTFZqT1ppT1ZnUFVnUVNlT1JkVVRlU1BiT1JiTlZhTVdfTFdZTlJaT1FdV1ZjWVZlVVhjV1VhWFNgWFJeVlJdWVRcXFRcWVFZVVNbVFdcU1lcUFxYUlZVXVZbX1VaXVhdXFdZXVhXXFdUWVdVXllRWlZQWFhTV1tWVl1WU2FUU11NVVtQX1tQYltPX11SXVxOXVpMW1tKWVxMXF5JWV5HWF5LWGBNWWBPWGFQVmZRVWVLVmNKX2BHYF9EYWFJXmJGXWJEW2RDWWRFXmdBWWlBWWdFWGtHWmlMWmlOW2ZLWmZJYGhBYWg/YmhEXmxAXG5AW21CX3E/W3NBW3BEW29GXW1HXW1JXXBOWHZKWnNIYnNAY3M+Y3FCYXVCX3dBXXdEYHpEXXhGX3VIYHRKYXVQXnpOXnpMZH1DZH5BZXpDZH5FYoBFZIJJZYRJYoRNYn9MY3tLZHlMZHpOZndRZX5UY35QZH1PaIVIaIdHaYNHaYVLaYNMaYRPaIJQbINQbYZQaoVUaYFSan1QantQa3tSbHdTbHxXa35WcIVQcodPcYNQcoZUcINXc4RYdYZZcoNccIFYcX1acnlTcX1TcX9Ud4ZYeIhZeIVWeYRaeIRcd39de4BdfYFee31geH1ceH5YeHxWeXhTe3RbeXhbf4JdgYNff4NbgH9cgn5dgntegHpdhnpegnZfgHhcgHRZf3hSf3pWf3pYiHpdintfiHxbiXhbiXZciHRbhnRZjHNZiXBXhnhWhnlUhXpPhXJNhnNRj3RZkXNbj3dZkHNWj3FWj3FTjXJSk3FRj3FOjXNQjHZNi3xRjHlTjHZTlnJSl3FTlXVTlnNPlnJNmXVJlXZGk3ZKkXpKkXpIkHxMkH1QknpPknhOnHZKnXRLnHhMnnlIm3tGoX5GnX9Dl4FLlYBOmH1Mo39IpX5Hon5KooFIooNGoYdIo4hIn4pHnIVKmohLmoNOmoJQnIJNnYNLpYlKp4tIpodLo4tLn45MpJFOn5JPno5OnYxPnopPnohQm4ZUmoxUm41TppBQqJJPp45QpZFSppBVpJFXopFWpJBZppFbopBaoZNboYxWoYpWn4pYnohZnoVZnYhbnItcm4tenY1bn4xZqJNaqZNdppVaqZNYq5RXrZNWrpZVr5JXsJBVsZRYs5RYsJZVsZhWsJpYsJxXspxVs55Us6BVtJ1StJtRs5lSsppUsI5WsIxUro1Xso5Ysoxas41csYxetY1dto9ctI9hsotgs4lgs4detIVftoJjtohotIlkuY5cupFauoxbu45eu5Fgu5Biuo5jvo9iwJFivo9nu41lvIlou4Niu4hhu4phwpBhxJJhwo5fxI5jxY9lxY1nw4xoyYxnxolox4pqxIlow4RpwINhwYdiwohkzIxlzo1lyotjzYlmzolozoZozIVpz4Rn0oRnz4FpzINoyoNmyYVlx4RjxIBgyH1kyX5m04Rk1oRl0oVi04Fk1H9l031k0X1l1nth0nhi0Hxjzn1hzHpgzIBeyoJdzYFgz4Bh13tf2ntf135e1npd13dd1nZb03Zc1nZY2HVX1HVX1HNX0nZZ0XhZ0Xpaz3xZzH1WzHZSznZW2XdV3HZV2XlW2HZT2HRS1nRQ1HRR1nVO2HVM03RL0nVPznhN0H9S0ntS03lR2ndL3HZK2nhN2HhJ13dH1nlG1HpH2HtD1X1F031D03xH0YBI1IBN1IFP1X5N1X1L231D3HxB235F2X9B2X8/14E+1YE/2IM+2oQ71oU+1YU71IQ/1YRC1oNE1oRG1IhJ0ItD0ohC1IZD3IQ83YQ53YE93YY+3og93Io92ok/3Iw+3Y482I492YtA141E24lJ3IhF24lD4I894ZA64Y4+35E+3pM93JQ/25JA3phA2ZdC2pNC2pNH341J349F4JpA4Jw/4phA4JpD3ptE3ptH3phH4JtI4Z5J35pM45RK45VM5JNJ5JJH5pFG45NF4ZVG459I4qJI5J5G5Z9K5p1L5p1N5ZpO6ZxO6p9O6J1S55lQ6JZT6pFN6ZRM6JdN7Z9N7qFN7Z1L7p5Q8J1P8ZpR75lR85lQ9ZpS8pZR8pZU75ZR7pdM7pVK7pNL7pFI749L8I1P75FP95pQ+ZpR9pxO95hO+ZhM+pZM/JZO+JNL/ZFM/ZRP/JRS+pZT+pVV/JRW/JNY+5Na/pFY/5BW/5FU/ZNU9pFL9JFJ9ZFO945L9oxM+ItO+Y1P94pQ9odP+ohS+YxS9ZFU9ZNZ95Ba+Y5a+Y1X9IZR9INP8odR9YVT9INV9YRX9odX8oVZ8YJa84Zb9IVd9YhZ8o1W75FX8JBb8Y5d8oxc74JZ7n9b74FW7YRa7YRc7Idd7Ylb54Zd6Ylb6Itd64pa7IhW7IlU64xQ6o9T6pBV6o5X5YVd5IRe5YVa5Ihd4Ylc4Ytc44xb3oxb3Y5d341Z3Y9Y4Y5Z441X5ItW5YxU5I5T5Y9R5o9P45NT4pFV35Bd4ZBd3pFg3ZJc25Jb2pRZ3JRX2JNY1pRa2JVW15dW2pRV25JU25BU3I9S3o5N3pJN3pVO3ZVR3JNR05Na0ZRa1JBb05JX0JJW0JNU0pNSzpJSzZRQ0JBRzo9P0pFQ1JBQ1I5S1oxS2otP2JBL1pBNzpZQ0JdPzJhSzJdOzpdLzJVJzpRIyZNLyZJGzZJHz5BI0pFI0pJG1IxL0I1Kz45Jx5JNxZJNyZFPx49LxY9Jxo1IyI1HwopIxYlFyYpHyotLzIpN0IZOz4VIzYdHwYhKvohKwolNwoZJwYVHwoJHxINGwH9Jw31GxoFHx4FJx4RKyYRLzoJOzXtKyn5JyYBKv35LvH5Lv4BNwHxMwHpLwnhLxHpLwHVOxXVNxnlMynlPyIFSxX9PxX1Ov3VRvXNQv3hRwXRSwXFSxHFUxnNTxHFWw29Xx29Xx3NVx3ZVxXdUxXlVx31ZynhayXZZwW9awG1bv3FZw3BcxW5dxnBfx3JexXBhxG5jxnJiyHFjx3NgxnZfyHhixHpew3xdxHhdxXZdwm9lwWxmwHBkw3BnwnFpxHNqxXVownVswnRuxndtxXdpwndmwXlkv35kw35oxHxpv3Rvv3NxvXRtv3dwwXhywHpywXxwvXt0vn5xwH9zwH5vv3xsvXxqu4BmvoZrvoJsunx1unt3uXtzun91uIB1uIJ0uoJxtoNztYR0uIdyuYRwuIZstn9nt39suIBusoR0sYV2sYJzsYZysolysYpws4lur4pvrYxwr4pssI1ssolssoRssoNrsIBmr4Rlr4ZlsIdnq4tyrIx0q4hxqYxxp4tvqIttqopspoprpItrp4xnqYlpq4Nsq35pqoBmqYJlqYVmootpo41nn4xqoYlmoIZlooRmnoZmnYVknoRooYNno4RrpINtpn9sp39upn1rpXpoo35om4Zim4VgnIlimIZjl4RjlYRllYVnlIlmkopmlIdok4lsmYptmotumolrmIhpj4ZijYZikIRgkIhgj4phkIxgko1gjY1ckJBck41dlYtclo5ZmIZZlodclIldi4taiYxbjIlbjIxYjI9YjpBWkI9WjY9Ti5BSkJFRkY5UkopWk4hWlIhTloRTlYpPlItQiY9Rh5BQiYxRi49Oi5FNjZBLj49Mi49HkI9GkI1Kj4pOj4hOkoNOlIVLlIdKk4lKiI5Hh5BFh45JiYxFi4pCjYlEiohCiIdAjYVAjYdEjYZGjIdIjIZKjYFNj4BHj4JGjoRHhoZAhIc+hYZCh4NAiII+iYA/ioBBh34/hX09iXo/in5CiIBFiIBIiH5Ni3pJintGgn0+gX07goA/gns/gnk/g3dBhHhDgHdCf3VBgnZFgnNFhHdFhHlJhHdKg39Mg35Hg3xGfXVAfHg/e3VCfHM+fXM8f3I8f289g3M6gm86hG88gG48f2k7e2Y2emo1e202fG03gnU3g3c4gHU2h3M2iHI0h280iHEwi3Awh28xgm8ygG8xfWwtgWssg2sshWwtg20viXcwi3kwhngxiHYthncshHUsgnYqg3UogHIqgXQugHgwf3kxensyd3Uue3Uugncmg3cjgnonf3clfnUkfHQke3Une3YheHckd3UjeXYne3kpe3oreH4ucXordXkpe3kffHcdfXogeXoed3gddHkedHogdHsccnscdH0ec38edX0jcX4kd4ApeH4ld30jcX0Zb3sYc34Yb38abH4aa38can0eaoMea34gbHwhanwkaX0ka3olbXglbXYmbngibXoha4YfaYcfbYYdbIYha4YjbYkmbYoocIkkcYslcYYmc4Ukc4QidYMidoQjeYQkeoMieYUmeIYndoYndYUlbIwpa40mbo4qaowraIsqZ4ksaIYrZoovaIYvZoYwaYUtbYYub4Yuc4IrbX8obIIqZ40wZY4yaI4vaYwyaIs0a4o2bIw3aog4aoY3bYg5b4c4bYs5bI07bo09b4s9bY4/a5A+apFAapA8ao46aYM4Z4Q6bIM6aYE3aIAzaYExaX0zZ3w0aHwva38wbn0tdIAwcIEyboEyaHo2Zng3aXs4aXg0aHcyanUxbHcwbHQya3EzbXIubnYvcnYudXs0cXozb3kybHA1am42bHI3b24ycW0yc28xc2o0dW0zdmsxdW8ydHM0dXU2d3Q1eXY2eXg3eXIzcWk2b2g1cGs4cmU2c2M4dWQ4cmI6cmA6c2Q8c2I+d2Y8eGU+eGM/emc/e2s/eGo8d2g7cV45cls6cV42bl46bl08a109al88alk8Z1w+aF87aGA5ZmA4ZGA5Z2E1aWE0aWIya2E1amA4alY6alQ7bFc5aFY4ZlU5ZFk2ZFI0YVYzZFkzZloyaFs0aVwzaVwwaV0ubF4uaFwsZlssZVouZlswZVAzZE4zaFA0ZlEwZFEvZVIsZlUtZlErZU8qaFMpZlMnaFUrbFYrbFcpblctblYvcFYwbFQwalQvZkwqZUopZkwtaUwpaU0na0wmbU4nbEgmb0oncEolb00nb00qck0rc0wqck4ucE4vcE8xbk8ubk4rbEUnakQma0YqbkQnb0QlcUMlcUEmckIidEQhdkEkcz8lbj4kbTwjbDggcjggdkQgeEQidkYedkIeeEAedz4aeT8ZdzoZcT4ebz4eaj0cazsabToZcDoZeUEXfEIWd0MYeEAUeD4Udj0SdDwUdT4Qdj4Ocz0QczsOcjwTc0AVb0AWa0EXbjwUdkENeEELdkMOdEALcz4KcT8Ibz4KckIGbUAFbT8KaUELa0QSbkIQbkEOckUFdUUEckYHcEUEcEgEbUgDbEYFbEsEbEwCaUoEaEoCaUgGaEkJZkkIaEkMakkPbEgMbEgJbk4CblAAcE4DbVAEalEEaVIGaFEHa1YGaFYJaVIKalALbE4KbU0LbU4Obk4Qb0wRbU8SalITalEPblcFblgDb1QFb1kHcFgJcFoLb1wJcFkPb10PbV0La10KalwIaFwIZ10JZV4KY10IZF8LZmANaGANaV4Lb1YQcVUSblUObVcSbVkUa1oUalwSaVkYZ10WaFwSYlcKYVoNYVsOY1wQaFYZaFYbaFQXZVYYZFgaYVkZYVkWXlYbXFkXYFgVY1YTY1INX1MNXVQOXlYQX1McXVMeYVMcXlEaW1EZW1EWXVEVWU0WW04SYU8UYk8WZE4WZE0UaEwTZkwQZEwPYk0QYk4SWUoXV0oYW0oZWkkVWEkTWUgQW0kQWUMQW0UMXUgPYEgTYkgUZ0cTZUUOYkYOWUERVkARWkEUW0AQWz8NXT4MX0AMXjwNXToMYTwKYT8NYkAPYEERYUETZkAWaj0PZj8PXTgOXDYNXDkRYDcPYjYNZDYNZTgOZDQQZDEPZzQRaDMPZzcQaDgUajcUaDkWZToXZTsZZDoVZDkTYjAQYC8PYDISYy4SZS0RZisTaCwUZSoUZicVZSsXZCoZZywWaC8YZjAYZzIZajEZbDUbbjIabi8ZcC4ZbC4Yai8YZSUTZiMVZiURYiUUYSMWXyIVYCESXyAWXSAYWx8UXx4SYR0SYx0SZRsSYxkSZBcSZhYRXRUTXxkSYRoSXR8bXCAcYB4bXB0aWR0aWBoZWhkXVhgdVhUZWhYYXBYYWxIYYRUZYxQZYBcZXhgYVxcfVRghWRcgVhQfVxMhVxAgWRAeWA8hVw0jVwsfWg4eXREeYBEfZQ8fYwseYQoeXgseVw0mVQwnWQ8mWQsmWQklWwclXQgjXAUoXwQlXwgjZAgjZBAlYA4lXwwkXQUrWwQtXQgsYAUrYAIrYwIrZAMpZAMtZAEvaAEsZgQqagcqZg4qZAsqZAgqZAIxZQAzYQIyZQQxZwUzaQYzaQcwawc0bAY2bQgybgcyawgwZwsvZw0vaBMvcBAwbQ0wbAg5bQY7aQg5bQo4cAo4cQ03bw42cQ46cw85bxA6bxI7bxA3ag82aBE2aRM1ZRU0axc1bRU1axM2dRA7dg48dBE9dxI6dhQ5eBY5eBY7ehU4exg3fBU6fhU6exU/ehNAehNCfBVCfRZFfBVHfhhEfhlCgBtDfRlAfBdAexg0eRYzfhgzehs0eBs0dx40dx43eSAzdyIyeiA1eyM1eCA3eiA6eiI7eiQ6eyE9fR5Aex08eh06dyIweSEudiUvdCEvdB8tdRwucxwvdxoqdxcucxkvcBkvbxcwcRUwbBgvaRgubRoubxsudhoneBomdBondhcoeBUpeBMpdhMrdxEneREldw4pdBEqcRQqbxQpahIpbQsrcA4qeBAjehAhdxIidw4ieAwjdgokdAsldAkhdQggcgYjcgolcQ4kbxAkahEkaAkkbAoldAgddgYcdAsccgcccQQdbwQdbgYfbQMZagMdbAYfaAkfbA4dbBAdbgwdbgoebQQWbQIVbgYWagQWaAIWZgMWZQQYZAQSYQQWZAYYZQgZZwkZZwsZZhAaXg4ZYQsZZAUQZAMOZwYQYgcQYAcQXwkQYAoSXQsNXA0RYA0SZRETZw8SaRASZg0RZAwRXgsKXAoIYAoJXg4KXBAKXRIKXxIMXhMIXRQGYBUJXhcKYBQMYxMMZRUMZRcMZxMMaBEMahAMZRAMYxEMXhQDXBMCYBIDXxYDYRcDYRkEYxoGYhsDYBwBYx0EYR8FZBwHZhwHZx4IZh8Iah0IaxwHbRwHahoGZxoGvUw8vUk9u0g8u0Y9uUk7uEg6uEk+uUZBuURCuEJBuURFukZGu0ZIu0hFukhCtkk3t0g1tkw4tEg3s0c5skU5s0M7sEQ5r0I3r0Q7sUI8sT9As0ZFs0lCskY/rUE2rUA0q0Q2q0A5rD45qj08qz4+qD47pjw8qEA9qkA/q0RArEVBrUZGq0FHqkBEoz08ojs7oz88ozw/ozpAozpDpTxDoTpEoTlGoT1Eoz1FpEFDpENDpkdGpkJKpUFJnjhHnjZInTlGnzpJnzlMoDtNoT1MnzxPnztSnz9PoT9No0RPoEdIoENInkNGoEFKnjtUnjpWmztTnj5VoD9VoEFWoENTnkJXn0NZnURVn0VUoElSnEhLnEVOnURQnURbnkRemkNbnEdankhanktZnUtXm0xbnE5bmUtZm0xXmUhVmEhSlklNmlFPmk5Smk9dm1FfmE5emFFbmlNamFRYmFJWllVZlldZlFRXllNVlFNQkUxQk01UlE9VlFlalVtbk1hcklpYk1tWkltUkVhTj1xUj15TjVpTj1hSjU9SjlJUj1RUjV9UjWJUjF5Xi19Ti2BQiV9PiVxPh19PhmBNhl1Qh1tPh1lQiFlTiFdUiFFTh1RNh1ZNh1dQhmJLhGJJiGNLhWRNgmRNgWZPgmhPf2ZQfmRSfmhRgWlRgGxQgG1OgG9NgHBQgHRPgXBXgW5UgW5RfGNTfGFUemRRe2VVfWVXfWdYfWpXemhZemdcemtafGxYe3BaenFTenJSem5Te21Ud2Zcd2VfdmVadmlddmlgdmxgd25fc21gcmxic29gdnBedm9adXBYdHRVc3hcdHRcb2xhbmtjbmtfbm9hbnBjbnNjb3Rha3NiaXNka3ZhbnZfbnVdbXlcbnRYbnNWbnJab29abnNcZ3NjZnJmZnFhZnViZndjZXlhZ3pgY3lgYXphY3teZnteZn1ZZ3ZVZ3ZaZndcXnlhXHljXnZgXXpfXX1fXH5dXn5bWn1bWH5cW35ZXn5ZXn1UYXZUYHVZX3pZVnxcVH5dVnpdVXxZVX5YVH1VVnxUU3pVUHtVU3pSWHlSV3dPW3VTXXNTW3dVWXhUT3hVTHlWUHdXTndTTXlRTndOUHdOS3VOT3RMUXVNU3RRVXJRWG5RVHFLSXNPRnROSnJRSXBNSHBLSm9JTG9KSWxJR2xITGxIT2xLUGlJU2pQUG1PUG5RT25NRmlJRGlIR2lMSGdHSGVISmRHTGVHSmFISWBGTWFHTmNIUGBLT2VSTmZOTWVMRl9HRF9FRmBKRlxHSFtJSlpITFtJSlVHTVdJTlpKT1dOTV1TTF1PS2BQTFxNSFNIR1JGRlRKSVJKS1BJTlFMS05NTU5PTlBPT1FUSldUSVdPS1RPSUpMSUhLR0xKSEtOR0lQSUhRSEdUSEVUSkhWS0pUS0xZSU9YR1JXR1BURlFSSU5URURVRUFVQ0VTRUVYRkNZRkRcRkZcQ0ZeRUheREpcREpaQ0xZQlFZQlBeQk9fQ01fQ0xdP0JcPj9cP0NZPkNePkJgPkdiOERjOkhjPUliPE5iPE5aPUpcPUlZPUleNkRiNEJjNkRfNUZjNEdlM0lmNUtlL0plMU1kNE1jNU1hNUtgNktdNU5ZM1ReNFFgLUlkK0hmLUdiLEtjK01kKk9iLFBhJk1hKFBfK1FfLFNbME1XLkxbLU1dJExfIk1fJElgJktdJEtaJE1ZJk9ZI01WIUxWJE9WJlBXKk1XLExWL01RLFBQK1JRKlRPKVFTIEtUHUtUIUhVIUxSIUpPIktNJE1OI0pLIUlKJUtKJkxMKEtOK0xKLElQLkhRKklRKEtQIUdIH0dHIkVJIkhFI0dDJEhCJklDJkZAJUU+KEdAKElCKkhELEdELUhDLUVKKUZIKEdGQipqQyxpRClsQCtrQCxtQS9tPzBuQy9uRTBtQzFxQTJwPzNxPTNyPDR0PjV0Pjd2PDh4QDh2Qjh1QjZzQDVzSDBtSC9wSTJtSC5rSy1rTC5pSy9nTjBqUC9rTjJoTDFmSjRkSjNiSDZkRzdmRjlmSDdoSDhqSjVoUjBsVC9uUTNsVDBpVC5oVC9lUzFlVzBlWDBjVjNlVDNkUzZnUThoTzplTjxmTjpjTjhfUDdiWzBiWy1iXDFkWzFgWjBeVzNdXDRcXTNZWzZcWDZcVDhcUzpdUz1iVjtjWDljWDhhXDNXWjFXXjNVWjVXWTZVWDlXWjpUWjpRWTxVWDtXWjxbWj1dWUBhVkFeVEFcUkJcVT9aVz5bXTpQXDlNXjlSXT1PXT9RXkFQYUFQYUJOYkJSYENUXz9WXz5YX0BaXkFcXj9eXkNdXkVbX0RZX0JYY0FMY0JJYz9MZ0FOa0FPbUNPbD9QaT5XZztWZjpVZDhVZjpSZzxSb0RNbkZMcEJMcURPcUZRckVTckNUdUVTdkVVdUJTc0FUcj9Tcj5RcTxQcDtSbzlTbjhSbjlVbztXbztZcT1WcT1UeEdVeUhXeElTe0ZUfUdTfEdQfEpQfkZPfEZMf0hOfkpOf0xQf05Pf09MgFBQgVBSglJTgU5TgExSfURKfENIfkJMgEVJf0dIgUlHgkpJhEhEhUhIhUpJhk5LiExThkdRhklNhEdCgkhBhURChkhAhko/h0xAiEtCikw/ik49i01BiU1DikpHjFRJi1BHjU48jVA6jkw9jlA+jlM9j1Q/j1NBklU/klc/k1RBkVNDkU9EkU5Gk1VMklRIlVg+lVs9lVY8llhAlllCmFhEl1ZFnFpEm1VFmVVGmVNKl0tIl05FmFFFnlpDn1xCn1hCoFlFn1tHoFpJn1hKo1lJpFpLo1ZJoVZKn1NHn1FHnUxIn05Qn1FNp1lMqFtNqFhJp1dNp1hQplVRpVNQqVRSqVNUqVJQp1FPp1FLplBJpEtHpE1Oq1JVq1NYrVNTq09VqU5WqUxWqEtUq0pXqkhYrElUqklTqEZQqkpJrE5Mq0tPrEdZq0Zcr0harUVYq0NXrEJVrENTrUBVrD1VrkBSrUJRrEJMsEhKsEdOsklPr0ZQrjtWrDpYsDxXrjpUrDlSrThQrjpPsDdQrzROsThOsDpNsj5Ps0BOtERKsD9HsD5JsTJOsDBOszNQszNMsTJKszNHszZItTNHtjFGtjVGtTdGtTlItjlKtjxLtz1Itz9IuEFJt0BFtz5Etz9BtjxEtjtG"};var Re=i=>!!(i.person||i.ghost||i.moc);function Ze(i){let t=i.filter(s=>!Re(s)),e=s=>Math.max(1e-9,...t.map(s)),n={i:e(s=>Math.log1p(s.inlinks||0)),m:e(s=>Math.log1p(s.mentions||0)),b:e(s=>s.bc||0),r:e(s=>Math.log1p(s.recent||0))};return s=>.4*Math.log1p(s.inlinks||0)/n.i+.3*Math.log1p(s.mentions||0)/n.m+.2*(s.bc||0)/n.b+.1*Math.log1p(s.recent||0)/n.r}var en=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0},Us=i=>{let t=Math.max(1,...i.filter(e=>!Re(e)).map(e=>e.recent||0));return e=>Re(e)?0:Math.min(1,Math.exp(-(e.age||0)/7)+.6*(e.recent||0)/t)},Si=i=>{let t=i.quality&&i.quality.stale_days||180;return e=>!Re(e)&&!/\d{4}-\d{2}-\d{2}/.test(e.name||"")&&(e.age||0)>t};var Ye={ATOM:1.8,SCALE:.16,PROTEIN:[.93,.93,.9],RNA:[.94,.34,.15],TARGET:[.13,.31,.8],OTHER:[.38,.64,.97],HIT:[1,.79,.2],NEAR:[.78,.62,.96],COIL:{lead:90,ease:40,radius:60,pitch:34},NEAR_AXIS:[0,1,0],FAR_AXIS:[-1,0,0]};function Fd(i,t,e,n){let s=new Float64Array(t*12),r=(y,M)=>y[0]*M[0]+y[1]*M[1]+y[2]*M[2],o=(y,M)=>[y[1]*M[2]-y[2]*M[1],y[2]*M[0]-y[0]*M[2],y[0]*M[1]-y[1]*M[0]],a=y=>{let M=Math.hypot(y[0],y[1],y[2])||1;return[y[0]/M,y[1]/M,y[2]/M]},l=(y,M,x)=>{let b=Math.cos(x),w=Math.sin(x);return[y.map((g,S)=>b*g+w*M[S]),M.map((g,S)=>b*g-w*y[S])]},h=i.o.slice(),c=a(i.z),f=a(i.x),u=o(c,f),d=0,m=null,v=null,_=0,p=0;if(n){let y=n.pitch/(2*Math.PI*n.radius);_=1/(n.radius*(1+y*y)),p=_*y;let M=n.axis,x=r(M,c);v=a([M[0]-x*c[0],M[1]-x*c[1],M[2]-x*c[2]]),m=o(v,c)}for(let y=0;y<t;y++){let M=i.phase+y*e.turn,x=Math.cos(M),b=Math.sin(M),w=y*12;for(let g=0;g<3;g++)s[w+g]=h[g],s[w+3+g]=x*f[g]+b*u[g],s[w+6+g]=x*u[g]-b*f[g],s[w+9+g]=c[g];if(n&&d>=n.lead){let g=Math.min(1,(d-n.lead)/(n.ease||1)+1e-9),S=g*g*(3-2*g);[c,m]=l(c,m,_*S*e.rise),[m,v]=l(m,v,p*S*e.rise),c=a(c);let P=r(f,c);f=a([f[0]-P*c[0],f[1]-P*c[1],f[2]-P*c[2]]),u=o(c,f)}for(let g=0;g<3;g++)h[g]+=c[g]*e.rise;d+=e.rise}return s}var qc=null;function Zr(){if(qc)return qc;let i=Nd,t=atob(i.atoms),e=t.length/3,n=new Float32Array(e*3),s=new Uint8Array(e),r=new Int16Array(e),o=new Int8Array(e).fill(-1),a=new Float32Array(e);for(let x=0;x<e*3;x++)n[x]=t.charCodeAt(x)*i.q+i.lo[x%3];let l=i.protein;if([i.rna,i.target,i.other].forEach((x,b)=>x.forEach(([w,g])=>{for(let S=0;S<g;S++,l++)s[l]=b+1,r[l]=w})),l!==e)throw new Error("the Cas9 model's tables don't add up to its atoms: run scripts/cas9_model.cjs again");for(let x=0;x<e;x++)i.flank.forEach(([b,w],g)=>{(s[x]===2&&r[x]===b||s[x]===3&&r[x]===w)&&(o[x]=g)});let h=12,c=new Map,f=x=>`${Math.floor(n[x*3]/h)},${Math.floor(n[x*3+1]/h)},${Math.floor(n[x*3+2]/h)}`,u=new Uint16Array(e);for(let x=0;x<e;x++){let b=f(x);c.has(b)||c.set(b,[]),c.get(b).push(x)}for(let x=0;x<e;x++){let b=n[x*3],w=n[x*3+1],g=n[x*3+2],S=Math.floor(b/h),P=Math.floor(w/h),T=Math.floor(g/h),U=0;for(let D=-1;D<=1;D++)for(let L=-1;L<=1;L++)for(let N=-1;N<=1;N++)for(let Z of c.get(`${S+D},${P+L},${T+N}`)||[]){let H=n[Z*3]-b,O=n[Z*3+1]-w,z=n[Z*3+2]-g;H*H+O*O+z*z<h*h&&U++}u[x]=U}let d=Array.from(u).sort((x,b)=>x-b),m=d[Math.floor(e*.08)],v=d[Math.floor(e*.97)];for(let x=0;x<e;x++)a[x]=1-.72*Math.max(0,Math.min(1,(u[x]-m)/Math.max(1,v-m)));let _=x=>{let b=[0,0,0],w=0;for(let g=0;g<e;g++)x(g)&&(b[0]+=n[g*3],b[1]+=n[g*3+1],b[2]+=n[g*3+2],w++);return b.map(g=>g/(w||1))},p=(x,b)=>{let w=-1,g=-1/0;for(let S=0;S<e;S++)if(x(S)){let P=b(S);P>g&&(g=P,w=S)}return[n[w*3],n[w*3+1],n[w*3+2]]},y=i.pair.map(([x,b,w,g,S])=>({x,y:b,z:w,strand:g,base:S,r:Ye.ATOM})),M=[];for(let x of[0,1])for(let b of[0,1]){let w=y.filter(S=>S.strand===x&&S.base===b),g=S=>w.reduce((P,T)=>P+T[S],0)/w.length;M.push({x:g("x"),y:g("y"),z:g("z"),strand:x,base:b,r:b?3.3:3.6})}return qc={M:i,n:e,xyz:n,kind:s,res:r,flank:o,shade:a,pair:y,beads:M,base:[Ye.PROTEIN,Ye.RNA,Ye.TARGET,Ye.OTHER],flankAt:i.flank.map((x,b)=>_(w=>o[w]===b)),held:_(x=>s[x]===1&&r[x]<=i.spacer+1||s[x]===2&&r[x]>30-i.spacer),labels:{protein:p(x=>s[x]===0,x=>-n[x*3+1]),rna:p(x=>s[x]===1,x=>Math.hypot(n[x*3],n[x*3+1],n[x*3+2]))}}}function Dd(i,t,e){let n=Zr(),s=n.M,r=t&&t.ids?new Set(t.ids):null,o=new Map,a=i.filter(x=>!Re(x)&&(!r||r.has(x.id))).sort((x,b)=>x.id<b.id?-1:x.id>b.id?1:0),l=new Set(a.map(x=>x.id));t&&t.notes.forEach(x=>{l.has(x.path)&&o.set(x.path,x.hits?"hit":"near")});let h=a.filter(x=>o.get(x.id)==="hit"),c=h.find(x=>x.id===e)||h[0]||null,f=c?a.indexOf(c):a.length>>1,u=a.slice(c?f+1:f),d=u.slice(0,s.flank.length).map(x=>x.id),m=u.slice(s.flank.length).map(x=>x.id),v=a.slice(0,f).reverse().map(x=>x.id),_=Fd(s.tails.near,m.length,s.step,{...Ye.COIL,axis:Ye.NEAR_AXIS}),p=Fd(s.tails.far,v.length,s.step,{...Ye.COIL,axis:Ye.FAR_AXIS}),y=new Map,M=new Map;return c&&(y.set(c.id,n.held),M.set(c.id,"held")),d.forEach((x,b)=>{y.set(x,n.flankAt[b]),M.set(x,"flank")}),[[m,_,"near"],[v,p,"far"]].forEach(([x,b,w])=>x.forEach((g,S)=>{y.set(g,[b[S*12],b[S*12+1],b[S*12+2]]),M.set(g,w)})),{pos:y,where:M,all:a,hits:o,sites:h,site:c?c.id:null,flankIds:d,nearIds:m,farIds:v,near:_,far:p,scan:t||null}}var Yr=Ye.SCALE,jc=28,Y_=.3,Ns=i=>[i[0]*Yr,-i[1]*Yr,-i[2]*Yr];function Qc(i,t,e){let n=new rn,s=new fe(t,e,i.n),r=new Ht,o=new xt;for(let a=0;a<i.n;a++){r.makeScale(Ye.ATOM,Ye.ATOM,Ye.ATOM).setPosition(i.xyz[a*3],i.xyz[a*3+1],i.xyz[a*3+2]),s.setMatrixAt(a,r);let l=i.base[i.kind[a]];s.setColorAt(a,o.setRGB(l[0],l[1],l[2],ze).multiplyScalar(i.shade[a]))}return n.rotation.x=Math.PI,n.scale.setScalar(Yr),n.add(s),{root:n,mesh:s}}var Ld={id:"cas9",name:"Cas9",hint:"Notes as DNA, the Guide scan's matches as cut sites",home:{yaw:0,pitch:.2,dist:44,min:14,max:240,minPitch:-1.4},stage:{light:"camera",fog:[70,260],ambient:.5},actions:["guide-scan"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,invalidate:o}){let a=Zr(),l=new Map(e.nodes.map(G=>[G.id,G])),h=G=>l.get(G)?l.get(G).name:G,c=new jn(1,1),f=new Bi,{root:u,mesh:d}=Qc(a,c,f);i.scene.add(u);let m=new Ht,v=new xt,_=(G,K)=>v.setRGB(G[0],G[1],G[2],ze).multiplyScalar(K),p=null,y=null,M=[],x={atoms:0,pairs:0,fine:0,beads:0},b=n.scan||null,w=n.selected||null,g=null,S=null,P=G=>{let K=y.hits.get(G);return K==="hit"?Ye.HIT:K==="near"?Ye.NEAR:null},T=G=>S&&!S.has(G)?Y_:1;function U(){for(let G=0;G<a.n;G++){let K=a.flank[G]>=0?y.flankIds[a.flank[G]]:null,B=K?P(K):null;d.setColorAt(G,_(B||a.base[a.kind[G]],a.shade[G]*(K?T(K):1)))}d.instanceColor.needsUpdate=!0}function D(){p&&(u.remove(p),p.dispose());let G=[y.nearIds,y.farIds].reduce((B,I)=>B+Math.min(I.length,jc)*a.pair.length+Math.max(0,I.length-jc)*a.beads.length,0);p=new fe(c,f,Math.max(G,1)),p.count=G;let K=0;x={atoms:a.n,pairs:y.nearIds.length+y.farIds.length,fine:0,beads:0},[[y.nearIds,y.near,!0],[y.farIds,y.far,!1]].forEach(([B,I,nt])=>B.forEach((dt,at)=>{let ut=at<jc,_t=at*12,pt=P(dt),Ct=T(dt);ut?x.fine++:x.beads++;for(let vt of ut?a.pair:a.beads){m.makeScale(vt.r,vt.r,vt.r).setPosition(I[_t]+I[_t+3]*vt.x+I[_t+6]*vt.y+I[_t+9]*vt.z,I[_t+1]+I[_t+4]*vt.x+I[_t+7]*vt.y+I[_t+10]*vt.z,I[_t+2]+I[_t+5]*vt.x+I[_t+8]*vt.y+I[_t+11]*vt.z),p.setMatrixAt(K,m);let Q=vt.strand===0===nt?Ye.OTHER:Ye.TARGET;p.setColorAt(K++,_(pt&&(vt.base||!ut)?pt:Q,(vt.base?.78:1)*Ct))}})),x.atoms+=K,u.add(p)}let L=()=>{if(!b)return`${mt(y.all.length,"note")} \xB7 no guide`;let G=`\u201C${b.guide}\u201D${b.where?" "+b.where:""}`,K=[...y.hits.values()].filter(B=>B==="near").length;return y.sites.length?`${G}: exact in ${mt(y.sites.length,"note")} of ${y.all.length}${K?` \xB7 look-alikes in ${K}`:""}`:`${G}: no match in ${mt(y.all.length,"note")}`},N={label:"Open Guide scan",title:"Open Guide scan",run:()=>r("guide-scan")},Z=()=>y.sites.findIndex(G=>G.id===y.site);function H(G){let K=y.sites.length;K&&(g=y.sites[(Z()+G+K)%K].id,Y(),o())}function O(G){y.hits.get(G)==="hit"&&(g=G,Y(),o())}function z(){t.stat(L());let G=[{text:"Cas9 protein",at:Ns(a.labels.protein),dy:-16,run:()=>r("guide-scan"),title:"Cas9 protein. Open Guide scan"},{text:b?`RNA \xB7 ${jt(b.guide,24)}`:"RNA",at:Ns(a.labels.rna),color:"#f2764a",dy:-14,run:()=>r("guide-scan"),title:"The guide. Open Guide scan"},{text:"DNA",at:Ns(a.M.tails.near.o),color:"#8fbcfb",dy:16,title:y.sites.length?"DNA. Show the exact matches":"DNA. Open Guide scan",run:()=>{if(!y.sites.length)return r("guide-scan");S=new Set(y.sites.map(B=>B.id)),C(),o()}}],K=y.site||(w&&y.pos.has(w)?w:null);if(K&&G.unshift({text:jt(h(K),34),at:Ns(y.pos.get(K)),strong:!0,dy:30,run:()=>s(K),title:`Open ${h(K)}`}),t.labels(G),t.chip(S?`Exact matches of \u201C${jt(b.guide,24)}\u201D`:null,()=>{S=null,C(),o()}),!b)t.controls({lines:[`${mt(y.all.length,"note")}, a base pair each. No guide yet.`],buttons:[N]});else if(!y.sites.length)t.controls({lines:[`No \u201C${jt(b.guide,24)}\u201D in these ${mt(y.all.length,"note")}.`],buttons:[N]});else{let B=y.sites.length===1;t.controls({lines:[`Site ${Z()+1} of ${y.sites.length}`],buttons:[{label:"\u2039",title:"Previous site",off:B,run:()=>H(-1)},{label:h(y.site),title:`Open ${h(y.site)}`,wide:!0,run:()=>s(y.site)},{label:"\u203A",title:"Next site",off:B,run:()=>H(1)}]})}}function C(){U(),D(),z()}function Y(){y=Dd(e.nodes,b,g),S&&!y.sites.length&&(S=null),M=[];for(let[G,K]of y.pos){let B=y.where.get(G);M.push({at:Ns(K),r:(B==="held"?14:B==="flank"?6:7)*Yr,key:{kind:"note",id:G,tip:h(G)}})}C()}function k(){w&&y.hits.get(w)==="hit"&&y.site!==w?(g=w,Y()):g=y.site}return Y(),k(),{targets:()=>M,click(G){w=G.id,y.hits.get(G.id)==="hit"?(g=G.id,Y()):z(),s(G.id)},update(G){"scan"in G&&(b=G.scan||null,S=null),"selected"in G&&(w=G.selected||null),Y(),k()},stat:L,today(){if(!y.site)return null;let G=y.sites.length;return{text:`Cas9 is on ${h(y.site)}: site ${Z()+1} of ${G} for \u201C${b.guide}\u201D`,label:G>1?"Next site":"Open it",run:()=>G>1?H(1):s(y.site)}},api:{layout:()=>y,drew:()=>x,at:G=>y.pos.has(G)?Ns(y.pos.get(G)):null,step:H,go:O,highlighted:()=>S?[...S]:null}}}};var _l=18,Bd=4,kd="#facc15",X_=14;function J_(i,t){let e=t.X.map(o=>[o[0]*_l,o[1]*_l,(o[2]||0)*_l]),n=new Array(t.n).fill(0),s=new Map,r=new Map;t.domains.forEach(([o,a],l)=>{for(let h=o;h<=a&&h<t.n;h++)n[h]=l}),i.rows.forEach((o,a)=>{for(let l of new Set(o)){let h=i.ids[l];s.has(h)||s.set(h,[]),s.get(h).push(a)}});for(let[o,a]of s){let l=[0,0,0],h=en(o),c=h%628/100,f=(h>>>10)%314/100-1.57,u=_l*.03;for(let d of a)for(let m=0;m<3;m++)l[m]+=e[d][m]/a.length;r.set(o,[l[0]+Math.cos(c)*Math.cos(f)*u,l[1]+Math.sin(f)*u,l[2]+Math.sin(c)*Math.cos(f)*u])}return{beads:e,domainOf:n,daysOf:s,notes:r}}var Od={id:"genome",name:"Genome fold",hint:"The journals as one folded strand",home:{yaw:.6,pitch:.25,dist:46,min:12,max:110},stage:{fog:[34,80]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=e.strand,h=n.fold,c=h.n;if(c<Bd){let Q=()=>`${mt(c,"day")} of journals`;return t.stat(Q()),t.controls({at:"centre",lines:[`Genome fold needs ${Bd} days of journals that name notes.`,`${mt(c,"day")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:Q,today:()=>null,api:{empty:!0}}}let f=J_(l,h),u=new Map(e.nodes.map(Q=>[Q.id,Q])),d=Ze(e.nodes),m=[...f.notes.keys()].filter(Q=>u.has(Q)),v=new Map(m.map(Q=>[Q,d(u.get(Q))])),_=Q=>.22+.55*Math.sqrt(Math.max(0,v.get(Q))),p=o.palette,y=Q=>p[Q%p.length],M="#6b7280",x=new Ht,b=new Ge,w=new V,g=new V(0,1,0),S=new xt,P=Q=>(i.scene.add(Q),Q),T=P(new fe(new de(1,16,12),new Te({roughness:.55}),c)),U=P(new fe(new ve(1,1,1,8,1,!0),new Te({roughness:.7}),Math.max(c-1,1)));U.count=c-1;for(let Q=0;Q+1<c;Q++){let Ft=f.beads[Q],Dt=f.beads[Q+1],Yt=f.domainOf[Q]===f.domainOf[Q+1],Wt=Yt?.11:.05;w.set(Dt[0]-Ft[0],Dt[1]-Ft[1],Dt[2]-Ft[2]);let Lt=w.length()||1e-6;x.compose(new V((Ft[0]+Dt[0])/2,(Ft[1]+Dt[1])/2,(Ft[2]+Dt[2])/2),b.setFromUnitVectors(g,w.divideScalar(Lt)),new V(Wt,Lt,Wt)),U.setMatrixAt(Q,x),U.setColorAt(Q,S.set(Yt?y(f.domainOf[Q]):M))}let D=P(new fe(new de(1,16,12),new Te({roughness:.4}),Math.max(m.length,1)));D.count=m.length;let L=new le({color:kd,transparent:!0,opacity:.85}),N=new le({color:kd,transparent:!0,opacity:.18}),Z=new de(.3,12,8),H=h.loops.map((Q,Ft)=>{let Dt=f.beads[Q.a],Yt=f.beads[Q.b],Wt=new Ni(new V(...Dt),new V((Dt[0]+Yt[0])*.68,(Dt[1]+Yt[1])*.68,(Dt[2]+Yt[2])*.68),new V(...Yt)),Lt=Wt.getPoint(.5),Qt=P(new qt(new mr(Wt,24,.045,6),L)),ee=P(new qt(Z,L));ee.position.copy(Lt);let Ae=l.rows[Q.a].filter(St=>l.rows[Q.b].includes(St)),Se=[...new Set(Ae)].map(St=>l.ids[St]),J=xl(l.days[Q.a],l.days[Q.b]),q=`${vi(l.days[Q.a])} and ${vi(l.days[Q.b])}`;return{k:Ft,l:Q,tube:Qt,dot:ee,mid:[Lt.x,Lt.y,Lt.z],ids:Se,apart:J,pair:q,tip:`${q}: ${mt(Q.count,"note")} named on both, ${mt(J,"day")} apart`}}),O=new Di(1,1.18,40),z=Q=>P(new qt(O,new le({color:Q,side:ge,fog:!1}))),C=z(o.fg),Y=z(o.accent);C.position.set(...f.beads[c-1]),C.scale.setScalar(.62);let k=P(new He(new oe,new Fe({color:o.accent,transparent:!0,opacity:.7}))),G=n.selected||null,K=null,B=null,I=()=>K&&f.notes.has(K)?K:G&&f.notes.has(G)?G:null,nt=Q=>u.get(Q)?u.get(Q).name:Q,dt=()=>`${mt(c,"day")} \xB7 ${mt(h.domains.length,"domain")} \xB7 ${mt(h.loops.length,"loop")} \xB7 fit ${h.grade} (stress ${h.stress.toFixed(2)})`,at=H.reduce((Q,Ft)=>Q&&Q.l.count>=Ft.l.count?Q:Ft,null),ut=[...m].sort((Q,Ft)=>v.get(Ft)-v.get(Q)).slice(0,X_);function _t(){let Q=I(),Ft=Q?new Set(f.daysOf.get(Q)):null,Dt=B?new Set(B.ids):null;for(let Lt=0;Lt<c;Lt++){let Qt=Ft&&Ft.has(Lt)?.5:.32;x.makeScale(Qt,Qt,Qt).setPosition(...f.beads[Lt]),T.setMatrixAt(Lt,x),T.setColorAt(Lt,S.set(y(f.domainOf[Lt])).multiplyScalar(Ft&&!Ft.has(Lt)?.35:1))}m.forEach((Lt,Qt)=>{let ee=_(Lt)*(Lt===Q?1.25:1);x.makeScale(ee,ee,ee).setPosition(...f.notes.get(Lt)),D.setMatrixAt(Qt,x),D.setColorAt(Qt,S.set(p[(u.get(Lt).cluster||0)%p.length]).multiplyScalar(Dt&&!Dt.has(Lt)?.25:1))});for(let Lt of[T,D])Lt.instanceMatrix.needsUpdate=!0,Lt.instanceColor&&(Lt.instanceColor.needsUpdate=!0);for(let Lt of H)Lt.tube.material=Lt.dot.material=!B||B===Lt?L:N;Y.visible=!!(G&&f.notes.has(G)&&u.has(G)),Y.visible&&(Y.position.set(...f.notes.get(G)),Y.scale.setScalar(_(G)+.25));let Yt=[];if(Q)for(let Lt of f.daysOf.get(Q))Yt.push(...f.notes.get(Q),...f.beads[Lt]);k.geometry.dispose(),k.geometry=new oe().setAttribute("position",new Vt(Yt,3));let Wt=[];Q&&Wt.push({text:jt(nt(Q),34),at:f.notes.get(Q),strong:!0,dy:-22,run:()=>Ct(Q),title:`Open ${nt(Q)}`}),h.domains.forEach(([Lt,Qt],ee)=>{Qt-Lt>=3&&Wt.push({text:`${vi(l.days[Lt])} \u2013 ${vi(l.days[Qt])}`,at:f.beads[Lt+Qt>>1],color:y(ee),dy:-14})});for(let Lt of Dt?B.ids.filter(Qt=>u.has(Qt)):ut)Lt!==Q&&Wt.push({text:jt(nt(Lt),26),at:f.notes.get(Lt),dy:14});t.labels(Wt),t.chip(B?`Named on both ${B.pair}`:null,()=>{B=null,_t(),a()}),t.stat(dt())}function pt(Q){B=Q,_t(),a()}function Ct(Q){G=Q,_t(),a(),s(Q)}let vt=[];return f.beads.forEach((Q,Ft)=>vt.push({at:Q,r:.4,key:{kind:"day",id:Ft,tip:`${l.days[Ft]} \xB7 ${mt(new Set(l.rows[Ft]).size,"note")} named`}})),m.forEach(Q=>vt.push({at:f.notes.get(Q),r:_(Q),key:{kind:"note",id:Q,tip:nt(Q)}})),H.forEach(Q=>vt.push({at:Q.mid,r:.4,key:{kind:"loop",id:Q.k,tip:Q.tip}})),_t(),{targets:()=>vt,click(Q){Q.kind==="note"?Ct(Q.id):Q.kind==="day"?s(l.paths[Q.id]):pt(H[Q.id])},hover(Q){let Ft=Q&&Q.kind==="note"?Q.id:null;Ft!==K&&(K=Ft,_t())},frame(){C.quaternion.copy(i.camera.quaternion),Y.quaternion.copy(i.camera.quaternion)},update(Q){"selected"in Q&&(G=Q.selected||null,_t())},stat:dt,today:()=>at?{text:`Strongest loop: ${at.pair} name the same ${mt(at.l.count,"note")}, ${mt(at.apart,"day")} apart`,label:"Show them",run:()=>pt(at)}:null,api:{layout:()=>f,loops:()=>H.map(Q=>({a:Q.l.a,b:Q.l.b,count:Q.l.count,ids:Q.ids,mid:Q.mid})),shown:()=>B?B.k:null,selected:()=>G,notes:()=>m,show:Q=>pt(H[Q])},dispose(){L.dispose(),N.dispose(),Z.dispose(),O.dispose()}}}};var yl=18,Kc="#60a5fa",$c="#f59e0b",zd=864e5;function q_(i,t){let e=new Map;for(let o of i)!Re(o)&&typeof o.born=="string"&&Number.isFinite(Date.parse(o.born))&&e.set(o.id,Date.parse(o.born)/zd);let n=new Map,s=new Map;for(let o of e.keys())n.set(o,[]),s.set(o,[]);let r=new Set;for(let o of t){if(o.kind!=="link"||!e.has(o.source)||!e.has(o.target)||e.get(o.source)===e.get(o.target))continue;let[a,l]=e.get(o.source)<e.get(o.target)?[o.source,o.target]:[o.target,o.source],h=a+`
`+l;r.has(h)||(r.add(h),n.get(l).push(a),s.get(a).push(l))}return{day:e,older:n,newer:s}}function Vd(i,t){let e=new Set,n=[t];for(;n.length;)for(let s of i.get(n.pop())||[])e.has(s)||(e.add(s),n.push(s));return e}function j_(i,t){let e=[...t.day.keys()],n=e.map(c=>t.day.get(c)),s=Math.min(...n),r=Math.max(...n),o=Math.max(r-s,1),a=new Map(i.map(c=>[c.id,c])),l=[...new Set(e.map(c=>a.get(c).cluster||0))].sort((c,f)=>c-f),h=new Map;for(let c of e){let f=en(c),d=l.indexOf(a.get(c).cluster||0)/Math.max(l.length,1)*Math.PI*2+(f%1e3/1e3-.5)*(Math.PI*2/Math.max(l.length,1))*.8,m=yl*(.25+.65*((f>>>10)%1e3/1e3));h.set(c,[Math.cos(d)*m,((t.day.get(c)-s)/o-.5)*yl*1.6,Math.sin(d)*m])}return{pos:h,from:s,to:r,axis:[[0,-yl*.8,0],[0,yl*.8,0]]}}var Ml=i=>new Date(i*zd).toISOString().slice(0,10),Gd={id:"cones",name:"Light cones",hint:"What a note rested on and what it touched",home:{yaw:.7,pitch:.2,dist:52,min:14,max:120},stage:{fog:[40,95]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=q_(e.nodes,e.links),h=[...l.day.keys()];if(h.length<2){let C=()=>mt(h.length,"dated note");return t.stat(C()),t.controls({at:"centre",lines:["Light cones needs notes with a date and links between them.",`${mt(h.length,"dated note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:C,today:()=>null,api:{empty:!0}}}let c=j_(e.nodes,l),f=new Map(e.nodes.map(C=>[C.id,C])),u=Ze(e.nodes),d=C=>.25+.6*Math.sqrt(Math.max(0,u(f.get(C)))),m=C=>f.get(C).name,v=o.palette,_=new Ht,p=new xt,y=C=>(i.scene.add(C),C),M=y(new fe(new de(1,16,12),new Te({roughness:.45}),h.length)),x=[];for(let[C,Y]of l.older)for(let k of Y)x.push(...c.pos.get(k),...c.pos.get(C));let b=y(new He(new oe().setAttribute("position",new Vt(x,3)),new Fe({color:o.muted,transparent:!0,opacity:.22})));y(new He(new oe().setAttribute("position",new Vt([...c.axis[0],...c.axis[1]],3)),new Fe({color:o.muted,transparent:!0,opacity:.6})));let w=C=>new le({color:C,transparent:!0,opacity:.1,side:ge,depthWrite:!1}),g=y(new qt(new ys(1,1,40,1,!0),w(Kc))),S=y(new qt(new ys(1,1,40,1,!0),w($c)));g.visible=S.visible=!1;let P=n.selected&&c.pos.has(n.selected)?n.selected:null,T=null,U=new Map,D=C=>(U.has(C)||U.set(C,{past:Vd(l.older,C),future:Vd(l.newer,C)}),U.get(C)),L=()=>T||P,N=()=>P?`${m(P)} \xB7 ${mt(D(P).past.size,"note")} in its past \xB7 ${mt(D(P).future.size,"note")} in its future`:`${mt(h.length,"dated note")} \xB7 ${mt(x.length/6,"link")} \xB7 ${xl(Ml(c.from),Ml(c.to))} days`;function Z(C,Y,k){let G=c.pos.get(Y)[1],K=c.axis[1][1],B=c.axis[0][1],I=Math.max(k?K-G:G-B,.5);C.visible=!0,C.scale.set(I*.55,I,I*.55),C.position.set(c.pos.get(Y)[0],G+(k?I/2:-I/2),c.pos.get(Y)[2]),C.rotation.set(k?Math.PI:0,0,0)}function H(){let C=L(),Y=C?D(C):null;h.forEach((G,K)=>{let B=d(G)*(G===C?1.4:1);_.makeScale(B,B,B).setPosition(...c.pos.get(G)),M.setMatrixAt(K,_);let I=Y?G===C?p.set(o.accent):Y.past.has(G)?p.set(Kc):Y.future.has(G)?p.set($c):p.set(v[(f.get(G).cluster||0)%v.length]).multiplyScalar(.22):p.set(v[(f.get(G).cluster||0)%v.length]);M.setColorAt(K,I)}),M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),g.visible=S.visible=!1,C&&(Z(g,C,!1),Z(S,C,!0));let k=[{text:vi(Ml(c.from)),at:c.axis[0],dy:12,color:o.muted},{text:vi(Ml(c.to)),at:c.axis[1],dy:-12,color:o.muted}];if(C&&k.push({text:jt(m(C),34),at:c.pos.get(C),strong:!0,dy:-18,run:()=>O(C),title:`Open ${m(C)}`}),Y){let G=(K,B)=>[...K].sort((I,nt)=>B*(l.day.get(I)-l.day.get(nt)))[0];for(let[K,B]of[[Y.past,-1],[Y.future,1]]){let I=G(K,B);I&&k.push({text:jt(m(I),26),at:c.pos.get(I),dy:14,color:B<0?Kc:$c})}}t.labels(k),t.stat(N())}function O(C){P=C,H(),a(),s(C)}let z=h.map(C=>({at:c.pos.get(C),r:d(C),key:{kind:"note",id:C,tip:`${m(C)} \xB7 ${f.get(C).born}`}}));return H(),{targets:()=>z,click(C){C.kind==="note"&&O(C.id)},hover(C){let Y=C&&C.kind==="note"?C.id:null;Y!==T&&(T=Y,H())},update(C){"selected"in C&&(P=C.selected&&c.pos.has(C.selected)?C.selected:null,H())},stat:N,today:()=>{let C=h.reduce((Y,k)=>Y&&D(Y).future.size>=D(k).future.size?Y:k,null);return C&&D(C).future.size?{text:`${m(C)} reaches the most: ${mt(D(C).future.size,"note")} in its future`,label:"Show it",run:()=>{P=C,H(),a()}}:null},api:{layout:()=>c,graph:()=>l,cones:C=>D(C),selected:()=>P,notes:()=>h},dispose(){b.material.dispose(),g.material.dispose(),S.material.dispose()}}}};var Hd=(i,t)=>{let e=new Array(i).fill(0);for(let[n,s]of t)e[n]++,e[s]++;return e};function Wd({n:i,bars:t,ground:e,sag:n,sagging:s,weakest:r,busiest:o,carry:a},l){let h=Hd(i,t),c=[];n[s]>0&&c.push({text:`${l(s)} sags most (${n[s].toFixed(2)}). It is held by ${mt(h[s],"link")}; link it to a note near the ground notes and it stiffens.`,label:"Open note",note:s}),r>=0&&c.push({text:`${l(t[r][0])} \u2013 ${l(t[r][1])} is closest to buckling: it is pushed hardest, so if that link goes its notes lose their support. A second route between them takes the load.`,label:"Show link",bar:r}),o>=0&&c.push({text:`${l(t[o][0])} \u2013 ${l(t[o][1])} carries the most (${a[o].toFixed(1)}). Everything leaning on it is one edit from sagging.`,label:"Show link",bar:o});let f=h.map((u,d)=>[u,d]).filter(([u,d])=>u===1&&!e.includes(d)).length;return f&&c.push({text:`${mt(f,"note")} hang from a single link. Each is a note to link from a second place.`,label:"Show worst",note:s}),{plain:"Picture your notes as a bridge. Links are the beams and notes are the joints. A note held up by only one beam droops, and a beam doing all the carrying is the one that snaps first.",about:"Each written link is a steel bar and each note a joint; the most linked notes are the ground. Load is the notes' weight. A note sags when few links hold it, and a link carries more when more notes lean on it.",insights:c}}function Zd({bars:i,vector:t,freq:e,k:n,count:s},r){let o=m=>Math.abs(t[m])<.05?0:t[m]>0?1:-1,a=t.filter((m,v)=>o(v)>0).length,l=t.filter((m,v)=>o(v)<0).length,h=i.filter(([m,v])=>o(m)*o(v)<0).length,c=t.indexOf(Math.max(...t)),f=t.indexOf(Math.min(...t)),u=[{text:`Mode ${n+1} splits the vault ${a} notes against ${l}; ${mt(h,"link")} cross the cut${h<=Math.max(2,i.length*.05)?", so the two halves are barely connected":""}.`,label:"Show it",show:!0}];c!==f&&u.push({text:`${r(c)} and ${r(f)} swing furthest apart. A link between them, or through a shared note, ties the halves together.`,label:"Open "+r(c).slice(0,18),note:c});let d=t.filter((m,v)=>o(v)===0).length;return d&&u.push({text:`${mt(d,"note")} sit on the nodal line, belonging to neither half. They are the bridges; keep their links.`,label:"Show it",show:!0}),{plain:"Picture your notes as a drum skin. Tap it and it wobbles in a pattern. The two halves that move against each other are the two clumps of your notes that hardly talk to each other.",about:"Notes are masses on a stretched sheet and links are springs. The sheet rings in the shapes the links allow; amber swings up while blue swings down, and the dark line between them does not move. A lower frequency means a cleaner cut.",insights:u,freq:e,count:s}}function Yd({n:i,bars:t,kept:e,hubs:n,order:s},r){let o=new Array(i).fill(0);t.forEach(([f,u],d)=>{e[d]&&(o[f]++,o[u]++)});let a=s.filter(f=>!o[f]&&!n.includes(f)),l=Hd(i,t),h=e.filter(Boolean).length,c=[];return c.push({text:`${h} of ${mt(t.length,"link")} carry the vault between its ${n.length} hubs. The rest are never the short way from one hub to another.`,label:"Show it",show:!0}),a.length&&c.push({text:`${mt(a.length,"note")} are off the backbone. ${r(a[0])} has ${mt(l[a[0]],"link")} but none that leads to a hub; link it to one.`,label:"Open note",note:a[0]}),c.push({text:"Links off the backbone are not wrong, but they add detours. Where two notes say the same thing, keep the one on the backbone.",label:"Show it",show:!0}),{plain:"Picture your notes as a slime mould finding food. It keeps the tubes that get used and lets the rest dry up. The links that stay thick are the ones your notes really rely on.",about:"A slime mould thickens the tubes that carry the most flow and lets the rest die. Here each written link is a tube and the hubs are the food: what survives is the shortest set of links that holds the vault together.",insights:c}}function Xr(i,t,{hubs:e=!1}={}){let n=new Map(i.filter(o=>!Re(o)||e&&o.moc).map(o=>[o.id,o])),s=e?o=>o==="link"||o==="moc":o=>o==="link",r=new Map([...n.keys()].map(o=>[o,new Set]));for(let o of t)s(o.kind)&&o.source!==o.target&&r.has(o.source)&&r.has(o.target)&&(r.get(o.source).add(o.target),r.get(o.target).add(o.source));return{own:n,adj:r}}function Fs(i,t,{max:e=120,hubs:n=0}={}){let s=Ze(i),{own:r,adj:o}=Xr(i,t,{hubs:!!n}),a=new Set,l=[];for(let v of[...o.keys()].sort()){if(a.has(v)||!o.get(v).size)continue;let _=[v];a.add(v);for(let p=0;p<_.length;p++)for(let y of o.get(_[p]))a.has(y)||(a.add(y),_.push(y));_.length>l.length&&(l=_)}let h=(v,_)=>s(r.get(_))-s(r.get(v))||(v<_?-1:1),c=v=>!!r.get(v).moc,u=[...l.filter(c).sort((v,_)=>o.get(_).size-o.get(v).size||(v<_?-1:1)).slice(0,n),...l.filter(v=>!c(v)).sort(h)].slice(0,e),d=new Map(u.map((v,_)=>[v,_])),m=[];for(let v of u)for(let _ of o.get(v))d.has(_)&&d.get(v)<d.get(_)&&m.push([d.get(v),d.get(_)]);return{ids:u,bars:m,own:r,imp:s}}function Ds(i,t,{radius:e=14,rest:n=3}={}){let s=i.length,r=i.map((o,a)=>{let l=en(o)%6283/1e3,h=e*Math.sqrt((a+1)/s);return[Math.cos(l)*h,Math.sin(l)*h]});for(let o=0;o<80;o++){let a=r.map(()=>[0,0]),l=.5*(1-o/80);for(let h=0;h<s;h++)for(let c=h+1;c<s;c++){let f=r[h][0]-r[c][0],u=r[h][1]-r[c][1],d=6/(f*f+u*u+.01);a[h][0]+=f*d,a[h][1]+=u*d,a[c][0]-=f*d,a[c][1]-=u*d}for(let[h,c]of t){let f=r[c][0]-r[h][0],u=r[c][1]-r[h][1],d=Math.hypot(f,u)||1e-6,m=(d-n)*.08;a[h][0]+=f*m,a[h][1]+=u*m,a[c][0]-=f*m,a[c][1]-=u*m}for(let h=0;h<s;h++){let c=Math.hypot(...a[h])||1,f=Math.min(c,l*4)/c;r[h][0]+=a[h][0]*f,r[h][1]+=a[h][1]*f}}return r}function Xd({pos:i,bars:t,fixed:e,loads:n},{iterations:s=2e3,tolerance:r=1e-10,sway:o=1e-9}={}){let a=i.length,l=new Uint8Array(a).fill(1);for(let x of e)l[x]=0;let h=t.map(([x,b])=>{let w=[0,1,2].map(S=>i[b][S]-i[x][S]),g=Math.hypot(...w)||1e-9;return{L:g,c:w.map(S=>S/g)}}),c=o,f=x=>{let b=new Float64Array(3*a);t.forEach(([w,g],S)=>{let{L:P,c:T}=h[S],U=0;for(let D=0;D<3;D++)U+=T[D]*(x[3*g+D]-x[3*w+D]);U/=P;for(let D=0;D<3;D++)b[3*g+D]+=T[D]*U,b[3*w+D]-=T[D]*U});for(let w=0;w<a;w++)for(let g=0;g<3;g++)b[3*w+g]=l[w]?b[3*w+g]+c*x[3*w+g]:0;return b},u=new Float64Array(3*a),d=0;for(let x=0;x<a;x++)if(l[x]&&n[x])for(let b=0;b<3;b++)u[3*x+b]=n[x][b],d+=u[3*x+b]**2;let m=new Float64Array(3*a),v=Float64Array.from(u),_=Float64Array.from(u),p=v.reduce((x,b)=>x+b*b,0);for(let x=0;x<s&&p>r*Math.max(d,1e-30);x++){let b=f(_),w=0;for(let T=0;T<_.length;T++)w+=_[T]*b[T];if(w<=0)break;let g=p/w,S=0;for(let T=0;T<m.length;T++)m[T]+=g*_[T],v[T]-=g*b[T],S+=v[T]*v[T];let P=S/p;p=S;for(let T=0;T<_.length;T++)_[T]=v[T]+P*_[T]}let y=Array.from({length:a},(x,b)=>[m[3*b],m[3*b+1],m[3*b+2]]),M=t.map(([x,b],w)=>{let{L:g,c:S}=h[w],P=0;for(let T=0;T<3;T++)P+=S[T]*(y[b][T]-y[x][T]);return P/g});return{u:y,force:M,residual:d?Math.sqrt(p/d):0}}function Jd(i,t,{max:e=120,ground:n=.1}={}){let{ids:s,bars:r,own:o,imp:a}=Fs(i,t,{max:e}),l=s.length,h=Ds(s,r),c=Math.max(1e-9,...s.map(_=>a(o.get(_)))),f=10,u=s.map((_,p)=>[h[p][0],(.5-a(o.get(_))/c)*2*f,h[p][1]]),d=Math.min(l,Math.max(3,Math.round(l*n))),m=[...Array(d).keys()],v=s.map(_=>(o.get(_).tasks||0)+.1);return{ids:s,pos:u,bars:r,fixed:m,loads:v.map(_=>[0,-_,0]),weight:v,ground:m.map(_=>s[_])}}function qd(i,t){let e=i.bars.map(([a,l])=>Math.hypot(...[0,1,2].map(h=>i.pos[l][h]-i.pos[a][h]))),n=t.force.map(Math.abs),s=t.force.map((a,l)=>a<0?-a*e[l]*e[l]:0),r=a=>a.reduce((l,h,c)=>h>a[l]?c:l,0),o=t.u.map((a,l)=>i.fixed.includes(l)?0:Math.hypot(...a));return{len:e,carry:n,buckle:s,sag:o,busiest:n.length?r(n):-1,weakest:s.length&&Math.max(...s)>0?r(s):-1,sagging:o.length?r(o):-1}}var Q_=.01,jd="#60a5fa",th="#f87171",Qd="#f59e0b",Kd={id:"loadpaths",name:"Load paths",hint:"Which links carry the vault, and which note sags first",home:{yaw:.6,pitch:.65,dist:46,min:12,max:110},stage:{fog:[38,90]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=Jd(e.nodes,e.links);if(l.ids.length<4){let B=()=>mt(l.ids.length,"linked note");return t.stat(B()),t.controls({at:"centre",lines:["Load paths needs a set of notes joined by written links.",`${mt(l.ids.length,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:B,today:()=>null,api:{empty:!0}}}let h=Xd(l,{sway:Q_}),c=qd(l,h),f=new Map(e.nodes.map(B=>[B.id,B])),u=Ze(e.nodes),d=l.ids.length,m=B=>f.get(l.ids[B]).name,v=new Map(l.ids.map((B,I)=>[B,I])),_=B=>.3+.55*Math.sqrt(Math.max(0,u(f.get(l.ids[B])))),p=Math.max(...c.carry,1e-9),y=o.palette,M=new Ht,x=new Ge,b=new xt,w=new V(0,1,0),g=B=>(i.scene.add(B),B),S=new Set(l.fixed),P=g(new fe(new de(1,16,12),new Te({roughness:.45}),d)),T=g(new fe(new ve(1,1,1,8,1),new Te({roughness:.6}),Math.max(l.bars.length,1))),U=B=>.03+.17*Math.sqrt(c.carry[B]/p),D=n.selected&&v.has(n.selected)?v.get(n.selected):null,L=null,N=null,Z=B=>l.bars.map((I,nt)=>I[0]===B||I[1]===B?nt:-1).filter(I=>I>=0),H=B=>h.force[B]<0?"pushed":"pulled",O=B=>c.carry[B].toFixed(c.carry[B]<10?2:1),z=()=>{if(L!=null)return`${m(l.bars[L][0])} \u2013 ${m(l.bars[L][1])} \xB7 ${H(L)} with ${O(L)}`;let B=N??D;if(B!=null){let I=Z(B),nt=I.reduce((dt,at)=>dt+c.carry[at],0);return`${m(B)} \xB7 ${S.has(B)?"ground":`sags ${c.sag[B].toFixed(2)}`} \xB7 ${mt(I.length,"bar")} carrying ${nt.toFixed(1)}`}return`${mt(d,"note")} \xB7 ${mt(l.bars.length,"bar")} \xB7 ${mt(l.ground.length,"ground note")} \xB7 load ${l.weight.reduce((I,nt)=>I+nt,0).toFixed(1)}`};function C(){let B=N??D,I=new Set(B!=null?Z(B):L!=null?[L]:[]),nt=new Set(L!=null?l.bars[L]:[]);for(let ut=0;ut<d;ut++){let _t=_(ut)*(ut===B?1.4:1);M.makeScale(_t,_t,_t).setPosition(...l.pos[ut]),P.setMatrixAt(ut,M);let pt=(B!=null||L!=null)&&ut!==B&&!nt.has(ut)&&!Z(ut).some(Ct=>I.has(Ct));b.set(S.has(ut)?Qd:y[(f.get(l.ids[ut]).cluster||0)%y.length]),ut===B&&b.set(o.fg),pt&&b.multiplyScalar(.25),P.setColorAt(ut,b)}l.bars.forEach(([ut,_t],pt)=>{let Ct=new V(...l.pos[ut]),vt=new V(...l.pos[_t]),Q=vt.clone().sub(Ct),Ft=Q.length()||1e-6,Dt=U(pt)*(I.has(pt)?1.6:1);x.setFromUnitVectors(w,Q.normalize()),M.compose(Ct.add(vt).multiplyScalar(.5),x,new V(Dt,Ft,Dt)),T.setMatrixAt(pt,M),b.set(h.force[pt]<0?th:jd),(B!=null||L!=null)&&!I.has(pt)&&b.multiplyScalar(.25),T.setColorAt(pt,b)});for(let ut of[P,T])ut.instanceMatrix.needsUpdate=!0,ut.instanceColor&&(ut.instanceColor.needsUpdate=!0);let dt=[],at=(ut,_t,pt)=>dt.push({text:jt(_t,34),at:l.pos[ut],dy:-14,color:pt});if(B!=null)dt.push({text:jt(m(B),34),at:l.pos[B],strong:!0,dy:-18,run:()=>Y(B),title:`Open ${m(B)}`});else if(L==null){if(c.sag[c.sagging]>0&&at(c.sagging,`${m(c.sagging)} sags most`,o.fg),c.weakest>=0){let[ut,_t]=l.bars[c.weakest];at(c.sag[ut]>=c.sag[_t]?ut:_t,"closest to buckling",th)}}else for(let ut of l.bars[L])at(ut,m(ut),o.fg);t.labels(dt),t.stat(z())}function Y(B){D=B,L=null,C(),a(),s(l.ids[B])}let k=B=>[0,1,2].map(I=>(l.pos[l.bars[B][0]][I]+l.pos[l.bars[B][1]][I])/2),G=[...l.ids.map((B,I)=>({at:l.pos[I],r:_(I),key:{kind:"note",id:B,tip:`${m(I)} \xB7 ${S.has(I)?"ground":`sags ${c.sag[I].toFixed(2)}`}`}})),...l.bars.map((B,I)=>({at:k(I),r:Math.max(U(I)*2,.35),key:{kind:"bar",id:String(I),tip:`${m(B[0])} \u2013 ${m(B[1])} \xB7 ${H(I)} with ${O(I)}`}}))];return(()=>{let B=Wd({n:d,bars:l.bars,ground:l.ground,sag:c.sag,sagging:c.sagging,weakest:c.weakest,busiest:c.busiest,carry:c.carry},m);t.explain({plain:B.plain,about:B.about,legend:[{color:jd,text:"pulled"},{color:th,text:"pushed"},{color:Qd,text:"ground"},{color:o.muted,text:"thicker bar = more load"}],insights:B.insights.map(I=>({text:I.text,label:I.label,run:()=>{I.bar!=null?(L=I.bar,D=null,C(),a()):Y(I.note)}}))})})(),C(),{targets:()=>G,click(B){B.kind==="note"?Y(v.get(B.id)):B.kind==="bar"&&(L=+B.id,D=null,C(),a())},hover(B){let I=B&&B.kind==="note"?v.get(B.id):null;I!==N&&(N=I,C())},update(B){"selected"in B&&(D=B.selected&&v.has(B.selected)?v.get(B.selected):null,L=null,C())},stat:z,today:()=>c.busiest<0?null:{text:`${m(l.bars[c.busiest][0])} \u2013 ${m(l.bars[c.busiest][1])} carries the most (${O(c.busiest)}), ${H(c.busiest)}`,label:"Show it",run:()=>{L=c.busiest,D=null,C(),a()}},api:{truss:()=>l,solved:()=>h,read:()=>c,selected:()=>D==null?null:l.ids[D],bar:()=>L,notes:()=>l.ids},dispose(){P.material.dispose(),T.material.dispose()}}}};function K_(i,{sweeps:t=60,tolerance:e=1e-12}={}){let n=i.length,s=i.map(a=>Float64Array.from(a)),r=Array.from({length:n},(a,l)=>{let h=new Float64Array(n);return h[l]=1,h});for(let a=0;a<t;a++){let l=0;for(let h=0;h<n;h++)for(let c=h+1;c<n;c++)l+=s[h][c]*s[h][c];if(l<e*e)break;for(let h=0;h<n;h++)for(let c=h+1;c<n;c++){if(Math.abs(s[h][c])<1e-300)continue;let f=(s[c][c]-s[h][h])/(2*s[h][c]),u=Math.sign(f||1)/(Math.abs(f)+Math.sqrt(f*f+1)),d=1/Math.sqrt(u*u+1),m=u*d;for(let v=0;v<n;v++){let _=s[v][h],p=s[v][c];s[v][h]=d*_-m*p,s[v][c]=m*_+d*p}for(let v=0;v<n;v++){let _=s[h][v],p=s[c][v];s[h][v]=d*_-m*p,s[c][v]=m*_+d*p}for(let v=0;v<n;v++){let _=r[v][h],p=r[v][c];r[v][h]=d*_-m*p,r[v][c]=m*_+d*p}}}let o=[...Array(n).keys()].sort((a,l)=>s[a][a]-s[l][l]);return{values:o.map(a=>s[a][a]),vectors:o.map(a=>Array.from({length:n},(l,h)=>r[h][a]))}}function $_(i,t){let e=Array.from({length:i},()=>new Array(i).fill(0));for(let[n,s]of t)n!==s&&(e[n][n]++,e[s][s]++,e[n][s]--,e[s][n]--);return e}function ty(i,t){let{values:e,vectors:n}=K_($_(i,t)),s=[];for(let r=0;r<i;r++){if(e[r]<1e-9)continue;let o=n[r],a=Math.max(...o.map(Math.abs))||1,l=o.find(h=>Math.abs(h)>1e-9*a)<0?-1:1;s.push({value:e[r],freq:Math.sqrt(e[r]),vector:o.map(h=>l*h/a)})}return s}function eh(i,t=.05){let e=[],n=[],s=[];return i.forEach((r,o)=>(r>t?e:r<-t?n:s).push(o)),{up:e,down:n,rest:s}}function $d(i,t,{max:e=100}={}){let{ids:n,bars:s}=Fs(i,t,{max:e});return{ids:n,bars:s,pos:Ds(n,s),modes:n.length>=3?ty(n.length,s):[]}}var nh="#f59e0b",ih="#38bdf8",ey=6,ny=.18,tf=44,ef={id:"modes",name:"Normal modes",hint:"How the vault would ring: its natural cuts into halves",home:{yaw:.7,pitch:.8,dist:50,min:14,max:110},stage:{fog:[40,100]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=$d(e.nodes,e.links,{max:80}),h=l.ids.length;if(!l.modes.length){let st=()=>mt(h,"linked note");return t.stat(st()),t.controls({at:"centre",lines:["Normal modes needs a set of notes joined by written links.",`${mt(h,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:st,today:()=>null,api:{empty:!0}}}let c=new Map(e.nodes.map(st=>[st.id,st])),f=st=>c.get(l.ids[st]).name,u=new Map(l.ids.map((st,R)=>[st,R])),d=new xt(nh),m=new xt(ih),v=new xt(o.bg).lerp(new xt(o.muted),.12),_=new Ht,p=new xt,y=st=>(i.scene.add(st),st),M=l.pos.map(st=>st[0]),x=l.pos.map(st=>st[1]),b=2,w=Math.min(...M)-b,g=Math.max(...M)+b,S=Math.min(...x)-b,P=Math.max(...x)+b,T=(w+g)/2,U=(S+P)/2,D=g-w,L=P-S,N=st=>[l.pos[st][0]-T,l.pos[st][1]-U],Z=Math.max(ey,ny*Math.max(D,L)),H=new Fi(D,L,tf,tf).rotateX(-Math.PI/2),O=H.attributes.position.count,z=new Float32Array(O*h);for(let st=0;st<O;st++){let R=H.attributes.position.getX(st),E=H.attributes.position.getZ(st),F=0;for(let j=0;j<h;j++){let[$,ot]=N(j),gt=1/((R-$)**2+(E-ot)**2+4);z[st*h+j]=gt,F+=gt}for(let j=0;j<h;j++)z[st*h+j]/=F}H.setAttribute("color",new Vt(new Float32Array(O*3),3));let C=y(new qt(H,new Te({vertexColors:!0,roughness:.55,metalness:.05,side:ge,transparent:!0,opacity:.9}))),Y=y(new qt(H,new Te({color:o.fg,wireframe:!0,transparent:!0,opacity:.12}))),k=y(new fe(new de(1,16,12),new Te({roughness:.4}),h)),G=new oe;G.setAttribute("position",new mn(new Float32Array(l.bars.length*6),3));let K=y(new He(G,new Fe({color:o.fg,transparent:!0,opacity:.55})));K.frustumCulled=k.frustumCulled=C.frustumCulled=Y.frustumCulled=!1;let B=st=>.4+(st<6?.2:0),I=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,nt=!1,dt=0,at=0,ut=!I,_t=I?.25:0,pt=null,Ct=n.selected&&u.has(n.selected)?u.get(n.selected):null,vt=null,Q=()=>l.modes[at],Ft=()=>Math.sin(_t*2*Math.PI),Dt=new Float64Array(h),Yt=()=>eh(Q().vector),Wt=st=>Q().vector[st],Lt=()=>{let st=vt??Ct;if(st!=null)return`${f(st)} \xB7 ${Math.abs(Wt(st))<.05?"on a nodal line":Wt(st)>0?"swings up":"swings down"} ${Math.abs(Wt(st)).toFixed(2)} in mode ${at+1}`;let R=Yt();return`Mode ${at+1} of ${l.modes.length} \xB7 ${R.up.length} up, ${R.down.length} down \xB7 frequency ${Q().freq.toFixed(2)}`};function Qt(){let st=Yt(),R=[at===0?"The cleanest cut of the vault into two halves":`${mt(st.up.length,"note")} swinging up, ${mt(st.down.length,"note")} down, ${mt(st.rest.length,"note")} on a nodal line`];t.controls({lines:R,buttons:[{label:"\u25C0",title:"Previous mode (slower)",off:at===0,run:()=>St(at-1)},{label:`Mode ${at+1}`,title:"Back to mode 1, the slowest",run:()=>St(0)},{label:"\u25B6",title:"Next mode (faster)",off:at===l.modes.length-1,run:()=>St(at+1)},{label:ut?"Hold":"Ring",title:ut?"Hold the sheet still":"Let the sheet ring",run:()=>{ut=!ut,pt=null,Qt(),a()}}]})}function ee(){let st=[],R=Q().vector,E=R.indexOf(Math.max(...R)),F=R.indexOf(Math.min(...R)),j=vt??Ct,$=(ot,gt,it)=>st.push({text:jt(gt,34),at:[N(ot)[0],0,N(ot)[1]],dy:-14,color:it});j!=null?st.push({text:jt(f(j),34),at:[N(j)[0],0,N(j)[1]],strong:!0,dy:-18,run:()=>Jt(j),title:`Open ${f(j)}`}):($(E,f(E),nh),F!==E&&$(F,f(F),ih)),t.labels(st)}function Ae(){let st=Q().vector,R=H.attributes.color;for(let E=0;E<O;E++){let F=0;for(let j=0;j<h;j++)F+=z[E*h+j]*st[j];p.copy(v).lerp(F>=0?d:m,Math.min(1,Math.abs(F)**.8*1.25)),R.setXYZ(E,p.r,p.g,p.b)}R.needsUpdate=!0,J()}function Se(){let st=Zd({bars:l.bars,vector:Q().vector,freq:Q().freq,k:at,count:l.modes.length},f);t.explain({plain:st.plain,about:st.about,legend:[{color:nh,text:"swings up"},{color:ih,text:"swings down"},{color:o.muted,text:"nodal line, still"}],insights:st.insights.map(R=>({text:R.text,label:R.label,run:()=>{R.note!=null?Jt(R.note):(Ct=null,St(at))}}))})}function J(){ee(),t.stat(Lt())}function q(){let st=Q().vector,R=Ft(),E=H.attributes.position;for(let j=0;j<O;j++){let $=0;for(let ot=0;ot<h;ot++)$+=z[j*h+ot]*st[ot];E.setY(j,$*Z*R)}E.needsUpdate=!0,H.computeVertexNormals();let F=G.attributes.position;for(let j=0;j<h;j++)Dt[j]=st[j]*Z*R;l.bars.forEach(([j,$],ot)=>{let[gt,it]=N(j),[ht,Mt]=N($);F.setXYZ(2*ot,gt,Dt[j]+.05,it),F.setXYZ(2*ot+1,ht,Dt[$]+.05,Mt)}),F.needsUpdate=!0;for(let j=0;j<h;j++){let[$,ot]=N(j),gt=j===(vt??Ct),it=B(j)*(gt?1.5:1);_.makeScale(it,it,it).setPosition($,Dt[j]+it*.6,ot),k.setMatrixAt(j,_),p.copy(v).lerp(st[j]>=0?d:m,Math.min(1,Math.abs(st[j])**.8*1.25+.25)),gt&&p.set(o.fg),k.setColorAt(j,p)}k.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0)}function St(st){at=Math.max(0,Math.min(l.modes.length-1,st)),Ae(),Se(),Qt(),q(),a()}function Jt(st){Ct=st,J(),q(),a(),s(l.ids[st])}let ct=()=>l.ids.map((st,R)=>{let[E,F]=N(R);return{at:[E,Dt[R]+.4,F],r:B(R)*1.2,key:{kind:"note",id:st,tip:`${f(R)} \xB7 ${Math.abs(Wt(R))<.05?"still":Wt(R)>0?"up":"down"} ${Math.abs(Wt(R)).toFixed(2)}`}}}),ne=()=>{nt=!0,clearTimeout(dt)},Rt=()=>{clearTimeout(dt),dt=setTimeout(()=>{nt=!1,pt=null,a()},1500)};return i.canvas.addEventListener("pointerdown",ne,!0),addEventListener("pointerup",Rt),addEventListener("pointercancel",Rt),Se(),Ae(),Qt(),q(),{targets:ct,click(st){st.kind==="note"&&Jt(u.get(st.id))},hover(st){let R=st&&st.kind==="note"?u.get(st.id):null;R!==vt&&(vt=R,J(),q())},update(st){"selected"in st&&(Ct=st.selected&&u.has(st.selected)?u.get(st.selected):null,J(),q())},frame(){if(ut&&!nt){let st=performance.now();pt!=null&&(_t=(_t+(st-pt)/1e3*.5*Math.min(2.2,.45+Q().freq*.8))%1),pt=st,q(),a()}else pt=null},stat:Lt,today:()=>{let st=eh(l.modes[0].vector);return{text:`The vault's cleanest cut is ${st.up.length} notes against ${st.down.length}`,label:"Show it",run:()=>{Ct=null,St(0)}}},api:{modes:()=>l.modes,ids:()=>l.ids,mode:()=>at,setMode:St,playing:()=>ut,moving:()=>ut&&!nt,hold(st){ut=!1,st!=null&&(_t=st),q(),Qt(),a()},span:()=>Math.max(D,L),rise:()=>Z,selected:()=>Ct==null?null:l.ids[Ct],heights:()=>Array.from(Dt),sheetHeights:()=>Array.from(H.attributes.position.array.filter((st,R)=>R%3===1)),split:Yt},dispose(){clearTimeout(dt),i.canvas.removeEventListener("pointerdown",ne,!0),removeEventListener("pointerup",Rt),removeEventListener("pointercancel",Rt);for(let st of[C,Y,k,K])st.material.dispose();H.dispose(),G.dispose()}}}};function sh(i,t,e,n,s){let r=[],o=new Array(i).fill(-1);for(let c=0;c<i;c++)c!==s&&(o[c]=r.length,r.push(c));let a=r.length,l=Array.from({length:a},()=>new Float64Array(a+1));t.forEach(([c,f],u)=>{let d=e[u];for(let[m,v]of[[c,f],[f,c]])o[m]>=0&&(l[o[m]][o[m]]+=d,o[v]>=0&&(l[o[m]][o[v]]-=d))}),o[n]>=0&&(l[o[n]][a]=1);for(let c=0;c<a;c++)l[c][c]<1e-300&&(l[c][c]=1);for(let c=0;c<a;c++){let f=c;for(let d=c+1;d<a;d++)Math.abs(l[d][c])>Math.abs(l[f][c])&&(f=d);[l[c],l[f]]=[l[f],l[c]];let u=l[c][c];if(!(Math.abs(u)<1e-300))for(let d=c+1;d<a;d++){let m=l[d][c]/u;if(m)for(let v=c;v<=a;v++)l[d][v]-=m*l[c][v]}}let h=new Float64Array(a);for(let c=a-1;c>=0;c--){let f=l[c][a];for(let u=c+1;u<a;u++)f-=l[c][u]*h[u];h[c]=Math.abs(l[c][c])<1e-300?0:f/l[c][c]}return Array.from({length:i},(c,f)=>o[f]>=0?h[o[f]]:0)}function iy(i,t,e,n,s,r){let o=sh(i,t,t.map((a,l)=>e[l]/n[l]),s,r);return t.map(([a,l],h)=>e[h]/n[h]*(o[a]-o[l]))}function sy(i,t,{lengths:e,pairs:n,steps:s=200,dt:r=.5,floor:o=1e-6,keep:a=40}={}){let l=e||t.map(()=>1),h=t.map(()=>1),c=[Float32Array.from(h)],f=Math.max(1,Math.floor(s/(a-1)));for(let u=0;u<s&&n.length;u++){let[d,m]=n[u%n.length],v=iy(i,t,h,l,d,m);for(let _=0;_<h.length;_++)h[_]=Math.max(o,h[_]+r*(Math.abs(v[_])-h[_]));(u+1)%f===0&&c.length<a&&c.push(Float32Array.from(h))}for(;c.length<a;)c.push(Float32Array.from(h));return c[c.length-1]=Float32Array.from(h),{D:h,frames:c,steps:s}}function ry(i,t=.1){let e=Math.max(...i,1e-12),n=Array.from(i,s=>s/e);return{share:n,kept:n.map(s=>s>=t)}}var oy=24;function nf(i,t,{max:e=80,hubs:n=6,hubMax:s=oy,steps:r=200}={}){let{ids:o,bars:a,own:l}=Fs(i,t,{max:e,hubs:s}),h=o.map((p,y)=>l.get(p).moc?y:-1).filter(p=>p>=0),c=h.length>=2?"hubs":"top",f=o.map((p,y)=>y).filter(p=>!h.includes(p)),u=c==="hubs"?h:f.slice(0,Math.min(n,f.length)),d=[];for(let p=0;p<u.length;p++)for(let y=p+1;y<u.length;y++)d.push([u[p],u[y]]);let m=d.length?sy(o.length,a,{pairs:d,steps:Math.max(r,d.length)}):{D:a.map(()=>1),frames:[Float32Array.from(a.map(()=>1))]},{share:v,kept:_}=ry(m.D);return{ids:o,bars:a,pos:Ds(o,a),hubs:u,fed:c,D:m.D,frames:m.frames,share:v,kept:_}}function sf(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function rf(i,t){let e=Array.from({length:i},()=>[]);for(let[r,o]of t)e[r].push(o),e[o].push(r);let n=new Array(i).fill(-1),s=0;for(let r=0;r<i;r++){if(n[r]>=0)continue;let o=[r];for(n[r]=s;o.length;)for(let a of e[o.pop()])n[a]<0&&(n[a]=s,o.push(a));s++}return n}function vl(i,t,e){if(e.length<2)return 0;let n=rf(i,t),s=t.map(()=>1),r=0,o=0;for(let a=0;a<e.length;a++)for(let l=a+1;l<e.length;l++)o++,r+=n[e[a]]!==n[e[l]]?i:sh(i,t,s,e[a],e[l])[e[a]];return r/o}function of(i,t,e){if(i<2||new Set(rf(i,t)).size!==1)return null;let n=i-1,s=Array.from({length:n},(h,c)=>{let f=new Float64Array(2*n);return f[n+c]=1,f});for(let[h,c]of t){let f=h-1,u=c-1;f>=0&&s[f][f]++,u>=0&&s[u][u]++,f>=0&&u>=0&&(s[f][u]--,s[u][f]--)}for(let h=0;h<n;h++){let c=h;for(let u=h+1;u<n;u++)Math.abs(s[u][h])>Math.abs(s[c][h])&&(c=u);[s[h],s[c]]=[s[c],s[h]];let f=s[h][h];for(let u=0;u<2*n;u++)s[h][u]/=f;for(let u=0;u<n;u++){if(u===h||!s[u][h])continue;let d=s[u][h];for(let m=0;m<2*n;m++)s[u][m]-=d*s[h][m]}}let r=(h,c)=>h===0||c===0?0:s[h-1][n+c-1],o=(h,c)=>r(h,h)+r(c,c)-2*r(h,c),a=[];for(let h=0;h<e.length;h++)for(let c=h+1;c<e.length;c++)a.push([e[h],e[c]]);let l=h=>a.length?a.reduce((c,[f,u])=>c+h(f,u),0)/a.length:0;return{base:l(o),after:([h,c])=>{let f=o(h,c);return l((u,d)=>{let m=r(u,h)-r(u,c)-r(d,h)+r(d,c);return o(u,d)-m*m/(1+f)})}}}var Ls=(i,t)=>i<t?i+","+t:t+","+i;function ay(i,t,e,n=null){let s=(r,o)=>r!==o&&!t.has(Ls(r,o))&&!(n&&(n.has(r)||n.has(o)));for(let r=0;r<200;r++){let o=Math.floor(e()*i),a=Math.floor(e()*i);if(s(o,a))return[o,a]}for(let r=0;r<i;r++)for(let o=r+1;o<i;o++)if(s(r,o))return[r,o];return null}function ly(i,t,e,n,{shuffles:s=50,seed:r=1,fast:o,skip:a=null}={}){let l=o===void 0?of(i,t,e):o,h=l?l.base:vl(i,t,e),c=p=>l?l.after(p):vl(i,[...t,p],e),f=new Set(t.map(([p,y])=>Ls(p,y))),u=a&&a.length?new Set(a):null;if(n[0]===n[1]||f.has(Ls(n[0],n[1]))||u&&(u.has(n[0])||u.has(n[1])))return{gain:0,p:1,valid:!1};let d=h-c(n),m=sf(r),v=0,_=new Set(f);_.add(Ls(n[0],n[1]));for(let p=0;p<s;p++){let y=ay(i,_,m,u);if(!y)break;h-c(y)>=d&&v++}return{gain:d,p:(1+v)/(1+s),valid:!0}}function cy(i,t,e,n,{shuffles:s=50,seed:r=1,alpha:o=.05,minGain:a=.001,skip:l=null}={}){let h=of(i,t,e);return n.map(c=>({link:c,...ly(i,t,e,c,{shuffles:s,seed:r,fast:h,skip:l})})).filter(c=>c.valid&&c.p<o&&c.gain>=a).sort((c,f)=>f.gain-c.gain||c.p-f.p)}function hy(i,t,{max:e=200,seed:n=1,skip:s=null}={}){let r=new Set(t.map(([h,c])=>Ls(h,c))),o=[],a=new Set(s||[]);for(let h=0;h<i;h++)if(!a.has(h))for(let c=h+1;c<i;c++)!a.has(c)&&!r.has(Ls(h,c))&&o.push([h,c]);if(o.length<=e)return o;let l=sf(n);for(let h=o.length-1;h>0;h--){let c=Math.floor(l()*(h+1));[o[h],o[c]]=[o[c],o[h]]}return o.slice(0,e).sort((h,c)=>h[0]-c[0]||h[1]-c[1])}function af(i,t,e,{steps:n=5,max:s=200,shuffles:r=50,seed:o=1,alpha:a=.05,minGain:l=.001,skip:h=null}={}){let c=t.map(([d,m])=>[d,m]),f=[],u=vl(i,c,e);for(let d=0;d<n;d++){let m=cy(i,c,e,hy(i,c,{max:s,seed:o+d,skip:h}),{shuffles:r,seed:o+d,alpha:a,minGain:l,skip:h})[0];if(!m)break;c=[...c,m.link],f.push(m)}return{added:f,before:u,after:vl(i,c,e)}}var uy=8,lf=.1,cf={id:"slime",name:"Slime mould",hint:"Which written links carry the vault, and which fade away",home:{yaw:.6,pitch:.75,dist:46,min:14,max:110},stage:{fog:[40,100]},actions:["graph","add-link","decline-link"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=nf(e.nodes,e.links,{max:80}),h=l.ids.length,c=l.frames.length-1;if(h<3||l.hubs.length<2){let F=()=>mt(h,"linked note");return t.stat(F()),t.controls({at:"centre",lines:["Slime mould needs a set of notes joined by written links.",`${mt(h,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:F,today:()=>null,api:{empty:!0}}}let f=new Map(e.nodes.map(F=>[F.id,F])),u=F=>f.get(l.ids[F]).name,d=new Map(l.ids.map((F,j)=>[F,j])),m=l.fed==="hubs"?"hubs":"most linked notes",v=new Set(l.hubs),_=Math.max(...l.D,1e-12),p=F=>(i.scene.add(F),F),y=l.pos.map(F=>F[0]),M=l.pos.map(F=>F[1]),x=(Math.min(...y)+Math.max(...y))/2,b=(Math.min(...M)+Math.max(...M))/2,w=20,g=Math.max(1e-9,...l.pos.map(F=>Math.hypot(F[0]-x,F[1]-b))),S=w/g,P=F=>[(l.pos[F][0]-x)*S,(l.pos[F][1]-b)*S],T=9,U=new Float64Array(h),D=[],L=F=>[P(F)[0],U[F],P(F)[1]],N=()=>{let F=new Float64Array(h);l.bars.forEach(([$,ot],gt)=>{let it=Yt[gt]/_;F[$]+=it,F[ot]+=it});let j=Math.max(...F,1e-9);for(let $=0;$<h;$++)U[$]=T*Math.sqrt(F[$]/j)*(v.has($)?1:.85)},Z=new Ht,H=new xt,O=new xt(o.bg).lerp(new xt(o.muted),.55),z=new xt("#f59e0b"),C=new xt(o.accent||"#38bdf8"),Y=new xt(o.fg),k=new V(0,1,0),G=new V,K=new V,B=new Ge,I=new V,nt=p(new fe(new ve(1,1,1,10,1),new Te({roughness:.5}),l.bars.length)),dt=p(new fe(new de(1,16,12),new Te({roughness:.4}),h));nt.frustumCulled=dt.frustumCulled=!1;let at=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,ut=at?c:0,_t=!at,pt=null,Ct=n.selected&&d.has(n.selected)?d.get(n.selected):null,vt=null,Q=()=>{let F=l.frames[Math.floor(ut)],j=l.frames[Math.min(c,Math.floor(ut)+1)],$=ut-Math.floor(ut);return Array.from(F,(ot,gt)=>ot+(j[gt]-ot)*$)},Ft=F=>F.filter(j=>j/_>=lf).length,Dt=F=>v.has(F)?.75:.4,Yt=Q();N();let Wt=()=>{let F=vt??Ct;if(F!=null){let j=l.bars.map((ot,gt)=>ot[0]===F||ot[1]===F?gt:-1).filter(ot=>ot>=0),$=j.filter(ot=>Yt[ot]/_>=lf).length;return`${u(F)} \xB7 ${v.has(F)?"hub \xB7 ":""}${$} of ${mt(j.length,"link")} carry on`}return`${Ft(Yt)} of ${mt(l.bars.length,"link")} carry on \xB7 fed by ${l.hubs.length} ${m} \xB7 step ${Math.round(ut)} of ${c}`};function Lt(){let F=ut>=c;t.controls({lines:[F?`The links that carry flow between the ${m}`:"Tubes thicken where flow is high and thin where it is not"],buttons:[{label:_t&&!F?"Hold":F?"Grow again":"Play",title:_t&&!F?"Hold the growth":F?"Start again from tubes of equal width":"Let the mould grow",run:()=>{ut>=c&&(ut=0),_t=!(_t&&!F),pt=null,ee(),a()}},{label:"Start",title:"Back to tubes of equal width",off:ut===0,run:()=>{ut=0,_t=!1,pt=null,ee(),a()}},{label:"End",title:"Jump to the finished backbone",off:ut>=c,run:()=>{ut=c,_t=!1,ee(),a()}},{label:"Simulate",title:`Find links that would shorten the routes between your ${m}, and test each against random links`,run:st}]})}function Qt(){let F=[],j=vt??Ct;D.length=0;let $=(ot,gt)=>{gt.at=L(ot),D.push([ot,gt.at]),F.push(gt)};for(let ot of l.hubs.slice(0,4))ot!==j&&$(ot,{text:jt(u(ot),30),dy:-16,color:o.accent});j!=null&&$(j,{text:jt(u(j),34),strong:!0,dy:-20,run:()=>Se(j),title:`Open ${u(j)}`}),t.labels(F)}function ee(){Yt=Q(),Ae(),Qt(),Lt(),t.stat(Wt())}function Ae(){N(),l.bars.forEach(([F,j],$)=>{let[ot,gt,it]=L(F),[ht,Mt,W]=L(j),ft=Math.min(1,Yt[$]/_),lt=.05+.4*Math.sqrt(ft);G.set(ht-ot,Mt-gt,W-it);let wt=G.length()||1e-6;G.normalize(),K.set((ot+ht)/2,(gt+Mt)/2,(it+W)/2),B.setFromUnitVectors(k,G),I.set(lt,wt,lt),Z.compose(K,B,I),nt.setMatrixAt($,Z),H.copy(O).lerp(z,Math.min(1,Math.sqrt(ft)*1.1)),nt.setColorAt($,H)}),nt.instanceMatrix.needsUpdate=!0,nt.instanceColor&&(nt.instanceColor.needsUpdate=!0);for(let F=0;F<h;F++){let[j,$,ot]=L(F),gt=F===(vt??Ct),it=Dt(F)*(gt?1.4:1);Z.makeScale(it,it,it).setPosition(j,$,ot),dt.setMatrixAt(F,Z),H.copy(v.has(F)?C:O).lerp(Y,v.has(F)?0:.35),gt&&H.copy(Y),dt.setColorAt(F,H)}for(let[F,j]of D)j[1]=U[F];dt.instanceMatrix.needsUpdate=!0,dt.instanceColor&&(dt.instanceColor.needsUpdate=!0)}function Se(F){Ct=F,ee(),a(),s(l.ids[F])}let J=()=>l.ids.map((F,j)=>({at:L(j),r:Dt(j)*1.3,key:{kind:"note",id:F,tip:`${u(j)}${v.has(j)?" \xB7 hub":""}`}})),q=Yd({n:h,bars:l.bars,kept:l.kept,hubs:l.hubs,order:l.ids.map((F,j)=>j)},u),St=null,Jt=new Set,ct=()=>{Jt.clear();for(let F of n.declined||[])Jt.add(F.from+">"+F.to)};ct();let ne=()=>St?St.rows.filter(F=>!Jt.has(F.from+">"+F.to)):[],Rt=F=>{let j=F.from+">"+F.to,$=[d.get(F.from),d.get(F.to)],ot=`about 1 in ${Math.max(2,Math.round(1/F.p))}`;return{text:`Link ${u($[0])} to ${u($[1])}: routes between your ${m} get ${Math.max(1,Math.round(F.pct*100))}% shorter. A random link would do this ${ot} times.`,label:"Add link",title:`Add a link between ${u($[0])} and ${u($[1])}`,run:()=>{Jt.add(j),R(),r("add-link",{from:F.from,to:F.to})},extra:[{label:"Decline",title:"Skip this link",run:()=>{Jt.add(j),R(),r("decline-link",{from:F.from,to:F.to})}},{label:"Show",title:`Show ${u($[0])}`,run:()=>Se($[0])}]}};function st(){let F=af(h,l.bars,l.hubs,{steps:5,max:200,shuffles:50,seed:1,skip:l.fed==="hubs"?l.hubs:null}),j=F.before;St={rows:F.added.map(ot=>{let gt={from:l.ids[ot.link[0]],to:l.ids[ot.link[1]],p:ot.p,pct:j>0?ot.gain/j:0};return j-=ot.gain,gt})},ct(),R(),t.card(!0)}function R(){let F=ne(),j=St&&!F.length?[{text:St.rows.length?"No more links to test.":`No link does better than a random one would. Your ${m} already reach each other about as well as links can.`,label:"Show it",run:()=>{Ct=null,ut=c,_t=!1,ee(),a()}}]:[];t.explain({plain:q.plain,about:q.about,legend:E,insights:[...F.map(Rt),...j,...q.insights.map($=>({text:$.text,label:$.label,run:()=>{$.note!=null?Se($.note):(Ct=null,ut=c,_t=!1,ee(),a())}}))]})}let E=[{color:"#f59e0b",text:"carries flow (higher = more)"},{color:o.muted,text:"fading"},{color:o.accent||"#38bdf8",text:"hub"}];return R(),ee(),{targets:J,click(F){F.kind==="note"&&Se(d.get(F.id))},hover(F){let j=F&&F.kind==="note"?d.get(F.id):null;j!==vt&&(vt=j,ee())},update(F){"declined"in F&&(n={...n,declined:F.declined},St&&(ct(),R())),"selected"in F&&(Ct=F.selected&&d.has(F.selected)?d.get(F.selected):null,ee())},frame(){if(_t&&ut<c){let F=performance.now();pt!=null&&(ut=Math.min(c,ut+(F-pt)/1e3*uy)),pt=F,ut>=c?(_t=!1,ee()):(Yt=Q(),Ae(),t.stat(Wt())),a()}else pt=null},stat:Wt,today:()=>({text:`${Ft(l.frames[c])} of ${mt(l.bars.length,"link")} carry the vault between its ${l.hubs.length} ${m}`,label:"Show it",run:()=>{Ct=null,ut=c,_t=!1,ee()}}),api:{ids:()=>l.ids,hubs:()=>l.hubs.map(F=>l.ids[F]),step:()=>ut,steps:()=>c,playing:()=>_t&&ut<c,widths:()=>Array.from(Yt),final:()=>Array.from(l.D),setStep(F){ut=Math.max(0,Math.min(c,F)),_t=!1,ee(),a()},hold(){_t=!1,ee()},selected:()=>Ct==null?null:l.ids[Ct],carrying:()=>Ft(Yt),links:()=>l.bars.length},dispose(){for(let F of[nt,dt])F.material.dispose(),F.geometry.dispose()}}}};function Sl(i,{linkedOnly:t=!0}={}){let e=Ze(i.nodes),n=new Map;for(let s of i.nodes)s.moc&&!n.has(s.cluster)&&n.set(s.cluster,s);return[...i.clusters].sort((s,r)=>r.size-s.size||s.id-r.id).map(s=>({cluster:s.id,name:s.label||s.name,moc:n.get(s.id)||null,notes:i.nodes.filter(r=>r.cluster===s.id&&!Re(r)&&!(t&&r.isolated)).sort((r,o)=>e(o)-e(r)||(r.id<o.id?-1:1))})).filter(s=>s.notes.length)}var bl=(i,t=1)=>{let e=Math.max(1,Math.ceil(Math.sqrt(i*t)));return{cols:e,rows:Math.ceil(i/e)}},Jr=i=>{let t=en(i),e=Math.imul(t^t>>>15,2246822507)>>>0;return[(t>>>4)%1e3/1e3,(e>>>7)%1e3/1e3]};function hf(i){let{cols:t,rows:e}=bl(i),n=(t-1)/2,s=(e-1)/2,r=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++)r.push([a-n,o-s]);return r.sort((o,a)=>Math.hypot(o[0],o[1])-Math.hypot(a[0],a[1])||o[1]-a[1]||o[0]-a[0]).slice(0,i)}var rh=2.4,dy=["#22d3ee","#f472b6","#facc15","#a5f3fc"],uf="#fb7185",df="#facc15",fy=(i,t,e)=>e(i)?0:t(i)>.3?2:1;function py(i,{hall:t=!1,now:e=Date.now()}={}){let n=Ze(i.nodes),s=Us(i.nodes),r=Si(i),o=Sl(i),a=Math.max(...o.map(x=>bl(x.notes.length).cols),2)*rh+3,{cols:l,rows:h}=bl(Math.max(o.length,1),.8),c=[],f=[],u=new Set,d=-(l-1)*a/2,m=-(h-1)*a/2;o.forEach((x,b)=>{x.x=d+b%l*a,x.z=m+Math.floor(b/l)*a,f.push({x:x.x,z:x.z,size:a-1.2,d:b});let w=hf(x.notes.length);if(x.notes.forEach((g,S)=>{let P=Math.max(.7,Math.min(1.8,.35+Math.log1p(g.words||0)*.2)),T=.9+9*Math.sqrt(Math.max(0,n(g))),[U,D]=w[S];c.push({n:g,x:x.x+U*rh,z:x.z+D*rh,w:P,h:T,kind:"tower",d:b,level:fy(g,s,r)}),u.add(g.id)}),x.moc){let g=Math.max(3,...c.filter(S=>S.d===b).map(S=>S.h));c.push(t?{n:x.moc,x:x.x,z:x.z+a/2-1.3,w:1.4,h:1.1,kind:"hall",d:b,level:2}:{n:x.moc,x:x.x,z:x.z-a/2+1.6,w:.9,h:g+3,kind:"spire",d:b,level:2}),u.add(x.moc.id)}x.cars=Math.round(2+10*Math.min(1,x.notes.reduce((g,S)=>g+s(S),0)/6))});let v=m+(h-1)*a+a/2+3,_=Math.max(l*a-4,8);for(let x of i.nodes){if(Re(x)||u.has(x.id))continue;let[b]=Jr("stall:"+x.id);c.push({n:x,x:d-a/2+2+b*_,z:v+en(x.id)%3*1.4,w:.7,h:.8,kind:"stall",d:-1,level:1})}let p=e-7*864e5,y=x=>typeof x.n.born=="string"?Date.parse(x.n.born):NaN,M=c.filter(x=>x.kind==="tower"&&y(x)>=p).sort((x,b)=>y(b)-y(x)).slice(0,15).map(x=>x.n.id);return{towers:c,pads:f,districts:o,cell:a,front:v,fresh:M,bounds:{x:[d-a/2,-d+a/2],z:[m-a/2,v+3]}}}function my(i,t){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle=t.wall,n.fillRect(0,0,128,128);for(let r=0;r<8;r++)for(let o=0;o<8;o++){let a=en(`${i}:${o}:${r}`)%1e3/1e3,l=a<i;n.fillStyle=l?t.lit[(o+r*3)%t.lit.length]:t.pane,n.globalAlpha=l?.55+.45*(a/i):.5,n.fillRect(o*16+3,r*16+3,10,11)}let s=new ur(e);return s.wrapS=s.wrapT=ds,s.colorSpace=ze,s.magFilter=Ue,s}var bi=(i,t,e)=>new xt(i).lerp(new xt(t),e),gy={id:"cyberpunk",name:"Cyberpunk",hint:"A neon city: topics are districts, notes are towers, stale ones go dark",stage:{fog:[55,170],ambient:.4},tower:"tower",hall:!1,cranes:!1,sheet:{wall:"#2a2a36",pane:"#3a3a4a",lit:dy},beacon:uf,beaconName:"pink",stall:df,arc:"#22d3ee",wall:(i,t)=>bi(i,"#ffffff",t===0?.55:.3).multiplyScalar(t===0?.5:1),lane:(i,t,e,n)=>({y:4+t*8,z:(i-.5)*(n-3),c:e%3?"#fca5a5":"#e0f2fe"}),stat:i=>`${mt(i.towers,"tower")} \xB7 ${i.dark} dark \xB7 ${mt(i.districts,"district")}`,plain:"Picture your notes as a city. A tall tower is a note everything else leans on. Lit windows mean someone has been in it lately; a dark tower has been left alone for a long time.",about:"Each topic is a district and each note a tower. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; dark is stale. A pink beacon on a roof is an open task, the tall thin spire is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#22d3ee",text:"height = relied on, windows = recent"},{color:"#6b7280",text:"dark = stale"},{color:uf,text:"beacon = open task"},{color:df,text:"stall = no topic"}]},xy="#e5e7eb",ff="#facc15",oh=i=>({id:i.id,name:i.name,hint:i.hint,home:{yaw:.55,pitch:.38,dist:58,min:12,max:140},stage:i.stage,actions:["graph"],build({stage:t,frame:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let h=py(n,{hall:i.hall}),c=h.towers,f=c.filter(q=>q.kind!=="stall");if(f.length<3){let q=()=>mt(c.length,"note");return e.stat(q()),e.controls({at:"centre",lines:[`${i.name} needs notes in topics, linked to one another.`,`${mt(f.length,i.tower)} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:q,today:()=>null,api:{empty:!0}}}let u=new Map(c.map(q=>[q.n.id,q])),d=q=>q.n.name,m=q=>(t.scene.add(q),q),v=q=>q.kind==="stall"?i.stall:q.kind==="hall"?xy:a.palette[(q.n.cluster||0)%a.palette.length],_=new Map,p=(q,St)=>{_.has(q)||_.set(q,new Set),_.get(q).add(St)};for(let q of n.links)q.kind!=="wanted"&&u.has(q.source)&&u.has(q.target)&&(p(q.source,q.target),p(q.target,q.source));let y=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,M=new Ht,x=typeof s.hour=="number"?s.hour:new Date().getHours(),b=x<5||x>=21,w=new xt(a.bg).getHSL({}).l<.5,g=i.sky?i.sky(x):null,S=null;g&&(t.sky({top:bi(a.bg,g,w?0:.3),haze:bi(a.bg,g,w?.035:.1),stars:b&&w?160:0}),S=m(new qt(new In(Math.max(h.bounds.x[1]-h.bounds.x[0],h.cell*3)*4,48).rotateX(-Math.PI/2),new le({color:bi(i.ground,a.bg,w?.94:.45)}))),S.position.set((h.bounds.x[0]+h.bounds.x[1])/2,-.16,h.front),S.userData.backdrop=!0);let P=m(new fe(new ln(1,.1,1),new le,h.pads.length));h.pads.forEach((q,St)=>{P.setMatrixAt(St,M.makeScale(q.size,1,q.size).setPosition(q.x,-.05,q.z)),P.setColorAt(St,bi(a.palette[h.districts[q.d].cluster%a.palette.length],a.bg,.86))});let T=m(new qt(new ln(h.bounds.x[1]-h.bounds.x[0],.1,5),new le({color:bi(i.stall,a.bg,.9)})));T.position.set((h.bounds.x[0]+h.bounds.x[1])/2,-.06,h.front+.5);let U=[0,1,2].map(q=>{let St=c.filter(R=>R.level===q&&(R.kind==="tower"||R.kind==="spire")),Jt=[],ct=[],ne=[];St.forEach(R=>{let E=R.w/2,F=en(R.n.id)%8/8;for(let[j,$,ot,gt]of[[-E,-E,E,-E],[E,-E,E,E],[E,E,-E,E],[-E,E,-E,-E]]){let it=Jt.length/3,ht=Math.hypot(ot-j,gt-$)/4,Mt=R.h/4;Jt.push(R.x+j,0,R.z+$,R.x+ot,0,R.z+gt,R.x+ot,R.h,R.z+gt,R.x+j,R.h,R.z+$),ct.push(F,0,F+ht,0,F+ht,Mt,F,Mt),ne.push(it,it+1,it+2,it,it+2,it+3)}});let Rt=new oe().setAttribute("position",new Vt(Jt,3)).setAttribute("uv",new Vt(ct,2)).setAttribute("color",new Vt(new Float32Array(Jt.length),3));Rt.setIndex(ne);let st=m(new qt(Rt,new le({map:my([.04,.28,.7][q],i.sheet),vertexColors:!0,side:ge})));return st.frustumCulled=!1,{list:St,geo:Rt,mesh:st}}),D=m(new fe(new ln(1,1,1),new le,c.length));D.frustumCulled=!1;let L=c.filter(q=>q.n.tasks>0),N=m(new fe(new de(1,10,8),new le({color:i.beacon}),Math.max(L.length,1)));N.count=L.length,N.frustumCulled=!1,L.forEach((q,St)=>N.setMatrixAt(St,M.makeScale(.28,.28,.28).setPosition(q.x,q.h+.35,q.z)));let Z=h.districts.flatMap(q=>Array.from({length:q.cars},(St,Jt)=>{let[ct,ne]=Jr(`car:${q.cluster}:${Jt}`);return{d:q,u:ct,v:(.02+ne*.05)*(Jt%2?1:-1),...i.lane(ct,ne,Jt,h.cell)}})),H=m(new fe(new ln(.7,.12,.14),new le,Math.max(Z.length,1)));H.count=Z.length,H.frustumCulled=!1,Z.forEach((q,St)=>H.setColorAt(St,new xt(q.c)));let O=m(new He(new oe,new Fe({color:i.arc,transparent:!0,opacity:.9})));O.frustumCulled=!1;let z=i.cranes?h.fresh.map(q=>u.get(q)):[],C=c.filter(q=>q.kind==="hall"),Y=[];for(let q of z)Y.push([q.x+q.w/2,q.h+.8,q.z+q.w/2,.09,1.6,.09,ff],[q.x+q.w/2-.45,q.h+1.55,q.z+q.w/2,1.5,.09,.09,ff]);for(let q of C)Y.push([q.x,q.h+.7,q.z,.07,1.4,.07,"#94a3b8"],[q.x+.32,q.h+1.2,q.z,.6,.36,.05,a.palette[h.districts[q.d].cluster%a.palette.length]]);let k=m(new fe(new ln(1,1,1),new le,Math.max(Y.length,1)));k.count=Y.length,k.frustumCulled=!1,Y.forEach(([q,St,Jt,ct,ne,Rt,st],R)=>{k.setMatrixAt(R,M.makeScale(ct,ne,Rt).setPosition(q,St,Jt)),k.setColorAt(R,new xt(st))});let G=c.filter(q=>q.kind==="tower").sort((q,St)=>St.h-q.h)[0]||null,K=s.selected&&u.has(s.selected)?s.selected:null,B=null,I=null,nt=y,dt=()=>B||K,at=new Set,ut=q=>(I==null||q.d===I||q.d<0)&&(!dt()||at.has(q.n.id)),_t=c.filter(q=>q.kind==="tower"&&q.level===0),pt=q=>_t.filter(St=>St.d===q),Ct=()=>{let q=dt()&&u.get(dt());return q&&(q.kind==="spire"||q.kind==="hall")?`${d(q)} \xB7 map of ${mt(h.districts[q.d].notes.length,"note")}`:q?`${d(q)} \xB7 ${mt(q.n.inlinks||0,"link")} in \xB7 ${q.level===0?"dark":q.level===2?"busy":"dim"}${q.n.tasks?` \xB7 ${mt(q.n.tasks,"open task")}`:""}`:i.stat({towers:c.filter(St=>St.kind==="tower").length,dark:_t.length,districts:h.districts.length,fresh:h.fresh.length,tallest:G?jt(d(G),22):""})};function vt(){let q=dt();if(at.clear(),q){at.add(q);for(let ct of _.get(q)||[])at.add(ct)}for(let ct of U){let ne=ct.geo.getAttribute("color"),Rt=0;ct.list.forEach(st=>{let R=i.wall(v(st),st.level).multiplyScalar(ut(st)?1:.16);for(let E=0;E<16;E++)ne.setXYZ(Rt++,R.r,R.g,R.b)}),ne.needsUpdate=!0}c.forEach((ct,ne)=>{let Rt=ct.kind==="stall"||ct.kind==="hall",st=Rt?ct.w:ct.w*1.04;D.setMatrixAt(ne,M.makeScale(st,Rt?ct.h:.12,st).setPosition(ct.x,Rt?ct.h/2:ct.h+.06,ct.z)),D.setColorAt(ne,bi(v(ct),a.bg,ut(ct)?ct.level===0?.55:0:.85))}),D.instanceMatrix.needsUpdate=!0,D.instanceColor.needsUpdate=!0;let St=[];if(q){let ct=u.get(q);for(let ne of _.get(q)||[]){let Rt=u.get(ne),st=[ct.x,ct.h,ct.z],R=[Rt.x,Rt.h,Rt.z],E=[(ct.x+Rt.x)/2,Math.max(ct.h,Rt.h)+3+Math.hypot(ct.x-Rt.x,ct.z-Rt.z)*.25,(ct.z+Rt.z)/2],F=st;for(let j=1;j<=12;j++){let $=j/12,ot=[0,1,2].map(gt=>(1-$)*(1-$)*st[gt]+2*(1-$)*$*E[gt]+$*$*R[gt]);St.push(...F,...ot),F=ot}}}O.geometry.setAttribute("position",new Vt(St,3)),O.visible=St.length>0;let Jt=h.districts.map((ct,ne)=>({d:ct,i:ne})).filter(ct=>I==null||I===ct.i).map(({d:ct})=>({text:jt(ct.name,28)+(i.hall&&!ct.moc?" \xB7 no map":""),at:[ct.x,.4,ct.z+h.cell/2-.6],color:bi(a.palette[ct.cluster%a.palette.length],"#ffffff",.45).getStyle(),dy:6}));if(q){let ct=u.get(q);Jt.unshift({text:jt(d(ct),34),at:[ct.x,ct.h,ct.z],strong:!0,dy:-18,run:()=>Q(q),title:`Open ${d(ct)}`})}e.labels(Jt),e.stat(Ct()),e.chip(I==null?null:`District: ${jt(h.districts[I].name,24)}`,()=>{I=null,vt(),l()})}function Q(q){K=q,vt(),l(),r(q)}let Ft=q=>{I=null,K=q,vt(),l()},Dt=q=>{I=q,K=null,vt(),l()},Yt=h.districts.map((q,St)=>[pt(St).length,St]).sort((q,St)=>St[0]-q[0])[0],Wt=c.filter(q=>q.kind==="stall"),Lt=[..._t].sort((q,St)=>St.h-q.h)[0],Qt=[];Yt&&Yt[0]&&Qt.push({text:`${h.districts[Yt[1]].name} is the darkest district: ${mt(Yt[0],"stale note")}. Open the tallest and decide whether it is still true.`,label:"Show district",run:()=>Dt(Yt[1])}),Lt&&Lt.h>3&&Qt.push({text:`${d(Lt)} stands tall yet has gone dark: other notes lean on it and it has not been edited in ${Lt.n.age} days.`,label:"Open note",run:()=>Q(Lt.n.id)}),L.length&&Qt.push({text:`${mt(L.length,i.tower)} with a ${i.beaconName} beacon: an open task. The tallest is the one the most notes wait on.`,label:"Open note",run:()=>Q([...L].sort((q,St)=>St.h-q.h)[0].n.id)}),Wt.length&&Qt.push({text:`${mt(Wt.length,"note")} stand as stalls on the street, in no topic. Link each to a topic's notes and it gets a ${i.tower}.`,label:"Open note",run:()=>Q(Wt[0].n.id)}),i.cranes&&G&&Qt.unshift({text:`${d(G)} is the tallest ${i.tower}: ${mt(G.n.inlinks||0,"note")} link to it.`,label:"Show tallest",run:()=>Ft(G.n.id)}),z.length&&Qt.push({text:`${mt(z.length,i.tower)} went up this week, each with a crane. The newest is ${d(z[0])}: link it to the notes it belongs with.`,label:"Open note",run:()=>Q(z[0].n.id)});let ee=h.districts.filter(q=>!q.moc);i.hall&&ee.length&&Qt.push({text:`${mt(ee.length,"district")} have no town hall: the topic has no map note. The biggest is ${ee[0].name}.`,label:"Show district",run:()=>Dt(h.districts.indexOf(ee[0]))}),e.explain({plain:i.plain,about:i.about,legend:i.legend,insights:Qt}),e.controls({lines:[`Pick a ${i.tower} to see what it links to`]}),vt();let Ae=performance.now(),Se=q=>{Z.forEach((St,Jt)=>H.setMatrixAt(Jt,M.makeTranslation(St.d.x+(((St.u+St.v*q)%1+1)%1-.5)*(h.cell-2),St.y,St.d.z+St.z))),H.instanceMatrix.needsUpdate=!0,H.instanceColor&&(H.instanceColor.needsUpdate=!0)};Se(0);let J=0;return{targets:()=>c.filter(q=>I==null||q.d===I||q.d<0).map(q=>({at:[q.x,q.h/2,q.z],r:Math.max(q.w*.7,Math.min(q.h*.3,1.5)),key:{kind:"note",id:q.n.id,tip:`${d(q)}${q.level===0?" \xB7 dark":""}${q.n.tasks?` \xB7 ${mt(q.n.tasks,"open task")}`:""}`}})),click(q){q.kind==="note"&&Q(q.id)},hover(q){let St=q&&q.kind==="note"?q.id:null;St!==B&&(B=St,vt())},update(q){"selected"in q&&(K=q.selected&&u.has(q.selected)?q.selected:null,vt())},frame(){if(nt)return;let q=(performance.now()-Ae)/1e3;N.visible=Math.sin(q*4)>-.3,Se(q),clearTimeout(J),J=setTimeout(l,33)},stat:Ct,today:()=>Yt&&Yt[0]?{text:`Darkest district: ${h.districts[Yt[1]].name} \xB7 ${mt(Yt[0],"stale note")}`,label:"Go there",run:()=>Dt(Yt[1])}:null,api:{back:()=>t.camera.position.distanceTo(t.centre),sky:()=>g?{hour:x,glow:g,stars:b&&w}:null,layout:()=>h,selected:()=>K,district:()=>I==null?null:h.districts[I].cluster,hold(){nt=!0,N.visible=!0,l()},towers:()=>c.filter(q=>q.kind==="tower").length,stalls:()=>Wt.length,dark:()=>_t.length,halls:()=>C.length,cranes:()=>z.length,tallest:()=>G?G.n.id:null},dispose(){nt=!0,clearTimeout(J);for(let q of[P,T,...S?[S]:[],D,N,H,O,k,...U.map(St=>St.mesh)])q.material.map&&q.material.map.dispose()}}}}),pf=oh(gy);var mf="#ef4444",_y="#a8a29e",gf="#5e626d",xf=(i,t,e)=>new xt(i).lerp(new xt(t),e),_f=oh({id:"city",name:"City",hint:"Notes as buildings: tall = relied on, lit = recent, grey = stale; town halls are maps",stage:{fog:[55,170],ambient:.6},tower:"building",hall:!0,cranes:!0,sky:i=>i<5||i>=21?"#4f5fc4":i<8?"#f9a8d4":i<17?"#7dd3fc":"#fb923c",ground:"#6b8f71",sheet:{wall:"#d9dbe3",pane:"#3d4352",lit:["#ffd977","#ffe9a8","#ffc94d"]},beacon:mf,beaconName:"red",stall:_y,arc:"#ffd977",wall:(i,t)=>t===0?xf(i,gf,.72):xf(i,"#ffffff",.18),lane:(i,t,e,n)=>({y:.1,z:(e%2?1:-1)*(n/2-.3),c:e%2?"#fef08a":"#f87171"}),stat:i=>`${mt(i.towers,"building")} \xB7 ${i.fresh} new this week \xB7 tallest: ${i.tallest}`,plain:"Picture your notes as a town. A tall building is a note everything else leans on. Lit windows mean someone has been in it lately; a grey building has been left alone for a long time.",about:"Each topic is a district and each note a building in the topic's colour. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; grey is stale. A crane stands on a note written this week, a red beacon is an open task, the pale hall with a flag is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#ffd977",text:"height = relied on, windows = recent"},{color:gf,text:"grey = stale"},{color:"#facc15",text:"crane = new this week"},{color:mf,text:"beacon = open task"},{color:"#e5e7eb",text:"hall = the topic's map"}]});var Vn=18,ah=2.5,qr=90,Zi="#22c55e",wl="#f87171",yf=i=>ah+(Vn-ah)*(1-Math.min(1,Math.log1p(Math.max(0,i))/Math.log1p(365))),ni=i=>(i.taskAge!=null?i.taskAge:i.age)||0;function yy(i){let t=i.nodes.filter(f=>!Re(f)&&f.tasks>0),e=new Map;for(let f of t)e.has(f.cluster)||e.set(f.cluster,[]),e.get(f.cluster).push(f);let n=new Map(i.clusters.map(f=>[f.id,f.name])),s=[...e.keys()].sort((f,u)=>e.get(u).length-e.get(f).length||f-u),r=Math.max(1,t.length),o=s.map(f=>Math.max(.25,e.get(f).length/r*2*Math.PI*.92+.08)),a=o.reduce((f,u)=>f+u,0)||1,l=-Math.PI/2,h=s.map((f,u)=>{let d=o[u]/a*2*Math.PI,m={cluster:f,name:n.get(f)||"No topic",a0:l,a1:l+d,n:e.get(f).length};return l+=d,m}),c=[];for(let f of h)for(let u of e.get(f.cluster)){let d=en(u.id),m=f.a0+(f.a1-f.a0)*(.1+.8*(d%100/100)),v=Math.max(ah*.6,Math.min(Vn,yf(ni(u))+((d>>>7)%41-20)/20));c.push({n:u,x:Math.cos(m)*v,z:Math.sin(m)*v,r:.28+.16*Math.sqrt(u.tasks),h:.6+.9*u.tasks,holding:ni(u)>qr})}return{blips:c,sectors:h,hold:yf(qr),tasks:t.reduce((f,u)=>f+u.tasks,0),notes:t.length}}var Mf={id:"radar",name:"Radar",hint:"Open tasks as blips by how long they've waited; red = 90+ days",home:{yaw:0,pitch:1.5,dist:46,min:14,max:110,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1},actions:["graph","triage"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let h=yy(n),c=new Map(h.blips.map(k=>[k.n.id,k])),f=k=>(i.scene.add(k),k),u=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,d=k=>(k.rotation.x=-Math.PI/2,k);if(h.notes<1){let k=()=>"No open tasks";return t.stat(k()),t.controls({at:"centre",lines:["Radar shows the notes that have open tasks.","No note has one."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:k,today:()=>null,api:{empty:!0}}}let m=new Ht,v=new xt,_=(k,G,K)=>{let B=new oe().setAttribute("position",new Vt(k,3));return f(new He(B,new Fe({color:G,transparent:!0,opacity:K})))};f(d(new qt(new In(Vn,64),new le({color:"#04140b"}))));let p=(k,G,K,B=.05)=>f(d(new qt(new Di(k-B,k+B,96),new le({color:G,transparent:!0,opacity:K,side:ge})))).position.set(0,.02,0);h.sectors.forEach((k,G)=>{let K=f(d(new qt(new In(Vn,24,-k.a1,k.a1-k.a0),new le({color:a.palette[G%a.palette.length],transparent:!0,opacity:.3,side:ge}))));K.position.y=.01});for(let k=1;k<=4;k++)p(Vn*k/4,Zi,.25);p(h.hold,wl,.7,.07),_(h.sectors.flatMap(k=>[0,.03,0,Math.cos(k.a0)*Vn,.03,Math.sin(k.a0)*Vn]),Zi,.3);let y=f(d(new qt(new In(Vn,32,0,.7),new le({color:Zi,transparent:!0,opacity:.22,side:ge}))));y.position.y=.05;let M=f(new fe(new ve(1,1,1,14),new le,h.blips.length));M.frustumCulled=!1;let x=s.selected&&c.has(s.selected)?s.selected:null,b=null,w=u,g=()=>b||x,S=k=>jt(k.n.name,30),P=()=>{let k=g()&&c.get(g());return k?`${S(k)} \xB7 ${mt(k.n.tasks,"open task")} \xB7 waiting ${ni(k.n)} days`:`${mt(h.tasks,"open task")} \xB7 ${mt(h.notes,"note")}`},T=(k,G)=>v.set(k).multiplyScalar(G);function U(){let k=g();h.blips.forEach((K,B)=>{let I=!k||K.n.id===k,nt=K.r*(K.n.id===k?1.5:1);m.makeScale(nt,K.h,nt).setPosition(K.x,K.h/2,K.z),M.setMatrixAt(B,m),M.setColorAt(B,I?v.set(K.n.id===k?a.fg:K.holding?wl:Zi):T(K.holding?wl:Zi,.25))}),M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0);let G=h.sectors.map(K=>{let B=(K.a0+K.a1)/2;return{text:`${jt(K.name,24).toUpperCase()} \xB7 ${K.n}`,at:[Math.cos(B)*(Vn+1.2),0,Math.sin(B)*(Vn+1.2)],color:Zi}});for(let K of[...h.blips].sort((B,I)=>I.n.tasks-B.n.tasks).slice(0,8))G.push({text:`${jt(K.n.name,22)} \xB7 ${K.n.tasks}`,at:[K.x,K.h,K.z],dy:-10,color:K.holding?"#fecaca":"#bbf7d0"});if(k){let K=c.get(k);G.unshift({text:S(K),at:[K.x,K.h,K.z],strong:!0,dy:-18,run:()=>D(k),title:`Open ${S(K)}`})}t.labels(G),t.stat(P())}function D(k){x=k,U(),l(),r(k)}let L=h.blips.filter(k=>k.holding),N=[...h.blips].sort((k,G)=>ni(G.n)-ni(k.n))[0],Z=[];L.length&&Z.push({text:`${mt(L.length,"note")} ${L.length===1?"has":"have"} a task waiting more than ${qr} days. Each is either still wanted or can be crossed off.`,label:"Triage",run:()=>o("triage")}),N&&ni(N.n)>30&&Z.push({text:`${jt(N.n.name,40)} has waited longest: ${ni(N.n)} days.`,label:"Open note",run:()=>D(N.n.id)});let H=h.sectors[0];H&&h.sectors.length>1&&Z.push({text:`${H.name} holds the most notes with open tasks (${H.n} of ${h.notes}).`,label:"Open its busiest",run:()=>D(h.blips.filter(k=>k.n.cluster===H.cluster).sort((k,G)=>G.n.tasks-k.n.tasks)[0].n.id)}),t.explain({plain:"Picture a radar screen. Every note with an open task is a blip. The longer its oldest task has waited, the closer to the middle it drifts, and inside the red ring it has been waiting more than three months.",about:"Each topic has a slice of the screen and each note with open tasks is a blip in its slice. Distance from the centre is how long the oldest open task has waited (a year or more sits in the middle). The size of a blip, and the height of its column when you tilt, is how many open tasks it holds. Tick tasks off in the note and its blip drifts away or goes.",legend:[{color:Zi,text:"note with open tasks"},{color:wl,text:"oldest task 90+ days"},{color:"#6b7280",text:"nearer the middle = waited longer"}],insights:Z});let O=()=>t.controls({lines:[L.length?`${mt(L.length,"note")} holding past ${qr} days`:"Pick a blip to open its note"],buttons:[{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a blip becomes a column as tall as its task count",run:()=>{e.tilt(),O()}},...L.length?[{label:"Triage",title:"Go through the open tasks one by one",run:()=>o("triage")}]:[]]});O(),U();let z=performance.now(),C=0,Y=k=>{y.rotation.z=-(k*.5%(2*Math.PI))};return Y(0),{targets:()=>h.blips.map(k=>({at:[k.x,k.h/2,k.z],r:Math.max(.7,k.r*1.3),key:{kind:"note",id:k.n.id,tip:`${k.n.name} \xB7 ${mt(k.n.tasks,"open task")} \xB7 waiting ${ni(k.n)} days`}})),click(k){k.kind==="note"&&D(k.id)},hover(k){let G=k&&k.kind==="note"?k.id:null;G!==b&&(b=G,U())},update(k){"selected"in k&&(x=k.selected&&c.has(k.selected)?k.selected:null,U())},frame(){w||(Y((performance.now()-z)/1e3),clearTimeout(C),C=setTimeout(l,33))},stat:P,today:()=>L.length?{text:`${mt(L.length,"note")} ${L.length===1?"has":"have"} tasks waiting ${qr}+ days \xB7 oldest: ${jt(N.n.name,30)} (${ni(N.n)} days)`,label:"Triage",run:()=>o("triage")}:null,api:{layout:()=>h,selected:()=>x,hold(){w=!0,l()},blips:()=>h.blips.length,holding:()=>L.length,tilted:()=>e.tilted},dispose(){w=!0,clearTimeout(C)}}}};var Tl=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],vf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],jr=3.2,Qr=1.5,Sf=1.2,My=2.2,vy=12,Sy=3,El="#fde047",by=[{key:"wd",n:7,name:"WEEK",labels:Tl},{key:"mo",n:12,name:"YEAR",labels:vf}],ii=(i,t)=>i/t*2*Math.PI-Math.PI/2;function wy(i,t=new Date,e=!1){let n=new Map(i.clusters.map(u=>[u.id,u.name])),s=Object.entries(i.rhythm||{}).map(([u,d])=>({cluster:+u,name:n.get(+u)||"No topic",wd:d.wd,mo:d.mo,tot:d.wd.reduce((m,v)=>m+v,0)})).filter(u=>u.tot>=Sy&&n.has(u.cluster)).sort((u,d)=>u.tot-d.tot||u.cluster-d.cluster).slice(-vy),r=jr+s.length*Qr,o=r+3,a=by.map((u,d)=>{let m=new Array(u.n).fill(0);s.forEach(_=>_[u.key].forEach((p,y)=>{m[y]+=p}));let v=(d?1:-1)*o;return{...u,centre:e?[0,v]:[v,0],totals:m,peak:m.indexOf(Math.max(...m))}}),l=[];a.forEach((u,d)=>s.forEach((m,v)=>{let _=Math.max(1,...m[u.key]);for(let p=0;p<u.n;p++){let y=m[u.key][p],M=y/_;l.push({dial:d,ring:v,s:p,v:y,t:M,cluster:m.cluster,a0:ii(p,u.n),a1:ii(p+1,u.n),r0:jr+v*Qr,r1:jr+v*Qr+Sf,h:y?.15+My*M:.04})}}));let h=(t.getDay()+6)%7,c=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),f=t.getMonth();return{rings:s,dials:a,cells:l,rOut:r,now:{wd:h,mo:f,frac:{wd:(h+(t.getHours()+t.getMinutes()/60)/24)/7,mo:(f+(t.getDate()-1+t.getHours()/24)/c)/12}}}}var lh=(i,t)=>i[t].indexOf(Math.max(...i[t])),bf={id:"clock",name:"Heat clock",hint:"When each topic comes up: weekday and month dials, hotter = more mentions",home:{yaw:0,pitch:1.5,dist:60,min:20,max:140,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1},actions:["graph"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let h=(i.camera.aspect||1)<1,c=wy(n,s.now||new Date,h),f=I=>(i.scene.add(I),I);if(c.rings.length<1){let I=()=>"No weekday or month pattern yet";return t.stat(I()),t.controls({at:"centre",lines:["The Heat clock shows when each topic comes up in your daily notes.","There is no pattern to show yet."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:I,today:()=>null,api:{empty:!0}}}let u=I=>a.palette[Math.max(0,n.clusters.findIndex(nt=>nt.id===I))%a.palette.length],d=new xt("#1f2933"),m=new xt("#1a2027"),v=new xt,_=new xt,p=(I,nt,dt)=>[I.centre[0]+Math.cos(nt)*dt,I.centre[1]+Math.sin(nt)*dt],y=[],M=[],x=I=>I.n===7?3:2,b=(...I)=>{for(let nt of I)y.push(nt[0],nt[1],nt[2])};for(let I of c.cells){let nt=c.dials[I.dial],dt=y.length/3,at=x(nt),ut=(I.a1-I.a0)/at,_t=.012,pt=(Q,Ft,Dt)=>{let[Yt,Wt]=p(nt,Q,Ft);return[Yt,Dt,Wt]};for(let Q=0;Q<at;Q++){let Ft=I.a0+Q*ut+(Q===0?_t:0),Dt=I.a0+(Q+1)*ut-(Q===at-1?_t:0);b(pt(Ft,I.r0,I.h),pt(Dt,I.r0,I.h),pt(Dt,I.r1,I.h),pt(Ft,I.r0,I.h),pt(Dt,I.r1,I.h),pt(Ft,I.r1,I.h)),b(pt(Ft,I.r1,0),pt(Dt,I.r1,0),pt(Dt,I.r1,I.h),pt(Ft,I.r1,0),pt(Dt,I.r1,I.h),pt(Ft,I.r1,I.h)),b(pt(Ft,I.r0,0),pt(Dt,I.r0,I.h),pt(Dt,I.r0,0),pt(Ft,I.r0,0),pt(Ft,I.r0,I.h),pt(Dt,I.r0,I.h))}let Ct=I.a0+_t,vt=I.a1-_t;b(pt(Ct,I.r0,0),pt(Ct,I.r1,0),pt(Ct,I.r1,I.h),pt(Ct,I.r0,0),pt(Ct,I.r1,I.h),pt(Ct,I.r0,I.h)),b(pt(vt,I.r0,0),pt(vt,I.r1,I.h),pt(vt,I.r1,0),pt(vt,I.r0,0),pt(vt,I.r0,I.h),pt(vt,I.r1,I.h)),M.push([dt,y.length/3-dt,at*6])}let w=new oe().setAttribute("position",new Vt(y,3)),g=new Vt(new Float32Array(y.length),3);w.setAttribute("color",g),f(new qt(w,new le({vertexColors:!0,side:ge}))).frustumCulled=!1;let S=[],P=[];c.dials.forEach(I=>{let nt=c.now.frac[I.key],dt=ii(nt*I.n,I.n),at=c.now[I.key],ut=jr-.6,_t=c.rOut+.4,[pt,Ct]=p(I,dt,ut),[vt,Q]=p(I,dt,_t);S.push(pt,.3,Ct,vt,.3,Q);for(let Ft of[ii(at,I.n),ii(at+1,I.n)]){let[Dt,Yt]=p(I,Ft,ut),[Wt,Lt]=p(I,Ft,_t);P.push(Dt,.3,Yt,Wt,.3,Lt)}});let T=(I,nt)=>{let dt=new oe().setAttribute("position",new Vt(I,3));return f(new He(dt,new Fe({color:El,transparent:!0,opacity:nt})))};T(S,1),T(P,.55),c.dials.forEach(I=>{let nt=ii(c.now.frac[I.key]*I.n,I.n),[dt,at]=p(I,nt,c.rOut+.4);f(new qt(new de(.4,12,8),new le({color:El}))).position.set(dt,.3,at)});let U=new Map(c.rings.map(I=>[I.cluster,I])),D=I=>n.nodes.filter(nt=>nt.cluster===I&&!Re(nt)).sort((nt,dt)=>dt.inlinks+dt.outlinks-(nt.inlinks+nt.outlinks)||(nt.id<dt.id?-1:1)),L=null,N=null,Z=I=>c.dials[I.dial].labels[I.s],H=I=>Math.round(100*I.v/Math.max(1,U.get(I.cluster).tot)),O=new Map(c.cells.map((I,nt)=>[`${I.dial}:${I.ring}:${I.s}`,nt])),z=()=>{let I=N!=null&&c.cells[N];if(I)return`${jt(U.get(I.cluster).name,28)} \xB7 ${Z(I)} \xB7 ${mt(I.v,"mention")}`;if(L!=null){let nt=U.get(L);return`${jt(nt.name,28)} \xB7 busiest ${Tl[lh(nt,"wd")]} \xB7 ${vf[lh(nt,"mo")]} \xB7 ${mt(nt.tot,"mention")}`}return`${mt(c.rings.length,"topic")} \xB7 busiest ${c.dials[0].labels[c.dials[0].peak]} \xB7 ${c.dials[1].labels[c.dials[1].peak]}`};function C(){let I=g.array;c.cells.forEach((dt,at)=>{let ut=L==null||dt.cluster===L,[_t,pt,Ct]=M[at],vt=at===N;dt.v?_.copy(d).lerp(v.set(u(dt.cluster)),.15+.85*dt.t):_.copy(m),ut||_.multiplyScalar(.3),vt&&_.lerp(v.set(a.fg),.35);for(let Q=0;Q<pt;Q++){let Ft=Q<Ct?1:.62;I[(_t+Q)*3]=_.r*Ft,I[(_t+Q)*3+1]=_.g*Ft,I[(_t+Q)*3+2]=_.b*Ft}}),g.needsUpdate=!0;let nt=[];if(c.dials.forEach(dt=>{dt.labels.forEach((at,ut)=>{let _t=(ii(ut,dt.n)+ii(ut+1,dt.n))/2,[pt,Ct]=p(dt,_t,c.rOut+1.6);nt.push({text:at,at:[pt,0,Ct],color:ut===c.now[dt.key]?El:"#e2e8f0"})}),nt.push({text:dt.name,at:[dt.centre[0],0,dt.centre[1]],dy:-8,color:"#94a3b8"},{text:`busiest: ${dt.labels[dt.peak]}`,at:[dt.centre[0],0,dt.centre[1]],dy:8,color:"#f8fafc"})}),L!=null){let dt=D(L)[0],at=U.get(L),ut=c.dials[0],_t=c.rings.indexOf(at),[pt,Ct]=p(ut,ii(0,7),jr+_t*Qr+Sf/2);nt.push({text:jt(at.name,26),at:[pt,.5,Ct],strong:!0,dy:-10,...dt?{run:()=>r(dt.id),title:`Open ${dt.name}`}:{}})}t.labels(nt),t.stat(z())}function Y(I){L=L===I?null:I,C(),K(),l()}let k=c.rings.filter(I=>I.tot>=10).map(I=>({r:I,k:Math.max(...I.wd)/I.tot})).sort((I,nt)=>nt.k-I.k)[0],G=[];G.push({text:`Mentions peak on ${c.dials[0].labels[c.dials[0].peak]} and in ${c.dials[1].labels[c.dials[1].peak]}.`,label:"Busiest topic",run:()=>Y(c.rings[c.rings.length-1].cluster)}),k&&k.k>.3&&G.push({text:`${k.r.name} clusters on ${Tl[lh(k.r,"wd")]}: ${Math.round(k.k*100)}% of its mentions.`,label:"Show its ring",run:()=>Y(k.r.cluster)}),t.explain({plain:"Picture two clock faces. One is a week, one is a year, and each topic is a ring on both. A cell glows when that topic comes up in your daily notes on that weekday or in that month.",about:"Each ring is a topic, the busiest outside. A cell's heat, and its height when you tilt, is that topic's share of its own mentions that fall on that weekday or month, so a bright cell is where the topic peaks. It counts mentions in daily notes, not hours worked. The yellow hand is right now.",legend:[{color:a.fg,text:"bright, tall cell: the topic's busiest weekday or month"},{color:"#1f2933",text:"dark cell: rarely"},{color:El,text:"now"}],insights:G});function K(){let I=L!=null?D(L)[0]:null;t.controls({lines:[L!=null?`${U.get(L).name}`:"Pick a ring to see its topic"],buttons:[...I?[{label:`Open ${jt(I.name,18)}`,title:`Open ${I.name}, the topic's most linked note`,run:()=>r(I.id)}]:[],...L!=null?[{label:"Clear",title:"Show every topic again",run:()=>Y(L)}]:[],{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a cell is as tall as its heat",run:()=>{e.tilt(),K()}}]})}K(),C();let B=c.rings[c.rings.length-1];return{targets:()=>c.cells.map((I,nt)=>{let dt=c.dials[I.dial],at=(I.a0+I.a1)/2,[ut,_t]=p(dt,at,(I.r0+I.r1)/2),pt=(I.a1-I.a0)*(I.r0+I.r1)/2;return{at:[ut,I.h/2,_t],r:Math.max(.55,Math.min(Qr*.6,pt*.4)),key:{kind:"ring",id:I.cluster,cell:nt,tip:`${U.get(I.cluster).name} \xB7 ${Z(I)} \xB7 ${mt(I.v,"mention")} (${H(I)}%)`}}}),click(I){I.kind==="ring"&&Y(I.id)},hover(I){let nt=I&&I.kind==="ring"?I.cell:null;nt!==N&&(N=nt,C())},update(){},stat:z,today(){let I=c.now.wd,nt=c.rings.map(at=>({r:at,k:at.wd[I]/at.tot})).sort((at,ut)=>ut.k-at.k)[0],dt=nt&&D(nt.r.cluster)[0];return nt&&nt.k>0?{text:`It is ${Tl[I]}: ${jt(nt.r.name,30)} usually comes up most on this day (${Math.round(nt.k*100)}% of its mentions)`,label:dt?"Open note":"Show ring",run:()=>dt?r(dt.id):Y(nt.r.cluster)}:null},api:{layout:()=>c,focus:()=>L,hovered:()=>N,tilted:()=>e.tilted,rings:()=>c.rings.length,cells:()=>c.cells.length,vertical:()=>h,cell:(I,nt,dt)=>O.get(`${I}:${nt}:${dt}`),top:()=>B&&B.cluster},dispose(){}}}};var ch=4,Ey=1.15,Rf=4,wf="#f87171",Ef="#fde047",Tf="#22d3ee",Ty=2.399963;function Ay(i,t){let e=new Map(t.ids.map((d,m)=>[d,m])),n=Ze(i.nodes),s=Si(i),r=new Map,o=new Map,a=(d,m,v)=>{d.has(m)||d.set(m,[]),d.get(m).push(v)};for(let[d,m]of t.edges)a(r,t.ids[d],t.ids[m]),a(o,t.ids[m],t.ids[d]);let l=i.nodes.filter(d=>e.has(d.id)&&!Re(d)&&!d.isolated),h=Math.max(2,Math.ceil(Math.max(1,...l.map(d=>t.level[e.get(d.id)])))),c=Array.from({length:h},()=>[]);for(let d of l)c[Math.max(0,Math.min(h-1,Math.round(t.level[e.get(d.id)])-1))].push(d);let f=[];c.forEach((d,m)=>{d.sort((v,_)=>v.cluster-_.cluster||n(_)-n(v)),d.forEach((v,_)=>{let p=t.level[e.get(v.id)],y=Ey*Math.sqrt(_+.5)*1.5,M=_*Ty,x=(o.get(v.id)||[]).length;f.push({n:v,x:y*Math.cos(M),z:y*Math.sin(M),y:(p-1)*ch,r:.3+.9*Math.sqrt(Math.max(0,n(v))),level:p,band:m,reliedOn:x,leansOn:(r.get(v.id)||[]).length,endangered:x>=Rf&&s(v)})})});let u=Math.max(4,...f.map(d=>Math.hypot(d.x,d.z)))+2;return{notes:f,bands:c.map(d=>d.length),radius:u,up:d=>o.get(d)||[],down:d=>r.get(d)||[]}}var Af=(i,t,e)=>new xt(i).lerp(new xt(t),e),Cf={id:"foodweb",name:"Food web",hint:"Which notes feed which: the notes everything rests on at the base, logs and plans on top, stale ones others rest on in red",home:{yaw:.6,pitch:.3,dist:46,min:10,max:130},stage:{fog:[60,190],ambient:.5},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=Ay(e,n.web),h=l.notes,c=n.web.stats,f=z=>(i.scene.add(z),z);if(h.length<3){let z=()=>mt(h.length,"note");return t.stat(z()),t.controls({at:"centre",lines:["The Food web needs notes that link to one another.",`${mt(h.length,"note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:z,today:()=>null,api:{empty:!0}}}let u=new Map(h.map(z=>[z.n.id,z])),d=z=>z.n.name,m=new Ht,v=z=>z.endangered?wf:o.palette[(z.n.cluster||0)%o.palette.length],_=l.bands.map((z,C)=>{if(!z)return null;let Y=f(new qt(new In(l.radius,48),new le({color:Af(o.palette[C%o.palette.length],o.bg,.9),transparent:!0,opacity:.55,side:ge})));return Y.rotation.x=-Math.PI/2,Y.position.y=C*ch-.4,Y.frustumCulled=!1,Y}),p=f(new fe(new de(1,14,10),new le,h.length));p.frustumCulled=!1;let y=z=>f(new He(new oe,new Fe({color:z,transparent:!0,opacity:.9}))),M=y(Ef),x=y(Tf);M.frustumCulled=x.frustumCulled=!1;let b=n.selected&&u.has(n.selected)?n.selected:null,w=null,g=()=>w||b,S=new Set,P=h.filter(z=>z.endangered),T=z=>z.endangered?" \xB7 stale, others rest on it":"",U=()=>{let z=g()&&u.get(g());return z?`${d(z)} \xB7 rests on ${mt(z.leansOn,"note")} \xB7 ${mt(z.reliedOn,"note")} rest on it${T(z)}`:`mean level ${c.mean.toFixed(1)} \xB7 top ${c.maxLevel.toFixed(1)} \xB7 incoherence ${c.incoherence.toFixed(2)} \xB7 ${mt(P.length,"endangered note")}`},D=(z,C,Y)=>Y.push(z.x,z.y,z.z,C.x,C.y,C.z);function L(){let z=g();S.clear(),z&&(S.add(z),l.up(z).forEach(G=>S.add(G)),l.down(z).forEach(G=>S.add(G))),h.forEach((G,K)=>{p.setMatrixAt(K,m.makeScale(G.r,G.r,G.r).setPosition(G.x,G.y,G.z)),p.setColorAt(K,Af(v(G),o.bg,!z||S.has(G.n.id)?0:.8))}),p.instanceMatrix.needsUpdate=!0,p.instanceColor.needsUpdate=!0;let C=[],Y=[];if(z){let G=u.get(z);l.up(z).forEach(K=>u.has(K)&&D(u.get(K),G,C)),l.down(z).forEach(K=>u.has(K)&&D(G,u.get(K),Y))}M.geometry.setAttribute("position",new Vt(C,3)),M.visible=C.length>0,x.geometry.setAttribute("position",new Vt(Y,3)),x.visible=Y.length>0;let k=l.bands.map((G,K)=>G?{text:`${K===0?"Level 1 \xB7 the base":"Level "+(K+1)} (${G})`,at:[-l.radius,K*ch,0],color:"#bbf7d0"}:null).filter(Boolean);if(z){let G=u.get(z);k.unshift({text:jt(d(G),34),at:[G.x,G.y+G.r,G.z],strong:!0,dy:-18,run:()=>N(z),title:`Open ${d(G)}`})}t.labels(k),t.stat(U())}function N(z){b=z,L(),a(),s(z)}let Z=[...P].sort((z,C)=>C.reliedOn-z.reliedOn)[0],H=[...h].filter(z=>z.band===0).sort((z,C)=>C.reliedOn-z.reliedOn)[0],O=[];return Z&&O.push({text:`${d(Z)} holds up ${mt(Z.reliedOn,"note")} and has not been edited in ${Z.n.age} days. Open it and decide whether it is still true.`,label:"Open note",run:()=>N(Z.n.id)}),H&&H.reliedOn&&O.push({text:`${d(H)} is the most relied-on note at the base: ${mt(H.reliedOn,"note")} rest on it.`,label:"Open note",run:()=>N(H.n.id)}),t.explain({plain:"Picture a food chain. The notes everything rests on are the plants at the bottom; logs and plans that mostly point at other notes are the animals at the top. If a note at the bottom goes out of date, everything standing on it is built on something stale.",about:`A note rests on the notes it links to, so each note gets a level: the more links lead up from the base to it, the higher it sits. Level is worked out so that every link climbs by about one; incoherence ${c.incoherence.toFixed(2)} is how far the links are from a clean hierarchy (0 is a clean one, 1 shows no direction at all). A red sphere is a note ${Rf} or more notes link to that has not been edited within the vault's stale limit. Pick a note: yellow lines go to the notes resting on it, blue to the notes it rests on.`,legend:[{color:"#bbf7d0",text:"height = level, the base at the bottom"},{color:wf,text:"stale, and others rest on it"},{color:Ef,text:"rests on the picked note"},{color:Tf,text:"the picked note rests on"}],insights:O}),t.controls({lines:["Pick a note to see what rests on it"]}),L(),{targets:()=>h.map(z=>({at:[z.x,z.y,z.z],r:Math.max(z.r*1.2,.9),key:{kind:"note",id:z.n.id,tip:`${d(z)} \xB7 level ${z.level.toFixed(1)}${T(z)}`}})),click(z){z.kind==="note"&&N(z.id)},hover(z){let C=z&&z.kind==="note"?z.id:null;C!==w&&(w=C,L())},update(z){"selected"in z&&(b=z.selected&&u.has(z.selected)?z.selected:null,L())},stat:U,today:()=>Z?{text:`${d(Z)} is stale and ${mt(Z.reliedOn,"note")} rest on it`,label:"Open note",run:()=>N(Z.n.id)}:null,api:{layout:()=>l,selected:()=>b,hold(){},notes:()=>h.length},dispose(){for(let z of[..._.filter(Boolean),p,M,x])z.geometry.dispose(),z.material.dispose()}}}};var Ry=new V(0,1,0),hh=new V,Al=new V,If=new V,Cy=new V,Pf=new Ge,Iy=new xt;function Yi(i,t,e,n){hh.set(t[0],t[1],t[2]),Al.set(e[0],e[1],e[2]).sub(hh);let s=Al.length()||1e-6;return If.copy(hh).addScaledVector(Al,.5),Pf.setFromUnitVectors(Ry,Al.multiplyScalar(1/s)),i.compose(If,Pf,Cy.set(n,s,n))}function _n(i,t,e,n){let s=new fe(i,t,Math.max(1,e.length)),r=new Ht;return s.count=e.length,s.frustumCulled=!1,e.forEach((o,a)=>{r.identity();let l=n(o,a,r);s.setMatrixAt(a,r),l!=null&&s.setColorAt(a,Iy.set(l))}),s}function si(i,t){i.remove(t),t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose(),e.isInstancedMesh&&e.dispose()})}var Ce=(i,t,e)=>"#"+new xt(i).lerp(new xt(t),e).getHexString();function Bs(i,t,e,n){return i.stat(e),i.controls({at:"centre",lines:n,buttons:[{label:"Open the graph",title:"Open the graph",run:()=>t("graph")}]}),{targets:()=>[],click(){},update(){},stat:()=>e,today:()=>null,api:{empty:!0}}}var dh=[8,18,32],Kr=[6,9,12],Ff=40,Uf="#ef4444",Rl="#60a5fa",fh=[[1.15,0,.3,"ZXY"],[1.15,0,.3+Math.PI/3,"ZXY"],[1.15,0,.3+2*Math.PI/3,"ZXY"]],Py=2.399963,$r=.95;function uh(i,t){let{own:e,adj:n}=Xr(i.nodes,i.links),s=Ze(i.nodes),r=(g,S)=>s(e.get(S))-s(e.get(g))||(g<S?-1:1),o=[...e.keys()].filter(g=>n.get(g).size).sort(r);if(!o.length)return{centre:null,linked:0};let a=t&&e.has(t)&&n.get(t).size?t:o[0],l=new Map([[a,0]]),h=[a];for(let g=0;g<h.length;g++)for(let S of n.get(h[g]))l.has(S)||(l.set(S,l.get(h[g])+1),h.push(S));let c=dh.map((g,S)=>{let P=h.filter(T=>l.get(T)===S+1).sort(r);return{all:P.length,ids:P.slice(0,g)}}),f=new Set,u=new Set;for(let g of i.links)g.kind==="link"&&g.source!==g.target&&e.has(g.source)&&e.has(g.target)&&(g.target===a&&f.add(g.source),g.source===a&&u.add(g.target));let d=f.size,m=u.size,v=d+m,_=Math.min(v,Ff),p=v?Math.max(d?1:0,Math.min(_-(m?1:0),Math.round(_*d/v))):0,y=[];for(let g=0,S=0;g<_;g++){let P=_>1?$r*.92*Math.cbrt(g+.35):0,T=1-2*((g*.618034+.5)%1),U=Math.sqrt(1-T*T),D=g*Py,L=Math.floor((g+1)*p/_)>S;L&&S++,y.push({at:[P*U*Math.cos(D),P*T,P*U*Math.sin(D)],proton:L})}let M=new V,x=[];c.forEach((g,S)=>{let P=new hn(...fh[S]);g.ids.forEach((T,U)=>{let D=U/g.ids.length*Math.PI*2+S*.7;M.set(Kr[S]*Math.cos(D),Kr[S]*Math.sin(D),0).applyEuler(P),x.push({id:T,shell:S,at:[M.x,M.y,M.z],r:.5+.5*Math.sqrt(Math.max(0,s(e.get(T))))})})});let b=c.map((g,S)=>{let P=.5/Math.max(1,g.ids.length)*Math.PI*2+S*.7+Math.PI;return M.set(Kr[S]*Math.cos(P),Kr[S]*Math.sin(P),0).applyEuler(new hn(...fh[S])),[M.x,M.y,M.z]}),w=h[h.length-1];return{centre:a,own:e,protons:d,neutrons:m,shells:c,electrons:x,gaps:b,nucleus:y,nucleusR:$r*(1+.92*Math.cbrt(Math.max(_,1))),dist:g=>l.has(g)?l.get(g):null,within:h.filter(g=>l.get(g)>=1&&l.get(g)<=dh.length).length,linked:o.length,unreached:o.filter(g=>!l.has(g)),far:{id:w,d:l.get(w)}}}var Nf=["one link away","two links away","three links away"],Df={id:"atom",name:"Atom",hint:"One note as an atom: its links are the nucleus, the notes one, two and three links away its shells",home:{yaw:.25,pitch:.2,dist:33,min:10,max:160,minPitch:-1.4},stage:{light:"camera",fog:[70,240],ambient:.55,glow:{strength:.9,radius:.7,threshold:.5}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=uh(e,n.selected),h=null;if(!l.centre)return Bs(t,r,mt(e.nodes.length,"note"),["The Atom needs notes that link to one another.","No written links yet."]);let c=y=>l.own.get(y).name,f=y=>o.palette[(l.own.get(y).cluster||0)%o.palette.length],u=[],d=()=>new un({color:"#ffffff",specular:"#777777",shininess:55}),m=()=>`${c(l.centre)} \xB7 ${mt(l.protons,"link")} in \xB7 ${l.neutrons} out \xB7 ${l.shells.map(y=>y.all).join(", ")} notes one, two and three links away`;function v(){h&&si(i.scene,h),h=new rn;let y=()=>new de(1,24,16);h.add(_n(y(),d(),l.nucleus,(w,g,S)=>(S.makeScale($r,$r,$r).setPosition(...w.at),w.proton?Uf:Rl)));for(let[w,g]of[[1.35,.16],[1.9,.07]]){let S=new qt(new de(l.nucleusR*w,32,16),new le({color:Rl,transparent:!0,opacity:g,blending:Oi,depthWrite:!1,side:De}));h.add(S)}l.shells.forEach((w,g)=>{let S=new qt(new Li(Kr[g],.16-.04*g,8,160),new le({color:Ce(Rl,o.fg,.35+.15*g),transparent:!0,opacity:w.ids.length?.85-.2*g:.25}));S.rotation.set(...fh[g]),h.add(S)}),h.add(_n(y(),d(),l.electrons,(w,g,S)=>(S.makeScale(w.r,w.r,w.r).setPosition(...w.at),f(w.id)))),i.scene.add(h);let M=[{text:jt(c(l.centre),34),at:[0,l.nucleusR,0],strong:!0,dy:-18,run:()=>s(l.centre),title:`Open ${c(l.centre)}`}];l.shells.forEach((w,g)=>{w.ids.length&&M.push({text:`${Nf[g]} (${w.ids.length<w.all?`${w.ids.length} of ${w.all}`:w.all})`,at:l.gaps[g],color:o.muted,dy:14})});for(let w of l.electrons.filter(g=>g.shell===0).slice(0,4))M.push({text:jt(c(w.id),22),at:w.at,dy:-16,run:()=>p(w.id),title:`Open ${c(w.id)}`});t.labels(M),t.stat(m());let x=l.unreached[0],b=[];b.push({text:`${l.within} of ${mt(l.linked-1,"other linked note")} are within three links of ${c(l.centre)}.${l.far.d>3?` The farthest, ${c(l.far.id)}, is ${l.far.d} links away.`:""}`,...l.far.d>3?{label:"Open farthest",run:()=>p(l.far.id)}:{}}),l.shells[0].all===1&&b.push({text:`One link holds ${c(l.centre)} to the rest of the vault. A second link from a related note keeps it reachable if that one goes.`,label:"Open its neighbour",run:()=>p(l.shells[0].ids[0])}),x&&b.push({text:`${mt(l.unreached.length,"linked note")} can't be reached from here by any chain of links. ${c(x)} is the most relied-on of them.`,label:"Open note",run:()=>p(x)}),t.explain({plain:"Picture one note as an atom. Its own links are packed in the middle. The notes one link away circle closest, the notes two links away further out, and so on. A full, close shell means the note is well tied in.",about:`The nucleus is ${c(l.centre)}: a red ball for each note that links to it and a blue ball for each note it links to (at most ${Ff} are drawn, in the same share). Each shell holds the notes that many written links away, the most relied-on first; a shell shows at most ${dh.join(", ")} of them, as an atom's shells do, and its label says how many there are in all. An electron takes its topic's colour and is bigger the more the vault leans on it.`,legend:[{color:Uf,text:"a note that links to it"},{color:Rl,text:"a note it links to"},{color:o.palette[0],text:"electron = a note, shell = links away, colour = topic"}],insights:b}),t.controls({lines:["Pick an electron to make it the nucleus"],buttons:[{label:"\u2039 Back",title:"Back to the note before",off:!u.length,run:()=>{l=uh(e,u.pop()),v(),a()}},{label:c(l.centre),title:`Open ${c(l.centre)}`,wide:!0,run:()=>s(l.centre)}]})}function _(y){if(y===l.centre||!l.own.has(y))return;let M=uh(e,y);M.centre===y&&(u.push(l.centre),l=M,v())}function p(y){_(y),a(),s(y)}return i.sky({top:"#02050f",haze:"#0b1432",stars:500,starColor:"#cfe0ff"}),v(),{targets:()=>[{at:[0,0,0],r:l.nucleusR,key:{kind:"note",id:l.centre,tip:`${c(l.centre)} \xB7 ${mt(l.protons,"link")} in, ${l.neutrons} out`}},...l.electrons.map(y=>({at:y.at,r:Math.max(y.r*1.3,.9),key:{kind:"note",id:y.id,tip:`${c(y.id)} \xB7 ${Nf[y.shell]}`}}))],click(y){y.kind==="note"&&p(y.id)},update(y){"selected"in y&&y.selected&&_(y.selected)},stat:m,today:()=>null,api:{layout:()=>l,centre:()=>l.centre,back:()=>u.length},dispose(){h&&si(i.scene,h)}}}};var wi=9,Xi=1.8,ph=48,kf=40,Lf="#fbbf24";function Bf(i,t){let e=Sl(i,{linkedOnly:!1});if(!e.length)return{topics:[],core:null};let n=Math.max(0,e.findIndex(M=>M.cluster===t)),s=e[n],{adj:r}=Xr(i.nodes,i.links,{hubs:!0}),o=Ze(i.nodes),a=Us(i.nodes),l=Si(i),h=s.moc||s.notes[0],c=s.notes.filter(M=>M!==h),f=new Set(c.map(M=>M.id)),u=r.get(h.id)||new Set,d=M=>({id:M.id,state:l(M)?"stale":a(M)>.35?"active":"steady",size:.7+.6*Math.sqrt(Math.max(0,o(M)))}),m={docked:[],second:[],adrift:[]};for(let M of c)(u.has(M.id)?m.docked:[...r.get(M.id)||[]].some(x=>f.has(x))?m.second:m.adrift).push(M);let v=m.docked.slice(0,ph).map((M,x,b)=>{let w=x/b.length*Math.PI*2+Math.PI/2;return{...d(M),a:w,at:[wi*Math.cos(w),wi*Math.sin(w),Xi]}}),_=new Map(v.map(M=>[M.id,M.a])),p=m.second.slice(0,ph).map(M=>({...d(M),anchor:[...r.get(M.id)].filter(x=>_.has(x)).sort((x,b)=>_.get(x)-_.get(b))[0]||null})).sort((M,x)=>(M.anchor?_.get(M.anchor):99)-(x.anchor?_.get(x.anchor):99)||(M.id<x.id?-1:1)).map((M,x,b)=>{let w=x/b.length*Math.PI*2+Math.PI/2;return{...M,a:w,at:[wi*Math.cos(w),wi*Math.sin(w),-Xi]}}),y=m.adrift.slice(0,kf).map(M=>{let[x,b]=Jr(M.id),w=x*Math.PI*2,g=wi+4.5+4*b;return{...d(M),at:[g*Math.cos(w),g*Math.sin(w),(en(M.id)%100/100-.5)*8]}});return{topics:e.map(M=>({cluster:M.cluster,name:M.name})),index:n,cluster:s.cluster,name:s.name,core:{id:h.id,name:h.name,map:!!h.moc},docked:v,second:p,adrift:y,counts:{docked:m.docked.length,second:m.second.length,adrift:m.adrift.length}}}var Of={id:"station",name:"Station",hint:"One topic as a ring station: notes its map links are docked, the rest ride the second ring or drift outside",home:{yaw:.65,pitch:.28,dist:50,min:12,max:170,minPitch:-1.4},stage:{light:"camera",fog:[80,260],ambient:.5,glow:{strength:.8,radius:.6,threshold:.55}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=new Map(e.nodes.map(M=>[M.id,M])),h=M=>l.has(M)?l.get(M).cluster:void 0,c=Bf(e,h(n.selected)),f=null;if(!c.core)return Bs(t,r,mt(e.nodes.length,"note"),["The Station needs notes in a topic.","No notes yet."]);let u=M=>l.get(M).name,d=(M,x)=>M.length<x?`${M.length} of ${x}`:`${x}`,m=()=>`${c.name} \xB7 ${c.counts.docked} docked \xB7 ${c.counts.second} on the second ring \xB7 ${c.counts.adrift} adrift`;function v(){f&&si(i.scene,f),f=new rn;let M=o.palette[(c.cluster||0)%o.palette.length],x=Ce(o.muted,o.bg,.25),b=Ce(o.muted,o.fg,.55),w=C=>C.state==="stale"?x:C.state==="active"?Lf:M,g=C=>new un({color:C,specular:"#888888",shininess:40}),S=(C,Y,k,G)=>{let K=new qt(C,Y);return K.position.set(...k),G&&K.rotation.set(...G),f.add(K),K};S(new ve(1.5,1.5,7,28),g(b),[0,0,0],[Math.PI/2,0,0]),S(new de(1.5,28,16),g(M),[0,0,3.5]),S(new de(1.5,28,16),g(b),[0,0,-3.5]),S(new ve(.22,.22,16,10),g(b),[0,0,0],[Math.PI/2,0,0]);for(let C of[7.2,-7.2]){S(new ve(.12,.12,13,8),g(b),[0,0,C],[0,0,Math.PI/2]);for(let Y of[4,-4])S(new ln(5,2.6,.08),new un({color:"#1e3a8a",emissive:"#0b1a45",specular:"#93c5fd",shininess:90}),[Y,0,C])}for(let C of[Xi,-Xi])S(new Li(wi,.16,8,96),g(b),[0,0,C]);let P=new V,T=(C,Y)=>Y.makeRotationZ(C.a).scale(P.set(.85*C.size,1.15*C.size,1.1*C.size)).setPosition(...C.at);f.add(_n(new ln(1,1,1),g("#ffffff"),[...c.docked,...c.second],(C,Y,k)=>(T(C,k),w(C))));let U=new Map(c.docked.map(C=>[C.id,C.at])),D=()=>new ve(1,1,1,6),L=()=>new un({color:b,transparent:!0,opacity:.35,depthWrite:!1});f.add(_n(D(),L(),c.docked,(C,Y,k)=>{Yi(k,[0,0,Xi],C.at,.05)})),f.add(_n(D(),L(),c.second.filter(C=>C.anchor),(C,Y,k)=>{Yi(k,C.at,U.get(C.anchor),.05)})),f.add(_n(new jn(1,0),new un({color:"#ffffff",flatShading:!0}),c.adrift,(C,Y,k)=>(k.makeRotationZ(Y).scale(P.set(.6*C.size,.45*C.size,.5*C.size)).setPosition(...C.at),C.state==="stale"?x:Ce(M,x,.6)))),i.scene.add(f);let N=C=>({run:()=>s(C.id),title:`Open ${u(C.id)}`}),Z=[{text:jt(c.core.name,34),at:[0,1.6,3.5],strong:!0,dy:-16,run:()=>s(c.core.id),title:`Open ${c.core.name}`}];for(let C of c.docked.slice(0,5))Z.push({text:jt(u(C.id),22),at:C.at,dy:-14,...N(C)});c.docked.length&&Z.push({text:`docked (${d(c.docked,c.counts.docked)})`,at:[0,-wi,Xi],color:o.muted,dy:16}),c.second.length&&Z.push({text:`second ring (${d(c.second,c.counts.second)})`,at:[wi,0,-Xi],color:o.muted,dy:16}),c.adrift.length&&Z.push({text:`adrift (${d(c.adrift,c.counts.adrift)})`,at:c.adrift[0].at,color:o.muted,dy:16}),t.labels(Z),t.stat(m());let H=[],O=c.counts.docked+c.counts.second+c.counts.adrift;O&&H.push({text:`${c.counts.docked} of ${mt(O,"note")} in ${c.name} link with ${c.core.name}.`+(c.core.map?"":` ${c.name} has no map; ${c.core.name} is its most relied-on note.`),label:`Open ${jt(c.core.name,18)}`,run:()=>s(c.core.id)}),c.second.length&&H.push({text:`${mt(c.counts.second,"note")} link with the topic but not with ${c.core.name}. ${u(c.second[0].id)} is the most relied-on of them; a link from ${c.core.name} docks it.`,label:"Open note",run:()=>s(c.second[0].id)}),c.adrift.length&&H.push({text:`${mt(c.counts.adrift,"note")} link with nothing in ${c.name}. ${u(c.adrift[0].id)} is the most relied-on of them.`,label:"Open note",run:()=>s(c.adrift[0].id)}),t.explain({plain:"Picture a topic as a space station. The hub in the middle is the topic's map. Every note the map links with is a module bolted to the front ring. Notes that only link with other notes ride the second ring. Notes that link with nothing here drift outside as rocks.",about:`The hub is ${c.core.name}${c.core.map?", the topic's map":", the topic's most relied-on note (the topic has no map)"}. A spoke is a link between the hub and a note; a strut is a link between a second-ring note and a docked one. A module is bigger the more the vault leans on the note. A ring shows at most ${ph} modules and ${kf} rocks are drawn, the most relied-on first; each label says how many there are in all.`,legend:[{color:Lf,text:"edited lately"},{color:M,text:"a note of the topic"},{color:x,text:"stale"},{color:b,text:"spoke or strut = a link"}],insights:H});let z=C=>()=>{_(c.topics[(c.index+C+c.topics.length)%c.topics.length].cluster),a()};t.controls({lines:[`Topic ${c.index+1} of ${c.topics.length}`],buttons:[{label:"\u2039",title:"The topic before",off:c.topics.length<2,run:z(-1)},{label:c.name,title:`Open ${c.core.name}`,wide:!0,run:()=>s(c.core.id)},{label:"\u203A",title:"The next topic",off:c.topics.length<2,run:z(1)}]})}function _(M){if(M===void 0||M===c.cluster)return;let x=Bf(e,M);x.cluster===M&&(c=x,v())}i.sky({top:"#02050f",haze:"#0b1432",stars:500,starColor:"#cfe0ff"}),v();let p={active:"edited lately",steady:"",stale:"stale"},y=(M,x)=>[u(M.id),x,p[M.state]].filter(Boolean).join(" \xB7 ");return{targets:()=>[{at:[0,0,0],r:2.2,key:{kind:"note",id:c.core.id,tip:`${c.core.name} \xB7 the hub of ${c.name}`}},...c.docked.map(M=>({at:M.at,r:.9*M.size,key:{kind:"note",id:M.id,tip:y(M,"docked")}})),...c.second.map(M=>({at:M.at,r:.9*M.size,key:{kind:"note",id:M.id,tip:y(M,"second ring")}})),...c.adrift.map(M=>({at:M.at,r:.8*M.size,key:{kind:"note",id:M.id,tip:y(M,"adrift")}}))],click(M){M.kind==="note"&&s(M.id)},update(M){"selected"in M&&M.selected&&_(h(M.selected))},stat:m,today:()=>c.adrift.length?{text:`${u(c.adrift[0].id)} links with nothing in ${c.name}.`,label:"Open note",run:()=>s(c.adrift[0].id)}:null,api:{layout:()=>c,go:M=>{_(M),a()}},dispose(){f&&si(i.scene,f)}}}};var Ei=30,Hf=37,Wf=12,Zf=4,Vf=1.5,zf="#ef4444",mh="#3b82f6",to=.6,ks=2.1,Ji=7.2,qi=5;function Gf(i,t=[]){let e=[];for(let n=-i-1;n<=i;n++)for(let s=-i-1;s<=i;s++)for(let r of t.length?t:[0]){let o=n+r,a=s+r,l=Vf*(o+a/2),h=Vf*a*.8660254;(t.length||Math.max(Math.abs(n),Math.abs(s),Math.abs(n+s))<=i)&&e.push([l,h])}return e.sort((n,s)=>Math.hypot(...n)-Math.hypot(...s)||Math.atan2(n[1],n[0])-Math.atan2(s[1],s[0]))}function Uy(i){let t=i.nodes.filter(y=>!Re(y)),e=Us(i.nodes),n=Si(i),s=i.quality&&i.quality.stale_days||180,r=(y,M)=>y.id<M.id?-1:1,o=t.filter(y=>(y.age||0)<=Ei).sort((y,M)=>e(M)-e(y)||r(y,M)),a=t.filter(n),l=a.filter(y=>y.age<=s+Ei),h=Gf(3),c=Gf(3,[1/3,2/3]),f=o.slice(0,Hf).map((y,M)=>({id:y.id,cluster:y.cluster,heat:e(y),at:h[M],h:2.2+3.2*e(y)})),u=a.filter(y=>y.inlinks>0).sort((y,M)=>M.inlinks-y.inlinks||r(y,M)),d=u.length?u[0].inlinks:1,m=u.slice(0,Wf).map((y,M)=>({id:y.id,cluster:y.cluster,links:y.inlinks,depth:.25+.75*(y.inlinks/d),at:c[M]})),v=new Map;for(let y of o)v.set(y.cluster,(v.get(y.cluster)||0)+1);let _=new Map(i.clusters.map(y=>[y.id,y.label||y.name])),p=[...v].sort((y,M)=>M[1]-y[1]||y[0]-M[0]).slice(0,Zf).map(([y,M])=>({cluster:y,name:_.get(y)||`Topic ${y}`,edited:M,share:M/o.length}));return{edited:o.length,wentStale:l.length,stale:a.length,leaned:u.length,k:l.length?o.length/l.length:null,fuel:f,control:m,loops:p}}var Yf={id:"reactor",name:"Reactor",hint:"The last 30 days as a reactor: edited notes are fuel, stale notes others link to are control rods",home:{yaw:to,pitch:.42,dist:62,min:10,max:200},stage:{light:"camera",fog:[90,300],ambient:.6,glow:{strength:.7,radius:.5,threshold:.6}},actions:["graph"],build({stage:i,frame:t,data:e,onOpen:n,onAction:s,theme:r,invalidate:o}){let a=Uy(e),l=new Map(e.nodes.map(x=>[x.id,x])),h=x=>l.get(x).name;if(!a.fuel.length&&!a.control.length)return Bs(t,s,mt(e.nodes.length,"note"),[`The Reactor needs notes edited in the last ${Ei} days, or stale notes other notes link to.`,"Neither yet."]);let c=null,f=null,u=x=>r.palette[(x||0)%r.palette.length],d=a.k==null?null:a.k.toFixed(2),m=()=>`${d?`k ${d} \xB7 `:""}${mt(a.edited,"note")} edited in ${Ei} days \xB7 ${a.wentStale||"none"} went stale \xB7 ${mt(a.control.length,"control rod")}`,v=x=>to+Math.PI+(x-(a.loops.length-1)/2)*1,_=(x,b,w)=>[b*Math.sin(x),w,b*Math.cos(x)];function p(){c&&si(i.scene,c),c=new rn;let x=Ce(r.muted,r.fg,.35),b=Ce(r.muted,r.bg,.45),w=Ce(r.fg,r.bg,.25),g=O=>f==null||f===O?0:.82,S=(O,z)=>new un({color:O,specular:"#666666",shininess:35,...z}),P=(O,z,C)=>{let Y=new qt(O,z);return Y.position.y=C,c.add(Y),Y},T=(O,z)=>new ve(O,O,z,64,1,!0,to+ks/2,Math.PI*2-ks),U=(O,z)=>new de(O,64,20,to+ks/2+Math.PI/2,Math.PI*2-ks,z?0:Math.PI/2,Math.PI/2);P(new ve(19,19,1,64),S(b),-5.5);let D={side:ge,transparent:!0,opacity:.42,depthWrite:!1};P(T(18,17),S(b,D),3.5),P(U(18,!0),S(b,D),12).scale.y=.6,P(T(6.2,12),S(x,{side:ge}),3),P(U(6.2,!1),S(x,{side:ge}),-3).scale.y=.5,P(U(6.2,!0),S(x,{side:ge}),9).scale.y=.5,P(new ve(5.9,5.9,.3,48),S(w),-.2),P(new ve(5.9,5.9,.3,48),S(w),Ji),P(new ve(5.8,5.8,Ji,48,1,!1,to+ks/2,Math.PI*2-ks),new un({color:"#38bdf8",transparent:!0,opacity:.2,depthWrite:!1,side:ge}),Ji/2);let L=O=>new ve(1,1,1,O);c.add(_n(L(12),new un({color:"#ffffff",shininess:70}),a.fuel,(O,z,C)=>(Yi(C,[O.at[0],0,O.at[1]],[O.at[0],O.h,O.at[1]],.42),Ce(Ce(w,u(O.cluster),.5+.5*O.heat),r.bg,g(O.cluster))))),c.add(_n(L(8),S("#ffffff"),a.control,(O,z,C)=>{let Y=Ji-qi*O.depth;return Yi(C,[O.at[0],Y,O.at[1]],[O.at[0],Y+qi+1.4,O.at[1]],.2),Ce(w,r.bg,g(O.cluster))})),c.add(_n(new de(1,12,8),S("#ffffff"),a.control,(O,z,C)=>(C.makeScale(.36,.36,.36).setPosition(O.at[0],Ji-qi*O.depth+qi+1.4,O.at[1]),Ce(w,r.bg,g(O.cluster)))));let N=[];a.loops.forEach((O,z)=>{let C=v(z),Y=.28+.5*O.share,k=g(O.cluster),G=_(C,13.5,0),K=_(C+.2,10.5,0),B=new qt(new ve(1.9,1.4,12,24),S(Ce(u(O.cluster),r.bg,k)));B.position.set(G[0],1,G[2]),c.add(B);let I=new qt(new de(1.9,24,12,0,Math.PI*2,0,Math.PI/2),S(Ce(u(O.cluster),r.bg,k)));I.position.set(G[0],7,G[2]),c.add(I);let nt=new qt(new ve(.9,.9,3.4,16),S(Ce(x,r.bg,k)));nt.position.set(K[0],1.2,K[2]),c.add(nt),N.push({from:_(C-.07,6.1,5),to:_(C-.05,12.4,5),w:Y,c:Ce(zf,r.bg,k)},{from:_(C+.05,12.6,1),to:[K[0],1,K[2]],w:Y,c:Ce(mh,r.bg,k)},{from:[K[0],2.4,K[2]],to:_(C+.12,6.1,3.2),w:Y,c:Ce(mh,r.bg,k)})}),c.add(_n(L(12),S("#ffffff"),N,(O,z,C)=>(Yi(C,O.from,O.to,O.w),O.c))),i.scene.add(c);let Z=a.loops.map((O,z)=>({text:`${jt(O.name,20)} (${O.edited})`,at:_(v(z),13.5,9),dy:-14,run:()=>y(O.cluster),title:`Only ${O.name}`}));for(let O of a.fuel.slice(0,3))Z.push({text:jt(h(O.id),22),at:[O.at[0],O.h,O.at[1]],dy:-14,run:()=>n(O.id),title:`Open ${h(O.id)}`});a.control[0]&&Z.push({text:jt(h(a.control[0].id),22),at:[a.control[0].at[0],Ji+qi+1.4,a.control[0].at[1]],dy:-14,color:r.muted,run:()=>n(a.control[0].id),title:`Open ${h(a.control[0].id)}`}),t.labels(Z),t.stat(m());let H=f==null?null:a.loops.find(O=>O.cluster===f);t.chip(H?`Only ${H.name}`:null,()=>y(null))}function y(x){f=x===f?null:x,p(),o()}let M=[];return d?M.push({text:`k is ${d}: ${mt(a.edited,"note")} edited in the last ${Ei} days for ${mt(a.wentStale,"note")} that went stale in them. ${a.k>=1?"Above 1, the vault is heating up.":"Below 1, the vault is cooling."}`,...a.fuel[0]?{label:"Open liveliest",run:()=>n(a.fuel[0].id)}:{}}):M.push({text:`${mt(a.edited,"note")} edited in the last ${Ei} days and none went stale in them, so there is no k to work out.`,...a.fuel[0]?{label:"Open liveliest",run:()=>n(a.fuel[0].id)}:{}}),a.control[0]&&M.push({text:`${mt(a.leaned,"stale note")} still ${a.leaned===1?"has":"have"} notes linking to ${a.leaned===1?"it":"them"}. ${h(a.control[0].id)} has the most: ${mt(a.control[0].links,"note")} link to it.`,label:"Open note",run:()=>n(a.control[0].id)}),a.loops[0]&&M.push({text:`${a.loops[0].name} had the most edits: ${a.loops[0].edited} of the ${a.edited}.`,label:"Only this topic",run:()=>y(a.loops[0].cluster)}),t.explain({plain:"Picture a reactor. Every note you edited this month is a fuel rod giving off heat. Every note left to go stale takes heat away. Divide one by the other and you get k: above 1 the vault is heating up, below 1 it is cooling.",about:`A fuel rod is a note edited in the last ${Ei} days, taller and brighter the livelier it is; the ${Hf} liveliest are drawn, the liveliest in the middle. A control rod is a stale note that other notes still link to, pushed deeper the more notes link to it; the ${Wf} most linked are drawn. k is the notes edited in the ${Ei} days divided by the notes that went stale in them. Each coolant loop is one of the ${Zf} topics with the most edited notes; its pipes are wider the bigger its share.`,legend:[{color:r.palette[0],text:"fuel rod = a note edited lately, colour = topic"},{color:Ce(r.fg,r.bg,.25),text:"control rod = a stale note others link to"},{color:zf,text:"hot leg"},{color:mh,text:"cold leg, back to the vessel"}],insights:M}),t.controls({lines:["Pick a rod to open its note, a loop to see only its topic"],buttons:[]}),p(),{targets:()=>[...a.fuel.map(x=>({at:[x.at[0],x.h*.6,x.at[1]],r:.7,key:{kind:"note",id:x.id,tip:`${h(x.id)} \xB7 edited ${mt(l.get(x.id).age||0,"day")} ago`}})),...a.control.map(x=>({at:[x.at[0],Ji-qi*x.depth+qi+1.4,x.at[1]],r:.6,key:{kind:"note",id:x.id,tip:`${h(x.id)} \xB7 stale \xB7 ${mt(x.links,"note")} link to it`}})),...a.loops.map((x,b)=>({at:_(v(b),13.5,4),r:2.4,key:{kind:"loop",id:x.cluster,tip:`${x.name} \xB7 ${mt(x.edited,"note")} edited \xB7 pick to see only this topic`}}))],click(x){x.kind==="note"?n(x.id):x.kind==="loop"&&y(x.id)},update(){},stat:m,today:()=>a.control[0]?{text:`${h(a.control[0].id)} is stale and ${mt(a.control[0].links,"note")} link to it.`,label:"Open note",run:()=>n(a.control[0].id)}:null,api:{layout:()=>a,filter:y,only:()=>f},dispose(){c&&si(i.scene,c)}}}};var Cl={low:0,medium:1,high:2},Ny=i=>20*(i+1)**2;async function Xf({host:i,detail:t="medium",pbr:e=!1,warmup:n=3e3,run:s=5e3}={}){if(!(t in Cl))throw new Error(`bench: detail is one of ${Object.keys(Cl).join(", ")}`);if(!i)throw new Error("bench: host (an element to draw in) is required");let r=Zr(),o=ml(i,io(),{fog:!1});try{o.scene.add(Qc(r,new jn(1,Cl[t]),e?new Te({roughness:.6}):new Bi).root);let a=o.renderer.getContext(),l=a.getExtension("WEBGL_debug_renderer_info"),h=String(l&&a.getParameter(l.UNMASKED_RENDERER_WEBGL)||a.getParameter(a.RENDERER)||"unknown"),c=()=>new Promise(y=>requestAnimationFrame(y)),f=performance.now(),u=f,d=f,m=0,v=0,_=0;for(;u-f<n+s;)u=await c(),o.orbit(u/2e3,.3,42),o.render(),u-f>=n&&(_?(m++,v=Math.max(v,u-d)):_=u),d=u;let p=u-_;return{atoms:r.n,detail:t,triangles:r.n*Ny(Cl[t]),light:e?"pbr":"basic",fps:p>0?Math.round(m*1e3/p*10)/10:0,worstMs:Math.round(v*10)/10,frames:m,gpu:h}}finally{o.dispose()}}var gh={bodies:Ud,cas9:Ld,genome:Od,cones:Gd,loadpaths:Kd,modes:ef,slime:cf,cyberpunk:pf,radar:Mf,clock:bf,foodweb:Cf,city:_f,atom:Df,station:Of,reactor:Yf},Fy=Object.values(gh).map(i=>({id:i.id,name:i.name,hint:i.hint,actions:i.actions||[],under:(i.home.minPitch||0)<0}));function Dy(i,{view:t="bodies",data:e,inputs:n,onOpen:s,onAction:r,theme:o}={}){let a=gh[t];if(!a)throw new Error(`vault-graph-views: no view "${t}" (there is ${Object.keys(gh).join(", ")})`);let l=Nl(e);if(l.length||l.push(...Fl(t,e,n)),l.length)throw new Error("vault-graph-views: "+l.join("; "));if(typeof s!="function")throw new Error("vault-graph-views: onOpen is required");if((a.actions||[]).length&&typeof r!="function")throw new Error(`vault-graph-views: onAction is required for the ${a.name} view (it asks the host for: ${a.actions.join(", ")})`);return Pd(i,a,{data:e,inputs:n||{},onOpen:s,onAction:r,theme:io(o)})}return sp(Ly);})();
