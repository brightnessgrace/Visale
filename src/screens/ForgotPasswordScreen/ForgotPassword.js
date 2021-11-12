import React ,{useState} from 'react';
import {View , Text, ScrollView , Dimensions, Image, SafeAreaView, TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";


const logo = require('../../images/logo.png')

const ForgotPassword =() => {

    const navigation = useNavigation();

    const onSendEmail = () =>{

      navigation.navigate('ChangePassword');
    }

    const onSendSms = () =>{
      navigation.navigate('Token');
    }

    const [data , setData] = useState ({
           phonenumber:'',
           emailaddress:'',
           isValidemail:true,
           isValidPnonenumber:true

    })

 

    const onSendTokenPressed = () => {
     
      console.log('ikohapa');

      resetPassword (data.emailaddress,data.phonenumber)
    }

    const emailInputChange = (val) => {

      if(val.trim().length >= 4){
          setData({
              ...data,
              emailaddress:val,
              isValidemail:true,

          }) ;
      } else {

          setData({
              ...data,
              emailaddress:val,
              isValidemail:false
          })
      }
  }

  const phoneInputChange = (val) => {

    if(val.trim().length >= 4){
        setData({
            ...data,
            emailaddress:val,
            isValidemail:true,

        }) ;
    } else {

        setData({
            ...data,
            emailaddress:val,
            isValidemail:false
        })
    }
}

    const resetPassword = async() => {

      if (data.emailaddress !== " " && data.phonenumber !== " ") {

           emailaddress = data.emailaddress
           phone_number = data.phonenumber

        await fetch("http://192.168.14.44/visaleapi/api/index.php/v1/reset/userexist",{

          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
          },
          body:JSON.stringify({

            'email':emailaddress,
            'phone_number':phone_number,
          })
              
          }).then(res => res.json())
          .then(resData => {

            console.log('email and phone number valid')
            //setMessage (resData.message);
        })

      } else {
            
        alert('Phone NUmber or Email Addres does not Match');

      }

    }

    const checkValidEmail = (val) =>{

      let reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

      if (reg.test(val) === false){
           setData({
            ...data,
            isValidemail:false

           }) ;  
         
      } else {

        setData({
          ...data,
            isValidemail:true
        })

      }

    }

 
  

    return (
    
        <ScrollView style={{backgroundColor:'#133743'}}>

          <View style={styles.container}>
         
              <View style={styles.header}>
                <Image source = {logo}
                            style = {styles.stylelogo}
                            resizeMode = "contain" />
                        
                             <Text style={styles.heading}>Reset Your Password</Text>
                         
                  </View>
               <View styles={styles.body}>
                    <View style={styles.form}>
                            <Ionicons name = "mail" size = {24} style={styles.icons}/> 
                                <TextInput 
                                onChangeText = {(val) =>emailInputChange(val)}
                                onEndEditing ={(e) => checkValidEmail(e.nativeEvent.text)}
                                placeholder ="Email" 
                                placeholderTextColor="#CCCCFF"
                                style={styles.textInput} />
                            </View>

                    <View style={styles.form}>
                            <Icons name = "lock1" size = {24} style={styles.icons}/> 
                                <TextInput 
                                onChangeText = {(val) =>phoneInputChange(val)}
                                placeholder ="Phone Number" 
                                placeholderTextColor="#CCCCFF"
                                style={styles.textInput} />
                            </View>   

                    <View>
                            
                            <TouchableOpacity onPress = {onSendSms}>
                                        <View style={styles.bottonvw}>
                                        <LinearGradient 
                                        colors = {['#f5f5f5','#133743']} 
                                        style={styles.button}>
                                        <Text  style={styles.btntext}> Send Token Via Sms </Text>
                                        <Ionicons name = "mail" size = {24} color="black" style={styles.icon}/> 
                    
                                        </LinearGradient></View>
                                        </TouchableOpacity>

                        <TouchableOpacity onPress={onSendTokenPressed}>
                                        <View style={styles.bottonvw}>
                                        <LinearGradient 
                                        colors = {['#f5f5f5','#133743']} 
                                        style={styles.button}>
                                        <Text style={styles.btntext}> Send Token Via Mail </Text>
                                        < MaterialIcons name = "sms"  color="black" size = {24} style={styles.icon} />
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


export default ForgotPassword;

const {height} = Dimensions.get("screen");

const height_logo = height * 0.25;

const height_button = height * 0.06;

const {width} = Dimensions.get("screen");

const width_logo = width * 0.5;

const width_button = width * 0.9;

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
    marginBottom:'5%',
     
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
          marginBottom: '5%',
          marginTop: '5%',
          marginHorizontal:'5%',
         alignContent:'center'
         
    },textInput:{
      color:'#F5F5F5',
    },

    icons:{
        marginTop:'2%',
        marginEnd:5,
        marginStart:2,
        color:'#DDD',
      },

      icon:{
       marginLeft:30,
      },

      bottonvw:{
     
        backgroundColor:'#133743',
        marginHorizontal:'5%',
 },
 button:{
    
     width: width_button,
     height: height_button,
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius: 20,
     marginTop:'10%',
    
     flexDirection: 'row'
 },
 btntext:{
   color:'black',
   fontSize:15,

 },

    footer:{
        flex:2,

    }



})