'use client';

import { Question } from '@/types/quiz';
import { useState, useEffect } from 'react';

interface QuizScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  currentAnswer?: 'egen' | 'teto';
  onAnswer: (type: 'egen' | 'teto') => void;
  onPrevious: () => void;
  canGoPrevious: boolean;
}

export default function QuizScreen({ 
  question, 
  currentIndex, 
  totalQuestions,
  currentAnswer,
  onAnswer,
  onPrevious,
  canGoPrevious
}: QuizScreenProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  useEffect(() => {
    // 이전 답변이 있으면 해당 옵션을 선택된 상태로 표시
    if (currentAnswer) {
      const previousSelectedIndex = question.options.findIndex(opt => opt.type === currentAnswer);
      setSelectedOption(previousSelectedIndex);
    } else {
      setSelectedOption(null);
    }
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 100);
    return () => clearTimeout(timer);
  }, [currentIndex, currentAnswer, question.options]);

  const handleSelect = (index: number, type: 'egen' | 'teto') => {
    setSelectedOption(index);
    // 이전 답변이 있는 경우에는 선택만 하고 자동으로 넘어가지 않음
    if (!currentAnswer) {
      // 처음 선택하는 경우에만 자동으로 다음으로
      setTimeout(() => {
        onAnswer(type);
      }, 400);
    }
  };

  const handleNext = () => {
    const selectedType = question.options[selectedOption!].type;
    onAnswer(selectedType);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {/* Enhanced gradient circles - more visible */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/6 right-1/6 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* More visible floating particles */}
        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute bottom-1/3 left-2/3 w-2.5 h-2.5 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-purple-400/35 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
        <div className="absolute top-1/6 right-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }} />
        <div className="absolute bottom-1/6 left-1/4 w-2 h-2 bg-yellow-400/20 rounded-full animate-ping" style={{ animationDelay: '2.5s', animationDuration: '4s' }} />
        
        {/* More noticeable moving elements */}
        <div className="absolute top-1/3 left-1/6 w-40 h-40 bg-gradient-to-r from-white/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 right-1/5 w-36 h-36 bg-gradient-to-l from-white/20 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '5s' }} />
      </div>

      {/* Progress Bar - With padding to avoid overlap with exit button */}
      <div className="relative z-10 pt-12">
        <div className="w-full bg-white/5 h-2 backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse" />
          </div>
        </div>
        <div className="flex justify-between px-4 py-2">
          <span className="text-white/80 text-sm font-medium">진행률</span>
          <span className="text-white text-sm font-bold">{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 relative z-10">
        <div className="max-w-lg w-full space-y-8">
          {/* Question Number Badge */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse" />
              질문 {currentIndex + 1} / {totalQuestions}
            </span>
          </div>

          {/* Question */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center leading-tight px-2 whitespace-nowrap overflow-hidden text-ellipsis">
              {question.text}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-4 mt-12">
            {question.options.map((option, index) => {
              const isEgen = option.type === 'egen';
              const isSelected = selectedOption === index;
              
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index, option.type)}
                  disabled={false}
                  className={`
                    group relative w-full p-6 text-left rounded-2xl transition-all duration-300
                    ${isSelected 
                      ? isEgen 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-[0.98] shadow-2xl shadow-purple-500/25' 
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white scale-[0.98] shadow-2xl shadow-blue-500/25'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                    }
                    ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}
                    disabled:cursor-not-allowed
                  `}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transitionDelay: isAnimating ? `${index * 0.1}s` : '0s'
                  }}
                >
                  {/* Option Number */}
                  <span className={`
                    absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black transition-all duration-300
                    ${isSelected 
                      ? 'text-white/90' 
                      : 'text-white/70 group-hover:text-white/90'
                    }
                  `}>
                    {index + 1}
                  </span>
                  
                  {/* Option Text */}
                  <span className="text-lg font-medium pl-12 pr-4 block">
                    {option.text}
                  </span>

                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute right-6 top-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-scale-in">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Hover Effect */}
                  {!isSelected && selectedOption === null && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            {canGoPrevious && (
              <button
                onClick={onPrevious}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                이전 질문
              </button>
            )}
            
            {currentAnswer && selectedOption !== null && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105"
              >
                다음 질문
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}