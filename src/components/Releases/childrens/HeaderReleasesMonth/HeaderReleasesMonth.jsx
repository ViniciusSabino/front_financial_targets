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

const HeaderReleasesMonth = ({ currentDate }) => {
  const title = `Lançamentos de ${currentDate.monthName} de ${currentDate.year}`;

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
  currentDate: PropTypes.shape({
    monthName: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default HeaderReleasesMonth;
