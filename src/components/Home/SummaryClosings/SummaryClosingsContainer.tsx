import React, { useEffect, useState } from 'react';

import service, { SummarizedClosings } from './service';

import SummaryClosings from './SummaryClosings';

const summarizedClosingsEmptyState: Array<SummarizedClosings> = [];

const SummaryClosingsContainer = (): JSX.Element => {
  const [summarizedClosings, setSummarizedClosings] = useState(summarizedClosingsEmptyState);

  const getSummarizedClosings = async () => setSummarizedClosings(await service.getSummarizedClosings());

  // Hooks
  useEffect(() => {
    getSummarizedClosings();
  }, []);

  return (
    <SummaryClosings closings={summarizedClosings} />
  );
};

export default SummaryClosingsContainer;
