export const categories = [
  {
    name: "Crops",
    subcategories: [
      {
        name: "Grains",
        products: [
          { name: "Wheat" },
          { name: "Rice" },
          { name: "Barley" },
          { name: "Maize" },
          { name: "Millets (Bajra)" },
          { name: "Millets (Jowar)" }
        ]
      },
      {
        name: "Pulses",
        products: [
          { name: "Lentils" },
          { name: "Chickpeas" },
          { name: "Pigeon Peas (Toor Dal)" },
          { name: "Mung Beans" }
        ]
      },
      {
        name: "Oilseeds",
        products: [
          { name: "Mustard" },
          { name: "Groundnut" },
          { name: "Sunflower" },
          { name: "Soybean" },
          { name: "Sesame" }
        ]
      }
    ]
  },
  {
    name: "Vegetables",
    subcategories: [
      {
        name: "Common Vegetables",
        products: [
          { name: "Potatoes" },
          { name: "Tomatoes" },
          { name: "Onions" },
          { name: "Cauliflower" },
          { name: "Cabbage" }
        ]
      },
      {
        name: "Leafy Greens",
        products: [
          { name: "Spinach" },
          { name: "Fenugreek (Methi)" },
          { name: "Coriander (Dhania)" }
        ]
      },
      {
        name: "Seasonal Vegetables",
        products: [
          { name: "Bitter Gourd" },
          { name: "Okra" },
          { name: "Pumpkin" }
        ]
      }
    ]
  },
  {
    name: "Fruits",
    subcategories: [
      {
        name: "Tropical Fruits",
        products: [
          { name: "Mango" },
          { name: "Banana" },
          { name: "Papaya" },
          { name: "Guava" }
        ]
      },
      {
        name: "Citrus Fruits",
        products: [
          { name: "Orange" },
          { name: "Lemon" },
          { name: "Sweet Lime" }
        ]
      },
      {
        name: "Others",
        products: [
          { name: "Apple" },
          { name: "Grapes" },
          { name: "Watermelon" },
          { name: "Pomegranate" }
        ]
      }
    ]
  },
  {
    name: "Dairy Products",
    products: [
      { name: "Milk" },
      { name: "Curd" },
      { name: "Ghee (Clarified Butter)" },
      { name: "Butter" }
    ]
  },
  {
    name: "Spices",
    products: [
      { name: "Turmeric" },
      { name: "Ginger" },
      { name: "Garlic" },
      { name: "Chilies" },
      { name: "Black Pepper" },
      { name: "Cumin" },
      { name: "Coriander" }
    ]
  },
  {
    name: "Herbs and Medicinal Plants",
    products: [
      { name: "Aloe Vera" },
      { name: "Tulsi (Holy Basil)" },
      { name: "Ashwagandha" },
      { name: "Neem" }
    ]
  },
  {
    name: "Flowers",
    products: [
      { name: "Marigold" },
      { name: "Rose" },
      { name: "Jasmine" },
      { name: "Hibiscus" }
    ]
  },
  {
    name: "Seeds and Saplings",
    subcategories: [
      {
        name: "Seeds",
        products: [
          { name: "Crop Seeds" },
          { name: "Vegetable Seeds" }
        ]
      },
      {
        name: "Saplings",
        products: [
          { name: "Fruit Plants" },
          { name: "Flower Plants" }
        ]
      }
    ]
  },
  {
    name: "Organic Products",
    products: [
      { name: "Organic Vegetables" },
      { name: "Organic Fruits" },
      { name: "Organic Manure (Compost)" },
      { name: "Vermicompost" }
    ]
  },
  {
    name: "Processed Foods",
    products: [
      { name: "Pickles" },
      { name: "Jaggery" },
      { name: "Flour" }
    ]
  },
  {
    name: "Fertilizers and Pesticides",
    products: [
      { name: "Biofertilizers" },
      { name: "Organic Pesticides" }
    ]
  }
];

