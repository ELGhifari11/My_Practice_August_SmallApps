import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import currencies from './CurrencyByRupiah';
import Button from './Button';

export default function FlatlistCurrencies() {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Alert.alert('Nilai belum di input');
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      console.log(`Rp ${inputAmount} = ${result}`);
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Alert.alert('Error');
    }
  };

  const reset = () => {
    setResultValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Convert Currencies</Text>
      <View style={styles.topContainer}>
        <View style={styles.rupiahContainer}>
          <Text style={styles.rupiahText}>Rp</Text>
          <TextInput
            maxLength={14}
            value={inputValue}
            clearButtonMode="always"
            onChangeText={setInputValue}
            keyboardType="number-pad"
            placeholder="Masukan nilai Rupiah"
            style={styles.inputContainer}
          />
        </View>
        {resultValue && <Text style={styles.resultText}>{resultValue}</Text>}
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          numColumns={3}
          data={currencies}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.buttonFlag,
                targetCurrency === item.name && styles.selected,
              ]}
              onPress={() => buttonPressed(item)}
              onPressOut={reset}>
              <Button {...item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    margin: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    color: 'black',
  },
  topContainer: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    minWidth: 250,
    maxWidth: 300,
  },
  rupiahContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  inputContainer: {
    paddingLeft: 5,
    minWidth: 250,
    maxWidth: 300,
    fontSize: 20,
    fontWeight: '800',
  },
  rupiahText: {
    fontSize: 20,
    fontWeight: '800',
  },
  resultText: {
    fontSize: 20,
    fontWeight: '800',
    paddingLeft: 5,
    color: 'green',
  },
  bottomContainer: {},
  buttonFlag: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    marginTop: 20,
    marginHorizontal: 15,
    width: 90,
    backgroundColor: 'black',
  },
  selected: {
    backgroundColor: 'green',
    borderColor: 'white',
  },
});
