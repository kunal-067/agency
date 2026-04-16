const tl = gsap.timeline({ delay:.15 });
tl.to('#stats-row',{ opacity:1, y:0, duration:.7, ease:'power3.out',
  from:{ y:20 }
},'-=.4')