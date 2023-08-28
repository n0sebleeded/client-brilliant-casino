import { Box } from "grommet";
import DivMot from "./DivMot";

const AboutBlock = () => {
    return (
        <>
            <Box gridArea="leftmain" background="#E1CE87" justify="center" align="center">
                <DivMot>
                    <p className="styled-p">Backend dev.</p>
                    <p className="styled-p">Vitaliy Kuksa</p>
                    <p className="mail-text" >vkuksa.tech@outlook.com</p>
                </DivMot>
            </Box>
            <Box gridArea="main" background="black" justify="center" align="center">
                <DivMot>
                    <p className="styled-p">Frontend dev.</p>
                    <p className="styled-p">Danil Akhunzianov</p>
                    <p className="mail-text">devDanilAkhunzianov@outlook.com</p>
                </DivMot>
            </Box>
        </>
    );
};

export default AboutBlock;