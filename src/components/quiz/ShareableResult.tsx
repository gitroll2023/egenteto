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
        className="bg-black p-8 w-[400px] mx-auto flex items-center justify-center"
        style={{ position: 'absolute', left: '-9999px', minHeight: '600px' }}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">에겐 VS 테토 테스트</h2>
            <p className="text-white/60 text-sm">나의 성향은?</p>
          </div>

          {/* Result */}
          <div className="text-center space-y-3">
            <div className="text-5xl">{result.emoji}</div>
            <h1 className="text-3xl font-bold text-yellow-400">
              {result.title}
            </h1>
            <p className="text-lg text-white/80">{result.subtitle}</p>
          </div>

          {/* Main Description */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white/90 text-sm leading-relaxed">
              {result.description[0]}
            </p>
          </div>

          {/* Traits */}
          <div className="space-y-2">
            <h3 className="text-white font-bold text-center text-sm">나의 특징</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {result.traits.slice(0, 3).map((trait, index) => (
                <span
                  key={index}
                  className="inline-block px-3 bg-white/20 rounded-full text-xs text-white/90"
                  style={{ 
                    paddingTop: '3px',
                    paddingBottom: '5px',
                    lineHeight: '12px'
                  }}
                >
                  #{trait}
                </span>
              ))}
            </div>
          </div>

          {/* Compatibility */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-3">
            <h3 className="text-white font-bold text-center text-sm">궁합 분석</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-2 bg-white/5 rounded-lg">
                <span className="text-lg flex-shrink-0">💘</span>
                <div className="flex-1 text-left">
                  <p className="text-white/60 text-xs">찰떡궁합</p>
                  <p className="text-white/90 text-xs font-medium">
                    {result.compatibility.best.split(' (')[0]}
                    {result.compatibility.best.includes('(') && (
                      <span className="block text-xs text-white/70 mt-1">
                        ({result.compatibility.best.split(' (')[1]}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-white/5 rounded-lg">
                <span className="text-lg flex-shrink-0">👍</span>
                <div className="flex-1 text-left">
                  <p className="text-white/60 text-xs">잘 맞아요</p>
                  <p className="text-white/80 text-xs font-medium">
                    {result.compatibility.good.split(' (')[0]}
                    {result.compatibility.good.includes('(') && (
                      <span className="block text-xs text-white/60 mt-1">
                        ({result.compatibility.good.split(' (')[1]}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-white/5 rounded-lg">
                <span className="text-lg flex-shrink-0">🤔</span>
                <div className="flex-1 text-left">
                  <p className="text-white/60 text-xs">노력 필요</p>
                  <p className="text-white/70 text-xs font-medium">
                    {result.compatibility.challenging.split(' (')[0]}
                    {result.compatibility.challenging.includes('(') && (
                      <span className="block text-xs text-white/50 mt-1">
                        ({result.compatibility.challenging.split(' (')[1]}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center space-y-2">
            <p className="text-white/60 text-xs">
              에겐 VS 테토 성향 테스트
            </p>
            <p className="text-white/40 text-xs">
              2.6M+ 참여
            </p>
          </div>
        </div>
      </div>
    );
  }
);

ShareableResult.displayName = 'ShareableResult';

export default ShareableResult;