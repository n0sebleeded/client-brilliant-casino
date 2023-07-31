import { Box, Grid, Text } from "grommet";
import '../styles/App.css';

const MainPlayMenu = () => {

    return (
        <Grid
                fill
                gap="0"
                rows={["100vh"]}
                columns={["5vw", "95vw"]}
        >
            <Box background="#E1CE87" justify="center" align="center">
                <Text className="timeTextPlayVert"> FUTURE NAV ICONS</Text>
            </Box>
            <Box background="black" justify="center" align="center">
                <Text className="timeTextPlay"> FUTURE GAME REALISATION</Text>
            </Box>
        </Grid>
    );
};

export default MainPlayMenu;