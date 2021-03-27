import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';

import styles from './Header.module.css';

class Header extends Component {
    state = {}

    render() {
        return (
            <header className={styles.header}>
                <Navigation />
            </header>
        );
    };
};

export default Header;