import { StyleSheet, Text, View } from 'react-native';
import CustomHeader from '../components/header';
import { useSelector } from 'react-redux';
import ScoreDisplay from '../components/scoredisplay';
import MemoryImages from '../components/memoryimage';

export default function RememberImages(){
  const score = useSelector((state)=>state.counter)
    return(
      <View style={{flex: 1}}>
      <View style={styles.Headers}>
        <CustomHeader title='Màn 1'/>
        <View style={{
          flex: 1,
          top:'-10',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ScoreDisplay/>
        </View>
      </View>
        <View style={styles.GamePlay}>
        <MemoryImages/>
        </View>
    </View>
    )   
}

const styles = StyleSheet.create({
  Headers: {
    flex: 1
    ,backgroundColor: '#82cafa'
    ,top:10
  },
  GamePlay:{
    flex:4,
    backgroundColor:'#82cafa',
    justifyContent:'center'
  },
  scoreBox: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 50, // Make the border radius half of the width to create an oval shape
    width: 200,
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});
