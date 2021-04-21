import styled from 'styled-components';

const Component = styled.div`
  width: 100%;
  padding-bottom: 5px;
`;

const Label = styled.label`
  color: #FFFF;
  display: flex;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18px;
  justify-content: center;
  padding: 5px 5px;
`;

const Input = styled.input`
  color: #637580;
  border: none;
  font-size: 16px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding: 6px;
  width: 100%;
`;

export { Component, Label, Input };
