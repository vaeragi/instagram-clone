import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TnCPolicy = () => {
  return (
    <View style={{width: '50%'}}>
      <Text>Terms and Data Policy</Text>
      <Text>
        By clicking continue, you agree to our Terms and Privacy Policy. We use
        a service taht's pre-installed on your device.
      </Text>
      <TouchableOpacity style={{backgroundColor: 'white'}}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TnCPolicy;
