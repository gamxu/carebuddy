const provinces = [
  {
    code: "TH-10",
    thaiName: "กรุงเทพมหานคร",
    englishName: "Bangkok",
  },
  {
    code: "TH-11",
    thaiName: "สมุทรปราการ",
    englishName: "Samut Prakan",
  },
  {
    code: "TH-12",
    thaiName: "นนทบุรี",
    englishName: "Nonthaburi",
  },
  {
    code: "TH-13",
    thaiName: "ปทุมธานี",
    englishName: "Pathum Thani",
  },
  {
    code: "TH-14",
    thaiName: "พระนครศรีอยุธยา",
    englishName: "Phra Nakhon Si Ayutthaya",
  },
  {
    code: "TH-15",
    thaiName: "อ่างทอง",
    englishName: "Ang Thong",
  },
  {
    code: "TH-16",
    thaiName: "ลพบุรี",
    englishName: "Lop Buri",
  },
  {
    code: "TH-17",
    thaiName: "สิงห์บุรี",
    englishName: "Sing Buri",
  },
  {
    code: "TH-18",
    thaiName: "ชัยนาท",
    englishName: "Chai Nat",
  },
  {
    code: "TH-19",
    thaiName: "สระบุรี",
    englishName: "Saraburi",
  },
  {
    code: "TH-20",
    thaiName: "ชลบุรี",
    englishName: "Chon Buri",
  },
  {
    code: "TH-21",
    thaiName: "ระยอง",
    englishName: "Rayong",
  },
  {
    code: "TH-22",
    thaiName: "จันทบุรี",
    englishName: "Chanthaburi",
  },
  {
    code: "TH-23",
    thaiName: "ตราด",
    englishName: "Trat",
  },
  {
    code: "TH-24",
    thaiName: "ฉะเชิงเทรา",
    englishName: "Chachoengsao",
  },
  {
    code: "TH-25",
    thaiName: "ปราจีนบุรี",
    englishName: "Prachin Buri",
  },
  {
    code: "TH-26",
    thaiName: "นครนายก",
    englishName: "Nakhon Nayok",
  },
  {
    code: "TH-27",
    thaiName: "สระแก้ว",
    englishName: "Sa Kaeo",
  },
  {
    code: "TH-30",
    thaiName: "นครราชสีมา",
    englishName: "Nakhon Ratchasima",
  },
  {
    code: "TH-31",
    thaiName: "บุรีรัมย์",
    englishName: "Buri Ram",
  },
  {
    code: "TH-32",
    thaiName: "สุรินทร์",
    englishName: "Surin",
  },
  {
    code: "TH-33",
    thaiName: "ศรีสะเกษ",
    englishName: "Si Sa Ket",
  },
  {
    code: "TH-34",
    thaiName: "อุบลราชธานี",
    englishName: "Ubon Ratchathani",
  },
  {
    code: "TH-35",
    thaiName: "ยโสธร",
    englishName: "Yasothon",
  },
  {
    code: "TH-36",
    thaiName: "ชัยภูมิ",
    englishName: "Chaiyaphum",
  },
  {
    code: "TH-37",
    thaiName: "อำนาจเจริญ",
    englishName: "Amnat Charoen",
  },
  {
    code: "TH-39",
    thaiName: "หนองบัวลำภู",
    englishName: "Nong Bua Lam Phu",
  },
  {
    code: "TH-40",
    thaiName: "ขอนแก่น",
    englishName: "Khon Kaen",
  },
  {
    code: "TH-41",
    thaiName: "อุดรธานี",
    englishName: "Udon Thani",
  },
  {
    code: "TH-42",
    thaiName: "เลย",
    englishName: "Loei",
  },
  {
    code: "TH-43",
    thaiName: "หนองคาย",
    englishName: "Nong Khai",
  },
  {
    code: "TH-44",
    thaiName: "มหาสารคาม",
    englishName: "Maha Sarakham",
  },
  {
    code: "TH-45",
    thaiName: "ร้อยเอ็ด",
    englishName: "Roi Et",
  },
  {
    code: "TH-46",
    thaiName: "กาฬสินธุ์",
    englishName: "Kalasin",
  },
  {
    code: "TH-47",
    thaiName: "สกลนคร",
    englishName: "Sakon Nakhon",
  },
  {
    code: "TH-48",
    thaiName: "นครพนม",
    englishName: "Nakhon Phanom",
  },
  {
    code: "TH-49",
    thaiName: "มุกดาหาร",
    englishName: "Mukdahan",
  },
  {
    code: "TH-50",
    thaiName: "เชียงใหม่",
    englishName: "Chiang Mai",
  },
  {
    code: "TH-51",
    thaiName: "ลำพูน",
    englishName: "Lamphun",
  },
  {
    code: "TH-52",
    thaiName: "ลำปาง",
    englishName: "Lampang",
  },
  {
    code: "TH-53",
    thaiName: "อุตรดิตถ์",
    englishName: "Uttaradit",
  },
  {
    code: "TH-54",
    thaiName: "แพร่",
    englishName: "Phrae",
  },
  {
    code: "TH-55",
    thaiName: "น่าน",
    englishName: "Nan",
  },
  {
    code: "TH-56",
    thaiName: "พะเยา",
    englishName: "Phayao",
  },
  {
    code: "TH-57",
    thaiName: "เชียงราย",
    englishName: "Chiang Rai",
  },
  {
    code: "TH-58",
    thaiName: "แม่ฮ่องสอน",
    englishName: "Mae Hong Son",
  },
  {
    code: "TH-60",
    thaiName: "นครสวรรค์",
    englishName: "Nakhon Sawan",
  },
  {
    code: "TH-61",
    thaiName: "อุทัยธานี",
    englishName: "Uthai Thani",
  },
  {
    code: "TH-62",
    thaiName: "กำแพงเพชร",
    englishName: "Kamphaeng Phet",
  },
  {
    code: "TH-63",
    thaiName: "ตาก",
    englishName: "Tak",
  },
  {
    code: "TH-64",
    thaiName: "สุโขทัย",
    englishName: "Sukhothai",
  },
  {
    code: "TH-65",
    thaiName: "พิษณุโลก",
    englishName: "Phitsanulok",
  },
  {
    code: "TH-66",
    thaiName: "พิจิตร",
    englishName: "Phichit",
  },
  {
    code: "TH-67",
    thaiName: "เพชรบูรณ์",
    englishName: "Phetchabun",
  },
  {
    code: "TH-70",
    thaiName: "ราชบุรี",
    englishName: "Ratchaburi",
  },
  {
    code: "TH-71",
    thaiName: "กาญจนบุรี",
    englishName: "Kanchanaburi",
  },
  {
    code: "TH-72",
    thaiName: "สุพรรณบุรี",
    englishName: "Suphan Buri",
  },
  {
    code: "TH-73",
    thaiName: "นครปฐม",
    englishName: "Nakhon Pathom",
  },
  {
    code: "TH-74",
    thaiName: "สมุทรสาคร",
    englishName: "Samut Sakhon",
  },
  {
    code: "TH-75",
    thaiName: "สมุทรสงคราม",
    englishName: "Samut Songkhram",
  },
  {
    code: "TH-76",
    thaiName: "เพชรบุรี",
    englishName: "Phetchaburi",
  },
  {
    code: "TH-77",
    thaiName: "ประจวบคีรีขันธ์",
    englishName: "Prachuap Khiri Khan",
  },
  {
    code: "TH-80",
    thaiName: "นครศรีธรรมราช",
    englishName: "Nakhon Si Thammarat",
  },
  {
    code: "TH-81",
    thaiName: "กระบี่",
    englishName: "Krabi",
  },
  {
    code: "TH-82",
    thaiName: "พังงา",
    englishName: "Phang Nga",
  },
  {
    code: "TH-83",
    thaiName: "ภูเก็ต",
    englishName: "Phuket",
  },
  {
    code: "TH-84",
    thaiName: "สุราษฎร์ธานี",
    englishName: "Surat Thani",
  },
  {
    code: "TH-85",
    thaiName: "ระนอง",
    englishName: "Ranong",
  },
  {
    code: "TH-86",
    thaiName: "ชุมพร",
    englishName: "Chumphon",
  },
  {
    code: "TH-90",
    thaiName: "สงขลา",
    englishName: "Songkhla",
  },
  {
    code: "TH-91",
    thaiName: "สตูล",
    englishName: "Satun",
  },
  {
    code: "TH-92",
    thaiName: "ตรัง",
    englishName: "Trang",
  },
  {
    code: "TH-93",
    thaiName: "พัทลุง",
    englishName: "Phatthalung",
  },
  {
    code: "TH-94",
    thaiName: "ปัตตานี",
    englishName: "Pattani",
  },
  {
    code: "TH-95",
    thaiName: "ยะลา",
    englishName: "Yala",
  },
  {
    code: "TH-96",
    thaiName: "นราธิวาส",
    englishName: "Narathiwat",
  },
  {
    code: "TH-97",
    thaiName: "บึงกาฬ",
    englishName: "Bueng Kan",
  },
];

export default provinces;
