import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{  
    font-size:10px;
  --clr-primary:#ffebcd;  
}
body, header{
padding:0;
margin:0;
box-sizing:border-box;
font-size:3rem;
}
a{
  text-decoration:none;
}
`;
