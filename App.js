import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ForecastList from './src/views/ForecastListItem'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on </Text>
      {/* <MyButton/> */}
      <ForecastList />
      {/* <StatusBar style="auto" /> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  forecastlist: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }