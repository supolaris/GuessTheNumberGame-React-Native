import { StyleSheet } from "react-native";
import { MyColors } from "../colors/colors";


export const CustomNumberSyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        margin: 20

    },
    number: {
        fontSize: 30,
        fontWeight: 'bold',
        color: MyColors.green


    }
})