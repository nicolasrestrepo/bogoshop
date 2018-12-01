import React from 'react';
import classNames from 'classnames/bind';
import Nav from '../Nav';

import styles from './styles.scss'

const cx = classNames.bind(styles)


function Main(props){
    const { children } = props

    return( 
        <React.Fragment>
            <Nav/>
            <div className={cx('content-children')}>{children}</div>
        </React.Fragment>
    )

}


export default Main
