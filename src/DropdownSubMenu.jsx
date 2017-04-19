import chainedFunction from 'chained-function';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Anchor from '@trendmicro/react-anchor';
import DropdownMenu from './DropdownMenu';
import splitComponentProps from './splitComponentProps';
import styles from './index.styl';

class DropdownSubMenu extends Component {
    static propTypes = {
        // Highlight the menu item as active.
        active: PropTypes.bool,

        // Disable the menu item, making it unselectable.
        disabled: PropTypes.bool,

        // Value passed to the `onSelect` handler, useful for identifying the selected menu item.
        eventKey: PropTypes.any,

        // Whether or not the dropdown submenu is visible.
        open: PropTypes.bool,

        // Title content.
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),

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
        open: false
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
            open,
            title,
            onClick,
            className,
            style,
            children,
            ...props
        } = this.props;

        delete props.eventKey;

        const classes = {
            [styles.active]: active,
            [styles.disabled]: disabled,
            [styles.dropdownSubmenu]: true,
            [styles.open]: open
        };

        const [toggleProps, menuProps] = splitComponentProps(props, Anchor);

        return (
            <li
                role="presentation"
                className={classNames(className, classes)}
                style={style}
            >
                <Anchor
                    {...toggleProps}
                    disabled={disabled}
                    role="menuitem"
                    tabIndex="-1"
                    onClick={chainedFunction(onClick, this.actions.handleClick)}
                >
                    {title}
                </Anchor>
                <DropdownMenu
                    {...menuProps}
                >
                    {children}
                </DropdownMenu>
            </li>
        );
    }
}

export default DropdownSubMenu;
