import React from 'react';
import ItemDetail, { ItemDetailRow } from '../pages/components/app-item-detail/app-item-detail';
import withApiService from '../HOC/with-api-service/with-api-service';

const ShipsDetail = (props) => {

    return (
        <ItemDetail { ...props }>
            <ItemDetailRow label={'Model'} property={ 'model' }/>
            <ItemDetailRow label={'length'} property={ 'length' }/>
            <ItemDetailRow label={'Const'} property={ 'costInCredits' }/>
        </ItemDetail>
    );
}

const mapMathodToProps = ({ getStarship }) => ({ getData: getStarship })

export default withApiService(mapMathodToProps)(ShipsDetail);