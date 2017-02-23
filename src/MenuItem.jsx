import chainedFunction from 'chained-function';
import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import Anchor from '@trendmicro/react-anchor';
import styles from './index.styl';

class MenuItem extends Component {
    static propTypes = {
        // Highlight the menu item as active.
        active: PropTypes.bool,

        // Disable the menu item, making it unselectable.
        disabled: PropTypes.bool,

        // Style the menu item as a horizontal rule, providing visual separation between groups of menu items.
        divider: PropTypes.bool,

        // Value passed to the `onSelect` handler, useful for identifying the selected menu item.
        eventKey: PropTypes.any,

        // Style the menu item as a header label, useful for describing a group of menu items.
        header: PropTypes.bool,

        // HTML `href` attribute corresponding to `a.href`.
        href: PropTypes.string,

        // Callback fired when the menu item is clicked.
        onClick: PropTypes.func,

        // Callback fired when the menu item is selected.
        //
        // ```js
        // (eventKey: any, event: Object) => any
        // ```
        onSelect: PropTypes.func
    };
    static defaultProps = {
        active: false,
        disabled: false,
        divider: false,
        header: false
    };

    actions = {
        handleClick: (event) => {
            const { href, disabled, onSelect, eventKey } = this.props;

            if (!href || disabled) {
                event.preventDefault();
            }

            if (disabled) {
                return;
            }

            if (onSelect) {
                onSelect(eventKey, event);
            }
        }
    };

    render() {
        const {
            active,
            disabled,
            divider,
            header,
            onClick,
            className,
            style,
            ...props
        } = this.props;

        delete props.eventKey;
        delete props.onSelect;

        if (divider) {
            // Forcibly blank out the children; separators shouldn't render any.
            props.children = undefined;

            return (
                <li
                    {...props}
                    role="separator"
                    className={classNames(className, styles.divider)}
                    style={style}
                />
            );
        }

        if (header) {
            return (
                <li
                    {...props}
                    role="heading"
                    className={classNames(className, styles.dropdownHeader)}
                    style={style}
                />
            );
        }

        const classes = {
            [styles.active]: active,
            [styles.disabled]: disabled
        };

        return (
            <li
                role="presentation"
                className={classNames(className, classes)}
                style={style}
            >
                <Anchor
                    {...props}
                    disabled={disabled}
                    role="menuitem"
                    tabIndex="-1"
                    onClick={chainedFunction(onClick, this.actions.handleClick)}
                />
            </li>
        );
    }
}

export default MenuItem;
