import React from 'react'
import { useMappedState } from 'redux-react-hook';
import classNames from 'classnames/bind';
import { Icon } from 'antd';

import styles from './styles.scss';

const cx = classNames.bind(styles)

const mapState = state => state

function Nav(){
    const products =  useMappedState(mapState);
    return (
        <nav className={cx('navbar')}>
            <span>Bogoshop</span>
            <div className={cx('shopping-cart-container')}>
                <span>{products.length}</span>
                <Icon type="shopping-cart" />
            </div>
        </nav>
    )
}

export default Nav;