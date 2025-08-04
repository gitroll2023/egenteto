'use client';

import { ResultType } from '@/types/quiz';
import { forwardRef } from 'react';

interface ShareableResultProps {
  result: ResultType;
}

const ShareableResult = forwardRef<HTMLDivElement, ShareableResultProps>(
  ({ result }, ref) => {
    return (
      <div 
        ref={ref}
        className="bg-gradient-to-br from-purple-900/90 via-black to-blue-900/90 p-6 w-[450px] mx-auto flex items-center justify-center"
        style={{ position: 'absolute', left: '-9999px', minHeight: '800px' }}
      >
        <div className="space-y-6 w-full">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">
              에겐 VS 테토 성향 테스트
            </h2>
            <p className="text-white/80 text-sm">나의 성향 분석 결과</p>
          </div>

          {/* Result */}
          <div className="text-center space-y-3">
            <div className="text-6xl">{result.emoji}</div>
            <h1 className="text-4xl font-black text-yellow-400">
              {result.title}
            </h1>
            <p className="text-xl text-white/90 font-medium">{result.subtitle}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-xs font-medium text-white/80">
                {result.type.includes('egen') ? '💜 에스트로겐형' : '💙 테스토스테론형'}
              </span>
            </div>
          </div>

          {/* Main Description */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 space-y-2">
            {result.description.map((desc, index) => (
              <p key={index} className="text-white/90 text-xs leading-tight text-center whitespace-nowrap">
                {desc}
              </p>
            ))}
          </div>

          {/* Traits */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-center text-sm">나의 특징</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {result.traits.map((trait, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1.5 bg-gradient-to-r from-white/20 to-white/10 rounded-full text-xs text-white/90 font-medium border border-white/10"
                >
                  #{trait}
                </span>
              ))}
            </div>
          </div>

          {/* Compatibility */}
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-xl p-4 space-y-3 border border-white/10">
            <h3 className="text-white font-bold text-center text-sm mb-3">💑 궁합 분석</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2.5 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg border border-pink-500/20">
                <span className="text-lg flex-shrink-0">💘</span>
                <div className="flex-1">
                  <p className="text-pink-300 text-xs font-semibold">찰떡궁합</p>
                  <p className="text-white/90 text-sm font-medium">
                    {result.compatibility.best.split(' (')[0]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/20">
                <span className="text-lg flex-shrink-0">👍</span>
                <div className="flex-1">
                  <p className="text-blue-300 text-xs font-semibold">잘 맞아요</p>
                  <p className="text-white/80 text-sm font-medium">
                    {result.compatibility.good.split(' (')[0]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/20">
                <span className="text-lg flex-shrink-0">🤔</span>
                <div className="flex-1">
                  <p className="text-yellow-300 text-xs font-semibold">노력 필요</p>
                  <p className="text-white/70 text-sm font-medium">
                    {result.compatibility.challenging.split(' (')[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center space-y-2 pt-2">
            <div className="flex items-center justify-center gap-4 text-white/60 text-xs">
              <span>에겐 VS 테토 성향 테스트</span>
              <span className="text-white/30">•</span>
              <span>2.6M+ 참여</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ShareableResult.displayName = 'ShareableResult';

export default ShareableResult;