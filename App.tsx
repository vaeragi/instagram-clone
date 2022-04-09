import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Button} from 'react-native';
import TnCPolicy from './src/common/TnCPolicy';
import CustomModal from './src/common/CustomModal';
import InputField from './src/common/InputField';

const App = () => {
  const [userName, setUserName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <InputField
          value={userName}
          placeholder="Email"
          onChangeText={text => setUserName(text)}
          style={styles.input}
          keyboardType={'email-address'}
        />
      </View>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <CustomModal visible={modalVisible}>
        <TnCPolicy />
      </CustomModal>
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
