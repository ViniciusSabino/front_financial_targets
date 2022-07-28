import React, { useEffect, useRef, useState } from 'react';

import { TypesOfClosings } from '../../../utils/enums/balances';
import service, { SummarizedClosings } from '../../../services/SummaryClosings/service';
import SummaryClosings from './SummaryClosings';
import { IInitialDataState } from '../../../slices/initialDataSlice';
import { useAppSelector } from '../../../hooks';

const summarizedClosingsEmptyState: SummarizedClosings = {
  current: { type: TypesOfClosings.CURRENT, value: 0 },
  estimated: { type: TypesOfClosings.ESTIMATED, value: 0 },
};

const SummaryClosingsContainer = (): JSX.Element => {
  const isMountedRef = useRef(false);
  const [summarizedClosings, setSummarizedClosings] = useState(summarizedClosingsEmptyState);

  const initialDataState = useAppSelector<IInitialDataState>((state) => state.initialData);

  const getSummarizedClosings = async () => {
    const closings = await service.getSummarizedClosings();

    if (isMountedRef.current) setSummarizedClosings(closings);
  };

  useEffect(() => {
    isMountedRef.current = true;

    getSummarizedClosings();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <SummaryClosings
      currentClosing={summarizedClosings.current}
      estimatedClosing={summarizedClosings.estimated}
      initialData={initialDataState}
    />
  );
};

export default SummaryClosingsContainer;
