import { Question, ResultType } from '@/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: "썸남/썸녀가 갑자기 연락이 안 올 때",
    options: [
      { text: "속상해하면서 친구들한테 하소연", type: "egen" },
      { text: "\"뭐 바쁘겠지\" 쿨하게 넘기기", type: "teto" }
    ]
  },
  {
    id: 2,
    text: "데이트 코스 정할 때",
    options: [
      { text: "\"오빠/자기가 정해~\" 애교 부리기", type: "egen" },
      { text: "\"여기 갈 거야\" 단호하게 결정", type: "teto" }
    ]
  },
  {
    id: 3,
    text: "싸울 때 나는",
    options: [
      { text: "눈물부터 나오는 타입", type: "egen" },
      { text: "팩트로 조목조목 따지는 타입", type: "teto" }
    ]
  },
  {
    id: 4,
    text: "무거운 짐 들 때",
    options: [
      { text: "\"무거워ㅠㅠ\" 도움 요청", type: "egen" },
      { text: "혼자서도 거뜬히 들기", type: "teto" }
    ]
  },
  {
    id: 5,
    text: "헬스장에서 운동할 때",
    options: [
      { text: "필라테스나 요가 선호", type: "egen" },
      { text: "3대 운동 빡세게", type: "teto" }
    ]
  },
  {
    id: 6,
    text: "카톡 말투는",
    options: [
      { text: "\"ㅎㅎ\" \"ㅠㅠ\" 이모티콘 가득", type: "egen" },
      { text: "\"ㅇㅇ\" \"ㄱㅅ\" 단답형", type: "teto" }
    ]
  },
  {
    id: 7,
    text: "친구가 고민 상담할 때",
    options: [
      { text: "\"아이고ㅠㅠ\" 공감하며 같이 울기", type: "egen" },
      { text: "\"그래서 해결책은?\" 현실적 조언", type: "teto" }
    ]
  },
  {
    id: 8,
    text: "선물 받을 때 반응",
    options: [
      { text: "\"헐 대박!!!\" 오버 리액션", type: "egen" },
      { text: "\"고마워\" 쿨한 반응", type: "teto" }
    ]
  },
  {
    id: 9,
    text: "애인이 게임할 때",
    options: [
      { text: "\"나도 봐줘ㅠㅠ\" 삐지기", type: "egen" },
      { text: "\"나도 할래\" 같이 게임하기", type: "teto" }
    ]
  },
  {
    id: 10,
    text: "프로필 사진은",
    options: [
      { text: "보정 완료된 셀카", type: "egen" },
      { text: "풍경이나 캐릭터", type: "teto" }
    ]
  }
];

export const results: Record<string, ResultType> = {
  'egen-man': {
    type: 'egen-man',
    title: '에겐남',
    subtitle: '부드러운 감성의 스윗가이',
    emoji: '🌸',
    description: [
      '터프한 겉모습과 달리 속은 여린 당신!',
      '애교도 잘 받아주고, 감성적인 대화도 가능한 이상적인 남자.',
      '여자친구 화장품 이름도 외우고, 기념일도 꼬박꼬박 챙기는 스타일.',
      '\"남자가 무슨...\" 이런 말 들으면 답답해하는 신세대 남성!'
    ],
    traits: [
      '이모티콘 마스터',
      '스킨케어 루틴 보유',
      '감동적인 영화 보고 우는 편',
      '요리도 곧잘 하는 살림꾼',
      '패션 센스 만렙'
    ],
    compatibility: {
      best: '테토녀 (서로 균형을 맞춰주는 완벽한 조합)',
      good: '에겐녀 (감성 코드가 잘 맞음)',
      challenging: '테토남 (너무 비슷해서 재미없을 수도)'
    }
  },
  'egen-woman': {
    type: 'egen-woman',
    title: '에겐녀',
    subtitle: '사랑스러운 애교 만렙 여친',
    emoji: '💕',
    description: [
      '귀엽고 사랑스러운 매력이 넘치는 당신!',
      '애교 한 번이면 세상 모든 걸 가질 수 있는 파워.',
      '연애할 때 \"오빠~\" 한 마디로 모든 걸 해결하는 마법사.',
      '화날 때도 귀여워서 미워할 수가 없는 존재!'
    ],
    traits: [
      '애교 10단',
      '셀카 여신',
      '감정 표현 만렙',
      '스킨십 좋아함',
      '기념일 챙기기 전문가'
    ],
    compatibility: {
      best: '테토남 (당신의 애교를 다 받아주는 든든한 남친)',
      good: '에겐남 (서로 애정표현이 풍부한 커플)',
      challenging: '테토녀 (성향 차이로 갈등 가능)'
    }
  },
  'teto-man': {
    type: 'teto-man',
    title: '테토남',
    subtitle: '터프한 매력의 상남자',
    emoji: '🔥',
    description: [
      '말보다 행동으로 보여주는 진짜 남자!',
      '\"괜찮아?\" 보다 \"해결해줄게\"를 먼저 하는 스타일.',
      '겉으로는 무뚝뚝해도 자기 사람 챙기는 건 누구보다 확실.',
      '운동하는 모습만 봐도 설레게 만드는 터프가이!'
    ],
    traits: [
      '과묵한 매력',
      '운동 마니아',
      '리더십 甲',
      '츤데레 스타일',
      '행동파 결정력'
    ],
    compatibility: {
      best: '에겐녀 (당신의 남성미에 푹 빠지는 관계)',
      good: '테토녀 (서로 독립적이면서도 든든한 커플)',
      challenging: '에겐남 (소통 방식이 달라 오해 가능)'
    }
  },
  'teto-woman': {
    type: 'teto-woman',
    title: '테토녀',
    subtitle: '독립적인 매력의 걸크러쉬',
    emoji: '💪',
    description: [
      '스스로 모든 걸 해결하는 독립적인 여성!',
      '연애해도 자기 생활 확실히 지키는 쿨한 스타일.',
      '애교보다는 유머로, 눈물보다는 행동으로 승부하는 타입.',
      '같이 있으면 든든하고 멋있는 언니/누나 느낌!'
    ],
    traits: [
      '셀프 인테리어 가능',
      '혼술/혼밥 전문가',
      '운전 실력 만렙',
      '이성적 사고',
      '목표 지향적'
    ],
    compatibility: {
      best: '에겐남 (서로 부족한 부분을 채워주는 관계)',
      good: '테토남 (파워 커플의 정석)',
      challenging: '에겐녀 (가치관 차이로 충돌 가능)'
    }
  }
};