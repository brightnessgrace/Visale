
import React ,{useState} from 'react';
import {View,Text,StyleSheet,Image, SafeAreaView,ScrollView, 
  Dimensions,TextInput, TouchableOpacity,alert} from 'react-native' ;
import Icons from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
const logo = require('../../images/logo.png')

console.log ('nimefika');


const SignInScreen = () => {

  const navigation = useNavigation();

  const onSignUpPressed = () => {
     
    navigation.navigate('SignUp')
  }

  const onForgotPasswordPressed = () => {
    
    navigation.navigate('ForgotPassword')
  }

 const [data,setData] = useState({
     username: '',
     password: '',
     isValiduser: true,
     isValidPassword: true,
     secureTextEntry:true,
     checkTextInputChange: false,
 });


 const textInputChange = (val) => {
  if( val.trim().length >= 4 ) {
      setData({
          ...data,
          username: val,
          check_textInputChange: true,
          isValidUser: true
      });
  } else {
      setData({
          ...data,
          username: val,
          check_textInputChange: false,
          isValidUser: false
      });
  }
}

const handlePasswordChange = (val) => {
  if (val.trim().length >= 4){
    setData({
       ...data,
       password: val,
       isValidPassword:true

    });
  } else {
     setData({
       ...data,
       password: val,
       isValidPassword:false
     });
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

const [message, setMessage] = useState ('Incorrect Username or Password!');

const onSignInPressed = () => {

 // console.log('data',data);
//navigation.navigate('Profile')

signIn(data.username,data.password)

}


const signIn = async() =>{

  if (data.username!=" " && data.password!=" "){
        
        username = data.username
        password = data.password

        //console.log(password);
       
       await fetch('http://192.168.14.44/visaleapi/api/index.php/v1/users',{
           method: 'POST',
           headers:{
             'Accept': 'application/json',
             'Content-Type' : 'application/json'
           },
           body:JSON.stringify({
             'username':username,
             'password':password
           })

       }).then(res => res.json())
       .then(resData => {
        // console.log(password)
         navigation.navigate('Profile')
       })
    console.log(username,password);

  } else {

    console.log('wow5');
  }
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

                <TextInput 
                   onChangeText = {(val) => textInputChange(val)}
                   onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    style={styles.textInput} 
                    placeholder = "Username"
                    placeholderTextColor="#CCCCFF"/>
                  
                  
               </View>
               {data.isValiduser ? null :
               <Animatable.View animation="fadeInLeft" duration={500}>
               <Text style={styles.errorMsg}>Username Can Not Be Empty or Incomplete</Text>
               </Animatable.View>
                 }

            <View style = {styles.form}>  
             <Icons name = "lock1" size = {24} style={styles.icons}/> 
                <TextInput 
                    onChangeText = {(val) => handlePasswordChange(val)}
                    secureTextEntry={true}
                    style={styles.textInput} 
                    placeholder = "Password"
                    placeholderTextColor="#CCCCFF"
                    />
                </View>
               {data.isValidPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
               <Text style={styles.errorMsg}>Password Has to be 8 Characters Long</Text>
               </Animatable.View>
                      }
               
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
       marginTop:'-8%',
       backgroundColor:'#133743',
       justifyContent:'center',
       alignItems: 'center',
      
   },

   stylelogo:{
         width:width_logo,
         height:height_logo,
         marginLeft: '3%',
          
   },

   heading:{
    
    color:'#F5F5F5',
    fontSize:28,
    fontWeight:'bold',
  
     
  },
   login:{
       flex:3,
       backgroundColor:'#133743',
       marginTop:'3%',
      
   },

   form :{
       flexDirection:'row',
         borderRadius:10,
         borderWidth:2,
         borderColor:'#ddd',
         marginBottom: '2%',
         marginEnd:'5%',
         marginStart:'5%',    
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
      
       width: 390,
       height: height_button,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 20,
       flexDirection: 'row'
   },
   textstyle:{
     color: "#f5f5f5",
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
        marginHorizontal: '3%',
        marginVertical:'3%',      
        flexDirection:"row",
 },
 socialwords:{
    marginLeft: '5%',
    marginTop: '1%',
    color:'black'

 },

 socialbutn:{
    width: 390,
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
    marginLeft:'10%',
    marginVertical:'2%',
    alignItems: "center",
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    marginLeft:'12%',
    marginBottom:'1%',
    alignSelf:'flex-start',
  
},

});