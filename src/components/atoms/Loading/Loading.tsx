import React from 'react';
import { LoadingType } from 'react-loading';

import LoadingStyle from './style';

interface LoadingProps {
  type: LoadingType
}

const DEFAULT_COLOR = '#ffffff';

const Loading = ({ type }: LoadingProps): JSX.Element => (
  <LoadingStyle type={type} color={DEFAULT_COLOR} />
);

export default Loading;
