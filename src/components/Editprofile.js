import React,{useState} from 'react';
import {View,StyleSheet,Text,TextInput,SafeAreaView,TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
//import CountryPicker from 'react-native-country-picker-modal';


const Editprofile = () => {

    const navigation = useNavigation();

    const onSavebutton =() =>{

    navigation.navigate('Profile');
  }

  const [form,setForm] = useState();

  const onChangeText = ({name,value}) => {

    setForm ({...form,[name]:value});

  }

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.top}>  
        <Text>

            Top
            </Text>
        </View>
        <View style={styles.body}>
        <View style = {styles.form}> 

         <TextInput
          onChangeText={(value) => {
            onChangeText({name: 'Maritalstatus', value: value});
          }}
          label="Marital Status"
          placeholder="Enter phone number"
        />

        <TextInput
          onChangeText={(value) => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
          label="Phone Number"
          placeholder="Enter phone number"
        />
                   </View>

          <TouchableOpacity onPress = {onSavebutton}>
                        <View style={styles.bottonvw}>
                        <LinearGradient 
                          colors = {['#f5f5f5','#133743']} 
                          style={styles.button}>
                        <Text> Update Profile </Text>
                        </LinearGradient>
                        </View>
                        </TouchableOpacity>
          
          

        </View>

           <View style={styles.footer}>
             <Text>
             Footer</Text>
             </View>
       

      </SafeAreaView> 
    )

}

export default Editprofile;



const styles = StyleSheet.create ({

  container:{
    flex:1,
    backgroundColor:'black',
  },

top:{
  flex:1,
  backgroundColor:'red',
},
body:{
  flex:3,

},

form :{
  flexDirection:'row',
    borderRadius:10,
    borderWidth:2,
    borderColor:'#ddd',
    marginBottom: '5%',
    marginEnd:'5%',
    marginStart:'5%',    
   alignContent:'center'
   
},textInput:{
color:'#F5F5F5',
},

footer:{
  flex : 1,
  backgroundColor:'green',
},
});

