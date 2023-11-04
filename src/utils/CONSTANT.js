const INPUT_MESSAGE = {
  purchaseAmount: "구입금액을 입력해 주세요.\n",
  winningNumbers: "당첨 번호를 입력해 주세요.\n",
  bonusNumber: "보너스 번호를 입력해 주세요.\n",
};

const OUTPUT_MESSAGE = {
  purchaseResult: "개를 구매했습니다.\n",
  prizeDistribution: "당첨 통계\n",
  divide: "---\n",
  matchCount: "개 일치",
  matchBonus: ", 보너스 볼 일치",
  totalProfitPercentage: "총 수익률은 ",
};

const ERROR_MESSAGE = {
  empty: "[ERROR] 입력된 값이 존재하지 않습니다.",
  textIncluded: "[ERROR] 숫자 외의 문자가 입력되었습니다.",
  notInthousand: "[ERROR] 1,000원 단위의 값이 아닙니다.",
  duplicated: "[ERROR] 중복된 숫자가 존재합니다.",
  notSixNumbers: "[ERROR] 6개의 숫자가 입력되지 않았습니다.",
  notInRange: "[ERROR] 1 ~ 45 사이의 숫자를 입력해야 합니다.",
};

const RANKS = [
  {
    rank: "first",
    matchCount: 6,
    bonus: false,
    prize: 2000000000,
  },
  {
    rank: "second",
    matchCount: 5,
    bonus: true,
    prize: 30000000,
  },
  {
    rank: "third",
    matchCount: 5,
    bonus: false,
    prize: 1500000,
  },
  {
    rank: "fourth",
    matchCount: 4,
    bonus: false,
    prize: 50000,
  },
  {
    rank: "fifth",
    matchCount: 3,
    bonus: false,
    prize: 5000,
  },
];

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE, RANKS };
