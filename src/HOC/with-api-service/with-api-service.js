import React from 'react';
import { ApiServiceConsumer } from '../../components/api-service-condex.js/api-service-condex';

const withApiService = (mapMathodToProps) => (Wrapper) => {
    return (props) => {
        return (
            <ApiServiceConsumer>
                {
                    (apiService) => {
                        const apiMathods = mapMathodToProps(apiService)
                        return <Wrapper {...props} { ...apiMathods }/>
                    }
                }
             </ApiServiceConsumer>
        );
    }
}

export default withApiService;