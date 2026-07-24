/* ============================================================
   WorldFirst SEA Retreat — SINGLE SOURCE OF CONTENT
   ------------------------------------------------------------
   To update the landing page, edit THIS file only.
   The page (index.html) renders itself from the object below.
   Source of truth: the team planning sheet on alidocs (DingTalk).
   Last synced from alidocs: 2026-07-24 (full attendee, room, flight and itinerary refresh)
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
    group: "18 attendees",
    groupSub: "SEA team",
    // Countdown target — arrival, 13 Aug 2026 14:35 ICT (UTC+7 = 07:35 UTC)
    arrivalUTC: [2026, 7, 13, 7, 35, 0]
  },

  itinerary: [
    {
      day: "13", dow: "THU", cls: "d1",
      title: "Arrival & dinner", date: "13 August 2026 · Thursday",
      items: [
        { time: "4:00 PM", act: "Check in to hotel", place: "Fusion Suites Saigon",
          mapQ: "Fusion Suites Saigon 3-5 Suong Nguyet Anh Ben Thanh Ho Chi Minh" },
        { time: "4:00–6:30 PM", act: "Free & easy" },
        { time: "7:00 PM", act: "Dinner", place: "Quán Bụi — Lê Thánh Tôn",
          mapQ: "Quan Bui 222 Le Thanh Ton Ben Thanh Ho Chi Minh" }
      ]
    },
    {
      day: "14", dow: "FRI", cls: "d2",
      title: "Cooking competition & team night", date: "14 August 2026 · Friday",
      items: [
        { time: "10:00 AM–1:00 PM", act: "Cooking competition 🍜", place: "Saigon Cooking Class",
          mapQ: "Saigon Cooking Class 80/1 Nguyen Trai Ben Thanh Ho Chi Minh" },
        { time: "1:00–2:00 PM", act: "Lunch" },
        { time: "2:30–4:00 PM", act: "BINGO 🎉", place: "The Cafe Apartment",
          mapQ: "The Cafe Apartment 42 Nguyen Hue Ho Chi Minh" },
        { time: "4:30–6:30 PM", act: "Free & easy" },
        { time: "7:00 PM", act: "Dinner", pill: "Pre-order 2 days in advance", place: "Pizza 4P's — Bến Thành",
          mapQ: "Pizza 4P's Ben Thanh 8 Thu Khoa Huan Ho Chi Minh" }
      ]
    },
    {
      day: "15", dow: "SAT", cls: "d3",
      title: "Departure day", date: "15 August 2026 · Saturday",
      items: [
        { time: "TBC", act: "Programme TBC", place: "No activities listed in the source sheet" }
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
    { tag: "🍜 Cooking Competition · Day 2", name: "Saigon Cooking Class",
      addr: "80/1 Nguyễn Trãi, Bến Thành, Hồ Chí Minh 770000, Vietnam",
      mapQ: "Saigon Cooking Class 80/1 Nguyen Trai Ben Thanh Ho Chi Minh" },
    { tag: "🎉 BINGO · Day 2", name: "The Cafe Apartment",
      addr: "42 Nguyễn Huệ Street, Sài Gòn, Hồ Chí Minh 700000, Vietnam",
      mapQ: "The Cafe Apartment 42 Nguyen Hue Ho Chi Minh" },
    { tag: "🍕 Dinner · Day 2", name: "Pizza 4P's — Bến Thành",
      addr: "8 Thủ Khoa Huân, Bến Thành, Hồ Chí Minh 700000, Vietnam",
      mapQ: "Pizza 4P's Ben Thanh 8 Thu Khoa Huan Ho Chi Minh" }
  ],

  // room: "single" | "double" | "tbc"
  roster: [
    { n: 1,  name: "Daniel Chua",        room: "single", diet: "",             notes: "" },
    { n: 2,  name: "Shawn Shen",         room: "single", diet: "",             notes: "" },
    { n: 3,  name: "Kah Wei",            room: "single", diet: "",             notes: "" },
    { n: 4,  name: "Edmond Mamatlalo",   room: "single", diet: "",             notes: "Extending to Sun" },
    { n: 5,  name: "Wei Xuan",           room: "single", diet: "",             notes: "" },
    { n: 6,  name: "Joshua Chee",        room: "single", diet: "",             notes: "" },
    { n: 7,  name: "Lyn Su",             room: "double", diet: "",             notes: "Sharing with Pamela · Extending to Sun" },
    { n: 8,  name: "Pamela Ho",          room: "double", diet: "",             notes: "Sharing with Lyn · Extending to Sun" },
    { n: 9,  name: "Grace Teh",          room: "single", diet: "No beef",      notes: "Extending to Tue" },
    { n: 10, name: "Candlene Lee",       room: "single", diet: "No chocolate", notes: "Extending to Sun" },
    { n: 11, name: "Austin Ching",       room: "double", diet: "No peanut",    notes: "Sharing with Chris · Extending to Mon · Room not extended" },
    { n: 12, name: "Chris Chong",        room: "double", diet: "",             notes: "Sharing with Austin" },
    { n: 13, name: "Barry Leonardi",     room: "single", diet: "",             notes: "" },
    { n: 14, name: "Justin Yeo",         room: "single", diet: "",             notes: "" },
    { n: 15, name: "Kornpong Nualsanit", room: "single", diet: "",             notes: "" },
    { n: 16, name: "Nan Li",             room: "single", diet: "",             notes: "Extending to Sun" },
    { n: 17, name: "Dat",                room: "tbc",    diet: "",             notes: "Room details not listed" },
    { n: 18, name: "Wen Zhan",           room: "tbc",    diet: "",             notes: "Room details not listed" }
  ],
  roomsNote: "🛏️ Room summary in source: 15 Aug — 7 single + 1 double · 16 Aug — 3 single + 1 double · 18 Aug — 1 single · Total 13 room-nights",

  flights: [
    { name: "Shawn Shen",       arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "16 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Kah Wei",          arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "15 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Edmond Mamatlalo", arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "16 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Wei Xuan",         arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "16 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Joshua Chee",      arrive: "13 Aug · 14:25", flightIn: "VN 650", depart: "15 Aug · 17:00", flightOut: "VN 657" },
    { name: "Lyn Su",           arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "16 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Pamela Ho",        arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "16 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Grace Teh",        arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "18 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Candlene Lee",     arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "16 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Austin Ching",     arrive: "13 Aug · 14:20", flightIn: "VJ826",  depart: "17 Aug · 15:40", flightOut: "AK529" },
    { name: "Chris Chong",      arrive: "13 Aug · 14:20", flightIn: "VJ826",  depart: "15 Aug · 22:30", flightOut: "MH767" },
    { name: "Barry Leonardi",   arrive: "13 Aug · 14:20", flightIn: "VJ826",  depart: "15 Aug · 16:40", flightOut: "MH759" },
    { name: "Justin Yeo",       arrive: "13 Aug · 14:35", flightIn: "SQ 184", depart: "15 Aug · 19:40", flightOut: "SQ 185" },
    { name: "Kornpong Nualsanit", arrive: "13 Aug · 13:06", flightIn: "VN600", depart: "15 Aug · 18:21", flightOut: "VN609" },
    { name: "Nan Li",           arrive: "13 Aug · 09:15", flightIn: "FD656",  depart: "16 Aug · 15:30", flightOut: "FD655" }
  ],
  flightsNote: "Daniel Chua, Dat and Wen Zhan — flight details not listed in the source sheet",

  disclaimer: "This page contains internal attendee and travel details — keep it within the team. Dietary needs, exact flights and rooming are still being finalised, so treat anything marked “TBC / pending” as provisional.",
  syncedFrom: "Compiled from the team planning sheet on alidocs · last synced 24 Jul 2026"
};
