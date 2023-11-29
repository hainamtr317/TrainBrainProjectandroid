import React, { useState,useEffect  } from 'react';
import { View, TouchableOpacity, StyleSheet,Alert  } from 'react-native';
import { increment,reset } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';


const BlackSquareGame = () => {
  const levelGrid =[6,9,12,16,20]
  const dispatch = useDispatch();
  const initLevel = 0;
  const [squares, setSquares] = useState([]);
  // const [hintSquare,setHintSquare] = useState([])
  const [currentLevel,setCurrentLevel]= useState(initLevel)
  const [isVisible, setIsVisible] = useState(true);
// Adjust the grid size as needed

const getRandomNumber = (min, max, excludedNumbers) => {
  let random;
  do {
    random = Math.floor(Math.random() * (max - min + 1) + min);
  } while (excludedNumbers.includes(random));
  return random;
};


// count score
  const handleIncrement = () => {
    dispatch(increment());
  };
// fun to set value
 const levelUp= async ()=>{
  setCurrentLevel(currentLevel+1)
  setIsVisible(true)
 }

// create square to render
  const generateSquares = (level) => {
    const minRange = 0;
    const maxRange = levelGrid[level]-1;
    const newRandomNumbers = [];
    // init create a square to remember
    while (newRandomNumbers.length < levelGrid[level]/3) {
      const newRandom = getRandomNumber(minRange, maxRange, newRandomNumbers);
      newRandomNumbers.push(newRandom);
    }
    const numberOfSquares = levelGrid[level]; // Adjust the number of squares as needed
    const newSquares =  Array.from({ length: numberOfSquares }, (_, index) => ({
      color: '#fff',
      rightSquare: newRandomNumbers.includes(index) // Mark the last square as the "right square"
    }));
    //newRandomNumbers.includes(index)?'blue':'#fff'
    // setHintSquare(hint)
    // console.log(hintSquare)
    return newSquares
  };

  //
  const initGamePlay=async(level)=>{
    try {
      // await generateRandomNumbers(0);
      await setSquares(generateSquares(level))
   
    } catch (error) {
      console.log(error)
    }
    
  }
  //reset game
  const resetGame=()=>{
    setSquares(generateSquares(currentLevel))
    setIsVisible(true)
    hideText()
    
  }
  // condition for game win or lose
  const showAnnouncementLose = () => {
    Alert.alert("loss", "Enter an item", [{ text: "OK",onPress: () =>resetGame() }]);
  };
  const showAnnouncementPass = () => {
    Alert.alert("pass", "Enter an item", [{ text: "OK" ,onPress: () =>levelUp()}]);

  };


    const CheckPasslevel=(level)=>{
    let passval = 0 
    console.log(`level:${ currentLevel}`)
    squares.map((e)=>{
      if(e.color == 'blue'){
        passval++
      }
    })
    if (passval == level+2) {
      return true
    }
    else{
      return false
    }

    }

//
const hideText = () => {
  setIsVisible(false);
  setTimeout(() => setIsVisible(true), 12000); // Re-show after 12 seconds
}; // Clear the timer if the component is unmounted

  const handleSquarePress = async (index) => {
    const newSquares = [...squares];
    if(squares[index].rightSquare){
        newSquares[index].color = 'blue';
        setSquares(newSquares)
        handleIncrement()
        try {
          if(CheckPasslevel(currentLevel)){
            showAnnouncementPass()
          }
        } catch (error) {
          console.log(error)
        }

    }
    else{
        newSquares[index].color = 'red';
        setSquares(newSquares);
        try {
            showAnnouncementLose()         
        } catch (error) {
          console.log(error)
        }
    }

  };


    useEffect(() => {
      initGamePlay(currentLevel)
      hideText()
      console.log(1)
}, [currentLevel]);

  return (
    <View >
      {isVisible&&<View style={styles.container}>
        {squares.map((e, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.square,
            { backgroundColor: squares[index].color },
          ]}
          onPress={() => handleSquarePress(index)}
        />
      ))}</View>}
      {!isVisible&&<View style={styles.container}>
      {squares.map((e, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.square,
            { backgroundColor: squares[index].rightSquare?'blue':'#fff' },
          ]}
        />
      ))}
      </View>
      }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  square: {
    width: 50, // Adjust the square size as needed
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default BlackSquareGame;