import React from 'react';
import { withRouter } from 'react-router-dom';

import Row from '../../../components/row/row';
import ErrorBoundy from '../../../components/error-boundry/error-boundry';
import { PlanetList } from '../../../sw-components/sw-list';
import PlanetDetail from "../../../sw-components/sw-planet-detail";

const AppPlanet = ({ history, match }) => {
    const { id } = match.params;

    const itemList = <PlanetList onSelectItem={(itemId) => history.push(itemId)} />
    const planetDetail = (<PlanetDetail selectItemId={id} />);

    return (
        <ErrorBoundy>
            <Row left={itemList} right={planetDetail} />
        </ErrorBoundy>
    );
}

export default withRouter(AppPlanet);