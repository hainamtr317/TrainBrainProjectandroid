import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './redux/store';
import { StyleSheet, Text, View } from 'react-native';
import RememberColor from './gameview/RememberColor'

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
    <RememberColor/>
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
