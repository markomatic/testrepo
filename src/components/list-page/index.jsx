'use strict';

import React, { Component } from 'react';
import { getCountries } from './../../redux/actions/countries';
import { connect } from 'react-redux';
import _ from 'lodash';

class ListPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            filter: ''
        };

        this.handleInput = this.handleInput.bind(this);
    }

    componentWillMount() {
        this.props.getCountries();
    }

    handleInput(event) {
        this.setState({
            filter: event.target.value
        });
    }

    render() {
        return (
            <div className="ListPage">
                <input type="text"
                       onChange={this.handleInput}
                       value={this.state.filter} />
                {this.renderCountries()}
            </div>
        );
    }

    renderCountries() {
        let countries = this.props.countries;

        if (!countries) {
            return null;
        }

        const filter = this.state.filter.toLowerCase();
        if (filter) {
            countries = _.filter(countries, country => country.name.toLowerCase().indexOf(filter) !== -1);
        }

        return (
            <div className="list">
                {countries.map(country => (
                    <div key={country.alpha3Code}>
                        {country.name}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.countries.data
    }
};

export default connect(mapStateToProps, {
    getCountries
})(ListPage);
