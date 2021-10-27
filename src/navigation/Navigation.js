import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from '../screens/ForgotPasswordScreen';
import Token from '../screens/Token'
import ChangePassword from '../screens/ChangePassword';
import Profile from '../components/Profile';
import { Header } from 'react-native/Libraries/NewAppScreen';
import PrivacyPolicy from '../screens/PrivacyPolicyScreen';

const Stack  = createNativeStackNavigator();

const Navigation = () => {
  
    return (

     <NavigationContainer> 
            <Stack.Navigator screenOptions = {{headerShown:false}}>
                <Stack.Screen name = 'SignIn' component = {SignInScreen} />
                <Stack.Screen name = 'SignUp'  component = {SignUpScreen} />
                <Stack.Screen name = 'ForgotPassword' component = {ForgotPassword} />
                <Stack.Screen name = 'PrivacyPolicy' component = {PrivacyPolicy} />
                <Stack.Screen name = 'ChangePassword' component = {ChangePassword} />
                <Stack.Screen name = 'Token' component = {Token} />
                <Stack.Screen name = 'Profile' component={Profile} />

             </Stack.Navigator>
        </NavigationContainer>
    )


}

export default Navigation;