import styled from 'styled-components';

const Component = styled.div`
  background-color: #7A9CB5;
  float: ${(props) => (props.position)};
  height: 100%;
  width: 47.4%;
`;

const ComponentTitle = styled.div`
  background-color: #7A9CB5;
  float: ${(props) => (props.position)};
  height: 100%;
  line-height: 55px;
  width: 80%;
`;

const Title = styled.p`
  color: #FFFF;
  float: ${(props) => (props.position === 'left' ? 'right' : 'left')};
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;

  ${(props) => `
       margin-${(props.position === 'left' ? 'right' : 'left')}:20px;
    `};
`;

const ComponentValue = styled.div`
  background-color: #7A9CB5;
  float: ${(props) => (props.position)};
  height: 100%;
  width: 20%;

  ${(props) => `
       border-${props.position}:1px #E7E7E7 solid;
    `};
`;

const Value = styled.p`
  color: #FFFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18px;
  line-height: 55px;
  text-align: center;
  text-transform: uppercase;
`;

export {
  Component,
  ComponentTitle,
  Title,
  ComponentValue,
  Value,
};
