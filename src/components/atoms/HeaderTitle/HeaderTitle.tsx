import React from 'react';

import Styles from './styles';

const { Text } = Styles;

interface HeaderTitleProps {
  value: string,
}

const Header = ({ value }: HeaderTitleProps): JSX.Element => <Text>{value}</Text>;

export default Header;
