import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const questions = [
  "Is the sky blue?",
  "Is the grass green?",
  "Is the sun hot?",
  "Is water wet?"
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [totalRuns, setTotalRuns] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === 'yes') {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const currentRunScore = (score + (answer === 'yes' ? 1 : 0)) * 100 / questions.length;
      setTotalScore(totalScore + currentRunScore);
      setTotalRuns(totalRuns + 1);
      setCurrentQuestion(0);
      setScore(0);
      alert(`Run Score: ${currentRunScore.toFixed(2)}\nAverage Score: ${(totalScore + currentRunScore) / (totalRuns + 1).toFixed(2)}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{questions[currentQuestion]}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Yes" onPress={() => handleAnswer('yes')} />
        <Button title="No" onPress={() => handleAnswer('no')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  questionText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  }
});

export default App;
