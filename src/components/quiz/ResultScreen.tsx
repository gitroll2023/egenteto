'use client';

import { ResultType } from '@/types/quiz';
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import ShareableResult from './ShareableResult';

interface ResultScreenProps {
  result: ResultType;
  onRestart: () => void;
}

export default function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const [isSharing, setIsSharing] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const shareableRef = useRef<HTMLDivElement>(null);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `나는 ${result.title}! ${result.subtitle} 🎉\n\n나도 테스트하러 가기 👉`;

  const downloadImage = async () => {
    if (shareableRef.current) {
      const canvas = await html2canvas(shareableRef.current, {
        useCORS: true,
        allowTaint: true,
      });
      
      const link = document.createElement('a');
      link.download = `egenteto-${result.type}-result.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
    setShowDownloadModal(false);
  };

  const handleShare = async () => {
    setIsSharing(true);

    try {
      // 모바일에서 Web Share API 지원하는 경우
      if (navigator.share && /mobile/i.test(navigator.userAgent)) {
        // 이미지 캡처
        if (shareableRef.current) {
          const canvas = await html2canvas(shareableRef.current, {
            useCORS: true,
            allowTaint: true,
          });
          
          canvas.toBlob(async (blob) => {
            if (blob) {
              const file = new File([blob], 'egenteto-result.png', { type: 'image/png' });
              
              try {
                await navigator.share({
                  title: '에겐 VS 테토 성향 테스트',
                  text: shareText,
                  url: shareUrl,
                  files: [file]
                });
              } catch {
                // 이미지 공유 실패시 텍스트만 공유
                await navigator.share({
                  title: '에겐 VS 테토 성향 테스트',
                  text: shareText,
                  url: shareUrl,
                });
              }
            }
          });
        }
      } else {
        // 데스크톱이나 Web Share API 미지원 환경
        setShowDownloadModal(true);
      }
    } catch (error) {
      console.log('Share failed:', error);
      setShowDownloadModal(true);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 relative overflow-x-hidden overflow-y-auto">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-md md:max-w-lg lg:max-w-xl w-full space-y-6 sm:space-y-8 relative z-10">
        {/* Result Title */}
        <div className="text-center space-y-4 animate-slide-up">
          <div className="relative inline-block">
            <div className="text-7xl animate-bounce-in">{result.emoji}</div>
            <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl animate-pulse" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white text-center md:whitespace-nowrap">
            당신은 <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">{result.title}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light text-center md:whitespace-nowrap">{result.subtitle}</p>
          
          {/* 호르몬 타입 표시 */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-sm font-medium text-white/90">
              {result.type.includes('egen') ? '💜 에스트로겐 우세형' : '💙 테스토스테론 우세형'}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 space-y-3 animate-slide-up hover:border-white/20 transition-all duration-300" 
             style={{ animationDelay: '0.2s' }}>
          {result.description.map((desc, index) => (
            <p key={index} className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed text-center">
              {desc}
            </p>
          ))}
        </div>

        {/* Traits */}
        <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-white font-bold text-center text-lg">나의 특징</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {result.traits.map((trait, index) => (
              <span
                key={index}
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm md:text-base text-white/90 animate-scale-in hover:border-white/30 transition-all duration-300 leading-none whitespace-nowrap"
                style={{ 
                  animationDelay: `${0.4 + index * 0.05}s`,
                  transform: 'translateY(-0.5px)'
                }}
              >
                #{trait}
              </span>
            ))}
          </div>
        </div>

        {/* Compatibility */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 space-y-4 animate-slide-up hover:border-white/20 transition-all duration-300"
             style={{ animationDelay: '0.5s' }}>
          <h3 className="text-white font-bold text-center text-lg mb-4">궁합 분석</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
              <span className="text-2xl mt-1">💘</span>
              <div className="flex-1">
                <p className="text-white/60 text-xs">찰떡궁합</p>
                <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed text-center">
                  {result.compatibility.best.split(' (')[0]}
                  {result.compatibility.best.includes('(') && (
                    <span className="block text-xs sm:text-sm text-white/70 mt-1 text-center">
                      ({result.compatibility.best.split(' (')[1]}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
              <span className="text-2xl mt-1">👍</span>
              <div className="flex-1">
                <p className="text-white/60 text-xs">잘 맞아요</p>
                <p className="text-sm sm:text-base text-white/80 font-medium leading-relaxed text-center">
                  {result.compatibility.good.split(' (')[0]}
                  {result.compatibility.good.includes('(') && (
                    <span className="block text-xs sm:text-sm text-white/60 mt-1 text-center">
                      ({result.compatibility.good.split(' (')[1]}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
              <span className="text-2xl mt-1">🤔</span>
              <div className="flex-1">
                <p className="text-white/60 text-xs">노력 필요</p>
                <p className="text-sm sm:text-base text-white/70 font-medium leading-relaxed text-center">
                  {result.compatibility.challenging.split(' (')[0]}
                  {result.compatibility.challenging.includes('(') && (
                    <span className="block text-xs sm:text-sm text-white/50 mt-1 text-center">
                      ({result.compatibility.challenging.split(' (')[1]}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 animate-slide-up pt-4" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => setShowAnalysisModal(true)}
            className="group relative w-full overflow-hidden rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-75 animate-gradient-shift" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-pink-600/40 blur-xl animate-pulse" />
            
            {/* Sparkle effects */}
            <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-sparkle opacity-0" />
            <div className="absolute bottom-3 right-6 w-1.5 h-1.5 bg-white rounded-full animate-sparkle opacity-0" style={{ animationDelay: '0.3s' }} />
            <div className="absolute top-3 right-8 w-1 h-1 bg-white rounded-full animate-sparkle opacity-0" style={{ animationDelay: '0.6s' }} />
            
            <span className="relative flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white font-bold">
              {/* Lightning icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              심층 분석
            </span>
          </button>
          
          {/* 여백 추가 */}
          <div className="h-4"></div>
          
          <button
            onClick={handleShare}
            disabled={isSharing}
            className="group relative w-full overflow-hidden rounded-full font-bold text-base sm:text-lg md:text-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300 group-hover:scale-110" />
            <span className="relative flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-black">
              {isSharing ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  공유 준비 중...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.632 4.684C18.114 16.938 18 17.482 18 18c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3c.482 0 .938.114 1.342.316m0 0a3 3 0 00-4.684-4.684m4.684 4.684a3 3 0 10-4.684-4.684m0 0C11.938 8.886 11.482 9 11 9c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3c0 .482-.114.938-.316 1.342M6.342 7.658A3 3 0 103 12a3 3 0 003.342-4.342z" />
                  </svg>
                  결과 공유하기
                </>
              )}
            </span>
          </button>
          <button
            onClick={onRestart}
            className="group relative w-full overflow-hidden rounded-full font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transition-all duration-300 group-hover:scale-110" />
            <span className="relative flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white border border-white/20 rounded-full group-hover:border-white/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              다시 테스트하기
            </span>
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-white/50 text-xs animate-fade-in" 
           style={{ animationDelay: '0.8s' }}>
          2.6M+ 참여
        </p>
      </div>

      {/* Hidden Shareable Result for Screenshot */}
      <ShareableResult ref={shareableRef} result={result} />

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-sm w-full animate-scale-in">
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              결과 이미지 다운로드
            </h3>
            <p className="text-white/80 text-center mb-8">
              테스트 결과를 이미지로 저장하시겠습니까?
            </p>
            <div className="flex gap-3">
              <button
                onClick={downloadImage}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-full hover:scale-105 transition-all duration-300"
              >
                예
              </button>
              <button
                onClick={() => setShowDownloadModal(false)}
                className="flex-1 py-3 px-6 bg-white/10 text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                아니오
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Analysis Modal */}
      {showAnalysisModal && (
        <div className="fixed inset-0 bg-black/80 flex items-start justify-center z-50 px-4 overflow-y-auto py-4">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md w-full animate-scale-in">
            <div className="text-center mb-6">
              <span className="inline-block text-5xl mb-4 animate-bounce">💪</span>
              <h3 className="text-2xl font-bold text-white mb-2">
                당신의 연애에 참견해드립니다
              </h3>
              <p className="text-white/70 text-sm">
                에겐과 테토들의 현실 연애 도전기
              </p>
            </div>
            
            {/* 이미지 추가 */}
            <div className="mb-6 rounded-xl overflow-hidden bg-white/5">
              <img 
                src="/poster.jpg" 
                alt="경협치 에겐과 테토들의 도전기" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            
            <div className="text-white/90 space-y-4 mb-8">
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <p className="text-lg font-bold mb-2 text-yellow-400">
                  🎯 에겐 vs 테토, 당신은?
                </p>
                <p className="text-sm text-white/80">
                  감성파와 이성파의 치열한 대결!<br />
                  당신의 진짜 성향을 파헤쳐드립니다
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <p className="text-lg font-bold mb-2 text-pink-400">
                  💕 연애 스타일 완벽 분석
                </p>
                <p className="text-sm text-white/80">
                  나의 연애 패턴과 상대방 공략법<br />
                  꿀팁까지 한 번에 정리!
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <p className="text-lg font-bold mb-2 text-purple-400">
                  👁️ 전지적 연애 시점
                </p>
                <p className="text-sm text-white/80">
                  당신의 연애를 제3자 시점으로<br />
                  객관적으로 분석해드립니다!
                </p>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-white/60 text-xs mb-2">
                전지적 연애 시점으로 보는
              </p>
              <p className="text-yellow-400 font-bold animate-pulse">
                🔥 나의 연애 스타일 완벽 분석!
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => {
                  window.location.href = 'https://smore.im/form/GWYTZIyuK8';
                }}
                className="w-full py-4 px-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-full hover:scale-105 transition-all duration-300 text-lg shadow-lg"
              >
                에겐테토 전체 분석 받기 →
              </button>
              <button
                onClick={() => setShowAnalysisModal(false)}
                className="w-full py-3 px-6 bg-white/10 text-white/60 font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm"
              >
                나중에 볼게요
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}