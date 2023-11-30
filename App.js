import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './redux/store';
import { StyleSheet, Text, View } from 'react-native';
import RememberColor from './GameView/RememberColor'
import RememberImages from './GameView/RememberImage';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      {/* <RememberColor></RememberColor> */}
      <RememberImages/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});