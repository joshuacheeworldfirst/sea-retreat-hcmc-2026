/* ============================================================
   WorldFirst SEA Retreat — SINGLE SOURCE OF CONTENT
   ------------------------------------------------------------
   To update the landing page, edit THIS file only.
   The page (index.html) renders itself from the object below.
   Source of truth: the team planning sheet on alidocs (DingTalk).
   Last synced from alidocs: 2026-07-11 (Joshua Chee flights + extending updated)
   ============================================================ */
window.RETREAT = {
  meta: {
    org: "WorldFirst · SEA Team Retreat",
    city: "Ho Chi Minh City",
    title: "S2 Retreat 2026",
    lede: "Three days of team building, great food, and good company in the heart of Saigon.",
    dates: "13–15 Aug 2026",
    datesSub: "Thursday → Saturday",
    destination: "Ho Chi Minh City",
    destinationSub: "Vietnam 🇻🇳",
    hotel: "Fusion Suites Saigon",
    hotelSub: "Bến Thành, District 1",
    group: "~14 attendees",
    groupSub: "SG & MY teams",
    // Countdown target — arrival, 13 Aug 2026 14:35 ICT (UTC+7 = 07:35 UTC)
    arrivalUTC: [2026, 7, 13, 7, 35, 0]
  },

  itinerary: [
    {
      day: "13", dow: "THU", cls: "d1",
      title: "Arrival & Welcome Dinner", date: "13 August 2026 · Thursday",
      items: [
        { time: "4:00 PM", act: "Check in to hotel", place: "Fusion Suites Saigon",
          mapQ: "Fusion Suites Saigon 3-5 Suong Nguyet Anh Ben Thanh Ho Chi Minh" },
        { time: "4:00–6:30 PM", act: "Free & easy", place: "Settle in / explore District 1" },
        { time: "7:00 PM", act: "Welcome dinner", place: "Quán Bụi — Lê Thánh Tôn",
          mapQ: "Quan Bui 222 Le Thanh Ton Ben Thanh Ho Chi Minh" }
      ]
    },
    {
      day: "14", dow: "FRI", cls: "d2",
      title: "Cooking Class & Team Night", date: "14 August 2026 · Friday",
      items: [
        { time: "10:00 AM–1:00 PM", act: "Cooking class 🍜", place: "Team activity" },
        { time: "1:00–2:00 PM", act: "Lunch", place: "Saigon Cooking Class",
          mapQ: "Saigon Cooking Class 80/1 Nguyen Trai Ben Thanh Ho Chi Minh" },
        { time: "2:00–6:30 PM", act: "Free & easy", place: "Afternoon at leisure" },
        { time: "7:00 PM", act: "Dinner", pill: "Pre-order 2 days ahead", place: "Pizza 4P's — Bến Thành",
          mapQ: "Pizza 4P's Ben Thanh 8 Thu Khoa Huan Ho Chi Minh" }
      ]
    },
    {
      day: "15", dow: "SAT", cls: "d3",
      title: "Farewell", date: "15 August 2026 · Saturday",
      items: [
        { time: "1:00–2:00 PM", act: "Lunch", place: "Venue TBC" },
        { time: "2:00–3:00 PM", act: "BINGO 🎉", place: "Team game" },
        { time: "4:00 PM", act: "Say goodbye 👋", place: "Departures" }
      ]
    }
  ],

  venues: [
    { tag: "🏨 Hotel", name: "Fusion Suites Saigon",
      addr: "3-5 Sương Nguyệt Anh Street, Bến Thành, Hồ Chí Minh 71000, Vietnam",
      mapQ: "Fusion Suites Saigon 3-5 Suong Nguyet Anh Ben Thanh Ho Chi Minh" },
    { tag: "🍽️ Dinner · Day 1", name: "Quán Bụi — Lê Thánh Tôn",
      addr: "222–224 Lê Thánh Tôn, Bến Thành, Hồ Chí Minh 70000, Vietnam",
      mapQ: "Quan Bui 222 Le Thanh Ton Ben Thanh Ho Chi Minh" },
    { tag: "🍜 Cooking & Lunch · Day 2", name: "Saigon Cooking Class",
      addr: "80/1 Nguyễn Trãi, Bến Thành, Hồ Chí Minh 770000, Vietnam",
      mapQ: "Saigon Cooking Class 80/1 Nguyen Trai Ben Thanh Ho Chi Minh" },
    { tag: "🍕 Dinner · Day 2", name: "Pizza 4P's — Bến Thành",
      addr: "8 Thủ Khoa Huân, Bến Thành, Hồ Chí Minh 700000, Vietnam",
      mapQ: "Pizza 4P's Ben Thanh 8 Thu Khoa Huan Ho Chi Minh" }
  ],

  // room: "single" | "double" | "tbc"
  roster: [
    { n: 1,  name: "Daniel Chua",      room: "single", diet: "",             notes: "" },
    { n: 2,  name: "Shawn Shen",       room: "single", diet: "",             notes: "Extending to Sun" },
    { n: 3,  name: "Kah Wei",          room: "single", diet: "",             notes: "" },
    { n: 4,  name: "Edmond Mamatlalo", room: "single", diet: "",             notes: "Extending to Sun" },
    { n: 5,  name: "Wei Xuan",         room: "tbc",    diet: "",             notes: "Room pending confirm" },
    { n: 6,  name: "Joshua Chee",      room: "single", diet: "",             notes: "Not extending" },
    { n: 7,  name: "Lyn Su",           room: "double", diet: "",             notes: "Sharing w/ Pamela · Extending to Sun" },
    { n: 8,  name: "Pamela Ho",        room: "double", diet: "",             notes: "Sharing w/ Lyn" },
    { n: 9,  name: "Grace Teh",        room: "single", diet: "No beef",      notes: "Extending to Sun" },
    { n: 10, name: "Candlene Lee",     room: "double", diet: "No chocolate", notes: "Extending to Sun" },
    { n: 11, name: "Austin Ching",     room: "double", diet: "No peanut",    notes: "Sharing w/ Chris" },
    { n: 12, name: "Chris Chong",      room: "double", diet: "",             notes: "Sharing w/ Austin" },
    { n: 13, name: "Barry Leonardi",   room: "single", diet: "",             notes: "" },
    { n: 14, name: "Justin Yeo",       room: "double", diet: "",             notes: "Sharing w/ Dat" },
    { n: 15, name: "Dat",              room: "double", diet: "",             notes: "Sharing w/ Justin" }
  ],
  roomsNote: "🛏️ Rooms held: 15 Aug — 3 single + 2 double · 16 Aug — 3 single + 1 double · 18 Aug — 1 single · Total ~10 rooms (pending Wei Xuan to confirm)",

  flights: [
    { name: "Shawn Shen",       arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "16 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Kah Wei",          arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "15 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Edmond Mamatlalo", arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "16 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Joshua Chee",      arrive: "13 Aug · 14:25", flightIn: "VN 650", depart: "15 Aug · 17:00", flightOut: "VN 657" },
    { name: "Lyn Su",           arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "16 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Pamela Ho",        arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "16 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Grace Teh",        arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "18 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Candlene Lee",     arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "16 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Austin Ching",     arrive: "13 Aug · 14:20", flightIn: "VJ826",  depart: "17 Aug · 15:40", flightOut: "AK529" },
    { name: "Chris Chong",      arrive: "13 Aug · 14:20", flightIn: "VJ826",  depart: "15 Aug · 22:30", flightOut: "MH767" }
  ],
  flightsNote: "Daniel Chua, Wei Xuan, Barry Leonardi, Justin Yeo & Dat — flights TBC",

  disclaimer: "This page contains internal attendee and travel details — keep it within the team. Dietary needs, exact flights and rooming are still being finalised, so treat anything marked “TBC / pending” as provisional.",
  syncedFrom: "Compiled from the team planning sheet on alidocs · last synced 11 Jul 2026"
};
