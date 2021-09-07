import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './SRC/pages/Login';
import SignUp from './SRC/pages/SingnUp';
import EsqueciSenha from './SRC/pages/EsqueciSenha';

import Home from './SRC/pages/Home';
import Activities from './SRC/pages/Activities';
import User from './SRC/pages/User'

import Profile from './SRC/pages/UserPages/Profile';
import Course from './SRC/pages/UserPages/Course';
import Grade from './SRC/pages/UserPages/Grades';
import Help from './SRC/pages/UserPages/Help';

import LevelOne from './SRC/pages/LevelPages/LevelOne';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Activities" component={Activities} options={{ headerShown: false }} />
      <Tab.Screen name="User" component={User} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function UserPages(){
  
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{ headerShown: false }}/>

        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>

        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Grade" component={Grade} />
        <Stack.Screen name="Help" component={Help} options={{ headerShown: false }}/>

        <Stack.Screen name="Stages" component={LevelOne} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
