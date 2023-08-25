import {MailText, MainText} from "../mediaComponent";
import { Box } from "grommet";
import { motion } from "framer-motion";

const AboutBlock = () => {
    const AnimatedText = motion(MainText);
    const AnimatedMail = motion(MailText);

    return (
        <>
            <Box gridArea="leftmain" background="#E1CE87" justify="center" align="center">
                <AnimatedText
                    className="about-block"
                    color="#8d7a2f"
                    style={{margin: "0 15%"}}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Backend dev.
                </AnimatedText>
                <AnimatedText
                    className="about-block"
                    color="black"
                    style={{margin: "0 15%"}}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    Vitaliy Kuksa
                </AnimatedText>
                <AnimatedMail
                    className="about-block"
                    color="#8d7a2f"
                    style={{margin: "0 15%"}}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    vkuksa.tech@outlook.com
                </AnimatedMail>
            </Box>
            <Box gridArea="main" background="black" justify="center" align="center">
                <AnimatedText
                    className="about-block"
                    color="#353535"
                    style={{margin: "0 15%"}}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    Frontend dev.
                </AnimatedText>
                <AnimatedText
                    className="about-block"
                    color="white"
                    style={{margin: "0 15%"}}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    Danil Akhunzianov
                </AnimatedText>
                <AnimatedMail
                    className="about-block"
                    color="#353535"
                    style={{margin: "0 15%"}}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    devDanilAkhunzianov@outlook.com
                </AnimatedMail>
            </Box>
        </>
    );
};

export default AboutBlock;