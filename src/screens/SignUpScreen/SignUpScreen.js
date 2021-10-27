import React from "react";
import {View,Text,Dimensions,StyleSheet, TextInput,TouchableOpacity,Image} from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../../navigation/Navigation";
const logo = require('../../images/logo.png')

const SignUpScreen =() => {
    
    const Navigation = useNavigation();

    const onPrivacyPolicyPressed = () => {

        Navigation.navigate('PrivacyPolicy')
    }

return (
    
          <View style={styles.container}> 

                    <View style={styles.header}>
                        <Image source = {logo}
                            style = {styles.stylelogo}
                            resizeMode = "contain" />
                        
                             <Text style={styles.heading}>Create Account</Text>
                         
                         </View> 

                <View style={styles.body}>
                    <View style = {styles.form}> 
                     <Icons name = "user" size = {24} style={styles.icons}/>
        
                        <TextInput style={styles.textInput} 
                            placeholderTextColor="#CCCCFF" 
                            placeholder = "Name"
                            />
                    </View>

                    <View style = {styles.form}> 
                    
                    <Icons name = "user" size = {24} style={styles.icons}/>
        
                        <TextInput style={styles.textInput} 
                            placeholderTextColor="#CCCCFF"
                            placeholder = "Email Address"
                            />
                    </View>

                    <View style={styles.form}>
                    <Icons name = "lock1" size = {24} style={styles.icons}/> 
                        <TextInput 
                         placeholder ="Password" 
                         placeholderTextColor="#CCCCFF"
                          style={styles.textInput} />
                    </View>

                    <View style={styles.form}>
                    <Icons name = "lock1" size = {24} style={styles.icons}/> 
                        <TextInput 
                         placeholder ="Password" 
                         placeholderTextColor="#CCCCFF"
                         style={styles.textInput} />
                    </View>
                </View>

                           
                        <View style ={styles.buttons}>
                            
                            <TouchableOpacity >
                                        <View style={styles.bottonvw}>
                                        <LinearGradient 
                                        colors = {['#f5f5f5','#133743']} 
                                        style={styles.button}>
                                        <Text> Register </Text>
                                        </LinearGradient></View>
                                        </TouchableOpacity>
                
                    </View>

                <View style ={styles.footer}>
                   
                    <Text style={styles.signintxt}> By Creating Your Account You Confirm To Agree With </Text> 
                    <TouchableOpacity onPress={onPrivacyPolicyPressed}>
                        <Text style={styles.signintxtlink}>The Privacy Policy </Text>
                    </TouchableOpacity>
                   

                 </View>
            </View>


)




}

export default SignUpScreen;


const {height} = Dimensions.get("screen");

const height_logo = height * 0.25;

const height_button = height * 0.06;

const {width} = Dimensions.get("screen");

const width_logo = width * 0.5;

const styles = StyleSheet.create ({

    container:{
        flex:1,
        backgroundColor:'#133743',
    },
      header:{

       flex:1,
       marginTop:10,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#133743',
       flexDirection:'row',
    
      },
      heading:{
           color:'#F5F5F5',
           fontWeight:'bold',
           fontSize:25,
      },
      stylelogo:{
        width:width_logo,
        height:height_logo,
        marginLeft:-120,
      
        
  },

      body:{
       
        flex:3,
        marginTop:20,
       // backgroundColor:'blue',

    },
    form:{

         flexDirection:'row',
         borderRadius:10,
         borderWidth:2,
         borderColor:'#ddd',
         marginBottom: 10,
         marginTop: 10,
         marginStart:10,
         marginEnd:5,
        alignContent:'center'
    },
    textInput:{
        color:'#F5F5F5',
      },
    icons:{
        marginTop:10,
        marginEnd:5,
        marginStart:2,
        color:'#DDD',
      },
      buttons:{
        flex:1,  
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

    footer:{
        flex:1,
        //backgroundColor:'gray',

    },
    signintxt:{
        color: "#B0C4DE",
        fontWeight:"bold",
        fontSize:16,
        marginLeft:2,      
        marginTop:10,
        alignItems: "center",
      },

      signintxtlink:{
        color: "#E6E6FA",
        fontWeight:"bold",
        fontSize:16,
        marginLeft:2,      
        marginTop:5,
        alignItems: "center",
      }
    

})