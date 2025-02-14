
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/TItle';
import FormImg from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <FormImg></FormImg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c9d1',
    paddingTop: 80,
    alignItems: 'center',
    
  },
});
