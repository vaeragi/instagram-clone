import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Button} from 'react-native';
import TnCPolicy from './src/common/TnCPolicy';
import {IModal, IText, ITextInput} from './src/common';

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
      <IText>
        <IText hyperlink onPress={() => console.log('hello world!!')}>
          {' '}
          Hey Everyone
        </IText>
        Hello
      </IText>
      <TnCPolicy onPress={() => setModalVisible(false)} />
      <IModal visible={modalVisible}>
        <TnCPolicy onPress={() => setModalVisible(false)} />
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
