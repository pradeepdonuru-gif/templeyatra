// FIX - Repairs temple display
(function(){
  // Use existing temples or create from parts
  let base = (typeof temples !== 'undefined' && temples.length > 20) ? temples : [];
  let extra = [];
  if(typeof templePart1 !== 'undefined') extra = extra.concat(templePart1);
  if(typeof templePart2 !== 'undefined') extra = extra.concat(templePart2);
  if(typeof templePart3 !== 'undefined') extra = extra.concat(templePart3);
  
  // If base empty, use extra as base
  if(base.length < 10 && extra.length > 0){
    base = extra.map((t,i)=>({
      id: t.id || i+1,
      name: t.name,
      city: t.name.split(' ')[0],
      district: t.name,
      state: 'Telangana',
      timing: t.timings || t.timing || '6 AM - 8 PM',
      rail: 'Nearest Railway',
      airport: 'Nearest Airport',
      img: 'https://images.unsplash.com/photo-1583243536445-44447fe0a17d',
      lat: 17.3, lng: 78.5,
      history: t.history,
      tradition: t.tradition
    }));
  } else {
    // Merge history into base
    extra.forEach(h=>{
      let found = base.find(b=>b.id==h.id || b.name.toLowerCase()==h.name.toLowerCase());
      if(found){ found.history=h.history; found.tradition=h.tradition; }
    });
  }
  
  window.temples = base;
  console.log("FIXED: Temples now", window.temples.length);
  if(typeof render === 'function'){ setTimeout(render, 500); }
})();
