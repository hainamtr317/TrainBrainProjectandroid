import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you are using Expo for vector icons
// import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { reset } from '../redux/action';
const CustomHeader = ({ title }) => {
//   const navigation = useNavigation();
const dispatch = useDispatch()
const handleresetscore = () => {
  dispatch(reset());
};
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleresetscore}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightButtons}>
        <TouchableOpacity>
          <MaterialIcons name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="more-vert" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#82cafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightButtons: {
    flexDirection: 'row',
  },
});

export default CustomHeader;