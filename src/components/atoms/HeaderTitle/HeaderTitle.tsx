import React from 'react';

import { Text } from './styles';

interface HeaderTitleProps {
  value: string,
}

const Header = ({ value }: HeaderTitleProps): JSX.Element => <Text>{value}</Text>;

export default Header;
