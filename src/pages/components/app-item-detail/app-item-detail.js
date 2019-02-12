import React, { Component } from 'react';
import Spinner from '../../../components/spiner/spiner';
import Row from '../../../components/row/row';

export const ItemDetailRow = ({ label, property, item }) => {

    return (
        <li className="list-group-item">
            <span className="term">{ label }</span>&nbsp;
            <span>{ item[property] }</span>
         </li>)
}

export default class ItemDetail extends Component {
    state = {
        item: {},
        loading: false,
    }

    componentDidMount() {
      const { selectItemId } = this.props;

      if (selectItemId) {
        this.updatePersone(selectItemId);
      }
    }

    componentDidUpdate = (prevProps, prevState) => {
      const { selectItemId } = this.props;

      if (selectItemId !== prevProps.selectItemId) {
        this.updatePersone(selectItemId);
      }
    }

    onLaod = (item) => {
        this.setState({ item, loading: false })
    }

    updatePersone = (id) => {
        if (id) {
            this.setState({ loading: true });

            this.props.getData(id)
                .then(this.onLaod);
        }
    }
    
    render() {

        const {
            item : {
                name,
                img
            },
            loading
        } = this.state;

        const list = (
            <ul className="list-group">
                {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item: this.state.item });
                        })
                }  
            </ul>);

        if (loading) {
            return <Spinner />
        }

        return (
            <div>
                <h3>{ name }</h3>
                <Row left={<img alt='img' src={img} width="100%" />} right = { list } />
            </div>
        );
    }
}
