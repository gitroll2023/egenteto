'use client';

import { useEffect, useState } from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        {/* Logo Animation */}
        <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <h1 className="text-6xl font-black">
              <span className="inline-block transform hover:scale-110 transition-transform cursor-default bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                에겐
              </span>
              <span className="text-white mx-3">VS</span>
              <span className="inline-block transform hover:scale-110 transition-transform cursor-default bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                테토
              </span>
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl opacity-50 -z-10" />
          </div>
          <p className="text-2xl text-white/90 font-light">성향 테스트</p>
          <p className="text-lg text-white/70 mt-4 leading-relaxed">
            나는 에겐남(녀)일까 VS 테토남(녀)일까?
          </p>
        </div>

        {/* Info Cards */}
        <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-3">
            <p className="text-white/90 font-medium flex items-center justify-center gap-2">
              <span className="text-2xl">🎯</span>
              10개의 질문으로 알아보는 나의 성향
            </p>
            <div className="text-white/70 text-sm leading-relaxed space-y-2">
              <p>
                <span className="text-purple-400 font-semibold">에겐</span>: 부드럽고 여성적인 매력<br />
                <span className="text-xs text-white/50">(애교, 감성적, 표현이 풍부한 타입)</span>
              </p>
              <p>
                <span className="text-blue-400 font-semibold">테토</span>: 터프하고 남성적인 매력<br />
                <span className="text-xs text-white/50">(쿨함, 독립적, 행동파 타입)</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-1">
              <span className="text-lg">📊</span> 2.6M+
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1">
              <span className="text-lg">⏱️</span> 약 2분
            </span>
          </div>
        </div>

        {/* Start Button */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={onStart}
            className="group relative w-full overflow-hidden rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:scale-110" />
            <span className="relative flex items-center justify-center gap-2 px-8 py-4 text-white">
              시작하기
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}