import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Button } from '@trendmicro/react-buttons';
import styles from './index.styl';

class DropdownToggle extends Component {
    static propTypes = {
        // A custom element for this component.
        componentClass: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ]),

        // One of: 'lg', 'md', 'sm', 'xs'
        btnSize: Button.propTypes.btnSize,

        // One of: 'default', 'primary', 'emphasis', 'flat', 'link'
        btnStyle: Button.propTypes.btnStyle,

        // Whether to prevent a caret from being rendered next to the title.
        noCaret: PropTypes.bool,

        // Title content.
        title: PropTypes.string,

        // Dropdown
        disabled: PropTypes.bool,
        open: PropTypes.bool
    };
    static defaultProps = {
        dropdownRole: 'toggle', // Accessed by Dropdown
        componentClass: Button,
        noCaret: false,

        // Dropdown
        disabled: false,
        open: false
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render() {
        const {
            componentClass: Component,
            noCaret,
            open,
            className,
            children,
            ...props
        } = this.props;

        delete props.dropdownRole; // Accessed by Dropdown

        const useCaret = !noCaret;
        const empty = !children && !props.title;
        const dropdownToggleClasses = {
            [styles.dropdownToggle]: true,
            [styles.btnLink]: props.btnStyle === 'link',
            [styles.btnLg]: props.btnSize === 'lg' || props.btnSize === 'large',
            [styles.btnMd]: props.btnSize === 'md' || props.btnSize === 'medium',
            [styles.btnSm]: props.btnSize === 'sm' || props.btnSize === 'small',
            [styles.btnXs]: props.btnSize === 'xs' || props.btnSize === 'extra-small',
            [styles.empty]: empty
        };
        const caretClasses = {
            [styles.caret]: true
        };

        return (
            <Component
                btnStyle="flat"
                {...props}
                role="button"
                className={classNames(className, dropdownToggleClasses)}
                dropdownToggle={Component === Button}
                aria-haspopup
                aria-expanded={open}
            >
                {children || props.title}
                {useCaret && <span className={classNames(caretClasses)} />}
            </Component>
        );
    }
}

export default DropdownToggle;
