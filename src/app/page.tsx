'use client';

import { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import QuizContainer from '@/components/quiz/QuizContainer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenInfoModal = () => {
    setIsInfoModalOpen(true);
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

          {/* More Info Button */}
          <div className="text-center mt-4">
            <button
              onClick={handleOpenInfoModal}
              className="text-white/60 hover:text-white text-sm underline transition-colors duration-300"
            >
              에겐과 테토에 대해 더 알아보기
            </button>
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

      {/* Info Modal */}
      <Modal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)}>
        <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">에겐</span>
              <span className="text-white mx-3">VS</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">테토</span>
            </h2>

            {/* 에겐 설명 */}
            <div className="mb-10 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
                <span className="text-3xl">💕</span>
                에겐 (Egen) - 에스트로겐형
              </h3>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mb-6">
                <p className="text-white/90 font-medium mb-2">💜 에스트로겐이 우세한 유형</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  에스트로겐은 여성 호르몬으로 알려져 있지만, 모든 성별에 존재합니다. 
                  이 호르몬이 우세한 사람들은 공감 능력이 뛰어나고, 감정 표현에 능숙하며, 
                  대인관계에서 따뜻하고 부드러운 매력을 발산합니다.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">연애 스타일</h4>
                    <p className="text-white/70 text-sm">100일, 200일 다 챙기고 이벤트 준비하는 로맨틱 스타일. 연락 뜸하면 불안해하고 애정표현 없으면 서운해함.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">소통 방식</h4>
                    <p className="text-white/70 text-sm">ㅠㅠ ㅜㅜ 자주 쓰고 이모티콘 남발. 긴 문장으로 감정 표현하고 상대방 감정 눈치 보는 편.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">취미 활동</h4>
                    <p className="text-white/70 text-sm">전시회, 북카페, 감성 맛집 탐방. 필라테스는 등록만 하고 안 감. 친구들이랑 카페에서 4시간 수다.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">특징</h4>
                    <p className="text-white/70 text-sm">처음엔 조용한데 친해지면 찐친 모드. MBTI 맹신하고 감정 기복 심함. 관심 받는 거 좋아함.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 테토 설명 */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="text-3xl">🔥</span>
                테토 (Teto) - 테스토스테론형
              </h3>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                <p className="text-white/90 font-medium mb-2">💙 테스토스테론이 우세한 유형</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  테스토스테론은 남성 호르몬으로 알려져 있지만, 모든 성별에 존재합니다. 
                  이 호르몬이 우세한 사람들은 결단력이 강하고, 목표 지향적이며, 
                  독립적이고 주도적인 성향을 보입니다. 경쟁심과 추진력이 강한 것이 특징입니다.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">연애 스타일</h4>
                    <p className="text-white/70 text-sm">연락 뜸해도 상관없고 각자 생활 중시. "뭐해?" 물으면 "그냥" 대답. 기념일도 크게 안 챙김.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">소통 방식</h4>
                    <p className="text-white/70 text-sm">ㅇㅇ ㄱㄱ ㅇㅋ 단답 마스터. 이모티콘 거의 안 씀. TMI 싫어하고 핵심만 말함.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">취미 활동</h4>
                    <p className="text-white/70 text-sm">헬스장에서 3대 측정, 축구 보면서 치맥. 게임하거나 유튜브로 주식 강의 보기.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">특징</h4>
                    <p className="text-white/70 text-sm">뭐든 빠르게 결정하고 추진력 갑. 의리 중시하고 친구 모임 안 빠짐. 루틴 철저히 지킴.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 닫기 버튼 */}
            <div className="text-center mt-8">
              <button
                onClick={() => setIsInfoModalOpen(false)}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
