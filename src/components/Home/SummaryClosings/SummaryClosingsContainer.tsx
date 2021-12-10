import React, { useEffect, useState } from 'react';
import { TypesOfClosings } from '../../../utils/enums/balances';

import service, { SummarizedClosings } from './service';

import SummaryClosings from './SummaryClosings';

const summarizedClosingsEmptyState: SummarizedClosings = {
  current: { type: TypesOfClosings.CURRENT, value: 0 },
  estimated: { type: TypesOfClosings.ESTIMATED, value: 0 },
};

const SummaryClosingsContainer = (): JSX.Element => {
  const [summarizedClosings, setSummarizedClosings] = useState(summarizedClosingsEmptyState);

  const getSummarizedClosings = async () => setSummarizedClosings(await service.getSummarizedClosings());

  // Hooks
  useEffect(() => {
    getSummarizedClosings();
  }, []);

  return (
    <SummaryClosings
      currentClosing={summarizedClosings.current}
      estimatedClosing={summarizedClosings.estimated}
    />
  );
};

export default SummaryClosingsContainer;
