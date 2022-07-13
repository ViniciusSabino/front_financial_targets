import React from 'react';

import { TextStyle } from './styles';

interface TitleProps {
  text: string,
}

const Title = ({ text }: TitleProps): JSX.Element => <TextStyle>{text}</TextStyle>;

export default Title;
