import { TypesOfClosings } from '../../utils/enums/balances';
import { SummarizedClosings, Closing } from './service';

const summaryClosingsMapping = (closings: Array<Closing>): SummarizedClosings => {
  const emptyCurrent: Closing = { type: TypesOfClosings.CURRENT, value: 0 };
  const emptyEstimated: Closing = { type: TypesOfClosings.ESTIMATED, value: 0 };

  const current = closings.find((closing) => closing.type === TypesOfClosings.CURRENT) || emptyCurrent;
  const estimated = closings.find((closing) => closing.type === TypesOfClosings.ESTIMATED) || emptyEstimated;

  return { current, estimated, isError: false };
};

export default { summaryClosingsMapping };
