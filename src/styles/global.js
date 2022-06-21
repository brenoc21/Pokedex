import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

* {

box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Poppins', sans-serif;

}  
:root{
    --white: #FFF;
    --light-gray: #f8f9fa;
    --gray: #a0a0a0;
    --black: #000;
    --background: rgba(0, 0, 0, .5);
    --red: #ff6666;
    --error-red: #ff4444;
    --blue: #4390C9;
    --green: #B2D4B2;
    --success-green: #246924;
    --dark-green: #428742;
}

`;
export default GlobalStyle;
