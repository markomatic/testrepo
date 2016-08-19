'use strict';

import React, { Component } from 'react';

export default props => (
    <div className={'App'}>
        <header>
            <span><a href="#/list">List</a></span>
            {' '}
            <span><a href="#/about">About</a></span>
        </header>
        <div id="content">
            {props.children}
        </div>
        <footer>
            <p>Some footer</p>
        </footer>
    </div>
);
