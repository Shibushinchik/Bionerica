function t_animateFix__wrapEls(){$("[data-animate-fix]").each(function(){void 0!==$(this).attr("data-animate-prx")&&$(this).removeAttr("data-animate-prx"),el=$(this),el_atom=$(this).find(".tn-atom"),el_atom.wrap("<div class='tn-atom__sticky-wrapper' style='display:table; width:inherit; height:inherit;'></div>"),el_fixedWrapper=el.find(".tn-atom__sticky-wrapper"),el.hasClass("t-animate")&&(el.removeClass("t-animate"),el_fixedWrapper.addClass("t-animate"),el_fixedWrapper.attr({"data-animate-style":el.attr("data-animate-style"),"data-animate-distance":el.attr("data-animate-distance"),"data-animate-scale":el.attr("data-animate-scale"),"data-animate-duration":el.attr("data-animate-duration"),"data-animate-delay":el.attr("data-animate-delay")}),el.removeAttr("data-animate-style data-animate-distance data-animate-scale data-animate-duration data-animate-delay"))})}function t_animateFix__init(){var t=$("[data-animate-fix]:not([data-animate-fix-alw='yes'])"),a=$("[data-animate-fix][data-animate-fix-alw='yes']"),e=!1;0!=t.length&&(t_animateFix__cashElsInfo(t),t_animateFix__cashElsInfo(a),t_animateFix__updatePositions(t),t_animateFix__positionAlwaysFixed(a),"y"==window.lazy&&t_lazyload_update(),$(window).resize(t_throttle(function(i){$(window).width()<1200?(e=!0,t_animateFix__reset(t),t_animateFix__reset(a)):(t_animateFix__cashElsInfo(t),t_animateFix__cashElsInfo(a),t_animateFix__updatePositions(t,!0),t_animateFix__positionAlwaysFixed(a))},100)),$(".t396").bind("displayChanged",function(){e||setTimeout(function(){t_animateFix__cashElsInfo(t),t_animateFix__updatePositions(t,!0)},10)}),$(window).bind("scroll",t_throttle(function(){e||t_animateFix__updatePositions(t,!1)},30)))}function t_animateFix__positionAlwaysFixed(t){for(var a=0;a<t.length;a++){var e=t[a];e.fixedWrapperEl.css({position:"fixed",top:e.triggerOffset+"px"})}}function t_animateFix__updatePositions(t,a){for(var e=$(window).scrollTop(),i=0;i<t.length;i++){var n=t[i];if(0==n.distance)return;var r=e+n.triggerOffset,s=r>=n.topOffset,o=r<n.topOffset,f=n.end>r,l=n.end<=r;(s&&f&&(0==n.fixedWrapperEl.hasClass("t-sticky_going")||a)||f&&n.fixedWrapperEl.hasClass("t-sticky_ended"))&&($(n).css({transform:""}),n.fixedWrapperEl.css({position:"fixed",top:n.triggerOffset+"px"}),n.fixedWrapperEl.addClass("t-sticky_going"),n.fixedWrapperEl.removeClass("t-sticky_ended")),l&&0==n.fixedWrapperEl.hasClass("t-sticky_ended")&&($(n).css({transform:"translateY("+n.distance+"px)"}),n.fixedWrapperEl.css({top:"",position:""}),n.fixedWrapperEl.removeClass("t-sticky_going"),n.fixedWrapperEl.addClass("t-sticky_ended")),o&&n.fixedWrapperEl.hasClass("t-sticky_going")&&(n.fixedWrapperEl.css({top:"",position:""}),n.fixedWrapperEl.removeClass("t-sticky_going"))}}function t_animateFix__cashElsInfo(t){for(var a=$(window).height(),e=0;e<t.length;e++){var i=t[e],n=1*$(i).css("top").replace("px",""),r=$(i).parents(".r"),s=r.offset().top+1*r.css("padding-top").replace("px","");i.topOffset=s+n,i.trigger=$(i).attr("data-animate-fix"),i.distance=1*$(i).attr("data-animate-fix-dist"),i.distance=void 0===i.distance||0==i.distance?0:i.distance,i.end=i.topOffset+i.distance,i.fixedWrapperEl=$(i).find(".tn-atom__sticky-wrapper"),t_animateFix__getElTrigger(i,a)}}function t_animateFix__getElTrigger(t,a){t.triggerOffset=$(t).attr("data-animate-fix-trgofst"),t.triggerOffset=void 0===t.triggerOffset||0==t.triggerOffset?0:1*t.triggerOffset,"0.5"==t.trigger&&(t.triggerOffset+=a/2,t.triggerOffset>t.topOffset&&t.triggerOffset<=a/2&&(t.triggerOffset=t.topOffset)),"1"==t.trigger&&(t.triggerOffset+=a,t.triggerOffset>t.topOffset&&t.triggerOffset<=a&&(t.triggerOffset=t.topOffset))}function t_animateFix__reset(t){for(var a=0;a<t.length;a++){var e=t[a];$(e).css("transform",""),e.fixedWrapperEl.css("position",""),e.fixedWrapperEl.removeClass("t-sticky_ended t-sticky_going")}}function t_animateParallax__wrapEls(){$("[data-animate-prx='scroll'] .tn-atom, [data-animate-prx='mouse'] .tn-atom").each(function(){$(this).wrap("<div class='tn-atom__prx-wrapper' style='display:table; width:inherit; height:inherit;'></div>")})}function t_animateParallax__initScroll(){var t=$("[data-animate-prx='scroll']"),a=$(window).scrollTop();if(0!=t.length){for(var e=[],i=0;i<t.length;i++){var n=t[i];if(n.topOffset=$(n).offset().top,n.bottomOffset=n.topOffset+$(n).height(),n.bottomOffset<a){if(t.splice(i,1),i--,0==t.length)break}else if($(n).is(":hidden"))t.splice(i,1),i--,e.push(n);else{var r=$(n).attr("data-animate-prx-s");$(n).find(".tn-atom__prx-wrapper").attr("data-rellax-speed",Math.round((r-100)/10))}}t.length>0&&Rellax("[data-rellax-speed]",{round:!0,onscroll:!0}),$(window).bind("scroll",t_throttle(function(){for(var t=[],a=0;a<e.length;a++){var i=$(e[a]);i.is(":visible")&&(e.splice(a,1),a--,t.push(i))}if(0!=t.length){var n=$(i).attr("data-animate-prx-s"),r="rellax"+Date.now();$(t).each(function(){$(this).find(".tn-atom__prx-wrapper").attr("data-rellax-speed",Math.round((n-100)/10)),$(this).addClass(r)}),Rellax("."+r,{round:!0,onscroll:!0})}},50))}}function t_animateParallax__initMouse(){var t=$("[data-animate-prx='mouse']");if(0!=t.length){for(var a=$(window).height(),e=$(window).width(),i=0;i<t.length;i++){var n=t[i];n.pathX=$(n).attr("data-animate-prx-dx"),n.pathY=$(n).attr("data-animate-prx-dy"),n.animEl=$(n).find(".tn-atom__prx-wrapper"),t_animateParallax__cashOffsets(n),"image"===$(n).attr("data-elem-type")&&t_animateParallax__cashOffsets__OnImgLoad(n)}$(window).resize(t_throttle(function(i){a=$(window).height(),e=$(window).width();for(var n=0;n<t.length;n++){t_animateParallax__cashOffsets(t[n])}},50));for(i=0;i<t.length;i++)t_animateParallax__moveEl(t[i],a,e)}}function t_animateParallax__cashOffsets(t){t.topOffset=$(t).offset().top,t.bottomOffset=t.topOffset+$(t).height();var a=$(t).parents(".r"),e=a.offset().top,i=a.offset().top+a.height();e>t.topOffset&&(t.parentTopOffset=e),i<t.bottomOffset&&(t.parentBottomOffset=i)}function t_animateParallax__cashOffsets__OnImgLoad(t){window.lazy&&$(t).find("img").on("load",function(){t_animateParallax__cashOffsets(t)})}function t_animateParallax__moveEl(t,a,e){var i=t.pathX,n=t.pathY,r=0,s=0,o=0,f=0,l=!1;function d(){l||(requestAnimationFrame(d),0!=r&&(o+=.02*(r-o)),0!=s&&(f+=.02*(s-f)),Math.abs(o-r)<1&&Math.abs(f-s)<1?l=!0:$(t.animEl).css("transform","translate3d("+o+"px, "+f+"px, 0px)"))}$("body").on("mousemove",t_throttle(function(o){if(void 0!==o){var f=o.pageY-o.clientY-100,_=o.pageY+a+100;if(!(t.bottomOffset<f||t.topOffset>_||t.parentTopOffset>o.pageY||t.parentBottomOffset<o.pageY)){if(void 0!==i){var p=e/2,m=(p-o.clientX)/p;r=Math.round(i*m)}if(void 0!==n){var c=a/2,x=(c-o.clientY)/c;s=Math.round(n*x)}l=!1,d()}}},50))}function t_animateParallax__checkOldIE(){var t=window.navigator.userAgent,a=t.indexOf("MSIE"),e="",i=!1;return a>0&&(8!=(e=parseInt(t.substring(a+5,t.indexOf(".",a))))&&9!=e&&10!=e||(i=!0)),i}$(document).ready(function(){1==window.isSearchBot||t_animateParallax__checkOldIE()||window.isMobile||$(window).width()<1200||"edit"==$(".t-records").attr("data-tilda-mode")||(t_animateFix__wrapEls(),t_animateParallax__wrapEls(),setTimeout(function(){t_animateParallax__initScroll(),t_animateParallax__initMouse()},1e3),0==$(window).scrollTop()?setTimeout(function(){t_animateFix__init()},1e3):setTimeout(function(){t_animateFix__init()},50))});



