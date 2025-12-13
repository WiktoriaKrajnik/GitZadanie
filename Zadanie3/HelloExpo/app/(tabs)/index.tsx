import { View, Text, Button } from 'react-native';

function sum(a: number, b: number = 0) {
  const result = a + (b as any);
  console.log("sum()", a, b, "=", result);
  return result;
}

export default function HomeScreen() {
  console.log("APP START");

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 22, marginBottom: 12 }}>Hello world!</Text>
      <Button
        title="Klik"
        onPress={() => {
          console.log("Kliknięto przycisk");

          debugger;

          const value = sum(2);
          console.log("Wartość:", value);
        }}
      />

    </View>
  );
}
