import { TypesOfClosings } from '../../../utils/enums/balances';
import MOCKS from './MOCKS/MOCKS';
import { summaryClosingsMapping } from './helpers';

export interface Closing {
  type: TypesOfClosings,
  value: number;
}
export interface SummarizedClosings {
   current: Closing,
   estimated: Closing;
 }

const getSummarizedClosings = async (): Promise<SummarizedClosings> => {
  const data = await MOCKS.getSummarizedClosings();

  const closings = summaryClosingsMapping(data);

  return closings;
};

export default {
  getSummarizedClosings,
};
