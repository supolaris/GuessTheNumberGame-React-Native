import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { MyColors } from '../colors/colors';
import { CustomButtomStyles } from './customButtomStyles';

const CustomButtom = (props, { onPress }) => (
    <Button
        style={{
            //marginHorizontal: 5,
            //width: 120,
            backgroundColor: (props.colorName)

        }}
        onPress={props.onPress}
        icon={props.iconName}
        mode="contained"
    //onPress={() => console.log('Pressed')}
    >
        {props.text}
    </Button>
);

export default CustomButtom;