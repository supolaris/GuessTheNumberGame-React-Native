import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StartGameScreen from '../../../screens/startGame/startGame';
import GameOverScreen from '../../../screens/gameOver/gameOver';
import GameScreen from '../../../screens/game/game';

const Stack = createNativeStackNavigator();

export function NativeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Game_Screen" component={GameScreen} />
        <Stack.Screen name="StartGameS_creen" component={StartGameScreen} />
        <Stack.Screen name="GameOver_Screen" component={GameOverScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}