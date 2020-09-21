import styled from 'styled-components';

const Header = styled.header`
  height: 140px;
  width: 100%;
`;

const HeaderTitle = styled.div`
 background-color: #54C279;
 border: 1px solid gray;
 border-radius: 3px;
 display: inline-block; 
 height: 100%;
 width: 14%;
`;

const Title = styled.p`
  color: #FFF;
  display: table;
  font-size: 23px;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 140px;
  margin: auto;
  text-transform: uppercase; 
`;

const Balance = styled.div`
 background-color: #FFF;
 border: 1px solid gray;
 border-radius: 3px;
 display: inline-block;
 height: 100% ;
 width: 17%;
`;

const TopBalance = styled.div`
background-color: #54C279;
height: 25%;
margin-top: -16px;
width: 100%;
`;

const TitleBalance = styled.p`
  color: #FFF;
  display: table;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase; 
  padding: 7px;
`;

const BalanceType = styled.span`
background-color: #938;
border-radius: 12px;
color: #FFF;
display: table; 
float: right;
font-size: 9px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
padding: 7px;
text-transform: uppercase; 
`;

const BalanceValue = styled.p`
  color: #4B4B4B;
  display: table;
  font-size: 20px;
  font-family:  Verdana, Geneva, Tahoma, sans-serif;
  line-height: 105px;
  margin: auto;
  text-transform: uppercase; 
`;

export { 
  Header, 
  HeaderTitle, 
  Title, 
  Balance, 
  TopBalance,
  TitleBalance,
  BalanceType,
  BalanceValue,
}
