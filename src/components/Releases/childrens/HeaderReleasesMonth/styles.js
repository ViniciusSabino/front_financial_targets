import styled from 'styled-components';

const Header = styled.div`
  background-color: #637580;
  height: 7%;

  .changeMonthIcon {
    color: #FFF;
    height: 100%;
    width: 100%;
  }

  .changeMonthIcon :hover {
    color: #DFDFDF;
  }
`;

const ReleasePreviousMonth = styled.div`
  float: left;
  height: 100%;
  width: 5%;;
`;

const ReleasePreviousNext = styled.div`
  float: right;
  height: 100%;
  width: 5%;
`;

const TitleContent = styled.div`
  float: left;
  height: 100%;
  width: 90%;
`;

const Title = styled.h1`
  color: #FFFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18px;
  line-height: 55px;
  text-align: center;
  text-transform: uppercase;
`;

export {
  Header,
  ReleasePreviousMonth,
  ReleasePreviousNext,
  TitleContent,
  Title,
};
