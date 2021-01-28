import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
    a{
        text-decoration:none;
        color:inherit
    }
    *{
        margin:0;
        padding:0;
        border:0;
        vertical-align:baseline;
        box-sizing:border-box
    }
    body,html{
        font-family:'Noto Sans';
        background:#0d0d0d;
       
    }
    li {
        list-style:none
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    html{
        scroll-behavior: smooth;
        position:relative;
    }
`;

export default GlobalStyles;
