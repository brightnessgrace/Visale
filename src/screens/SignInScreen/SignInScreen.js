
import React from 'react';
import {View,Text,StyleSheet,Image, SafeAreaView,ScrollView, 
  Dimensions,TextInput, TouchableOpacity} from 'react-native' ;
import Icons from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const logo = require('../../images/logo.png')

console.log ('nimefika');

const SignInScreen = () => {

  const navigation = useNavigation();

  const onSignUpPressed = () => {
     
    navigation.navigate('SignUp')
  }
  const onSignInPressed = () => {

    navigation.navigate('Profile')
    
  }
  const onForgotPasswordPressed = () => {
    
    navigation.navigate('ForgotPassword')
  }

    return (
      <ScrollView showsVerticalScrollIndicator = {false} style={{backgroundColor:'#133743'}}>
        <SafeAreaView style = {styles.container}>

        <View style = {styles.logo}>

        <Image source = {logo}
               style = {styles.stylelogo}
               resizeMode = "contain" />

        <Text style={styles.heading}>Login</Text>
                         
        </View>

        <View style = {styles.login}>
            <View style = {styles.form}> 
                
            <Icons name = "user" size = {24} style={styles.icons}/>

                <TextInput style={styles.textInput} 
                    placeholder = "Username"
                    placeholderTextColor="#CCCCFF"/>
               </View>

            <View style = {styles.form}>  
             <Icons name = "lock1" size = {24} style={styles.icons}/> 
                <TextInput style={styles.textInput} 
                    placeholder = "Password"
                    placeholderTextColor="#CCCCFF"
                    />
                </View>

               
                <View>
                    <TouchableOpacity onPress = {onSignInPressed}>
                        <View style={styles.bottonvw}>
                        <LinearGradient 
                          colors = {['#f5f5f5','#133743']} 
                          style={styles.button}>
                        <Text> Login </Text>
                        </LinearGradient>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress = {onForgotPasswordPressed}>
                         < View style={styles.bottonvw}>
                            <Text style={styles.textstyle}>Forgot Password ? </Text>
                             </View>
                        </TouchableOpacity>
                </View>

            
        </View>

        <View style = {styles.social}>
        <TouchableOpacity >
             <View style = {styles.socialstyle}>
             <LinearGradient 
                          colors = {['#f5f5f5','#FFC0CB']} 
                          style={styles.socialbutn}> 
                 <Icons name = "google" size = {30} color = "red"/>
                 <Text style={styles.socialwords}>Sign In With Google Account !</Text>
                 </LinearGradient>
             </View>
              </TouchableOpacity>
           
              <TouchableOpacity>
             <View style = {styles.socialstyle}>
             <LinearGradient 
                          colors = {['#f5f5f5','#87CEEB']} 
                          style={styles.socialbutn}>
                 <Icons name = "facebook-square" size = {30} color ="blue"/>
                 <Text style={styles.socialwords}>Sign In With Facebook Account !</Text>
               </LinearGradient>
               </View>
             </TouchableOpacity>
        </View>
         
        <View style = {styles.signin}>
        <TouchableOpacity onPress ={onSignUpPressed}>
             <Text style={styles.signintxt}> Don't Have An Account  ?  Please SignUp ! </Text>
             </TouchableOpacity>
             </View>

    </SafeAreaView>
 </ScrollView>
  

  
    )
 



}

export default SignInScreen;

const {height} = Dimensions.get("screen");

const height_logo = height * 0.25;

const height_button = height * 0.06;

const {width} = Dimensions.get("screen");

const width_logo = width * 0.5;

const styles = StyleSheet.create ({

   container:{
       flex: 1,
       backgroundColor:'#133743',
   },

   logo:{
       flex:2,
       marginTop:-30,
       backgroundColor:'#133743',
       justifyContent:'center',
       alignItems: 'center',
      
   },

   stylelogo:{
         width:width_logo,
         height:height_logo,
         marginLeft: 10,
          
   },

   heading:{
    
    color:'#F5F5F5',
    fontSize:28,
    fontWeight:'bold',
    marginBottom:5,
     
  },
   login:{
       flex:3,
       backgroundColor:'#133743',
       marginTop:20,
   },

   form :{
       flexDirection:'row',
         borderRadius:10,
         borderWidth:2,
         borderColor:'#ddd',
         marginBottom: 10,
         marginTop: 10,
         marginStart:10,
         marginEnd:5,
        alignContent:'center'
        
   },textInput:{
     color:'#F5F5F5',
   },
   
   bottonvw:{
          marginTop:15,
          marginLeft:10,
          backgroundColor:'#133743',
   },
   button:{
      
       width: 400,
       height: height_button,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 20,
       flexDirection: 'row'
   },
   textstyle:{
     color: "#F5F5F5",
     fontWeight:"bold",
     fontSize:16,
     marginLeft:140,
     marginTop:5,
     alignItems: "center",
   },
   icons:{
    marginTop:10,
    marginEnd:5,
    marginStart:2,
    color:'#DDD',
  },

   social:{
    flex:2,
    backgroundColor:'#133743',
    marginTop:10
},
 socialstyle:{
        marginLeft: 10,
        marginTop:15,
        marginBottom:10,
        flexDirection:"row",
 },
 socialwords:{
    marginLeft: 15,
    marginTop: 5,
 },

 socialbutn:{
    width: 400,
    height: height_button,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row'
 },
  signin:{
    flex:1,
    backgroundColor:'#133743', 
  } ,
  
  signintxt:{
    color: "#F5F5F5",
    fontWeight:"bold",
    fontSize:16,
    marginLeft:60,
    marginVertical:10,
    alignItems: "center",
  }

});