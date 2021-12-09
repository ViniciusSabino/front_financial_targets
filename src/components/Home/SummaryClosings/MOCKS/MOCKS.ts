import { TypesOfClosings } from '../../../../utils/enums/balances';
import { SummarizedClosings } from '../service';

const SUMMARIZED_CLOSINGS_DATA = [
  {
    type: TypesOfClosings.ESTIMATED,
    value: 109400,
  },
  {
    type: TypesOfClosings.CURRENT,
    value: 900,
  },
];

const getSummarizedClosings = (): Promise<Array<SummarizedClosings>> => Promise.resolve(SUMMARIZED_CLOSINGS_DATA);

export default {
  getSummarizedClosings,
};