export const subjects = [
  { name: 'Crops', colors: ['#FF5F6D', '#FFC371'], image: { uri: "https://via.placeholder.com/100" } },
  { name: 'Vegetables', colors: ['#11998e', '#38ef7d'], image: { uri: "https://via.placeholder.com/100" } },
  { name: 'Fruits', colors: ['#f12711', '#f5af19'], image: { uri: "https://via.placeholder.com/100" } },
  { name: 'Dairy Products', colors: ['#36D1DC', '#5B86E5'], image: { uri: "https://via.placeholder.com/100" } },
  { name: 'Spices', colors: ['#FF416C', '#FF4B2B'], image: { uri: "https://via.placeholder.com/100" } },
  { name: 'Flowers', colors: ['#833ab4', '#fd1d1d', '#fcb045'], image: { uri: "https://via.placeholder.com/100" } },
  { name: 'Herbs and Medicinal Plants', colors: ['#56ab2f', '#a8e063'], image: { uri: "https://via.placeholder.com/100" } },
  { name: 'Seeds and Saplings', colors: ['#3a7bd5', '#3a6073'], image: { uri: "https://via.placeholder.com/100" } },
  { name: 'Processed Foods', colors: ['#12c2e9', '#c471ed', '#f64f59'], image: { uri: "https://via.placeholder.com/100" } },
  { name: 'Fertilizers and Pesticides', colors: ['#0F2027', '#203A43', '#2C5364'], image: { uri: "https://via.placeholder.com/100" } }
];
      const productData = [
        {
          id: 1,
          productName: "Millets (Bajra)",
          description: "High-quality Bajra for a healthy diet",
          price: "5440",
          quantityAvailable: "1000",
          category: "Crops",
          subcategory: "Grains",
          product: "Millets (Bajra)",
          address: "Location1",
          imageId: "image_id_1",
          state: "State1",
          district: "District1",
          availability: true,
          validDate: new Date(),
          dateState: false,
          originalPrice: "5655.00",
          image: "https://link-to-image.com/iphone.png",
        },
        {
          id: 2,
          productName: "Lentils",
          description: "Premium quality lentils for daily use",
          price: "1500",
          quantityAvailable: "500",
          category: "Crops",
          subcategory: "Pulses",
          product: "Lentils",
          address: "Location2",
          imageId: "image_id_2",
          state: "State2",
          district: "District2",
          availability: true,
          validDate: new Date(),
          dateState: false,
          originalPrice: "1800.00",
          image: "https://link-to-image.com/iphone.png",
        },
        {
          id: 3,
          productName: "Potatoes",
          description: "Fresh potatoes sourced directly from farms",
          price: "300",
          quantityAvailable: "2000",
          category: "Vegetables",
          subcategory: "Common Vegetables",
          product: "Potatoes",
          address: "Location3",
          imageId: "image_id_3",
          state: "State3",
          district: "District3",
          availability: true,
          validDate: new Date(),
          dateState: false,
          originalPrice: "350.00",
          image: "https://link-to-image.com/iphone.png",
        },
        {
          id: 4,
          productName: "Mango",
          description: "Juicy mangoes from tropical regions",
          price: "800",
          quantityAvailable: "1500",
          category: "Fruits",
          subcategory: "Tropical Fruits",
          product: "Mango",
          address: "Location4",
          imageId: "image_id_4",
          state: "State4",
          district: "District4",
          availability: true,
          validDate: new Date(),
          dateState: false,
          originalPrice: "950.00",
          image: "https://link-to-image.com/iphone.png",
        },
        {
          id: 5,
          productName: "Organic Vegetables",
          description: "Fresh organic vegetables directly from farms",
          price: "1200",
          quantityAvailable: "800",
          category: "Organic Products",
          subcategory: null,
          product: "Organic Vegetables",
          address: "Location5",
          imageId: "image_id_5",
          state: "State5",
          district: "District5",
          availability: true,
          validDate: new Date(),
          dateState: false,
          originalPrice: "1500.00",
          image: "https://link-to-image.com/iphone.png",
        }
      ];
      
