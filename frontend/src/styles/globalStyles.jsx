import styled, { createGlobalStyle, css } from 'styled-components';
import { theme } from '../themes';

export const GlobalStyle = createGlobalStyle`

 :root {
    --hue: 200;
    --saturation: 70%;
    --lightness: 55%;
    --main-color: hsl(var(--hue), var(--saturation), var(--lightness));
  }

  html,
  body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: scroll;

    ${
      '' /* ::selection {
      color: ${({ theme }) => theme.color.textWhite};
      background-color: var(--main-color);

    }

    ::-webkit-scrollbar {
    width: 5px;
  } */
    }

   ${
     '' /* ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.bodyBgColor};
  }

::-webkit-scrollbar-thumb {
    background-color:var(--main-color);
  } */
   }


    ::-webkit-scrollbar{
      display: none;
    }
  }

     * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border:0;
    text-decoration: none;
    list-style: none;
  }

  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
  font-size: 62.5%;
  font-family: sans-serif;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}

  body {
     max-width: 1500px;
    margin: auto;
    ${'' /* border: 2px solid red; */}
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.fsmd};
    ${'' /* line-height: 1.5; */}
    background-color: ${({ theme }) => theme.color.bodyBgColor};

  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.3rem;
  }


ul {
  list-style: none;
  li{
    padding: 0;
    margin: 0;
  }
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  vertical-align: middle;

}

button {
  outline: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}

input {
   outline: none;
  border: none;
  :focus {
    outline: none;
  }
}

.toast-message {
  background: darkblue;
  color: #fff;
  font-size: 20px;
  width: 34vw;
  padding: 30px 20px;
}

.header.bg-reveal::before {
  transform: translateY(0)
}
`;

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 0 15px;
  /* border: 2px dashed blue; */

  ${(props) =>
    props.primary &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}

  ${(props) =>
    props.form &&
    css`
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 150px;
    `}
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;

  ${(props) =>
    props.contact &&
    css`
      max-width: 1000px;
      margin: auto;
    `}

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    grid-template-columns: 1fr;
  }
`;
