import { TypesOfClosings } from '../../utils/enums/balances';
import MOCKS from './mocks';
import mapper from './mapper';

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

  const closings = mapper.summaryClosingsMapping(data);

  return closings;
};

export default {
  getSummarizedClosings,
};
