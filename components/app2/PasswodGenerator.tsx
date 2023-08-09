import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(2, 'Should be min of 2 characthers')
    .max(16, 'Should be max of 16 characthers')
    .required('Length is required'),
});

export default function PasswodGenerator() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*_+()';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (number) {
      characterList += numberChars;
    }
    if (symbol) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
    console.log(passwordResult);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumber(false);
    setSymbol(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.headingText}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={values => {
              console.log(values);

              generatePasswordString(+values.passwordLength);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,

              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.titleText}>Password length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="16"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.titleText}>Include lowercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="black"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.titleText}>Include uppercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="black"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.titleText}>Include number</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={number}
                    onPress={() => setNumber(!number)}
                    fillColor="black"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.titleText}>Include symbol</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbol}
                    onPress={() => setSymbol(!symbol)}
                    fillColor="black"
                  />
                </View>

                <View style={styles.formAction}>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={() => handleSubmit()}
                    style={styles.primaryButton}>
                    <Text style={styles.textButton}>Generate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondryButton}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}>
                    <Text style={styles.textButton}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subtitle}>RESULT</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subtitle}>RESULT</Text>
            <Text style={styles.description}></Text>
            <Text style={styles.generatedPassword}></Text>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
  formContainer: {},
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    color: 'black',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    width: 45,
    marginRight: 7,
    paddingLeft: 15,
  },
  inputColumn: {},
  formAction: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  titleText: {
    paddingRight: 200,
    padding: 8,
    marginTop: 5,
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  errorText: {
    fontSize: 11,
    color: 'red',
    marginLeft: 15,
  },
  primaryButton: {
    width: 90,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  secondryButton: {
    width: 90,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    borderRadius: 10,
  },
  textButton: {
    color: 'white',
    fontWeight: '700',
  },
  card: {},
  cardElevated: {
    alignItems: 'center',
    borderWidth: 2,
    marginHorizontal: 55,
    borderRadius: 20,
    marginVertical: 20,
    borderColor: 'black',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
  },
  description: {
    fontSize: 15,
    fontWeight: '500',
  },
  generatedPassword: {
    fontSize: 25,
    fontWeight: '700',
    padding: 10,
    color: 'black',
  },
});
