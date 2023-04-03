import React, { useEffect, useRef, useState } from 'react';

import { TypesOfClosings } from '../../../utils/enums/accounts.enum';
import service from '../../../services/closings/service';
import SummaryClosings from './SummaryClosings';
import { IInitialDataState } from '../../../slices/initialDataSlice';
import { useAppSelector } from '../../../hooks';

const SummaryClosingsContainer = (): JSX.Element => {
  const isMountedRef = useRef(false);
  const [summarizedClosings, setSummarizedClosings] = useState({
    current: { type: TypesOfClosings.CURRENT, value: 0 },
    estimated: { type: TypesOfClosings.ESTIMATED, value: 0 },
  });

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
      current={summarizedClosings.current}
      estimated={summarizedClosings.estimated}
      initialData={initialDataState}
    />
  );
};

export default SummaryClosingsContainer;
