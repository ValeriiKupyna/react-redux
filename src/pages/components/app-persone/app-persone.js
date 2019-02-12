import React, { Component } from 'react';
import ApiService from '../../../services/api-service';
import Row from '../../../components/row/row';
import ErrorBoundy from '../../../components/error-boundry/error-boundry';
import { PersoneList } from '../../../sw-components/sw-list';
import PersoneDetail from "../../../sw-components/sw-persone-detail";

export default class AppPersone extends Component {
    state = {
        selectItemId: null,
    }

    apiService = new ApiService();

    componentDidCatch() {
        this.setState({ isError: true })
    }

    onSelectItem = (id) => {
        this.setState({ selectItemId: id });
    };

    render() {
        const { selectItemId } = this.state;
        const itemList = <PersoneList onSelectItem = { this.onSelectItem }/>
        const personeDetail = (<PersoneDetail selectItemId={ selectItemId }/>);

        return (
            <ErrorBoundy>
                <Row left={ itemList } right={ personeDetail } />
            </ErrorBoundy>
        );
    }
}
