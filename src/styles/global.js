import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 0;
}
html,
body,
#root { min-height: 100%; }
body {
  background: #E5E5E5;
}
`;
