import React, { Component } from 'react';
import Spinner from '../../components/spiner/spiner';
import Error from '../../components/app-error/app-error';

const withData = (ViewComponent) => {
    return class extends Component {
        state = {
            items: [],
            loading: true,
            isError: false
        };
    
        onLoadData = (items) => {
            this.setState({ items, loading: false});
        }

        onLoadError = () => this.setState({ isError: true });
    
        componentDidMount() {
            this.props.getData()
            .then(this.onLoadData)
            .catch(this.onLoadError);
        }

        render() {
            const { loading, items, isError} = this.state;

            if (isError) return <Error />
            if (loading) return <Spinner />

            return <ViewComponent  {...this.props} items={ items }/>
        }
    

    }
}
export default withData;