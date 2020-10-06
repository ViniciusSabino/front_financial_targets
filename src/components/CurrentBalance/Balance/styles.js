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
  background-color: #10C9AF;
  color: #FFF;
  display: flex;
  font-family: 'Lucida Grande';
  font-weight: bold;
  height: 25%;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
`;

const Type = styled.span`
  background-color: #DADADA;
  border-radius: 12px;
  color: #10C9AF;
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
  font-size: 20px;
  font-family: 'Lucida Grande';
  height: 75%;
  justify-content: center;
  text-transform: uppercase; 
`;

export {
  Component,
  Header,
  Type,
  Value
}
