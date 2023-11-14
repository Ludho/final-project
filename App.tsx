import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from './src/navigation/BottomNavigation';
import BookProvider from './src/provider/BookProvider';

export default function App() {
  return (
    <BookProvider>
      <BottomNavigation></BottomNavigation>
    </BookProvider>
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
