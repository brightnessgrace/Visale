import React from 'react';
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconic from 'react-native-vector-icons/MaterialCommunityIcons';
import Maticon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const profilepic = require ('../../images/brightness.jpg')


const Profile = () => {
  const navigation = useNavigation();

  const onLogoutPressed = () => {
     
    navigation.navigate('SignIn')
  }

 return (

    <LinearGradient colors = {['#f5f5f5','#133743']} style={styles.container}>
        <View style={styles.Header}>
          <View style={styles.Imagecontainer}>
              <Image source={profilepic} resizeMode='cover' style={styles.image}/>    

          </View>

             <View style={styles.biodata}>
               <Text style={styles.biotext}>  Brightness W Mamuya </Text>
               <Text style={styles.biotext}>  Member Since July 2019 </Text>
               <Text style={styles.biotext}>  System Analyst </Text>
               <Text style={styles.biotext}>  PSSSF HQ </Text>
               <Text style={styles.biotext}>  Dodoma </Text>

             </View>
        
          </View>
       
        <View style={styles.Body}>

           <View style={styles.summary}>
            <View style={styles.hisa}>
            <Text style={styles.sumtext}>3,500,500.90</Text>
              <Text style={styles.sumtext}>Hisa</Text>
            </View>
            <View style={styles.lbalance}>
            <Text style={styles.sumtext}>1,500,000.00 </Text>
              <Text style={styles.sumtext}>Loan Balance</Text>
              </View>
            <View style={styles.duration}>
            <Text style={styles.sumtext}> 38 months</Text>
              <Text style={styles.sumtext}>Duration</Text>
            </View>

          </View>

          <View style={styles.menu}>
            
          <TouchableOpacity >
            <View style={{flexDirection:'row', alignItems : 'center'}}>
           
              <Icon name = 'database' size = {24} color = "gold" />
              <Text style={styles.textmenu}>Hisa Statement</Text>
              </View>
              </TouchableOpacity>
              
              <TouchableOpacity >
              <View style={{flexDirection:'row',alignItems : 'center'}}>
              <Icon name = 'file1' size = {24} color = "gold"/>
              <Text style={styles.textmenu}>Loan Statement</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={{flexDirection:'row',alignItems : 'center'}}>
              <Maticon name = 'request-page' size = {24} color = "gold"/>
              <Text style={styles.textmenu}>Apply For Loan</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={{flexDirection:'row', alignItems : 'center'}}>
               <Iconic name='cash-refund' size = {24} color = "gold"/>
              <Text style={styles.textmenu}>Loan Restoration</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={{flexDirection:'row', alignItems : 'center'}}>
               <Iconic name='alert-circle-outline' size = {24} color = "gold"/>
              <Text style={styles.textmenu}>Send Notice</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={{flexDirection:'row', alignItems : 'center'}}>
              <Icon name = 'setting'size = {24} color = "gold" />
              <Text style={styles.textmenu}>Settings</Text>
              </View>
              </TouchableOpacity>

            </View>

        </View>

        <View style={styles.Footer}>
        <TouchableOpacity onPress={onLogoutPressed}>
            <View style={{flexDirection:'row', marginLeft:10, marginTop:7, alignItems : 'center'}}>
            <Icon name = 'logout' size={30} color="gold" />
            <Text style={styles.textmenu}>Log Out</Text>
            </View>
            </TouchableOpacity>

          </View>
    </LinearGradient>
 )
}

export default Profile;


const styles = StyleSheet.create({

  container:{
    flex:1,
  },
Header:{
   flex:2,
  // backgroundColor:'#133743',
   flexDirection:'row'
   
 
},
Imagecontainer:{
  //borderWidth:2,
  //borderColor:'white',
  height:150,
  marginTop:15,
  alignItems: 'center',

},
image:{
  flex:1,
  margin:5,
  width:100,
  height:'100%',
  borderRadius:30,
},
biodata:{
   marginTop:20,
   marginLeft:10,
   
},
biotext:{
  fontSize:18,
  margin:2,
  color:'#133743',
  fontFamily:'Baskerville'
},
Body:{
  flex:4,
  //backgroundColor:'red',
},
summary:{
  flexDirection:'row',
  //borderColor:'white',
  //borderWidth:3,
  justifyContent:'space-around',
  height:'25%',
},
hisa:{
  flex:1/3,
  borderWidth:2,
  borderRadius:5,
  borderColor:'#DCDCDC',
  alignItems:'center',
},
lbalance:{
  flex:1/3,
  borderWidth:2,
  borderRadius:5,
  borderColor:'#DCDCDC',
  alignItems:'center',
  
},
duration:{ 
  flex:1/3,
  borderWidth:2,
  borderRadius:5,
  borderColor:'#DCDCDC',
  alignItems:'center',
},
sumtext:{
  fontSize:15,
  fontWeight:'bold',
  marginTop:15,
},
menu:{
  marginTop:15,
  marginLeft:10,
},
textmenu:{
  fontSize:18, 
  fontWeight:'700', 
  marginVertical:9,
  marginHorizontal:10,
},
Footer:{
  flex:1,
  flexDirection:'row',
  borderTopColor:'black',
  borderTopWidth:2,
}


});