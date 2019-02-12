import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from '../app-header';
import RandoPlanet from '../app-random-planet/app-random-planet';
import Error from '../app-error/app-error';
import AppPersone from '../../pages/components/app-persone/app-persone';
import { ApiServiceProvider } from '../api-service-condex.js/api-service-condex';
import ApiService from '../../services/api-service';
import AppPlanet from '../../pages/components/app-planet/app-planet';
import AppStarships from '../../pages/components/app-starships/app-starships';
import StarshipsDetail from '../../sw-components/sw-starships-detail';
import LogginPage from '../../pages/components/loggin-page/loggin-page';
import SecrePage from '../../pages/components/secret-page/secre-page';

export class App extends Component {
    state = {
        isError: false,
        isLoggedIn: false
    }

    apiService = new ApiService();

    componentDidCatch() {
        this.setState({ isError: true })
    }

    onLoggin = () => this.setState({ isLoggedIn: true })

    render() {
        const { isError, isLoggedIn } = this.state;

        if (isError) {
            return <Error />
        }

        return (
            <div>
                <ApiServiceProvider value={this.apiService}>
                    <Router>
                        <div>
                            <AppHeader />

                            <div className="container">

                                <div className='row mb-3'>
                                    <div className='col-12'>
                                        <RandoPlanet />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-12'>
                                        <Switch>
                                            <Route path={'/'} render={() => <h1>Welcome on StartDb</h1>} exact />
                                            <Route path={'/people'} component={AppPersone} />
                                            <Route path={'/planets/:id?'} component={AppPlanet} />
                                            <Route path={'/starships'} component={AppStarships} exact />
                                            <Route path={'/starships/:id'} render={({ match }) => {
                                                const { id } = match.params
                                                return (<StarshipsDetail selectItemId={id} />)
                                            }} />

                                            <Route path={'/loggin'} render={
                                                () => <LogginPage isLoggedIn={isLoggedIn} onLoggin={this.onLoggin} />}
                                            />

                                            <Route path={'/secret'} render={() => <SecrePage isLoggedIn={isLoggedIn} />} />
                                            <Route render={() => <h2>Page not found</h2>} />
                                        </Switch>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Router>

                </ApiServiceProvider>
            </div>
        );
    }
}
