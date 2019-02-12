import React from 'react';
import ItemDetail, { ItemDetailRow } from '../pages/components/app-item-detail/app-item-detail';
import withApiService from '../HOC/with-api-service/with-api-service';

const PlanetDetail = (props) => {

    return (
        <ItemDetail {...props}>
            <ItemDetailRow label={'Population'} property={ 'population' }/>
            <ItemDetailRow label={'Rotation Period'} property={ 'rotationPeriod' }/>
            <ItemDetailRow label={'Diameter'} property={ 'diameter' }/>
        </ItemDetail>
    );
}

const mapMathodToProps = ({ getPlanet }) => ({ getData: getPlanet })

export default withApiService(mapMathodToProps)(PlanetDetail);
