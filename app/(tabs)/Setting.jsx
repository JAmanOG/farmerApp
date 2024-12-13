import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity, Button } from 'react-native';
import { Ionicons,AntDesign } from '@expo/vector-icons'; // For icons

export default function Setting() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isFarmer, setIsFarmer] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleRole = () => {
    setIsDisabled(true); // Disable the button
    setTimeout(() => {
      setIsFarmer(!isFarmer);
      setIsDisabled(false); // Re-enable the button after 4 seconds
    }, 1000);
  };
  return (
    <View style={styles.container}>
      {isFarmer ? (
        
<>
   {/* Header */}
   <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <TouchableOpacity
      onPress={toggleRole}
      disabled={isDisabled} 
    >
        <Text>Switch to Customer{" "}
        <AntDesign name="swap" size={24} color="black" /></Text>
        </TouchableOpacity>
      </View>

      {/* Profile Picture and Info */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Farmer Name</Text>
        <Text style={styles.username}>Farmer Username</Text>
      </View>

      {/* Steps Today */}
      {/* <View style={styles.stepsContainer}>
        <Text style={styles.stepsNumber}>6 859</Text>
        <Text style={styles.stepsText}>Steps today</Text>
      </View> */}

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}
          onPress={() => console.log(item.label)}
          >
            <View style={styles.menuTextContainer}>
              <Ionicons name={item.icon} size={20} color="black" style={styles.menuIcon} />
              <Text style={styles.menuText}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Sound Toggle */}
      <View style={styles.soundContainer}>
        <Text style={styles.soundText}>Sound</Text>
        <Switch
          value={soundEnabled}
          onValueChange={setSoundEnabled}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={soundEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
</>

        
      ): (
        <>
           {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <TouchableOpacity
      onPress={toggleRole}
      disabled={isDisabled}
    >
        <Text>Switch to Farmer{" "}
        <AntDesign name="swap" size={24} color="black" /></Text>
        </TouchableOpacity>
      </View>

      {/* Profile Picture and Info */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Customer Name</Text>
        <Text style={styles.username}>Customer Username</Text>
      </View>

      {/* Steps Today */}
      {/* <View style={styles.stepsContainer}>
        <Text style={styles.stepsNumber}>6 859</Text>
        <Text style={styles.stepsText}>Steps today</Text>
      </View> */}

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {CustomerItem.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}
          onPress={() => console.log(item.label)}
          >
            <View style={styles.menuTextContainer}>
              <Ionicons name={item.icon} size={20} color="black" style={styles.menuIcon} />
              <Text style={styles.menuText}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Sound Toggle */}
      <View style={styles.soundContainer}>
        <Text style={styles.soundText}>Sound</Text>
        <Switch
          value={soundEnabled}
          onValueChange={setSoundEnabled}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={soundEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
        </>
      )
      }
   
    </View>
  );
}

const menuItems = [
  { label: 'Profile Picture & Name', icon: 'people-outline' },
  { label: 'Personal Info', icon: 'person-outline' },
  { label: 'Business Info/inquiries ', icon: 'stats-chart-outline' },
  { label: 'Product Management', icon: 'cart-outline' },
  { label: 'Logout button', icon: 'exit-outline' },
];

const CustomerItem = [
  { label: 'Profile Picture & Name', icon: 'people-outline' },
  { label: 'Contact Info', icon: 'call-outline' },
  { label: 'Wishlist ', icon: 'heart-outline' },
  { label: 'inquiries made', icon: 'person-outline' },
  { label: 'Logout button', icon: 'exit-outline' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: 'gray',
  },
  stepsContainer: {
    backgroundColor: '#dfefff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  stepsNumber: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  stepsText: {
    fontSize: 14,
    color: 'gray',
  },
  menuContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  menuTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
  },
  soundContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  soundText: {
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