export const statesInIndia = {
  AndhraPradesh: "Andhra Pradesh",
  ArunachalPradesh: "Arunachal Pradesh",
  Assam: "Assam",
  Bihar: "Bihar",
  Chhattisgarh: "Chhattisgarh",
  Goa: "Goa",
  Gujarat: "Gujarat",
  Haryana: "Haryana",
  HimachalPradesh: "Himachal Pradesh",
  Jharkhand: "Jharkhand",
  Karnataka: "Karnataka",
  Kerala: "Kerala",
  MadhyaPradesh: "Madhya Pradesh",
  Maharashtra: "Maharashtra",
  Manipur: "Manipur",
  Meghalaya: "Meghalaya",
  Mizoram: "Mizoram",
  Nagaland: "Nagaland",
  Odisha: "Odisha",
  Punjab: "Punjab",
  Rajasthan: "Rajasthan",
  Sikkim: "Sikkim",
  TamilNadu: "Tamil Nadu",
  Telangana: "Telangana",
  Tripura: "Tripura",
  UttarPradesh: "Uttar Pradesh",
  Uttarakhand: "Uttarakhand",
  WestBengal: "West Bengal",
  AndamanAndNicobarIslands: "Andaman and Nicobar Islands",
  Chandigarh: "Chandigarh",
  DadraAndNagarHaveliAndDamanAndDiu: "Dadra and Nagar Haveli and Daman and Diu",
  Lakshadweep: "Lakshadweep",
  Delhi: "Delhi",
  Puducherry: "Puducherry"
};

export const indiaStatesAndDistricts = {
  AndhraPradesh: [
    "Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Visakhapatnam", "West Godavari", "YSR Kadapa"
  ],
  ArunachalPradesh: [
    "Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Lower Siang", "Chowkham", "Longding"
  ],
  Assam: [
    "Barpeta", "Bongaigaon", "Cachar", "Darrang", "Dhemaji", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "Tinsukia", "Udalguri", "West Karbi Anglong"
  ],
  Bihar: [
    "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Supaul", "Vaishali", "West Champaran"
  ],
  Chhattisgarh: [
    "Balod", "Baloda Bazar", "Balrampur", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir-Champa", "Jashpur", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"
  ],
  Goa: [
    "North Goa", "South Goa"
  ],
  Gujarat: [
    "Ahmedabad", "Amreli", "Anand", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udepur", "Dahod", "Dang", "Gandhinagar", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"
  ],
  Haryana: [
    "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"
  ],
  HimachalPradesh: [
    "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kullu", "Kinnaur", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"
  ],
  Jharkhand: [
    "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "Garhwa", "Giridih", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Pashchimi Singhbhum", "Purbi Singhbhum", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"
  ],
  Karnataka: [
    "Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgaum", "Bellary", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davangere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shimoga", "Tumakuru", "Udupi", "Uttara Kannada", "Yadgir"
  ],
  Kerala: [
    "Alappuzha", "Ernakulam", "Idukki", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"
  ],
  MadhyaPradesh: [
    "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhindwara", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panchmada", "Panna", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Vidisha"
  ],
  Maharashtra: [
    "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"
  ],
  Manipur: [
    "Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Peren", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"
  ],
  Meghalaya: [
    "East Garo Hills", "East Khasi Hills", "Jaintia Hills", "Ri Bhoi", "West Garo Hills", "West Khasi Hills"
  ],
  Mizoram: [
    "Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"
  ],
  Nagaland: [
    "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"
  ],
  Odisha: [
    "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khurda", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"
  ],
  Punjab: [
    "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr", "Patiala", "Rupnagar", "Sangrur", "Tarn Taran"
  ],
  Rajasthan: [
    "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"
  ],
  Sikkim: [
    "East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"
  ],
  TamilNadu: [
    "Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Tiruvallur", "Tirunelveli", "Tirupur", "Tiruvannamalai", "Vellore", "Villupuram", "Virudhunagar"
  ],
  Telangana: [
    "Adilabad", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar", "Jogulamba", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubnagar", "Mancherial", "Medak", "Medchal", "Mulugu", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Warangal", "Warangal Rural", "Yadadri Bhuvanagiri"
  ],

  Delhi: [
    "New Delhi", "South Delhi", "East Delhi", "West Delhi", "North Delhi", "Central Delhi", "South West Delhi", "South East Delhi", "Noida", "Greater Noida", "Bharatpur"
  ],
  Puducherry: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
  "Andaman and Nicobar Islands": ["North Andamans", "Middle Andamans", "South Andaman", "Nicobar", "Little Andaman", "North and Middle Nicobar", "South Nicobar"],

  Lakshadweep: ["Kavaratti", "Agatti", "Amini", "Andrott", "Bitra", "Chetlat", "Kadmat", "Kalpeni", "Kavaratti", "Kiltan", "Minicoy"],

  Ladakh: ["Leh", "Kargil"]

}
