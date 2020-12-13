import styled from 'styled-components';

const Component = styled.div`
  background-color: #FFF;
  display: inline-block;
  height: 100%;
  width: 25%;
`;

const Header = styled.div`
  align-items: center;
  background-color: #1260A9;
  display: flex;
  height: 35%;
  width: 100%;
`;

const Title = styled.p`
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  padding-left: 10px;
  text-transform: uppercase;
`;

const Type = styled.span`
  background-color: #12A994;
  border-radius: 12px;
  color: #FFF;
  font-size: 9px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande';
  margin-left: 13px;
  padding: 7px;
  text-transform: uppercase; 
`;

const Value = styled.div`
  align-items: center;
  border-left: 1px solid #1260A9;
  color: #505050;
  display: flex;
  font-size: 18px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande';
  height: 65%;
  justify-content: center;
  text-transform: uppercase; 
`;

export {
  Component,
  Header,
  Title,
  Type,
  Value,
};
