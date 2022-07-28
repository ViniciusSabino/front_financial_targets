import { TypesOfClosings } from '../../utils/enums/balances';
import MOCKS from './mocks';
import mapper from './mapper';
import api from '../apis/accounts';

export interface Closing {
  type: TypesOfClosings,
  value: number;
}
export interface SummarizedClosings {
   current: Closing,
   estimated: Closing;
 }

const getSummarizedClosings = async (): Promise<SummarizedClosings> => {
  // const response = await api.get('/public/balances/current', {
  //   headers: { userId: '62019c68cfdad112f35788e4' },
  // });

  // const data2 = response.data;

  // console.log('DATA', data2);

  const data = await MOCKS.getSummarizedClosings();

  const closings = mapper.summaryClosingsMapping(data);

  return closings;
};

export default {
  getSummarizedClosings,
};
