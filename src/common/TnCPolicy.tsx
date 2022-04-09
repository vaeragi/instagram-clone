import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import IText from './IText';

type Props = {
  onPress: () => void;
};

const TnCPolicy = ({onPress}: Props) => {
  return (
    <View style={styles.container}>
      <IText size={22} type={'Bold'} style={styles.header}>
        Terms and Data Policy
      </IText>
      <IText style={styles.content}>
        By clicking continue, you agree to our{' '}
        <IText hyperlink onPress={() => console.log('clicked')}>
          Terms
        </IText>{' '}
        and{' '}
        <IText hyperlink onPress={() => console.log('clicked PP')}>
          Privacy Policy
        </IText>
        . We use a service that's pre-installed on your device to auto-update
        apps. You can turn off the service at anytime.{' '}
        <IText hyperlink onPress={() => console.log('clicked LM')}>
          Learn more.
        </IText>
      </IText>
      <Pressable style={styles.continueButton} onPress={onPress}>
        <IText type="Bold" size={15} style={styles.buttonText}>
          Continue
        </IText>
      </Pressable>
    </View>
  );
};

export default TnCPolicy;

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  header: {
    textAlign: 'center',
    paddingTop: 24,
    paddingBottom: 10,
    paddingHorizontal: 50,
  },
  content: {
    margin: 24,
    marginHorizontal: 26,
    marginTop: 0,
    textAlign: 'center',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    justifyContent: 'center',
    paddingVertical: 12,
    borderColor: '#dbdbdb',
  },
  buttonText: {
    textAlign: 'center',
    color: '#0095F6',
  },
});
