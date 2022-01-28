import React, { useEffect, useState } from 'react';

import { TypesOfClosings } from '../../../utils/enums/balances';
import service, { SummarizedClosings } from '../../../services/SummaryClosings/service';
import SummaryClosings from './SummaryClosings';
import { InitialDataState } from '../../../features/application/initialDataSlice';
import { useAppSelector } from '../../../hooks';

const summarizedClosingsEmptyState: SummarizedClosings = {
  current: { type: TypesOfClosings.CURRENT, value: 0 },
  estimated: { type: TypesOfClosings.ESTIMATED, value: 0 },
};

const SummaryClosingsContainer = (): JSX.Element => {
  const [summarizedClosings, setSummarizedClosings] = useState(summarizedClosingsEmptyState);

  const initialDataState = useAppSelector<InitialDataState>((state) => state.initialData);

  const getSummarizedClosings = async () => setSummarizedClosings(await service.getSummarizedClosings());

  // Hooks
  useEffect(() => {
    getSummarizedClosings();
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
