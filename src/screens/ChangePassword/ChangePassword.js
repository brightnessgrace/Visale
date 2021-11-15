import React ,{useState} from 'react';
import {View , Text, ScrollView , Dimensions, Image, SafeAreaView, TouchableOpacity,TextInput,StyleSheet, ToastAndroid} from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const logo = require('../../images/logo.png')

const ChangePassword = ({route}) => {

  const { password_reset_token } = route.params;



  const navigation = useNavigation();


  const [data,setData] = useState({

    password:'',
    confirmPassword:'',
    isValidPassword: true,
    isValidConfirm:true,
    secureTextEntry:true,
    checkTextInputChange: false,

})
const handlingPasswordinput = (val) => {
  if(val.trim().length >= 8){
     setData({
         ...data,
         password:val,
         isValidPassword:true
     })
  } else {
      setData({
          ...data,
          password:val,
          isValidPassword:false,
      })
  }
}

const handlingPasswordConfirm = (val) => {
  if(val.trim().length >= 8){
     setData({
         ...data,
         confirmpassword:val,
         isValidConfirm:true
     })
  } else {
      setData({
          ...data,
          confirmpassword:val,
          isValidConfirm:false,
      })
  }
}
const onSignIn = () => {

  onConfirmPassword(data.password,password_reset_token)
   
  //navigation.navigate('SignIn');
}

const handleCorrectPassword = (val) =>{
  //let pas = data.password;
  if(data.password == data.confirmpassword){
      setData({
          ...data,
          isValidConfirm:true
      });

  } else {
      setData({
          ...data,
          isValidConfirm:false
      });
  }
}


  
  const onConfirmPassword = async()=>{

    if (data.password != " " && password_reset_token != " "){

      //tokenone = data.tokenone+data.tokentwo+ data.tokenthree+data.tokenfour+data.tokenfive;


    await fetch('http://192.168.14.44/visaleapi/api/index.php/v1/reset/newpassword',{

    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type' : 'application/json'
    },
    body:JSON.stringify({

      'password':data.password,
      'password_reset_token':password_reset_token,
 
    })

}).then(res => res.json())
.then(resData => {

   
  console.log(password_reset_token)
  
  ToastAndroid.show('Password Changed Successful, Please Login',
  ToastAndroid.LONG)

  navigation.navigate('SignIn')

    })
  } else {

    //alert ('Incorrect Token');
  
   ToastAndroid.show('Password Changed Failed, Please Retry',
   ToastAndroid.LONG)

    navigation.navigate('ForgotPassword')
  }
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
                                onChangeText = {(val) => handlingPasswordinput(val)}
                                secureTextEntry = {true}
                                placeholder ="Enter New Password" 
                                placeholderTextColor="#CCCCFF"
                                style={styles.textInput} />
                            </View>

                            {data.isValidPassword ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password is too Weak</Text>
                        </Animatable.View>
                     }

                    <View style={styles.form}>
                            <Icons name = "lock1" size = {24} style={styles.icons}/> 
                                <TextInput 
                                onChangeText = {(val) => handlingPasswordConfirm(val)}
                                onEndEditing = {(e) => handleCorrectPassword(e.nativeEvent.text)}
                                secureTextEntry = {true}
                                placeholder ="Confirm Password" 
                                placeholderTextColor="#CCCCFF"
                                style={styles.textInput} />
                            </View>   

                                
                    {data.isValidConfirm ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Confirm Password Does Not Match</Text>
                        </Animatable.View>
                     }

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