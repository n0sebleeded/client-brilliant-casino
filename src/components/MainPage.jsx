import { FooterText, MainText } from "./mediaComponent";
import { Box } from "grommet";
import CardGroup from "./CardGroup";
import { motion } from "framer-motion";
import '../styles/App.css';
import StartBtn from "./btn/StartBtn";
import '../styles/Button.sass';

const MainPage = () => {
    const AnimatedText = motion(MainText);
    const AnimatedFooterText = motion(FooterText);

    return (
        <>
            <Box gridArea="leftmain" background="#E1CE87" justify="center" align="center">
                    <AnimatedText
                        color="#8d7a2f"
                        style={{margin: "0 15%", fontFamily: 'Roboto Mono, monospace'}}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5 }}
                    >Pet project dedicated to creating a service for playing in a gambling games implemented on
                    </AnimatedText>
                    <AnimatedText
                        color="black"
                        style={{margin: "0 15%", fontFamily: 'Roboto Mono, monospace', fontWeight: '600'}}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5 }}
                    >
                        ASP.NET & REACTJS
                    </AnimatedText>
                    <StartBtn />
            </Box>
            <Box gridArea="main" background="black" justify="end" align="center">
                    <CardGroup preset={'lobby'} />
                    <AnimatedFooterText
                        style={{margin: "0 5%", textAlign: "center", fontFamily: 'Roboto Mono, monospace'}}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5 }}
                    >
                        Gambling is a form of entertainment, but it can also be addictive. If you feel that your gambling is becoming a problem, or if you know someone who may have a gambling problem, please seek help.
                    </AnimatedFooterText>
            </Box>
        </>
    );
};

export default MainPage;