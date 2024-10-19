(function(M,F){typeof exports=="object"&&typeof module<"u"?F(exports,require("react/jsx-runtime"),require("react")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react"],F):(M=typeof globalThis<"u"?globalThis:M||self,F(M.okShaunComponents={},M.jsxRuntime,M.React))})(this,function(M,F,te){"use strict";function Ee(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const I=Ee(te);function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ne.apply(null,arguments)}function ue(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var _e=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Re=ue(function(e){return _e.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),$e=!1;function Me(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Ie(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Ne=function(){function e(t){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!$e:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ie(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Me(a);try{i.insertRule(n,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},e}(),k="-ms-",U="-moz-",f="-webkit-",le="comm",ae="rule",ie="decl",Fe="@import",de="@keyframes",Le="@layer",je=Math.abs,G=String.fromCharCode,De=Object.assign;function ze(e,r){return w(e,0)^45?(((r<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}function he(e){return e.trim()}function He(e,r){return(e=r.exec(e))?e[0]:e}function u(e,r,t){return e.replace(r,t)}function se(e,r){return e.indexOf(r)}function w(e,r){return e.charCodeAt(r)|0}function z(e,r,t){return e.slice(r,t)}function _(e){return e.length}function oe(e){return e.length}function V(e,r){return r.push(e),e}function We(e,r){return e.map(r).join("")}var X=1,L=1,pe=0,C=0,v=0,j="";function Y(e,r,t,n,a,i,s){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:X,column:L,length:s,return:""}}function H(e,r){return De(Y("",null,null,"",null,null,0),e,{length:-e.length},r)}function qe(){return v}function Be(){return v=C>0?w(j,--C):0,L--,v===10&&(L=1,X--),v}function P(){return v=C<pe?w(j,C++):0,L++,v===10&&(L=1,X++),v}function R(){return w(j,C)}function K(){return C}function W(e,r){return z(j,e,r)}function q(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function me(e){return X=L=1,pe=_(j=e),C=0,[]}function ge(e){return j="",e}function Z(e){return he(W(C-1,ce(e===91?e+2:e===40?e+1:e)))}function Ue(e){for(;(v=R())&&v<33;)P();return q(e)>2||q(v)>3?"":" "}function Ge(e,r){for(;--r&&P()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return W(e,K()+(r<6&&R()==32&&P()==32))}function ce(e){for(;P();)switch(v){case e:return C;case 34:case 39:e!==34&&e!==39&&ce(v);break;case 40:e===41&&ce(e);break;case 92:P();break}return C}function Ve(e,r){for(;P()&&e+v!==57;)if(e+v===84&&R()===47)break;return"/*"+W(r,C-1)+"*"+G(e===47?e:P())}function Xe(e){for(;!q(R());)P();return W(e,C)}function Ye(e){return ge(J("",null,null,null,[""],e=me(e),0,[0],e))}function J(e,r,t,n,a,i,s,c,p){for(var g=0,l=0,d=s,E=0,A=0,m=0,o=1,b=1,y=1,x=0,S="",N=a,T=i,O=n,h=S;b;)switch(m=x,x=P()){case 40:if(m!=108&&w(h,d-1)==58){se(h+=u(Z(x),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:h+=Z(x);break;case 9:case 10:case 13:case 32:h+=Ue(m);break;case 92:h+=Ge(K()-1,7);continue;case 47:switch(R()){case 42:case 47:V(Ke(Ve(P(),K()),r,t),p);break;default:h+="/"}break;case 123*o:c[g++]=_(h)*y;case 125*o:case 59:case 0:switch(x){case 0:case 125:b=0;case 59+l:y==-1&&(h=u(h,/\f/g,"")),A>0&&_(h)-d&&V(A>32?be(h+";",n,t,d-1):be(u(h," ","")+";",n,t,d-2),p);break;case 59:h+=";";default:if(V(O=ye(h,r,t,g,l,a,c,S,N=[],T=[],d),i),x===123)if(l===0)J(h,r,O,O,N,i,d,c,T);else switch(E===99&&w(h,3)===110?100:E){case 100:case 108:case 109:case 115:J(e,O,O,n&&V(ye(e,O,O,0,0,a,c,S,a,N=[],d),T),a,T,d,c,n?N:T);break;default:J(h,O,O,O,[""],T,0,c,T)}}g=l=A=0,o=y=1,S=h="",d=s;break;case 58:d=1+_(h),A=m;default:if(o<1){if(x==123)--o;else if(x==125&&o++==0&&Be()==125)continue}switch(h+=G(x),x*o){case 38:y=l>0?1:(h+="\f",-1);break;case 44:c[g++]=(_(h)-1)*y,y=1;break;case 64:R()===45&&(h+=Z(P())),E=R(),l=d=_(S=h+=Xe(K())),x++;break;case 45:m===45&&_(h)==2&&(o=0)}}return i}function ye(e,r,t,n,a,i,s,c,p,g,l){for(var d=a-1,E=a===0?i:[""],A=oe(E),m=0,o=0,b=0;m<n;++m)for(var y=0,x=z(e,d+1,d=je(o=s[m])),S=e;y<A;++y)(S=he(o>0?E[y]+" "+x:u(x,/&\f/g,E[y])))&&(p[b++]=S);return Y(e,r,t,a===0?ae:c,p,g,l)}function Ke(e,r,t){return Y(e,r,t,le,G(qe()),z(e,2,-2),0)}function be(e,r,t,n){return Y(e,r,t,ie,z(e,0,n),z(e,n+1,-1),n)}function D(e,r){for(var t="",n=oe(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Ze(e,r,t,n){switch(e.type){case Le:if(e.children.length)break;case Fe:case ie:return e.return=e.return||e.value;case le:return"";case de:return e.return=e.value+"{"+D(e.children,n)+"}";case ae:e.value=e.props.join(",")}return _(t=D(e.children,n))?e.return=e.value+"{"+t+"}":""}function Je(e){var r=oe(e);return function(t,n,a,i){for(var s="",c=0;c<r;c++)s+=e[c](t,n,a,i)||"";return s}}function Qe(e){return function(r){r.root||(r=r.return)&&e(r)}}var er=function(r,t,n){for(var a=0,i=0;a=i,i=R(),a===38&&i===12&&(t[n]=1),!q(i);)P();return W(r,C)},rr=function(r,t){var n=-1,a=44;do switch(q(a)){case 0:a===38&&R()===12&&(t[n]=1),r[n]+=er(C-1,t,n);break;case 2:r[n]+=Z(a);break;case 4:if(a===44){r[++n]=R()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=G(a)}while(a=P());return r},tr=function(r,t){return ge(rr(me(r),t))},ve=new WeakMap,nr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!ve.get(n))&&!a){ve.set(r,!0);for(var i=[],s=tr(t,i),c=n.props,p=0,g=0;p<s.length;p++)for(var l=0;l<c.length;l++,g++)r.props[g]=i[p]?s[p].replace(/&\f/g,c[l]):c[l]+" "+s[p]}}},ar=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function xe(e,r){switch(ze(e,r)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+U+e+k+e+e;case 6828:case 4268:return f+e+k+e+e;case 6165:return f+e+k+"flex-"+e+e;case 5187:return f+e+u(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return f+e+k+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return f+e+k+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+k+u(e,"shrink","negative")+e;case 5292:return f+e+k+u(e,"basis","preferred-size")+e;case 6060:return f+"box-"+u(e,"-grow","")+f+e+k+u(e,"grow","positive")+e;case 4554:return f+u(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-r>6)switch(w(e,r+1)){case 109:if(w(e,r+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+U+(w(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~se(e,"stretch")?xe(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(w(e,r+1)!==115)break;case 6444:switch(w(e,_(e)-3-(~se(e,"!important")&&10))){case 107:return u(e,":",":"+f)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(w(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+k+"$2box$3")+e}break;case 5936:switch(w(e,r+11)){case 114:return f+e+k+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+k+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+k+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+k+e+e}return e}var ir=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case ie:r.return=xe(r.value,r.length);break;case de:return D([H(r,{value:u(r.value,"@","@"+f)})],a);case ae:if(r.length)return We(r.props,function(i){switch(He(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return D([H(r,{props:[u(i,/:(read-\w+)/,":"+U+"$1")]})],a);case"::placeholder":return D([H(r,{props:[u(i,/:(plac\w+)/,":"+f+"input-$1")]}),H(r,{props:[u(i,/:(plac\w+)/,":"+U+"$1")]}),H(r,{props:[u(i,/:(plac\w+)/,k+"input-$1")]})],a)}return""})}},sr=[ir],or=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(o){var b=o.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(o),o.setAttribute("data-s",""))})}var a=r.stylisPlugins||sr,i={},s,c=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(o){for(var b=o.getAttribute("data-emotion").split(" "),y=1;y<b.length;y++)i[b[y]]=!0;c.push(o)});var p,g=[nr,ar];{var l,d=[Ze,Qe(function(o){l.insert(o)})],E=Je(g.concat(a,d)),A=function(b){return D(Ye(b),E)};p=function(b,y,x,S){l=x,A(b?b+"{"+y.styles+"}":y.styles),S&&(m.inserted[y.name]=!0)}}var m={key:t,sheet:new Ne({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:p};return m.sheet.hydrate(c),m},cr=!0;function fr(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):a&&(n+=a+" ")}),n}var we=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||cr===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},ur=function(r,t,n){we(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var i=t;do r.insert(t===i?"."+a:"",i,r.sheet,!0),i=i.next;while(i!==void 0)}};function lr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var dr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hr=!1,pr=/[A-Z]|^ms/g,mr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ke=function(r){return r.charCodeAt(1)===45},Se=function(r){return r!=null&&typeof r!="boolean"},fe=ue(function(e){return ke(e)?e:e.replace(pr,"-$&").toLowerCase()}),Ce=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(mr,function(n,a,i){return $={name:a,styles:i,next:$},a})}return dr[r]!==1&&!ke(r)&&typeof t=="number"&&t!==0?t+"px":t},gr="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function B(e,r,t){if(t==null)return"";var n=t;if(n.__emotion_styles!==void 0)return n;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return $={name:a.name,styles:a.styles,next:$},a.name;var i=t;if(i.styles!==void 0){var s=i.next;if(s!==void 0)for(;s!==void 0;)$={name:s.name,styles:s.styles,next:$},s=s.next;var c=i.styles+";";return c}return yr(e,r,t)}case"function":{if(e!==void 0){var p=$,g=t(e);return $=p,B(e,r,g)}break}}var l=t;if(r==null)return l;var d=r[l];return d!==void 0?d:l}function yr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=B(e,r,t[a])+";";else for(var i in t){var s=t[i];if(typeof s!="object"){var c=s;r!=null&&r[c]!==void 0?n+=i+"{"+r[c]+"}":Se(c)&&(n+=fe(i)+":"+Ce(i,c)+";")}else{if(i==="NO_COMPONENT_SELECTOR"&&hr)throw new Error(gr);if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var p=0;p<s.length;p++)Se(s[p])&&(n+=fe(i)+":"+Ce(i,s[p])+";");else{var g=B(e,r,s);switch(i){case"animation":case"animationName":{n+=fe(i)+":"+g+";";break}default:n+=i+"{"+g+"}"}}}}return n}var Pe=/label:\s*([^\s;{]+)\s*(;|$)/g,$;function br(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";$=void 0;var i=e[0];if(i==null||i.raw===void 0)n=!1,a+=B(t,r,i);else{var s=i;a+=s[0]}for(var c=1;c<e.length;c++)if(a+=B(t,r,e[c]),n){var p=i;a+=p[c]}Pe.lastIndex=0;for(var g="",l;(l=Pe.exec(a))!==null;)g+="-"+l[1];var d=lr(a)+g;return{name:d,styles:a,next:$}}var vr=function(r){return r()},xr=I.useInsertionEffect?I.useInsertionEffect:!1,wr=xr||vr,Ae=I.createContext(typeof HTMLElement<"u"?or({key:"css"}):null);Ae.Provider;var kr=function(r){return te.forwardRef(function(t,n){var a=te.useContext(Ae);return r(t,a,n)})},Sr=I.createContext({}),Cr=Re,Pr=function(r){return r!=="theme"},Oe=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Cr:Pr},Te=function(r,t,n){var a;if(t){var i=t.shouldForwardProp;a=r.__emotion_forwardProp&&i?function(s){return r.__emotion_forwardProp(s)&&i(s)}:i}return typeof a!="function"&&n&&(a=r.__emotion_forwardProp),a},Ar=!1,Or=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return we(t,n,a),wr(function(){return ur(t,n,a)}),null},Tr=function e(r,t){var n=r.__emotion_real===r,a=n&&r.__emotion_base||r,i,s;t!==void 0&&(i=t.label,s=t.target);var c=Te(r,t,n),p=c||Oe(a),g=!p("as");return function(){var l=arguments,d=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),l[0]==null||l[0].raw===void 0)d.push.apply(d,l);else{d.push(l[0][0]);for(var E=l.length,A=1;A<E;A++)d.push(l[A],l[0][A])}var m=kr(function(o,b,y){var x=g&&o.as||a,S="",N=[],T=o;if(o.theme==null){T={};for(var O in o)T[O]=o[O];T.theme=I.useContext(Sr)}typeof o.className=="string"?S=fr(b.registered,N,o.className):o.className!=null&&(S=o.className+" ");var h=br(d.concat(N),b.registered,T);S+=b.key+"-"+h.name,s!==void 0&&(S+=" "+s);var Ir=g&&c===void 0?Oe(x):p,ee={};for(var re in o)g&&re==="as"||Ir(re)&&(ee[re]=o[re]);return ee.className=S,y&&(ee.ref=y),I.createElement(I.Fragment,null,I.createElement(Or,{cache:b,serialized:h,isStringTag:typeof x=="string"}),I.createElement(x,ee))});return m.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",m.defaultProps=r.defaultProps,m.__emotion_real=m,m.__emotion_base=a,m.__emotion_styles=d,m.__emotion_forwardProp=c,Object.defineProperty(m,"toString",{value:function(){return s===void 0&&Ar?"NO_COMPONENT_SELECTOR":"."+s}}),m.withComponent=function(o,b){return e(o,ne({},t,b,{shouldForwardProp:Te(m,b,!0)})).apply(void 0,d)},m}},Er=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Q=Tr.bind();Er.forEach(function(e){Q[e]=Q(e)});const _r=Q.button`
    color: blue;
    padding: 5px;
    font-size: 20px;
`;function Rr({children:e,...r}){return F.jsx(_r,{...r,children:e})}const $r=Q.div`
    border: 1px solid gray;
    border-radius: 8px;
    padding: 1rem;
`;function Mr({children:e}){return F.jsx($r,{children:e})}M.Button=Rr,M.Card=Mr,Object.defineProperty(M,Symbol.toStringTag,{value:"Module"})});
