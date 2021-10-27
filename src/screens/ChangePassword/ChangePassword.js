import React from 'react';
import {View , Text, ScrollView , Dimensions, Image, SafeAreaView, TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';

const logo = require('../../images/logo.png')

const ChangePassword =() => {

  const navigation = useNavigation();

  const onSignIn = () => {
   
    navigation.navigate('SignIn');
  }

    return (
    
        <ScrollView style={{backgroundColor:'#133743'}}>

          <View style={styles.container}>
         
              <View style={styles.header}>
                <Image source = {logo}
                            style = {styles.stylelogo}
                            resizeMode = "contain" />
                        
                             <Text style={styles.heading}>Change Your Password</Text>
                         
                  </View>
               <View styles={styles.body}>
                    <View style={styles.form}>
                            <Icons name = "lock1" size = {24} style={styles.icons}/> 
                                <TextInput 
                                placeholder ="Enter New Password" 
                                placeholderTextColor="#CCCCFF"
                                style={styles.textInput} />
                            </View>

                    <View style={styles.form}>
                            <Icons name = "lock1" size = {24} style={styles.icons}/> 
                                <TextInput 
                                placeholder ="Confirm Password" 
                                placeholderTextColor="#CCCCFF"
                                style={styles.textInput} />
                            </View>   

                    <View>
                            
                            <TouchableOpacity onPress = {onSignIn}>
                                        <View style={styles.bottonvw}>
                                        <LinearGradient 
                                        colors = {['#f5f5f5','#133743']} 
                                        style={styles.button}>
                                        <Text  style={styles.btntext}> Save </Text>
                                        </LinearGradient></View>
                                        </TouchableOpacity>

                         
                
                    </View>          
                   
                   </View>  

                     <View styles={styles.footer}>
                   
                   
                   </View>   
             
          </View>

        </ScrollView>


    )
}


export default ChangePassword;

const {height} = Dimensions.get("screen");

const height_logo = height * 0.25;

const height_button = height * 0.06;

const {width} = Dimensions.get("screen");

const width_logo = width * 0.5;

const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor:'#133743',
    },

    header:{
         
       flex:2,
       backgroundColor:'#133743',
       justifyContent:'center',
       alignItems: 'center',

    },

    stylelogo:{
        width:width_logo,
        height:height_logo,
        marginLeft:20,
        
        
  },
  heading:{
    
    color:'#F5F5F5',
    fontSize:28,
    fontWeight:'bold',
    marginBottom:10,
     
  },

    body:{
        flex:4,
        backgroundColor:'#133743',
   
    },
    form :{
        flexDirection:'row',
          borderRadius:10,
          borderWidth:2,
          borderColor:'#ddd',
          marginBottom: 20,
          marginTop: 20,
          marginStart:10,
          marginEnd:5,
         alignContent:'center'
         
    },textInput:{
      color:'#F5F5F5',
    },

    icons:{
        marginTop:10,
        marginEnd:5,
        marginStart:2,
        color:'#DDD',
      },

      bottonvw:{
        marginTop:20,
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
 btntext:{
   color:'black',
   fontSize:15,

 },

    footer:{
        flex:2,

    }



});