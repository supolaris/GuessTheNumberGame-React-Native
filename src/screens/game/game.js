import { Text, View, SafeAreaView, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import CustomTitle from '../../components/customTitle/customTitle';
import { LinearGradient } from 'expo-linear-gradient';
import { MyColors } from '../../components/colors/colors';
import CustomNumber from '../../components/customNumber/customNumber';
import { GameStyles } from './gameStyles';
import CustomButtom from '../../components/customButtom/customButtom';

export default function GameScreen({ userNumber }) {



    function generateRandomNumber(min, max, exlude) {

        const randomNumber = Math.floor(Math.random() * (max - min) + max);
        if (randomNumber === exlude) {
            return generateRandomNumber(min, max, exlude)
        } else {
            return randomNumber;
        }
    }

    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

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
                <View style={GameStyles.container}>
                    <SafeAreaView >
                        <CustomTitle>Opponent's Guess</CustomTitle>
                        <CustomNumber>{currentGuess}</CustomNumber>

                        <View>
                            <Text>Higher or lower?</Text>
                            <View>
                                <CustomButtom >+</CustomButtom>
                                <CustomButtom>  -</CustomButtom>
                            </View>
                        </View>
                    </SafeAreaView>
                </View >

            </ImageBackground>
        </LinearGradient>

    )

}