import { TypesOfEntries } from '../../enums/accounts/entries.enum';

interface Entry {
  type: TypesOfEntries;
  value: number;
}

interface SummarizedEntries {
  current: Entry;
  estimated: Entry;
}

export { Entry, SummarizedEntries };
