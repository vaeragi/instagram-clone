import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import IText from '../common/IText';
import Colors from '../utils/constants/Colors';
import Strings from '../utils/constants/Strings';

type Props = {
  onPress: () => void;
};

const PolicyInfo = ({onPress}: Props) => {
  return (
    <View style={styles.container}>
      <IText size={22} type={'Bold'} style={styles.header}>
        {Strings.termsAndDataPolicy}
      </IText>
      <IText style={styles.content}>
        {Strings.termsAndDataPolicyText1}
        <IText hyperlink onPress={() => console.log('clicked')}>
          {Strings.terms}
        </IText>
        {Strings.and}
        <IText hyperlink onPress={() => console.log('clicked PP')}>
          {Strings.privacyPolicy}
        </IText>
        {Strings.termsAndDataPolicyText2}
        <IText hyperlink onPress={() => console.log('clicked LM')}>
          {Strings.learnMore}.
        </IText>
      </IText>
      <Pressable style={styles.continueButton} onPress={onPress}>
        <IText type="Bold" size={15} style={styles.buttonText}>
          {Strings.continue}
        </IText>
      </Pressable>
    </View>
  );
};

export default PolicyInfo;

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
    color: Colors.blue,
  },
});
