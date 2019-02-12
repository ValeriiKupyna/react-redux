import React from 'react';
import { withRouter } from "react-router-dom";

import { ShipsList } from '../../../sw-components/sw-list';

const AppStarships = ({ history }) => {

    return <ShipsList onSelectItem={(id) => history.push(id)} />;
}

export default withRouter(AppStarships);