// ------------------------------------------
// Rellax.js - v1.0.0
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------

!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.Rellax=t()}(this,function(){var e=function(t,o){"use strict";var n=Object.create(e.prototype),i=0,r=0,s=0,a=0,l=[],d=!1,c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},f=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var o in t)if(void 0!==e.style[t[o]+"Transform"])return t[o]+"Transform"}return"transform"}(),u=function(e,t,o){return e<=t?t:e>=o?o:e};n.options={speed:-2,center:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}},o&&Object.keys(o).forEach(function(e){n.options[e]=o[e]}),n.options.speed=u(n.options.speed,-10,10),t||(t=".rellax");var p="string"==typeof t?document.querySelectorAll(t):[t];if(!(p.length>0))throw new Error("The elements you're trying to select don't exist.");n.elems=p;var m=function(e){var t=e.getAttribute("data-rellax-percentage"),o=e.getAttribute("data-rellax-speed"),i=e.getAttribute("data-rellax-zindex")||0,s=n.options.vertical&&(t||n.options.center)?window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop:0,l=n.options.horizontal&&(t||n.options.center)?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0;n.options.onscroll&&(s=window.pageYOffset);var d=s+e.getBoundingClientRect().top,c=e.clientHeight||e.offsetHeight||e.scrollHeight,f=l+e.getBoundingClientRect().left,p=e.clientWidth||e.offsetWidth||e.scrollWidth,m=t||(s-d+r)/(c+r),w=t||(l-f+a)/(p+a);n.options.center&&(w=.5,m=.5);var g=o?u(o,-10,10):n.options.speed;(t||n.options.center)&&(g=u(o||n.options.speed,-5,5));var v=h(w,m,g),y=e.style.cssText,x="";if(y.indexOf("transform")>=0){var b=y.indexOf("transform"),O=y.slice(b),z=O.indexOf(";");x=z?" "+O.slice(11,z).replace(/\s/g,""):" "+O.slice(11).replace(/\s/g,"")}return{baseX:v.x,baseY:v.y,top:d,left:f,height:c,width:p,speed:g,style:y,transform:x,zindex:i}},w=function(){var e=i,t=s;return i=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,s=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,!(e==i||!n.options.vertical)||!(t==s||!n.options.horizontal)},h=function(e,t,o){var i={},r=o*(100*(1-e)),s=o*(100*(1-t));return i.x=n.options.round?Math.round(r):Math.round(100*r)/100,i.y=n.options.round?Math.round(s):Math.round(100*s)/100,i},g=function(){w()&&!1===d&&v(),c(g)},v=function(){for(var e=0;e<n.elems.length;e++)if(!(n.options.onscroll&&l[e].top>i+r)){var t=(i-l[e].top+r)/(l[e].height+r),o=(s-l[e].left+a)/(l[e].width+a),d=h(o,t,l[e].speed);0==l[e].inViewport&&(l[e].baseY=d.y,l[e].baseX=d.x),l[e].inViewport=!0;var c=d.y-l[e].baseY,u=d.x-l[e].baseX,p=l[e].zindex,m="translate3d("+(n.options.horizontal?u:"0")+"px,"+(n.options.vertical?c:"0")+"px,"+p+"px) "+l[e].transform;n.elems[e].style[f]=m}n.options.callback(d)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=l[e].style;d=!0},function(){r=window.innerHeight,a=window.innerWidth,w();for(var e=0;e<n.elems.length;e++){var t=m(n.elems[e]);n.options.onscroll&&(t.inViewport=!1),l.push(t)}window.addEventListener("resize",function(){v()}),g(),v()}(),n};return e});
