import React, { useState } from 'react';
import {View , Text, ScrollView , Dimensions, Image, SafeAreaView, TouchableOpacity,TextInput,StyleSheet, ToastAndroid} from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';


const logo = require('../../images/logo.png')

const Token = () => {

    const navigation = useNavigation();

    const [data,setData] = useState({

         tokenone:'',
         tokentwo:'',
         tokenthree:'',
         tokenfour:'',
         tokenfive:'',
         isValidToken:true
    })

    const onEnterTokenone = (val) =>{
      if (val != "")    {
        setData({
          ...data,
             tokenone:val,
             isValidToken:true
        })
      } else {
        setData({
          ...data,
          tokenone:val,
          isValidToken:false
        })
      }
     

    }

    
    const onEnterTokentwo = (val) =>{
      if (val != "")    {
        setData({
          ...data,
          tokentwo:val,
             isValidToken:true
        })
      } else {
        setData({
          ...data,
          tokentwo:val,
          isValidToken:false
        })
      }
     

    }

       
    const onEnterTokenthree = (val) =>{
      if (val != "")    {
        setData({
          ...data,
            tokenthree:val,
             isValidToken:true
        })
      } else {
        setData({
          ...data,
          tokenthree:val,
          isValidToken:false
        })
      }
     

    }

    const onEnterTokenfour = (val) =>{
      if (val != "")    {
        setData({
          ...data,
          tokenfour:val,
             isValidToken:true
        })
      } else {
        setData({
          ...data,
          tokenfour:val,
          isValidToken:false
        })
      }
     

    }

    const onEnterTokenfive = (val) =>{
      if (val != "")    {
        setData({
          ...data,
          tokenfive:val,
             isValidToken:true
        })
      } else {
        setData({
          ...data,
          tokenfive:val,
          isValidToken:false
        })
      }
     

    }

    const onSignIn = () => {


      ValidateToken(data.tokenone,data.tokentwo,data.tokenthree,data.tokenfour, data.tokenfive)
    }
 

    

    const ValidateToken = async()=>{

            if (data.tokenone != " " && data.tokentwo != " "&& data.tokenthree != " " && data.tokenfour != " " && data.tokenfive != " "){

              tokenone = data.tokenone+data.tokentwo+ data.tokenthree+data.tokenfour+data.tokenfive;

            console.log (tokenone);

            await fetch('http://192.168.14.44/visaleapi/api/index.php/v1/reset/tokenvalidate',{

            method: 'POST',
            headers:{
              'Accept': 'application/json',
              'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
              'password_reset_token':tokenone,
         
            })
 
        }).then(res => res.json())
        .then(resData => {
       
           ToastAndroid.show('Token Accepted Successful,',
            ToastAndroid.LONG)

          navigation.navigate('ChangePassword',{

            password_reset_token:tokenone
            
          })

            })
          } else {

            alert ('Incorrect Token');
          }
    }

return(

    <ScrollView style={{backgroundColor:'#133743'}}>

    <View style={styles.container}>
   
        <View style={styles.header}>
          <Image source = {logo}
                      style = {styles.stylelogo}
                      resizeMode = "contain" />
                  
                       <Text style={styles.heading}>Enter Token Number</Text>
                   
            </View>
         <View styles={styles.body}>
              <View style={styles.form}>
                 
              <View style={styles.formd}>
                          <TextInput 
                                onChangeText={(val) => onEnterTokenone(val)}
                                placeholderTextColor="#CCCCFF"
                                style={styles.textInput} />
                         
                        </View>

                      <View style={styles.formd}>
                      <TextInput 
                               onChangeText = {(val) => onEnterTokentwo(val)} 
                                placeholderTextColor="#CCCCFF"
                                style={styles.textInput} />
                         
                        </View>

                      <View style={styles.formd}>
                      <TextInput 
                                  onChangeText = {(val) => onEnterTokenthree(val)} 
                                placeholderTextColor="#CCCCFF"
                                style={styles.textInput} />
                         
                        </View>
                      
                      <View style={styles.formd}>
                      <TextInput 
                                  onChangeText = {(val) => onEnterTokenfour(val)} 
                                placeholderTextColor="#CCCCFF"
                                style={styles.textInput} />
                         
                        </View>

                        <View style={styles.formd}>
                      <TextInput 
                                onChangeText = {(val) => onEnterTokenfive(val)} 
                                placeholderTextColor="#CCCCFF"
                                style={styles.textInput} />
                         
                        </View>
            
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

export default Token;

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
        marginTop:20,
       
   
    },
    form :{
        flexDirection:'row',
         marginVertical:20,
          height:150,

          marginLeft: '1%',
       
         
    },formd:{
        width:50,
        height:100,
        marginVertical:'10%',
        marginHorizontal:'4%',
        borderRadius:10,
        borderColor:'#ddd',
        borderWidth:2,
      
    },
    textInput:{
      color:'#F5F5F5',
      fontSize:30,
      alignSelf:'center'
    
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

