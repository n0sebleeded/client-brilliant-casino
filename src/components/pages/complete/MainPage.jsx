import { Box } from "grommet";
import CardGroup from "../other/CardGroup";
import '../../../styles/App.css';
import StartBtn from "../../btn/StartBtn";
import '../../../styles/Button.sass';
import DivMot from "../other/DivMot";
import {useEffect} from "react";
import axios from "axios";

const MainPage = () => {

    useEffect(() => {
        // Выполнение GET-запроса при монтировании компонента
        axios.get('https://catfact.ninja/fact?max_length=140')
            .then((response) => {
                // Обработка успешного ответа от сервера
                const fetchedPlayers = response.data; // Предполагается, что сервер возвращает данные в виде массива игроков
                console.log(fetchedPlayers);
            })
            .catch((error) => {
                // Обработка ошибок, если они возникнут
                console.error(error);
            });
    }, []);

    return (
        <>
            <Box gridArea="leftmain" background="#E1CE87" justify="center" align="center">
                    <DivMot>
                        <p className="main-text" style={{color: "#8d7a2f"}}>Pet project dedicated to creating a service for playing in a gambling games implemented on</p>
                    </DivMot>
                    <DivMot>
                        <p className="main-text">ASP.NET & REACTJS</p>
                    </DivMot>
                    <StartBtn />
            </Box>
            <Box gridArea="main" background="black" justify="end" align="center">
                    <DivMot style={{height: "90vh", width: "100%"}}>
                        <CardGroup preset={'lobby'} />
                    </DivMot>
                    <DivMot>
                        <p className="footer-text" style={{opacity: 0.25}}>Gambling is a form of entertainment, but it can also be addictive. If you feel that your gambling is becoming a problem, or if you know someone who may have a gambling problem, please seek help.</p>
                    </DivMot>
            </Box>
        </>
    );
};

export default MainPage;