import React, { useState,useEffect  } from 'react';
import { View, TouchableOpacity, StyleSheet,Alert, Text  } from 'react-native';
import { increment,reset } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

export default function MemoryImages() {
  const [reset,setReset]= useState(0)
  const defaultLevel = 3
  const [squares, setSquares] = useState([]);
  // const [initData,setInitDate] = useState([]);
  const [memorySquare, setmemorySquare] = useState([])
  const [currentLevel,setCurrentLevel] = useState(defaultLevel)


  const shuffleArray = (array) => {
      const shuffledArray = [...array]; // Create a copy of the original array to avoid mutation
      for (let i = shuffledArray.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          // Swap elements
      [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
    return shuffledArray;
  };
  
  const generateSquares = () => {
    const animals = ['Dog', 'Cat', 'Elephant', 'Lion', 'Tiger', 'Bear', 'Deer', 'Rabbit', 'Fox', 'Giraffe']; // Adjust the number of squares as needed
    const newSquares = Array.from({ length: animals.length }, (_, index) => ({
      id: index,
      color: '#fff',
      text: animals[index],
    }));
    return newSquares
  };
  
  const initState =async()=>{
    const initData = await generateSquares()
    setSquares(shuffleArray(initData.slice(0,currentLevel)))
  }
 const resetGame=async()=>{
  await setmemorySquare([])
  await setCurrentLevel(defaultLevel)
  const initData = await generateSquares()
  setSquares(initData.slice(0,3))
 }
  // condition for game win or lose
  const showAnnouncementLose = () => {
    Alert.alert("loss", "Enter an item", [{ text: "OK",onPress: () =>resetGame() }]);
  };
  // const showAnnouncementPass = () => {
  //   Alert.alert("pass", "Enter an item", [{ text: "OK" ,onPress: () =>levelUp()}]);

  // };

    const handlePessImages = async (square)=>{
      try {
        //check condition to pass or lose
        if(memorySquare.includes(square.text) ){
          showAnnouncementLose()
        }else{
          const newMemory = [...memorySquare]
          newMemory.push(square.text)
          setmemorySquare(newMemory)
          console.log(memorySquare)
          await setCurrentLevel(currentLevel+1)
          initState()
        }
        
      } catch (error) {
        console.log(error)
      }
  }
  
  useEffect(() => {
    initState()
  },[]);

  return (
    <View style={styles.container}>
      {squares.map((square) => (
        <TouchableOpacity
          key={square.id}
          style={[styles.square, { backgroundColor: square.color }]}
          onPress={() => handlePessImages(square)}
        >
          <Text style={{alignContent:'center',justifyContent:'center'}}>{square.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  square: {
    width: 70, // Adjust the square size as needed
    height: 70,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent:'center',

  },
});