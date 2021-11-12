import React , {useState} from "react";
import {View,Text,Dimensions,StyleSheet, SafeAreaView,ScrollView,TextInput,TouchableOpacity,Image} from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
const logo = require('../../images/logo.png')

const SignUpScreen =() => {
    
    const navigation = useNavigation();

    const onSignInPressed = () => {
     
        navigation.navigate('SignIn')
      }

    const onPrivacyPolicyPressed = () => {

        navigation.navigate('PrivacyPolicy')
    }

   

    const [data,setData] = useState({
        username: '',
        emailaddress:'',
        password: '',
        confirmpassword: '',
        isValiduser: true,
        isValidemail:true,
        isValidPassword: true,
        isValidConfirm:true,
        secureTextEntry:true,
        checkTextInputChange: false,
    });

    const onSignUpPressed = () => {
     
        //navigation.navigate('SignIn')
        signUp(data.username,data.emailaddress,data.password,data.confirmpassword)
      }

    const nameInputChange = (val) =>{
       if (val.trim().length >= 4){
           setData({
               ...data,
                username:val,
                checkTextInputChange:true,
                isValiduser:true

           });
       } else {

            setData({
                ...data,
                username:val,
                checkTextInputChange:false,
                isValiduser:false

            });
       }
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

    const handleValidUser = (val) => {
        if (val.trim().length >= 5){
          setData({
             ...data,
             isValiduser:true
      
          });
        } else {
           setData({
             ...data,
             isValiduser:false
           });
        }
      }

      const handleValidEmail = (val) => {
          let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(val) === false){
          setData({
             ...data,
             isValidemail:false
      
          });
        } else {
           setData({
             ...data,
             isValidemail:true
           });
        }
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
      
      const signUp = async() => {

        if (data.username !== " " && data.emailaddress !== " " && data.password !== " " && data.confirmpassword){
               
            username = data.username
            email = data.emailaddress
            password = data.password
            password_confirm = data.confirmpassword

            console.log(email,password,password_confirm);

            await fetch('http://192.168.14.44/visaleapi/api/index.php/v1/outh/signup',{
                method: 'POST',
                headers:{
                  'Accept': 'application/json',
                  'Content-Type' : 'application/json'
                },
                body:JSON.stringify({
                  'username':username,
                  'email':email,
                  'password':password,
                  'password_confirm':password_confirm
                })
     
            }).then(res => res.json())
            .then(resData => {
              //console.log(resData)
              //setMessage (resData.message);
              alert('Congratulation !! You Have Successfull Created Account');
              navigation.navigate('SignIn')

            })
         console.log(username,email,password_confirm);
       
        } else {

            console.log(username,password);
        
    }
         
      }

     // console.log('signing up');
   
return (
    
          <SafeAreaView style={styles.container}> 

     

                    <View style={styles.header}>
                        <Image source = {logo}
                            style = {styles.stylelogo}
                            resizeMode = "contain" />
                        
                             <Text style={styles.heading}>Create Account</Text>
                         
                         </View> 
 

                <View style={styles.body}>

                    <View style = {styles.form}> 
                     <Icons name = "user" size = {24} style={styles.icons}/>
        
                        <TextInput 
                            onChangeText = {(val) => nameInputChange(val)}
                            onEndEditing = {(e) => handleValidUser(e.nativeEvent.text)}
                            style={styles.textInput} 
                            placeholderTextColor="#CCCCFF" 
                            placeholder = "Username"
                            />
                    </View>

                    {data.isValiduser ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Username Can Not Be Empty or Incomplete</Text>
                        </Animatable.View>
                     }

                    <View style = {styles.form}> 
                    
                    <Icons name = "mail" size = {24} style={styles.icons}/>
        
                        <TextInput 
                            onChangeText = {(val) => emailInputChange(val)}
                            onEndEditing = {(e) => handleValidEmail(e.nativeEvent.text)}
                            style={styles.textInput} 
                            placeholderTextColor="#CCCCFF"
                            placeholder = "Email Address"
                            />
                    </View>

                    {data.isValidemail ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Email is Incomplete or Invalid</Text>
                        </Animatable.View>
                     }

                    <View style={styles.form}>
                    <Icons name = "lock1" size = {24} style={styles.icons}/> 
                        <TextInput 
                         onChangeText = {(val) => handlingPasswordinput(val)}
                         secureTextEntry = {true}
                         placeholder ="Password" 
                         placeholderTextColor="#CCCCFF"
                          style={styles.textInput} />
                    </View>

                    {data.isValidPassword ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password is too Weak</Text>
                        </Animatable.View>
                     }
                       
                    {data.isValidConfirm ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Confirm Password Does Not Match</Text>
                        </Animatable.View>
                     }

                    <View style={styles.form}>
                    <Icons name = "lock1" size = {23} style={styles.icons}/> 
                        <TextInput 
                         onChangeText = {(val) => handlingPasswordConfirm(val)}
                         onEndEditing = {(e) => handleCorrectPassword(e.nativeEvent.text)}
                         secureTextEntry = {true}
                         placeholder ="Confirm Password" 
                         placeholderTextColor="#CCCCFF"
                         style={styles.textInput} />
                    </View>
              
              
                           
                        <View style ={styles.buttons}>
                            
                            <TouchableOpacity onPress = {onSignUpPressed}>
                                        
                                        <LinearGradient 
                                        colors = {['#f5f5f5','#133743']} 
                                        style={styles.button}>
                                        <Text> Register </Text>
                                        </LinearGradient>
                                        </TouchableOpacity>
                
                    </View>
                 </View>

                <View style ={styles.footer}>
                   <SafeAreaView style = {styles.footercontent}>
                    <Text style={styles.signintxt}> By Creating Your Account You Confirm To Agree With </Text> 
                    <TouchableOpacity onPress={onPrivacyPolicyPressed}>
                        <Text style={styles.signintxtlink}>The Privacy Policy </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onSignInPressed}>
                       <Text style={styles.signin}>Already Have Account. SignIn </Text>
                    </TouchableOpacity>
                   </SafeAreaView>

                 </View>

               

            </SafeAreaView>

         


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
       marginTop:'2%',
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
        marginStart:'-25%',
             
  },

      body:{
       
        flex:3,
        marginTop:'3%',

    },
    form:{

         flexDirection:'row',
         borderRadius:10,
         borderWidth:2,
         borderColor:'#ddd',
         marginVertical: '2%',
         marginStart:'3%',
         marginEnd:'3%',
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

     button:{
        marginTop:'10%',
        marginHorizontal:'2%',
     width: 390,
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

    footercontent :{
        marginTop:'14%',
        marginBottom:'3%',
        marginHorizontal:'2%', 
 

    },

    signintxt:{
        color: "#B0C4DE",
        fontWeight:"bold",
        fontSize:16,                    
        alignItems: "center",
      },

      signintxtlink:{
        color: "#E6E6FA",
        fontWeight:"bold",
        fontSize:16,      
        alignItems: "center",
      },
      signin:{
          color:"blue",
          fontSize:16,
          fontWeight:'800',
          alignSelf:'center',
      },

      errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        marginLeft:'12%',
        marginBottom:'1%',
        alignSelf:'flex-start',
      
    },
    

})