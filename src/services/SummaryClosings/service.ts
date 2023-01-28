import { TypesOfClosings } from '../../utils/enums/balances';
import mapper from './mapper';
import api from '../apis/accounts';

export interface Closing {
  type: TypesOfClosings;
  value: number;
}
export interface SummarizedClosings {
  current: Closing;
  estimated: Closing;
  isError: boolean;
}

const getSummarizedClosings = async (): Promise<SummarizedClosings> => {
  try {
    const response = await api.get('/private/closings/current', {
      headers: { userId: '62019c68cfdad112f35788e4' },
    });

    const { data } = response;

    const closings = mapper.summaryClosingsMapping(data);

    return closings;
  } catch (error) {
    return {
      // TODO: Adicionar tratamento de erro
      current: {
        type: TypesOfClosings.CURRENT,
        value: 0,
      },
      estimated: {
        type: TypesOfClosings.ESTIMATED,
        value: 0,
      },
      isError: true,
    };
  }
};

export default {
  getSummarizedClosings,
};
