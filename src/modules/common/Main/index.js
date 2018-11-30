import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.scss'

const cx = classNames.bind(styles)

function Main(props){
    const { children } = props
    return(
        <React.Fragment>
            <nav className={cx('navbar')}>
                <span>Bogoshop</span>
            </nav>
            <div className={cx('content-children')}>{children}</div>
        </React.Fragment>
    )

}
export default Main