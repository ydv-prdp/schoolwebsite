import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
html{
    font-size: 62.5%; /*1rem:10px*/
    overflow-x:hidden;
}
body{
    overflow-x:hidden;
    font-family: 'Poppins', sans-serif;
}
::-webkit-scrollbar{
    width:1.5rem;  
}
::-webkit-scrollbar-track{
   background-color:rgb(24 24 29); 
}
::-webkit-scrollbar-thumb{
    background:#fff;
    border:0.5rem solid transparent;
    border-radius:9px;
    background-clip:content-box;
}
h1{
    color:${({theme})=> theme.colors.heading};
    font-size:6rem;
    font-weight:900;
}
h2{
    color:${({theme})=> theme.colors.heading};
    font-size:4.4rem;
    font-weight:300; 
    white-space:normal;
    text-align:center;
}
h3{
    font-size:1.8rem;
    font-weight:400;
}
p{
    color:${({theme})=> theme.colors.text};
    font-size:1.65rem;
    font-weight:400;
    margin-top:1rem;
    line-height:1.5rem;
    opacity:0.7;
}
a{
    text-decoration:none;
}
li{
    list-style:none;
}
.container{
    max-width:120rem;
    margin:0 auto;
}
.grid{
    display:grid;
    gap:9rem;
}
.grid-two-columns{
    grid-template-columns: repeat(2,1fr)
}
.grid-three-column{
    grid-template-columns: repeat(3,1fr)
}
.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}
.grid-five-column{
    grid-template-columns: 1fr 1fr 1fr 1.2fr 1fr;
}

.common-heading{
    font-size:3.8rem;
    font-weight:600;
    margin-bottom:6rem;
    text-transform:capitalize;
}

input,textarea{
    max-width:50rem;
    color:${({theme})=>theme.colors.black};
    padding:1.6rem 2.4rem;
    border:1px solid ${({theme})=>theme.colors.border};
    text-transform:uppercase;
    box-shadow:${({theme})=>theme.colors.shadowSupport};
}
input[type="submit"]{
    max-width:16rem;
    margin-top:2rem;
    background-color:${({theme})=>theme.colors.btn};
    color:${({theme})=>theme.colors.white};
    padding:1.4rem 2.2rem;
    border-style:solid;
    border-width:.1rem;
    text-transform:uppercase;
    font-size:1.8rem;
    cursor:pointer;
}
@media (max-width:${({theme})=>theme.media.tab}){
    .container{
        padding: 0 3.2rem;
    }
    .grid-three-column{
        grid-template-columns:1fr 1fr;
    }
}
@media (max-width:${({theme})=>theme.media.mobile}){
    html{
        font-size:50%;
    }
    .grid{
        gap:3.2rem;
    }
    .grid-two-columns, .grid-three-column, .grid-four-column,.grid-five-column{
        grid-template-columns:1fr;
        padding:2rem;
    }
    .container{
        margin-left: 1rem;
    }
}
`