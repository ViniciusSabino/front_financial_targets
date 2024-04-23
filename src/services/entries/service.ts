import { TypesOfEntries } from '../../enums/accounts/entries.enum';
import { SummarizedEntries } from '../../types/accounts/entries.type';

const getSummarizedEntries = async (): Promise<SummarizedEntries> => Promise.resolve({
  estimated: {
    type: TypesOfEntries.CURRENT,
    value: 0.0,
  },
  current: {
    type: TypesOfEntries.ESTIMATED,
    value: 0.0,
  },
});

export default {
  getSummarizedEntries,
};
