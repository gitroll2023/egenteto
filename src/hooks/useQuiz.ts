'use client';

import { useState, useCallback } from 'react';
import { QuizState, ResultType } from '@/types/quiz';
import { questionsByGender, results } from '@/data/quizData';

const initialState: QuizState = {
  currentQuestion: 0,
  answers: [],
  isComplete: false,
  result: null,
  gender: null,
};

export function useQuiz() {
  const [state, setState] = useState<QuizState>(initialState);

  const calculateResult = useCallback((answers: ('egen' | 'teto')[], gender: 'man' | 'woman'): ResultType => {
    const egenCount = answers.filter(answer => answer === 'egen').length;
    const tetoCount = answers.filter(answer => answer === 'teto').length;
    
    if (egenCount > tetoCount) {
      return results[`egen-${gender}`];
    } else {
      return results[`teto-${gender}`];
    }
  }, []);

  const handleAnswer = useCallback((type: 'egen' | 'teto') => {
    setState(prev => {
      // 현재 질문에 대한 답변이 이미 있는지 확인
      const isAnswerUpdate = prev.answers.length > prev.currentQuestion;
      let newAnswers: ('egen' | 'teto')[];
      
      if (isAnswerUpdate) {
        // 기존 답변 업데이트
        newAnswers = [...prev.answers];
        newAnswers[prev.currentQuestion] = type;
      } else {
        // 새로운 답변 추가
        newAnswers = [...prev.answers, type];
      }
      
      const nextQuestion = prev.currentQuestion + 1;
      const questions = prev.gender ? questionsByGender[prev.gender] : questionsByGender.man;
      
      if (nextQuestion >= questions.length) {
        const result = prev.gender ? calculateResult(newAnswers, prev.gender) : null;
        return {
          ...prev,
          answers: newAnswers,
          isComplete: true,
          result,
        };
      }
      
      return {
        ...prev,
        currentQuestion: nextQuestion,
        answers: newAnswers,
      };
    });
  }, [calculateResult]);

  const handlePrevious = useCallback(() => {
    setState(prev => {
      if (prev.currentQuestion === 0) return prev;
      
      return {
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
        // 답변은 그대로 유지 (삭제하지 않음)
      };
    });
  }, []);

  const setGender = useCallback((gender: 'man' | 'woman') => {
    setState(prev => ({
      ...prev,
      gender,
    }));
  }, []);

  const resetQuiz = useCallback(() => {
    setState(initialState);
  }, []);

  const questions = state.gender ? questionsByGender[state.gender] : questionsByGender.man;
  const currentQuestion = questions[state.currentQuestion];
  const currentAnswer = state.answers[state.currentQuestion];

  return {
    currentQuestion,
    currentIndex: state.currentQuestion,
    totalQuestions: questions.length,
    isComplete: state.isComplete,
    result: state.result,
    currentAnswer,
    gender: state.gender,
    handleAnswer,
    handlePrevious,
    setGender,
    resetQuiz,
    canGoPrevious: state.currentQuestion > 0,
  };
}