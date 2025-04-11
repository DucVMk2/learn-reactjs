import { Box, Container, Grid, Paper, styled } from '@mui/material';
import React, { useEffect } from 'react';
import productApi from '../../../api/productApi';

const LeftColumn = styled(Grid)(({ theme }) => ({
    width: '250px',
}));

const RightColumn = styled(Grid)(({ theme }) => ({
    flex: '1 1 auto',
}));

function ListPage(props) {
    useEffect(() => {
        (async () => {
            const response = await productApi.getAll({ _page: 1, _limit: 10 });
            console.log({ response });
        })();
    }, []);

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <LeftColumn item>
                        <Paper elevation={0}>Left Column</Paper>
                    </LeftColumn>

                    <RightColumn item>
                        <Paper elevation={0}>Right Column</Paper>
                    </RightColumn>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;