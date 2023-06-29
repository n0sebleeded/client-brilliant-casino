import styled from "styled-components";
import { Text, Image } from "grommet";

const ResponsiveText = styled(Text)`
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

const FooterText = styled(Text)`
  @media(min-width: 960px) {
    font-size: 12pt;
  }
  @media(max-width: 960px) {
    font-size: 10pt;
  }
  @media(max-width: 960px) {
    font-size: 8pt;
    line-height: 10px;
  }`

const MainText = styled(Text)`
  @media(min-width: 960px) {
    font-size: 28pt;
    line-height: normal;
  }
  @media(max-width: 960px) {
    font-size: 16pt;
    line-height: normal;
  }`

export { ResponsiveText, ResponsiveImage, FooterText, MainText }