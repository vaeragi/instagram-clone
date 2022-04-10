import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Button} from 'react-native';
import PolicyInfo from './src/components/PolicyInfo';
import {IModal, ITextInput} from './src/common';

const App = () => {
  const [userName, setUserName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <ITextInput
          value={userName}
          placeholder="Email"
          onChangeText={text => setUserName(text)}
          style={styles.input}
          keyboardType={'email-address'}
        />
      </View>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <IModal visible={modalVisible}>
        <PolicyInfo onPress={() => setModalVisible(false)} />
      </IModal>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    borderRadius: 4,
  },
});
