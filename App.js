import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export const calculateNotes = (amount) => {
  const notes = [50, 20, 10];
  const result = [];

  for (let note of notes) {
    const count = Math.floor(amount / note);
    if (count > 0) {
      result.push({ note, count });
      amount -= count * note;
    }
  }

  return result;
};

export default function App() {
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState([]);

  const handleCalculate = () => {
    const value = parseInt(amount);
    if (value % 10 === 0) {
      setNotes(calculateNotes(value));
    } else {
      alert('O valor deve ser múltiplo de 10');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Caixa Eletrônico</Text>
      <Text>Digite o valor a ser retirado múltiplo de 10</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o valor"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Calcular" onPress={handleCalculate} />
      <FlatList
        data={notes}
        keyExtractor={(item) => item.note.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.count} cédula(s) de R${item.note}
          </Text>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
  },
  item: {
    fontSize: 18,
    marginVertical: 8,
  },
});


