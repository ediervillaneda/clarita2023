window.onload=function(){const u=document.querySelector(".heart"),a=u.getContext("2d"),l=Math.cos,o=Math.random,n=56,q=6.3,s=u.height=innerHeight,r=u.width=innerWidth;let p=[],M=[];for(let t=0;t<q;t+=.2)M.push([r/2+210*Math.pow(Math.sin(t),3),s/2+13*-(15*l(t)-5*l(2*t)-2*l(3*t)-l(4*t))]);for(let t=0;t<q;t+=.4)M.push([r/2+150*Math.pow(Math.sin(t),3),s/2+9*-(15*l(t)-5*l(2*t)-2*l(3*t)-l(4*t))]);for(let t=0;t<q;t+=.8)M.push([r/2+90*Math.pow(Math.sin(t),3),s/2+5*-(15*l(t)-5*l(2*t)-2*l(3*t)-l(4*t))]);for(let t=0;t<n;){let c=o()*r,e=o()*s,x=t/n*80+100*Math.random,f=40*o()+60,y=60*o()+20,i=[];for(let h=0;h<n;)i[h++]={x:c,y:e,X:0,Y:0,R:1-h/n+1,S:o()+1,q:~~(o()*n),D:t%2*2-1,F:.2*o()+.7,f:"hsla("+~~x+","+~~f+"%,"+~~y+"%,.1)"};p[t++]=i}function S(t){a.fillStyle=t.f,a.beginPath(),a.arc(t.x,t.y,t.R,0,q,1),a.closePath(),a.fill()}setInterval(()=>{a.fillStyle="rgba(0,0,0,.2)",a.fillRect(0,0,r,s);for(let t=n;t--;){let c=p[t],e=c[0],x=M[e.q],f=e.x-x[0],y=e.y-x[1],i=Math.sqrt(f*f+y*y);10>i&&(.95<o()?e.q=~~(o()*n):(.99<o()&&(e.D*=-1),e.q+=e.D,e.q%=n,0>e.q&&(e.q+=n))),e.X+=-f/i*e.S,e.Y+=-y/i*e.S,e.x+=e.X,e.y+=e.Y,S(e),e.X*=e.F,e.Y*=e.F;for(let h=0;h<55;)T=c[h],N=c[++h],N.x-=.7*(N.x-T.x),N.y-=.7*(N.y-T.y),S(N)}},25)};