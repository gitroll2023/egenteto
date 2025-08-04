import { Question, ResultType } from '@/types/quiz';

export const questionsByGender = {
  man: [
    {
      id: 1,
      text: "주말에 뭐하니?",
      options: [
        { text: "전시회 가고 분위기 있는 카페 탐방", type: "egen" },
        { text: "축구 보고 친구들이랑 치맥", type: "teto" }
      ]
    },
    {
      id: 2,
      text: "친구 모임에서 나는",
      options: [
        { text: "여사친들이랑 편하게 어울림", type: "egen" },
        { text: "고정 멤버 남사친들이랑 노는 중", type: "teto" }
      ]
    },
    {
      id: 3,
      text: "유튜브 알고리즘에 뜨는 건",
      options: [
        { text: "인디음악, 브이로그, 전시 리뷰", type: "egen" },
        { text: "주식, 부동산, 스포츠 하이라이트", type: "teto" }
      ]
    },
    {
      id: 4,
      text: "운동할 때 나는",
      options: [
        { text: "\"오늘은 쉬어도 되겠지...\" (안 감)", type: "egen" },
        { text: "헬스장 가서 3대 측정", type: "teto" }
      ]
    },
    {
      id: 5,
      text: "옷 스타일은",
      options: [
        { text: "유니크한 빈티지샵 아이템", type: "egen" },
        { text: "깔끔한 무지티나 브랜드 로고", type: "teto" }
      ]
    },
    {
      id: 6,
      text: "플레이리스트 들어가면",
      options: [
        { text: "백예린, 검정치마, 잔나비", type: "egen" },
        { text: "힙합, EDM, 운동할 때 듣는 노래", type: "teto" }
      ]
    },
    {
      id: 7,
      text: "말다툼할 때 나는",
      options: [
        { text: "감정적으로 상처받고 울컥함", type: "egen" },
        { text: "\"그래서 뭐 어쩌라고\" 쿨하게", type: "teto" }
      ]
    },
    {
      id: 8,
      text: "알바한다면",
      options: [
        { text: "예쁜 카페나 편집샵 알바", type: "egen" },
        { text: "돈 많이 주는 곳 어디든 OK", type: "teto" }
      ]
    },
    {
      id: 9,
      text: "연애할 때 나는",
      options: [
        { text: "여친에게 올인하는 스타일", type: "egen" },
        { text: "내 생활도 중요한 스타일", type: "teto" }
      ]
    },
    {
      id: 10,
      text: "그림이나 글쓰기 같은 창작활동",
      options: [
        { text: "취미로 즐기는 중", type: "egen" },
        { text: "관심 없음, 차라리 게임", type: "teto" }
      ]
    }
  ],
  woman: [
    {
      id: 1,
      text: "주말에 뭐하니?",
      options: [
        { text: "감성 카페 가고 전시회 탐방", type: "egen" },
        { text: "친구들이랑 핫플에서 술 한잔", type: "teto" }
      ]
    },
    {
      id: 2,
      text: "친구 모임에서 나는",
      options: [
        { text: "여사친들이랑 수다 삼매경", type: "egen" },
        { text: "남자들 무리에도 거리낌 없이", type: "teto" }
      ]
    },
    {
      id: 3,
      text: "유튜브 알고리즘에 뜨는 건",
      options: [
        { text: "감성 브이로그, 북카페 추천", type: "egen" },
        { text: "먹방, 운동 루틴, 리얼리티", type: "teto" }
      ]
    },
    {
      id: 4,
      text: "운동할 때 나는",
      options: [
        { text: "요가나 필라테스 선호", type: "egen" },
        { text: "헬스장에서 웨이트 트레이닝", type: "teto" }
      ]
    },
    {
      id: 5,
      text: "옷 스타일은",
      options: [
        { text: "은은하고 여성스러운 옷", type: "egen" },
        { text: "과감한 크롭탑이나 핫걸룩", type: "teto" }
      ]
    },
    {
      id: 6,
      text: "플레이리스트 들어가면",
      options: [
        { text: "백예린, 아이유, 감성 발라드", type: "egen" },
        { text: "신나는 클럽음악, K-POP", type: "teto" }
      ]
    },
    {
      id: 7,
      text: "말다툼할 때 나는",
      options: [
        { text: "속상해서 눈물부터 나옴", type: "egen" },
        { text: "시원하게 할 말 다 함", type: "teto" }
      ]
    },
    {
      id: 8,
      text: "이상형은",
      options: [
        { text: "감성적이고 대화 통하는 사람", type: "egen" },
        { text: "듬직하고 리드 잘하는 사람", type: "teto" }
      ]
    },
    {
      id: 9,
      text: "연애할 때 나는",
      options: [
        { text: "남친에게 올인하는 스타일", type: "egen" },
        { text: "연애해도 내 생활 지키는 스타일", type: "teto" }
      ]
    },
    {
      id: 10,
      text: "파티나 모임에서",
      options: [
        { text: "조용히 분위기 즐기기", type: "egen" },
        { text: "분위기 주도하며 놀기", type: "teto" }
      ]
    }
  ]
};

