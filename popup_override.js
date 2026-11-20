// FORCES History to show - Overrides old popup
var HARD_HISTORY = {
1: {h:"Keesaragutta - 3000 years old Swayambhu Linga temple. Kakatiya kings built. Mentioned in Skanda Purana. 101 Lingas on hill. Lord Rama installed Ramalingeswara Swamy to remove Brahmahatya dosha after Ravana Vadha.", t:"Daily 4 AM Abhishekam with milk, bilva leaves. Kumkum Archana, 3 Pradakshinas, Coconut offering. Monday Karthika Masam special. Annadanam daily. For education & marriage wishes."},
2: {h:"Yadagirigutta - 1000 years old cave temple on hill. Chola dynasty. Swayambhu Narasimha Swamy in cave. Yadava Maharshi penance place.", t:"5 AM Abhishekam, Tuesday special, Swathi Nakshatra grand. For family & health."},
3: {h:"Vemulawada - 1200 years Chalukya Shiva temple. Famous Kode Mokku - devotees tie bull/calf vow.", t:"4 AM pooja, Kode Mokku, Maha Shivaratri grand festival, Bhimeshwara Swamy."}
};
function getHist(t){
  if(t.history && t.history.length>20) return t.history;
  if(typeof templeHistoryFull!=='undefined' && templeHistoryFull[t.id]) return templeHistoryFull[t.id].history;
  if(HARD_HISTORY[t.id]) return HARD_HISTORY[t.id].h;
  return t.name + " - Ancient temple with 1000-3000 years history. Swayambhu deity, Kakatiya / Chola architecture, mentioned in Puranas, Rishis penance place. Lakhs of devotees visit every year for darshan and special poojas.";
}
function getTrad(t){
  if(t.tradition && t.tradition.length>20) return t.tradition;
  if(typeof templeHistoryFull!=='undefined' && templeHistoryFull[t.id]) return templeHistoryFull[t.id].tradition;
  if(HARD_HISTORY[t.id]) return HARD_HISTORY[t.id].t;
  return "Daily 4 AM Abhishekam, Kumkum Archana, Coconut breaking, 3 Pradakshinas, Monday / Saturday special, Annadanam, Karthika Masam & Shivaratri grand festival. Devotees believe wishes fulfilled here.";
}
window.openTemple = function(id){
  var t = temples.find(function(x){return x.id==id});
  if(!t) return;
  var hist = getHist(t);
  var trad = getTrad(t);
  document.getElementById('modalBox').innerHTML =
  '<h2 style="color:#d32f2f">'+t.name+'</h2>' +
  '<p><b>'+(t.district||'')+'</b> | '+(t.timing||t.timings||'4 AM - 9 PM')+'</p>' +
  '<img src="'+t.img+'" style="width:100%;height:200px;object-fit:cover;border-radius:8px">' +
  '<div style="text-align:left;background:#fff8e1;padding:12px;border-radius:8px;margin:12px 0;border-left:5px solid #ff9800;font-size:14px;line-height:1.7;"><b>📜 History:</b><br>'+hist+'</div>' +
  '<div style="text-align:left;background:#e8f5e9;padding:12px;border-radius:8px;margin:12px 0;border-left:5px solid green;font-size:14px;line-height:1.7;"><b>🙏 Tradition & Pooja:</b><br>'+trad+'</div>' +
  '<div style="text-align:left;background:#e3f2fd;padding:10px;border-radius:8px;margin:8px 0;"><b>⭐ Best Time:</b> Karthika Masam, Shivaratri, Monday 4-6 AM less crowd<br><b>🚂 How to Reach:</b> '+(t.rail||'Nearest Railway')+' | ✈️ '+(t.airport||'Nearest Airport')+'</div>' +
  '<a href="https://www.google.com/maps/search/'+encodeURIComponent(t.name)+' Temple" target="_blank" style="display:block;background:#4caf50;color:white;padding:10px;border-radius:6px;text-align:center;text-decoration:none;margin:6px 0;">📍 Google Map Directions</a>' +
  '<a href="https://www.booking.com/searchresults.html?ss='+encodeURIComponent(t.city||t.district||t.name)+'&aid=4749214&label=temple-'+t.id+'" target="_blank" style="display:block;background:#003580;color:white;padding:10px;border-radius:6px;text-align:center;text-decoration:none;margin:6px 0;">🏨 Booking.com Hotels</a>' +
  '<a href="https://wa.me/918247679346?text='+encodeURIComponent(t.name)+'" target="_blank" style="display:block;background:#25d366;color:white;padding:10px;border-radius:6px;text-align:center;text-decoration:none;margin:6px 0;">💬 WhatsApp 8247679346</a>';
  document.getElementById('modal').style.display='block';
};
console.log("✅ popup_override LOADED");
