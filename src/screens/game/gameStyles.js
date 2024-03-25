import { StyleSheet} from 'react-native';
import { MyColors } from '../../components/colors/colors';

export const GameStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,

  },
  inputButtonView: {
    marginTop: 20,
    backgroundColor: MyColors.green,
    paddingVertical: 50,
    borderRadius: 10,
    alignItems: 'center'

  },
  textinputView:{
    alignItems: 'center'

  },
  textInput: {
    width: '80%',

  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 2,
    marginTop: 20,

  }
});