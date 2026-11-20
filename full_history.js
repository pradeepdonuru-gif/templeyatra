// TempleYatra - SAFE history - will not crash
const templeHistoryFull = {
  1: { history: "Keesaragutta - 3000 years old Swayambhu Linga. Kakatiya kings built. Rishis penance place.", tradition: "4 AM Abhishekam, Monday special Annadanam. For education." },
  2: { history: "Yadagirigutta - 1000 years cave temple on hillock. Chola dynasty. Swayambhu deity.", tradition: "5 AM Abhishekam, Tuesday special. For marriage and family." },
  3: { history: "Vemulawada - 1200 years Chalukya Shiva temple. Famous Kode Mokku ritual.", tradition: "4 AM pooja, Kode Mokku, Maha Shivaratri grand festival." },
  4: { history: "Bhadrachalam - 17th century built by Bhadradri Ramadasu on Godavari river bank.", tradition: "Daily Sita Rama Kalyanam, Brahmotsavams." },
  7: { history: "Komuravelli Mallikarjuna Swamy - 500 years old. Kakatiya architecture. Oggu Katha famous.", tradition: "Pedda Patnam Jatara, Oggu Katha, Bonam offering." }
};

try {
  if(typeof temples !== 'undefined'){
    temples.forEach(t=>{
      let d = templeHistoryFull[t.id];
      if(d){ t.history=d.history; t.tradition=d.tradition; }
    });
    console.log("✅ History merged");
    render();
  }
} catch(e){ console.log("Safe skip", e); }
