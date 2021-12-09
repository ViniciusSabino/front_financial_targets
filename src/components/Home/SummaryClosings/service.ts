import { TypesOfClosings } from '../../../utils/enums/balances';
import MOCKS from './MOCKS/MOCKS';

export interface SummarizedClosings {
  type: TypesOfClosings,
  value: number;
 }

const getSummarizedClosings = async (): Promise<Array<SummarizedClosings>> => {
  const data = await MOCKS.getSummarizedClosings();

  return data;
};

export default {
  getSummarizedClosings,
};
