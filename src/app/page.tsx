'use client';

import { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import QuizContainer from '@/components/quiz/QuizContainer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div 
          className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          style={{
            right: `${-mousePosition.x * 0.03}px`,
            bottom: `${-mousePosition.y * 0.03}px`,
          }}
        />
      </div>

      {/* Landing Page */}
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10">
          {/* Title with gradient */}
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                에겐
              </span>
              <span className="text-white mx-4">VS</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                테토
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mt-6 text-white/90 font-light">
              성향 테스트
            </p>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-tight animate-slide-up whitespace-nowrap overflow-hidden text-ellipsis">
            나는 부드러운 매력의 <span className="text-purple-400 font-semibold">에겐</span>? 
            아니면 터프한 매력의 <span className="text-blue-400 font-semibold">테토</span>?
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-tight animate-slide-up whitespace-nowrap overflow-hidden text-ellipsis">
            10개의 질문으로 당신의 진짜 성향을 찾아보세요
          </p>

          {/* Character Cards - Simple 1x2 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mt-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-full hover:scale-105 transition-transform">
              <span className="text-2xl">💕</span>
              <div>
                <h3 className="text-white font-bold">에겐</h3>
                <p className="text-white/70 text-sm">부드러움 · 감성적 · 애교</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 rounded-full hover:scale-105 transition-transform">
              <span className="text-2xl">🔥</span>
              <div>
                <h3 className="text-white font-bold">테토</h3>
                <p className="text-white/70 text-sm">터프함 · 독립적 · 쿨함</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <button
              onClick={handleOpenModal}
              className="group relative inline-flex items-center gap-3 px-10 py-5 overflow-hidden rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:scale-110" />
              <span className="relative z-10 text-white">테스트 시작하기</span>
              <svg className="relative z-10 w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full">
              <span className="text-xl">📊</span>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">2.6M+</p>
                <p className="text-xs">참여자</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full">
              <span className="text-xl">⏱️</span>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">2분</p>
                <p className="text-xs">소요시간</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full">
              <span className="text-xl">💯</span>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">무료</p>
                <p className="text-xs">테스트</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <QuizContainer />
      </Modal>
    </div>
  );
}
