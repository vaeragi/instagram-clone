import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';

interface Props {
  visible: boolean;
  children: React.ReactNode;
}

const CustomModal = (props: Props) => {
  return (
    <Modal visible={props.visible} transparent={true} animationType={'slide'}>
      <View style={styles.container}>
        <View style={styles.subContainer}>{props.children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
