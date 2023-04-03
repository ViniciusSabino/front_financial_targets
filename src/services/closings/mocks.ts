import { TypesOfClosings } from '../../utils/enums/accounts.enum';
import { Closing } from './service';

const SUMMARIZED_CLOSINGS_DATA = [
  {
    type: TypesOfClosings.ESTIMATED,
    value: 90000,
  },
  {
    type: TypesOfClosings.CURRENT,
    value: 900,
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getSummarizedClosings = (userId: string): Promise<Array<Closing>> => Promise.resolve(SUMMARIZED_CLOSINGS_DATA);

export default {
  getSummarizedClosings,
};
