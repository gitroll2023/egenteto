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
        scale: 2,
        logging: false,
      } as any);
      
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
            scale: 2,
            logging: false,
          } as any);
          
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
              } catch (error) {
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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Result Title */}
        <div className="text-center space-y-4 animate-slide-up">
          <div className="relative inline-block">
            <div className="text-7xl animate-bounce-in">{result.emoji}</div>
            <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            당신은 <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">{result.title}</span>
          </h1>
          <p className="text-xl text-white/80 font-light">{result.subtitle}</p>
        </div>

        {/* Description */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 space-y-3 animate-slide-up hover:border-white/20 transition-all duration-300" 
             style={{ animationDelay: '0.2s' }}>
          {result.description.map((desc, index) => (
            <p key={index} className="text-white/90 leading-relaxed">
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
                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/90 animate-scale-in hover:border-white/30 transition-all duration-300 leading-none"
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
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 space-y-4 animate-slide-up hover:border-white/20 transition-all duration-300"
             style={{ animationDelay: '0.5s' }}>
          <h3 className="text-white font-bold text-center text-lg mb-4">궁합 분석</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
              <span className="text-2xl mt-1">💘</span>
              <div className="flex-1">
                <p className="text-white/60 text-xs">찰떡궁합</p>
                <p className="text-white/90 font-medium leading-relaxed">
                  {result.compatibility.best.split(' (')[0]}
                  {result.compatibility.best.includes('(') && (
                    <span className="block text-sm text-white/70 mt-1">
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
                <p className="text-white/80 font-medium leading-relaxed">
                  {result.compatibility.good.split(' (')[0]}
                  {result.compatibility.good.includes('(') && (
                    <span className="block text-sm text-white/60 mt-1">
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
                <p className="text-white/70 font-medium leading-relaxed">
                  {result.compatibility.challenging.split(' (')[0]}
                  {result.compatibility.challenging.includes('(') && (
                    <span className="block text-sm text-white/50 mt-1">
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
            onClick={handleShare}
            disabled={isSharing}
            className="group relative w-full overflow-hidden rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300 group-hover:scale-110" />
            <span className="relative flex items-center justify-center gap-2 px-8 py-4 text-black">
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
            onClick={() => setShowAnalysisModal(true)}
            className="group relative w-full overflow-hidden rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transition-all duration-300 group-hover:scale-110" />
            <span className="relative flex items-center justify-center gap-2 px-8 py-4 text-white border border-white/20 rounded-full group-hover:border-white/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              심층 분석
            </span>
          </button>
          <button
            onClick={onRestart}
            className="group relative w-full overflow-hidden rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transition-all duration-300 group-hover:scale-110" />
            <span className="relative flex items-center justify-center gap-2 px-8 py-4 text-white border border-white/20 rounded-full group-hover:border-white/30">
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md w-full animate-scale-in">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              심층 분석을 원하시나요? 🤔
            </h3>
            <div className="text-white/80 text-center space-y-4 mb-8">
              <p>
                자신을 더 깊이 이해하고 싶다면,<br />
                수업을 열심히 들어보세요! 📚
              </p>
              <p className="text-lg font-medium text-yellow-400">
                열심히 공부하면 자신을 더 잘 알 수 있어요 ✨
              </p>
              <p className="text-sm text-white/60">
                지식이 쌓일수록 나에 대한 이해도 깊어집니다
              </p>
            </div>
            <button
              onClick={() => setShowAnalysisModal(false)}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition-all duration-300"
            >
              알겠습니다!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}