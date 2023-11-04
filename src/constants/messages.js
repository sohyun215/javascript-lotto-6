import { LOTTO, LOTTO_MATCHING, LOTTO_PRIZE } from './lotto.js';

const INPUT_MESSAGE = {
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumber: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
};

const PURCHASE_MESSAGE = (count) => `${count}개를 구매했습니다.\n`;

const STATISTICS_MESSAGE = {
  output: '당첨 통계\n---\n',
  bonusMatching: '보너스 볼 일치',
  result(rank, count) {
    return `${LOTTO_MATCHING[rank]} (${LOTTO_PRIZE[rank]}원) - ${count}개\n`;
  },
  rateOfReturn(rate) {
    return `총 수익률은 ${rate}%입니다.`;
  },
};

const ERROR_PREFIX = '[ERROR]';
const ERROR_MESSAGE = {
  invalidType: `${ERROR_PREFIX} 숫자만 입력 가능합니다.`,
  invalidLottoRange: `${ERROR_PREFIX} 로또 번호는 ${LOTTO.range.start}부터 ${LOTTO.range.end} 사이의 숫자여야 합니다.`,
  invalidLottoLength: `${ERROR_PREFIX} 로또 번호는 ${LOTTO.length}개여야 합니다.`,
  duplicateLottoNumber: `${ERROR_PREFIX} 로또 번호는 중복될 수 없습니다.`,
  invalidUnit: `구입 금액은 ${ERROR_PREFIX} 로또 구입 금액은 ${LOTTO.price}원 단위로 입력해야 합니다.`,
};

export { INPUT_MESSAGE, PURCHASE_MESSAGE, STATISTICS_MESSAGE, ERROR_MESSAGE };