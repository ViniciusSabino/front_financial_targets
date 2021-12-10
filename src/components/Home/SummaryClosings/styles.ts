import styled from 'styled-components';

const Component = styled.div`
  background-color: #79AEA5;
  height: 78px;
  width: 100%;
`;

const CurrentClosing = styled.div`
  background-color: #7A9CB5;
  float: left;
  height: 100%;
  width: 47%;
`;

const EstimatedClosing = styled(CurrentClosing)`
  float: right;
`;

const CurrentTitle = styled.div`
  border-right: 1px solid #FFF;
  color: #FFF;
  float: left;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 17px;
  height: 100%;
  line-height: 78px;
  text-align: center;
  text-transform: uppercase;
  width: 75%;
`;

const EstimatedTitle = styled(CurrentTitle)`
  border-left: 1px solid #FFF;
  float: right;
`;

const CurrentValue = styled.div`
  color: #FFF;
  float: left;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 22px;
  height: 100%;
  line-height: 78px;
  text-align: center;
  text-transform: uppercase;
  width: 25%;
`;

const EstimatedValue = styled(CurrentValue)`
  float: right;
`;

export {
  Component,
  CurrentClosing,
  EstimatedClosing,
  CurrentTitle,
  EstimatedTitle,
  CurrentValue,
  EstimatedValue,
};
