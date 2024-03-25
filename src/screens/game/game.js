import { Text, View, ImageBackground, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { MyColors } from '../../components/colors/colors';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButtom from '../../components/customButtom/customButtom';
import { GameStyles } from './gameStyles';

export function GameScreen() {

    const [enterNumber, setEnterNumber] = useState('');

    function resetInputHandler(){
        setEnterNumber('');
    }

    function numberInputHandler(enteredText){
        setEnterNumber(enteredText);
    }

    function confirmInputHandler(){
        console.log('input');
        const choosenNumber = parseInt(enterNumber);

        if(isNaN(choosenNumber) || choosenNumber == 0 || choosenNumber > 99 ){
            Alert.alert(
                'Invalid number',
                'Number should be between 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            )
            return;
        };

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
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={GameStyles.container}>

                    <View style={GameStyles.inputButtonView}>
                        
                        <TextInput
                                style={GameStyles.textInput}
                                maxLength={2}
                                keyboardType='number-pad'
                                //mode="outlined"
                                label="Number"
                                value={enterNumber}
                                onChangeText={numberInputHandler}
                            />


                        <View style={GameStyles.buttonsView}>

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
            </ImageBackground>
        </LinearGradient>
        
    );
}