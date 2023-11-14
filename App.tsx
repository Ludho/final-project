import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from './src/navigation/BottomNavigation';

export default function App() {
  return (
    <BottomNavigation></BottomNavigation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
