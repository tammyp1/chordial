import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';


// Screens
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import NotificationScreen from './screens/NotificationsScreen';
import MessagingStack from './screens/MessagingStack';
import ChorialSocialScreen from './screens/LivesAndCommunities'
import LiveViewScreen from './screens/LiveViewScreen';

import FeedScreen from './screens/FeedScreen';
import MobileFrame from './components/MobileFrame';

// Placeholder components for other tabs
const MessagingScreen = () => (
  <View style={styles.screen}>
    <Text>Messaging</Text>
  </View>
);

//const LiveScreen = () => (
 // <View style={styles.screen}>
  //  <Text>Live/Communities</Text>
  //</View>
//);

// const FeedScreen = () => (
//   <View style={styles.screen}>
//     <Text>Feed</Text>
//   </View>
// );

// Notifications stack
const NotificationsStack = createStackNavigator();
const NotificationsStackNavigator = () => {
  return (
    <NotificationsStack.Navigator screenOptions={{ headerShown: false }}>
      <NotificationsStack.Screen name="NotificationsMain" component={NotificationScreen} />
    </NotificationsStack.Navigator>
  );
};

// Tab navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Feed') iconName = 'home';
          else if (route.name === 'Live') iconName = 'videocamera';
          else if (route.name === 'Messaging') iconName = 'message1';
          else if (route.name === 'Notifications') iconName = 'bells';
          else if (route.name === 'Profile') iconName = 'user';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0554fe',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: styles.tabBar,
        tabBarLabel: '',
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Live" component={ChorialSocialScreen} />
      <Tab.Screen name="Messaging" component={MessagingStack} />
      <Tab.Screen name="Notifications" component={NotificationsStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Main App
const App = () => {
  return (
    <NavigationContainer>
      <MobileFrame> {/* ✅ Global wrapper for consistent mobile sizing */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="MainApp" component={TabNavigator} />
          <Stack.Screen name="Notifications" component={NotificationScreen} />
          <Stack.Screen name="LiveViewScreen" component={LiveViewScreen} />
        </Stack.Navigator>
      </MobileFrame>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default App;