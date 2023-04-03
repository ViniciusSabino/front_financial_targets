import { TypesOfClosings } from '../../utils/enums/accounts.enum';

export interface Closing {
  type: TypesOfClosings;
  value: number;
}
export interface SummarizedClosings {
  current: Closing;
  estimated: Closing;
}

// eslint-disable-next-line require-await
const getSummarizedClosings = async (): Promise<SummarizedClosings> => {
  try {
    throw new Error('Criar essa rota');
    // const response = await api.get('/private/closings/current', {
    //   headers: { userId: '62019c68cfdad112f35788e4' },
    // });

    // const { data } = response;

    // const closings = mapper.summaryClosingsMapping(data);

    // return closings;
  } catch (error) {
    return {
      current: {
        type: TypesOfClosings.CURRENT,
        value: 0,
      },
      estimated: {
        type: TypesOfClosings.ESTIMATED,
        value: 0,
      },
    };
  }
};

export default {
  getSummarizedClosings,
};
