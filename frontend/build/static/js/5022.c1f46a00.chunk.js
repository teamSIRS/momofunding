"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5022],{5022:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return i}});var r=n(1811),a=n(7909),i=function(e,t,n,i,u){var o=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){var t=e.deltaX/o.innerWidth;i(t)},onEnd:function(e){var t=e.deltaX,n=o.innerWidth,a=t/n,i=e.velocityX,c=n/2,s=i>=0&&(i>.2||e.deltaX>c),d=(s?1-a:a)*n,f=0;if(d>5){var h=d/Math.abs(i);f=Math.min(h,540)}u(s,a<=0?.01:(0,r.d)(0,a,.9999),f)}})}}}]);
//# sourceMappingURL=5022.c1f46a00.chunk.js.map