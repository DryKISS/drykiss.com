import { createGlobalStyle } from 'styled-components'
export const greaterthan1920 = '@media screen and (min-width: 1920px)'
export const greaterthan1440 = '@media screen and (min-width: 1440px)'
const GlobalStyle = createGlobalStyle`
html{
	overflow-x: hidden;
}
html,body{
	font-family:Poppins,sans-serif ;
}
nav{
	/*border-top-color: transparent !important;
  background-color: transparent !important;
	border-top-width: 0 !important;*/
	${greaterthan1440}{
    padding: 0 10rem !important;
	}
	${greaterthan1920}{
    padding: 0 14rem !important;
	}

}`
export default GlobalStyle
