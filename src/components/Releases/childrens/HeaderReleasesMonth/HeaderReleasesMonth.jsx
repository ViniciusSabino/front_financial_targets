import React from 'react';
import PropTypes from 'prop-types';

import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

import {
  Header,
  ReleasePreviousMonth,
  ReleasePreviousNext,
  TitleContent,
  Title,
} from './styles';

const HeaderReleasesMonth = ({ currentMonth }) => {
  const title = `Lançamentos de ${currentMonth}`;

  return (
    <Header>
      <ReleasePreviousMonth>
        <BsFillCaretLeftFill
          className="changeMonthIcon"
          title="Mês anterior"
        />
      </ReleasePreviousMonth>
      <TitleContent>
        <Title>{title}</Title>
      </TitleContent>
      <ReleasePreviousNext>
        <BsFillCaretRightFill
          className="changeMonthIcon"
          title="Mês seguinte"
        />
      </ReleasePreviousNext>
    </Header>
  );
};

HeaderReleasesMonth.propTypes = {
  currentMonth: PropTypes.string.isRequired,
};

export default HeaderReleasesMonth;
