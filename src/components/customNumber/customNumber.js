import { View, Text } from 'react-native';
import { CustomNumberSyles } from './customNumberStyles';

export default function CustomNumber({ children }) {
    return (
        <View style={CustomNumberSyles.container}>
            <Text style={CustomNumberSyles.number}>{children}</Text>
        </View>
    )
}