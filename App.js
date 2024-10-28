import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen';
import ScanScreen from './components/ScanScreen';
import { View, Text } from 'react-native';

// Placeholder components for the other screens
function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notification Screen</Text>
    </View>
  );
}

function HistoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>History Screen</Text>
    </View>
  );
}

function CartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Scan') {
              iconName = focused ? 'barcode' : 'barcode-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            display: 'flex',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
