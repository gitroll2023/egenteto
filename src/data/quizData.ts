import { Question, ResultType } from '@/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: "친구들이나 직장 동료들 사이에서 나는",
    options: [
      { text: "어딜 가나 내가 중심", type: "egen" },
      { text: "조용히 따라다니는 편", type: "teto" }
    ]
  },
  {
    id: 2,
    text: "주말 약속을 잡을 때 나는",
    options: [
      { text: "내가 먼저 톡방에 일정 공유", type: "egen" },
      { text: "누가 먼저 말하나 눈치 보는 중", type: "teto" }
    ]
  },
  {
    id: 3,
    text: "새로운 사람을 만났을 때",
    options: [
      { text: "TMI 폭격기 가동", type: "egen" },
      { text: "상대가 물어봐야 대답", type: "teto" }
    ]
  },
  {
    id: 4,
    text: "카톡 프로필 상태메시지는",
    options: [
      { text: "오늘 기분이나 일상 실시간 업데이트", type: "egen" },
      { text: "몇 달째 그대로거나 비워둠", type: "teto" }
    ]
  },
  {
    id: 5,
    text: "인스타 스토리는",
    options: [
      { text: "하루에도 여러 개 올림", type: "egen" },
      { text: "가끔 올리거나 안 올림", type: "teto" }
    ]
  },
  {
    id: 6,
    text: "회식이나 모임에서",
    options: [
      { text: "분위기 메이커 담당", type: "egen" },
      { text: "조용히 리액션 담당", type: "teto" }
    ]
  },
  {
    id: 7,
    text: "썸 탈 때 나는",
    options: [
      { text: "적극적으로 어필하고 먼저 연락", type: "egen" },
      { text: "상대 반응 보면서 조심스럽게", type: "teto" }
    ]
  },
  {
    id: 8,
    text: "여행 계획은",
    options: [
      { text: "즉흥적으로 떠나는 게 진짜 여행", type: "egen" },
      { text: "세세하게 일정 짜야 안심", type: "teto" }
    ]
  },
  {
    id: 9,
    text: "새로운 맛집 가면",
    options: [
      { text: "인증샷 필수, 리뷰도 남김", type: "egen" },
      { text: "조용히 먹고 나옴", type: "teto" }
    ]
  },
  {
    id: 10,
    text: "팀플할 때 나는",
    options: [
      { text: "리더 역할 자연스럽게 맡음", type: "egen" },
      { text: "시키는 것만 열심히", type: "teto" }
    ]
  }
];

export const results: Record<string, ResultType> = {
  'egen-man': {
    type: 'egen-man',
    title: '에겐남',
    subtitle: '태양처럼 빛나는 에너지 뿜뿜남',
    emoji: '🌟',
    description: [
      '어디서든 주목받는 당신은 타고난 에겐남!',
      '농담 하나로 분위기를 180도 바꾸는 마성의 매력 소유자.',
      'MBTI로 치면 E 중의 E, 사람들과 함께할 때 가장 빛나는 타입이에요.',
      '가만히 있어도 사람들이 모여드는 인싸력 만렙!'
    ],
    traits: [
      '첫만남에서도 10년지기처럼',
      '침묵이 뭔지 모르는 수다쟁이',
      '인스타 스토리 하루 10개는 기본',
      '모임의 분위기 메이커',
      '새로운 사람 만나는 게 취미'
    ],
    compatibility: {
      best: '테토녀 (당신의 에너지를 차분하게 받아주는)',
      good: '에겐녀 (함께하면 시너지 폭발)',
      challenging: '테토남 (대화가 잘 안 통할 수 있음)'
    }
  },
  'egen-woman': {
    type: 'egen-woman',
    title: '에겐녀',
    subtitle: '24시간이 모자란 에너자이저',
    emoji: '✨',
    description: [
      '만나면 기분 좋아지는 비타민 같은 존재!',
      '텐션 높은 리액션과 공감 능력으로 모두를 행복하게 만드는 당신.',
      '혼자 있으면 심심해서 못 견디는 진정한 관종(긍정적 의미).',
      '당신과 함께라면 지루할 틈이 없어요!'
    ],
    traits: [
      'TMI 제조기',
      '이모티콘 없으면 대화 불가',
      '혼자 있으면 외로워 죽음',
      '만나자마자 5개 약속 잡기',
      '전화 통화 3시간은 기본'
    ],
    compatibility: {
      best: '테토남 (당신의 밝은 에너지가 그를 변화시킴)',
      good: '에겐남 (둘이 만나면 파티)',
      challenging: '테토녀 (서로 이해하는 데 시간 필요)'
    }
  },
  'teto-man': {
    type: 'teto-man',
    title: '테토남',
    subtitle: '고요한 호수같은 차분남',
    emoji: '🌙',
    description: [
      '조용하지만 깊이 있는 매력의 소유자.',
      '말은 별로 없지만 한 마디 한 마디가 다 명언.',
      '혼자만의 시간을 소중히 여기는 독립적인 성격.',
      '믿음직하고 진중한 모습으로 주변 사람들에게 안정감을 줍니다.'
    ],
    traits: [
      '생각 많고 말 적은 타입',
      '단톡방 뮤트는 기본',
      '혼자 있는 시간이 힐링',
      '소수 정예 인간관계',
      '할 말만 하는 효율주의자'
    ],
    compatibility: {
      best: '에겐녀 (그녀가 당신의 숨겨진 매력을 발견)',
      good: '테토녀 (서로를 이해하는 편안한 관계)',
      challenging: '에겐남 (대화 템포가 안 맞을 수 있음)'
    }
  },
  'teto-woman': {
    type: 'teto-woman',
    title: '테토녀',
    subtitle: '신비로운 매력의 조용한 관찰자',
    emoji: '🌸',
    description: [
      '겉으로는 차분하지만 속은 따뜻한 츤데레 스타일.',
      '친해지면 완전 다른 모습을 보여주는 반전 매력.',
      '혼자만의 취미가 확실하고 자기 세계가 뚜렷한 타입.',
      '양보다 질을 추구하는 진정한 관계를 원합니다.'
    ],
    traits: [
      '미스터리한 분위기',
      '친해지기 전까지는 철벽',
      '혼자 카페 가는 게 취미',
      '일기 쓰거나 독서하기',
      '속마음은 소수에게만 공개'
    ],
    compatibility: {
      best: '에겐남 (당신의 매력에 푹 빠짐)',
      good: '테토남 (조용한 데이트 즐기기)',
      challenging: '에겐녀 (에너지 레벨 차이로 피곤할 수 있음)'
    }
  }
};