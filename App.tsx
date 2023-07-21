import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PioneersScreen from './screens/Pioneers';
import ProfileScreen from './screens/Profile';
import MeetupsScreen from './screens/Meetups';
import PostsScreen from './screens/Posts';
import CodexScreen from './screens/Codex';

const Tab = createBottomTabNavigator();
const PioneersStack = createStackNavigator();

function PioneersStackNavigator() {
  return (
    <PioneersStack.Navigator>
      <PioneersStack.Screen
          name="Pioneers"
          component={PioneersScreen}
          options={() => ({
            headerTransparent: true,
            headerTitle: '',
            headerBackTitleVisible: false,
          })}/>
      <PioneersStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={() => ({
            headerTransparent: true,
            headerTitle: '',
            headerBackTitleVisible: false,
          })}/>
    </PioneersStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="PioneersStack"
          component={PioneersStackNavigator}
          options={() => ({
            headerTransparent: true,
            headerTitle: '',
            headerBackTitleVisible: false,
            headerLeftLabelVisible: false,
          })}/>
        <Tab.Screen
          name="Meetups"
          component={MeetupsScreen}
          options={() => ({
            headerTransparent: true,
            headerTitle: '',
            headerBackTitleVisible: false,
          })}/>
        <Tab.Screen
          name="Posts"
          component={PostsScreen}
          options={() => ({
            headerTransparent: true,
            headerTitle: '',
            headerBackTitleVisible: false,
          })}/>
        <Tab.Screen
          name="Codex"
          component={CodexScreen}
          options={() => ({
            headerTransparent: true,
            headerTitle: '',
            headerBackTitleVisible: false,
          })}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
