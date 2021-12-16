import { TypesOfClosings } from '../../utils/enums/balances';
import { Closing } from './service';

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

const getSummarizedClosings = (): Promise<Array<Closing>> => Promise.resolve(SUMMARIZED_CLOSINGS_DATA);

export default {
  getSummarizedClosings,
};
