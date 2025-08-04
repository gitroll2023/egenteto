'use client';

import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';
import GenderSelectScreen from './GenderSelectScreen';
import { useQuiz } from '@/hooks/useQuiz';

export default function QuizContainer() {
  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    isComplete,
    result,
    currentAnswer,
    gender,
    handleAnswer,
    handlePrevious,
    setGender,
    resetQuiz,
    canGoPrevious,
  } = useQuiz();

  // 성별이 선택되지 않았으면 성별 선택 화면 표시
  if (!gender) {
    return <GenderSelectScreen onSelect={setGender} />;
  }

  // 퀴즈 완료 시 결과 화면 표시
  if (isComplete && result) {
    return <ResultScreen result={result} onRestart={resetQuiz} />;
  }

  // 퀴즈 진행 화면 표시
  return (
    <QuizScreen
      question={currentQuestion}
      currentIndex={currentIndex}
      totalQuestions={totalQuestions}
      currentAnswer={currentAnswer}
      onAnswer={handleAnswer}
      onPrevious={handlePrevious}
      canGoPrevious={canGoPrevious}
    />
  );
}