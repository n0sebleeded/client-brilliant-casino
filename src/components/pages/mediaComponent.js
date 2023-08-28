import styled from "styled-components";
import { Image } from "grommet";
import {Link} from "react-router-dom";

const ResponsiveLink = styled(Link)`
  @media(min-width: 760px) {
    font-size: 30pt;
    color: black;
  }
  @media (max-width: 760px) {
    font-size: 25pt;
    color: black;
  }
  @media (max-width: 640px) {
    font-size: 20pt;
    color: black;
  }`

const ResponsiveImage = styled(Image)`
  @media(min-width: 760px) {
    width: 100px;
    height: 100px;
    margin-left: 10%;
  }
  @media(max-width: 760px) {
    width: 50px; 
    height: 50px; 
    margin-left: 10%;
  }`

export { ResponsiveLink, ResponsiveImage }