import { View, Text } from "react-native";
import { CustomTitleStyles } from "./customTitleStyles";


export default function CustomTitle({children}){
    return (
        <View style={CustomTitleStyles.container}>
            <Text style={CustomTitleStyles.title}>{children}</Text>
        </View>
    )
}