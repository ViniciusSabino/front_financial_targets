import React, { useEffect, useRef, useState } from 'react';

import { IInitialDataState } from '../../../slices/initialDataSlice';
import { useAppSelector } from '../../../hooks';
import { TypesOfEntries } from '../../../enums/accounts/entries.enum';
import service from '../../../services/entries/service';

import SummaryEntries from './SummaryEntries';

const SummaryEntriesContainer = (): JSX.Element => {
  const isMountedRef = useRef(false);
  const [summarizedEntries, setSummarizedEntries] = useState({
    current: { type: TypesOfEntries.CURRENT, value: 0 },
    estimated: { type: TypesOfEntries.ESTIMATED, value: 0 },
  });

  const initialDataState = useAppSelector<IInitialDataState>((state) => state.initialData);

  const getSummarizedEntries = async () => {
    const entries = await service.getSummarizedEntries();

    if (isMountedRef.current) setSummarizedEntries(entries);
  };

  useEffect(() => {
    isMountedRef.current = true;

    getSummarizedEntries();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <SummaryEntries
      current={summarizedEntries.current}
      estimated={summarizedEntries.estimated}
      initialData={initialDataState}
    />
  );
};

export default SummaryEntriesContainer;
