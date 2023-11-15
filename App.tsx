import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from './src/navigation/BottomNavigation';
import BookProvider from './src/provider/BookProvider';
import OrderProvider from './src/provider/OrderProvider';

export default function App() {
  return (
    <OrderProvider>
      <BookProvider>
        <BottomNavigation></BottomNavigation>
      </BookProvider>
    </OrderProvider>
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
