'use client';

import { useEffect, useState } from 'react';

interface GenderSelectScreenProps {
  onSelect: (gender: 'man' | 'woman') => void;
}

export default function GenderSelectScreen({ onSelect }: GenderSelectScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState<'man' | 'woman' | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSelect = (gender: 'man' | 'woman') => {
    setSelectedGender(gender);
    setTimeout(() => {
      onSelect(gender);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        {/* Title */}
        <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            당신의 성별을 선택해주세요
          </h1>
          <p className="text-lg text-white/70">
            더 정확한 결과를 위해 필요해요
          </p>
        </div>

        {/* Gender Options */}
        <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => handleSelect('man')}
            className={`
              group relative overflow-hidden rounded-3xl p-8 transition-all duration-300
              ${selectedGender === 'man' 
                ? 'bg-gradient-to-br from-blue-600 to-cyan-600 scale-95' 
                : 'bg-white/10 hover:bg-white/20 border border-white/20'
              }
            `}
          >
            <div className="space-y-4">
              <div className="text-5xl">👨</div>
              <h3 className="text-xl font-bold text-white">남자</h3>
              <p className="text-white/80 text-sm">에겐남 / 테토남</p>
            </div>
            {selectedGender === 'man' && (
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => handleSelect('woman')}
            className={`
              group relative overflow-hidden rounded-3xl p-8 transition-all duration-300
              ${selectedGender === 'woman' 
                ? 'bg-gradient-to-br from-pink-600 to-purple-600 scale-95' 
                : 'bg-white/10 hover:bg-white/20 border border-white/20'
              }
            `}
          >
            <div className="space-y-4">
              <div className="text-5xl">👩</div>
              <h3 className="text-xl font-bold text-white">여자</h3>
              <p className="text-white/80 text-sm">에겐녀 / 테토녀</p>
            </div>
            {selectedGender === 'woman' && (
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            )}
          </button>
        </div>

        {/* Info */}
        <p className={`text-white/50 text-xs mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          성별 정보는 결과 분석에만 사용됩니다
        </p>
      </div>
    </div>
  );
}