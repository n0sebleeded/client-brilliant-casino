import { Grid } from "grommet";

const GridStyled = ({children}) => {
    return (
        <Grid className="grid"
              rows={['10vh', '90vh']}
              columns={['1/2', '1/2']}
              areas={[
                  { name: 'leftHeader', start: [0, 0], end: [0, 0] },
                  { name: 'rightHeader', start: [1, 0], end: [1, 0] },
                  { name: 'leftmain', start: [0, 1], end: [0, 1] },
                  { name: 'main', start: [1, 1], end: [1, 1] },
              ]}>
            {children}
        </Grid>
    );
};

export default GridStyled;