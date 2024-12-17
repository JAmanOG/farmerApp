// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import AntDesign from '@expo/vector-icons/AntDesign';
// const icons  = {
// <MaterialIcons name="travel-explore" size={24} color="black" />
// <AntDesign name="setting" size={24} color="black" /> 
// }
// export default icons


const categoriess = [
    {
      name: "Crops",
      subcategories: [
        {
          name: "Grains",
          products: [
            { name: "Wheat", price: 25 },
            { name: "Rice", price: 30 },
            { name: "Barley", price: 20 },
            { name: "Maize", price: 22 },
            { name: "Millets (Bajra)", price: 18 },
            { name: "Millets (Jowar)", price: 19 }
          ]
        },
        {
          name: "Pulses",
          products: [
            { name: "Lentils", price: 100 },
            { name: "Chickpeas", price: 80 },
            { name: "Pigeon Peas (Toor Dal)", price: 120 },
            { name: "Mung Beans", price: 90 }
          ]
        },
        {
          name: "Oilseeds",
          products: [
            { name: "Mustard", price: 60 },
            { name: "Groundnut", price: 70 },
            { name: "Sunflower", price: 85 },
            { name: "Soybean", price: 55 },
            { name: "Sesame", price: 95 }
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
            { name: "Potatoes", price: 20 },
            { name: "Tomatoes", price: 25 },
            { name: "Onions", price: 30 },
            { name: "Cauliflower", price: 35 },
            { name: "Cabbage", price: 28 }
          ]
        },
        {
          name: "Leafy Greens",
          products: [
            { name: "Spinach", price: 15 },
            { name: "Fenugreek (Methi)", price: 20 },
            { name: "Coriander (Dhania)", price: 10 }
          ]
        },
        {
          name: "Seasonal Vegetables",
          products: [
            { name: "Bitter Gourd", price: 40 },
            { name: "Okra", price: 30 },
            { name: "Pumpkin", price: 25 }
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
            { name: "Mango", price: 120 },
            { name: "Banana", price: 40 },
            { name: "Papaya", price: 60 },
            { name: "Guava", price: 50 }
          ]
        },
        {
          name: "Citrus Fruits",
          products: [
            { name: "Orange", price: 80 },
            { name: "Lemon", price: 60 },
            { name: "Sweet Lime", price: 70 }
          ]
        },
        {
          name: "Others",
          products: [
            { name: "Apple", price: 150 },
            { name: "Grapes", price: 100 },
            { name: "Watermelon", price: 50 },
            { name: "Pomegranate", price: 120 }
          ]
        }
      ]
    },
    {
      name: "Dairy Products",
      products: [
        { name: "Milk", price: 50 },
        { name: "Curd", price: 40 },
        { name: "Ghee (Clarified Butter)", price: 500 },
        { name: "Butter", price: 200 }
      ]
    },
    {
      name: "Spices",
      products: [
        { name: "Turmeric", price: 200 },
        { name: "Ginger", price: 150 },
        { name: "Garlic", price: 120 },
        { name: "Chilies", price: 250 },
        { name: "Black Pepper", price: 800 },
        { name: "Cumin", price: 300 },
        { name: "Coriander", price: 250 }
      ]
    },
    {
      name: "Herbs and Medicinal Plants",
      products: [
        { name: "Aloe Vera", price: 100 },
        { name: "Tulsi (Holy Basil)", price: 50 },
        { name: "Ashwagandha", price: 200 },
        { name: "Neem", price: 75 }
      ]
    },
    {
      name: "Flowers",
      products: [
        { name: "Marigold", price: 80 },
        { name: "Rose", price: 120 },
        { name: "Jasmine", price: 150 },
        { name: "Hibiscus", price: 100 }
      ]
    },
    {
      name: "Seeds and Saplings",
      subcategories: [
        {
          name: "Seeds",
          products: [
            { name: "Crop Seeds", price: 500 },
            { name: "Vegetable Seeds", price: 300 }
          ]
        },
        {
          name: "Saplings",
          products: [
            { name: "Fruit Plants", price: 700 },
            { name: "Flower Plants", price: 400 }
          ]
        }
      ]
    },
    {
      name: "Organic Products",
      products: [
        { name: "Organic Vegetables", price: 60 },
        { name: "Organic Fruits", price: 100 },
        { name: "Organic Manure (Compost)", price: 300 },
        { name: "Vermicompost", price: 400 }
      ]
    },
    {
      name: "Processed Foods",
      products: [
        { name: "Pickles", price: 150 },
        { name: "Jaggery", price: 120 },
        { name: "Flour", price: 40 }
      ]
    },
    {
      name: "Fertilizers and Pesticides",
      products: [
        { name: "Biofertilizers", price: 300 },
        { name: "Organic Pesticides", price: 400 }
      ]
    }
  ]