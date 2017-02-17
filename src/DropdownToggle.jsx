import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Anchor from '@trendmicro/react-anchor';
import { Button } from '@trendmicro/react-buttons';
import styles from './index.styl';

class DropdownToggle extends Component {
    static propTypes = {
        noCaret: PropTypes.bool,
        open: PropTypes.bool,
        title: PropTypes.string,
        useAnchor: PropTypes.bool
    };
    static defaultProps = {
        dropdownRole: 'toggle',
        noCaret: false,
        open: false,
        useAnchor: false
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render() {
        const {
            noCaret,
            open,
            useAnchor,
            className,
            children,
            ...props
        } = this.props;

        delete props.dropdownRole;

        const classes = {
            [styles.dropdownToggle]: true
        };
        const Component = useAnchor ? Anchor : Button;
        const noAnchor = !useAnchor;
        const useCaret = !noCaret;

        return (
            <Component
                btnStyle="flat"
                {...props}
                role="button"
                className={classNames(className, classes)}
                dropdownToggle={noAnchor}
                aria-haspopup
                aria-expanded={open}
            >
                {children || props.title}
                {useCaret && <span className={styles.caret} />}
            </Component>
        );
    }
}

export default DropdownToggle;
