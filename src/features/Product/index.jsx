import { Box } from '@mui/material';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import ListPage from './pages/ListPage';

function ProductFeature(props) {
    const match = useRouteMatch();

    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} exact component={ListPage} />
            </Switch>
        </Box>
    );
}

export default ProductFeature;