// 기본 questions 배열 (호환성을 위해 남성 질문으로 설정)
export const questions: Question[] = questionsByGender.man;

export const results: Record<string, ResultType> = {
  'egen-man': {
    type: 'egen-man',
    title: '에겐남',
    subtitle: '예술적 감성의 소프트보이',
    emoji: '🎨',
    description: [
      '전시회 보러 다니고 인디음악 듣는 감성파 남자!',
      '헬스장보다는 LP바, 축구보다는 미술관을 선호하는 당신.',
      '남사친보다 여사친이 많고, 감정 표현에 서툴지 않은 타입.',
      '빈티지샵에서 유니크한 아이템 찾는 재미로 사는 중!'
    ],
    traits: [
      '예쁜 카페 아는 척',
      '검정치마 전곡 재생목록 보유',
      '운동 극혐',
      '여사친 바글바글',
      '매니악한 취향 덕후'
    ],
    compatibility: {
      best: '테토녀 (당신의 감성을 이해해주는 쿨한 그녀)',
      good: '에겐녀 (취향이 비슷해서 데이트 코스 걱정 없음)',
      challenging: '테토남 (대화 주제가 안 맞아서 어색할 수도)'
    }
  },
  'egen-woman': {
    type: 'egen-woman',
    title: '에겐녀',
    subtitle: '감성적인 순정파 여자',
    emoji: '🎨',
    description: [
      '백예린 들으면서 감성 터지는 여린 감수성의 소유자!',
      '연애할 때 올인하다가 집착으로 발전할 수 있는 타입.',
      '핫걸룩 동경하지만 막상 입으면 어색한 은은한 찐따미.',
      '눈치 많이 보고 섬세해서 상처도 잘 받는 편!'
    ],
    traits: [
      '검정치마 덕후',
      '감성 카페 탐방',
      '여사친 무리',
      '은은한 찐따미',
      '분위기 파악 고수'
    ],
    compatibility: {
      best: '테토남 (없는 안정감을 주는 든든한 상남자)',
      good: '에겐남 (예술적 감성 공유)',
      challenging: '테토녀 (에겐녀에게 발림)'
    }
  },
  'teto-man': {
    type: 'teto-man',
    title: '테토남',
    subtitle: '운동중독 재테크광 상남자',
    emoji: '💪',
    description: [
      '헬스장 3대 측정하고 주식 차트 보는 열정맨!',
      '오래된 남사친 무리랑 주기적으로 치맥하는 의리파.',
      '단순하고 긍정적이며 뒤끝 없는 쿨한 성격.',
      '축구 보면서 소리 지르는 게 유일한 감정 표현!'
    ],
    traits: [
      '쇠질 중독',
      '축구/재테크 덕후',
      '남사친 고정멤버',
      '단순 긍정',
      '터프한 매력'
    ],
    compatibility: {
      best: '에겐녀 (당신의 터프함에 안정감 느끼는 그녀)',
      good: '테토녀 (서로 쿨한 파워커플)',
      challenging: '에겐남 (관심사가 달라서 대화 안 통함)'
    }
  },
  'teto-woman': {
    type: 'teto-woman',
    title: '테토녀',
    subtitle: '쿨한 매력의 걸크러쉬',
    emoji: '🔥',
    description: [
      '핫걸룩 척척 소화하고 시원하게 질러버리는 스타일!',
      '남자들 무리에도 거리낌 없이 어울리는 쿨한 성격.',
      '호불호 확실하지만 아군이면 든든한 사람.',
      '에겐 연출하려 노력하지만 본성은 숨기기 어려움!'
    ],
    traits: [
      '핫걸룩 소화력',
      '막 대하는 성격',
      '양아치력 보유',
      '신나는 클럽음악',
      '정치질 약함'
    ],
    compatibility: {
      best: '에겐남 (당신의 터프함을 받아주는 예술가 남친)',
      good: '테토남 (오래가는 쿨한 커플)',
      challenging: '에겐녀 (성격 차이로 트러블 발생)'
    }
  }
};