import { Text, View, ImageBackground, Alert, Keyboard, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { MyColors } from '../../components/colors/colors';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButtom from '../../components/customButtom/customButtom';
import { StartGmaeStyles } from './startGameStyles';


export default function StartGameScreen({navigation}) {


  const [enterNumber, setEnterNumber] = useState('');
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(enteredNumber){
    setUserNumber(enteredNumber);

    if(userNumber){
      navigation.navigate('Game_Screen');
    }
  }

  function resetInputHandler() {
    setEnterNumber('');
  }

  function numberInputHandler(enteredText) {
    setEnterNumber(enteredText);
  }

  function confirmInputHandler(enteredNumber) {
    console.log('input');
    const choosenNumber = parseInt(enterNumber);

    if (isNaN(choosenNumber) || choosenNumber == 0 || choosenNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number should be between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      )
      return;
    };

    
      setUserNumber(enteredNumber);
  
      if(userNumber){
        navigation.navigate('Game_Screen');
      }
    

    console.log('Valid number');

    

  }




  return (

    <LinearGradient
      colors={[MyColors.darkGreen, MyColors.lightGreen]}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require('../../../assets/dice.jpg')}
        style={{ opacity: 0.5, flex: 1 }}
        resizeMode='cover'
      >
        <SafeAreaView style={{flex:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={StartGmaeStyles.container}>

            <View style={StartGmaeStyles.inputButtonView}>

              <TextInput
                style={StartGmaeStyles.textInput}
                maxLength={2}
                keyboardType='number-pad'
                //mode="outlined"
                label="Number"
                value={enterNumber}
                onChangeText={numberInputHandler}
              />


              <View style={StartGmaeStyles.buttonsView}>

                <CustomButtom
                  iconName='check'
                  text='confirm'
                  colorName={MyColors.navyBlue}
                  onPress={confirmInputHandler}
                />
                <CustomButtom
                  iconName='sync'
                  text='reset'
                  colorName='red'
                  onPress={resetInputHandler}
                />
                <CustomButtom>Reset</CustomButtom>
              </View>

            </View>

          </View>
        </TouchableWithoutFeedback>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>

  );
}
