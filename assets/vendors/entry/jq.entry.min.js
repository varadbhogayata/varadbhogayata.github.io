/*! jq.entry / jQuery plugin - v1.0.0 - 2013-03-23
* http://NeXTs.github.com/jq.entry/
* Copyright (c) 2013 Denis Lukov; Licensed MIT */

;(function(n){jQuery.fn.entry=function(a){a=n.extend({elem:jQuery(this),e:void 0,invert:!1,namespace:"entry",sides:["up","right","down","left"]},a);if("undefined"==typeof a.e)console.log("Entry plugin requires Event Object ");else{var b=a.e,c=a.elem,d=c.width(),c=c.height(),h,k,l,m,f,g,p,e=b.offsetX||b.clientX-n(b.target).offset().left+window.pageXOffset,b=b.offsetY||b.clientY-n(b.target).offset().top+window.pageYOffset;e<d/2?(h=a.invert?a.sides[1]:a.sides[3],l=e,f=0):e>d/2&&e-d<=d/2&&(h=a.invert?
a.sides[3]:a.sides[1],l=b<c/2?d-e:e-d,f=1);b<c/2?(k=a.invert?a.sides[2]:a.sides[0],m=b,g=0):b>c/2&&b-c<=c/2&&(k=a.invert?a.sides[0]:a.sides[2],m=e<d/2?c-b:b-c,g=1);if(1==f&&1==g)p=l>m?h:k;else if(0==f&&0==g||1==f&&0==g||0==f&&1==g)p=l<m?h:k;return p}}})(jQuery);