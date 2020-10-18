import styled from 'styled-components';

const Component = styled.div`
  background-color: #FFF;
  border-left: 1px solid #D5D3D3;
  display: inline-block;
  height: 100% ;
  width: 25%;
`;

const Header = styled.div`
  align-items: center;
  background-color: #B3CBC7;
  color: #FFF;
  display: flex;
  font-family: 'Lucida Grande';
  font-size: 15px;
  font-weight: bold;
  height: 25%;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
`;

const Type = styled.span`
  background-color: #10C9AF;
  border-radius: 12px;
  color: #FFF;
  font-size: 8px;
  font-family: 'Lucida Grande';
  margin-left: 12px;
  padding: 7px;
  text-transform: uppercase; 
`;

const Value = styled.div`
  align-items: center;
  color: #505050;
  display: flex;
  font-size: 17px;
  font-family: 'Lucida Grande';
  height: 75%;
  justify-content: center;
  text-transform: uppercase; 
`;

export {
  Component,
  Header,
  Type,
  Value,
};
