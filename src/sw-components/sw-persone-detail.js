import React from 'react';
import ItemDetail, { ItemDetailRow } from '../pages/components/app-item-detail/app-item-detail';
import withApiService from '../HOC/with-api-service/with-api-service';

const PersoneDetail = (props) => {
    return (
        <ItemDetail { ...props }>
            <ItemDetailRow label={'Gender'} property={ 'gender' }/>
            <ItemDetailRow label={'Birth Year'} property={ 'birthYear' }/>
            <ItemDetailRow label={'Eye Color'} property={ 'eyeColor' }/>
        </ItemDetail>
    );
}

const mapMathodToProps = ({ getPersone }) => ({ getData: getPersone })

export default withApiService(mapMathodToProps)(PersoneDetail);