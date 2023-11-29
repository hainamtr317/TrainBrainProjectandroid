import { StyleSheet, Text, View } from 'react-native';
import CustomHeader from '../components/header';
import BlackSquareGame from '../components/gameplayofremember';
import ScoreDisplay from '../components/scoredisplay';
import { useSelector } from 'react-redux';

const RememberColor=()=>{
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
        <View style={styles.scoreBox}>
            <Text style={styles.scoreText}>Score:{score}</Text>
        </View>
        </View>
        
      </View>
      {/* <View style={{flex: 1, backgroundColor: 'skyblue'}} /> */}
      <View style={styles.GamePlay}>
      <BlackSquareGame/>
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

export default RememberColor