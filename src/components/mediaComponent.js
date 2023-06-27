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
const SlotMachine = styled(Image)`
  @media(min-width: 1410px) {
    scale: 55%;
    rotate: 13rad;
    flex-grow: 1;
  }
  @media(max-width: 1410px) {
    scale: 40%;
    rotate: 13rad;
    flex-grow: 1;
  }
  @media(max-width: 1024px) {
    scale: 25%;
    rotate: 13rad;
    flex-grow: 1;
  }
  @media(max-width: 640px) {
    scale: 20%;
    rotate: 13rad;
    flex-grow: 1;
  }`

const FooterText = styled(Text)`
  @media(min-width: 960px) {
    font-size: 16pt;
  }
  @media(max-width: 960px) {
    font-size: 12pt;
  }
  @media(max-width: 960px) {
    font-size: 8pt;
    line-height: 10px;
  }`

const MainText = styled(Text)`
  @media(min-width: 960px) {
    font-size: 34pt;
    line-height: normal;
  }
  @media(max-width: 960px) {
    font-size: 20pt;
    line-height: normal;
  }`

export { ResponsiveText, ResponsiveImage, SlotMachine, FooterText, MainText }