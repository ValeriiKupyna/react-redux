import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiService from '../../services/api-service';
import Spinner from '../spiner/spiner';
import Error from '../app-error/app-error';

export default class RandoPlanet extends Component {
    apiService = new ApiService();

    state = {
        planet: {},
        loading: true,
        isError: false
    }

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval  = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    }

    onLoadError = () => this.setState({
        loading: false,
        isError: true
    });

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;

        this.apiService.getPlanet(id)
           .then(this.onPlanetLoaded)
           .catch(this.onLoadError);
    }

    render() {
        const { planet, loading, isError } = this.state;

        if (isError) {
            return <Error />
        }

        return loading ? <Spinner /> : <PlanetView planet={ planet } />
    }
}

RandoPlanet.defaultProps = {
    updateInterval: 5000
}

RandoPlanet.propTypes = {
    updateInterval: PropTypes.number
}

const PlanetView = ({ planet }) => {
    const { name, population, rotationPeriod, diameter, img } = planet;

    return (
        <div className='container'>
        <div className="row">
            <div className="col-md-4">
                <img src={img} width="100%" alt="img"/>
            </div>
            <div className="col-md-8">
                <h4>{ name }</h4>

                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="term">Population</span>&nbsp;
                        <span>{ population }</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>&nbsp;
                        <span>{ rotationPeriod }</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">Diameter</span>&nbsp;
                        <span>{ diameter }</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
    );
}