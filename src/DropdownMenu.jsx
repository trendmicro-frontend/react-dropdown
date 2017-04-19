import chainedFunction from 'chained-function';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import shallowCompare from 'react-addons-shallow-compare';
import RootCloseWrapper from './RootCloseWrapper';
import styles from './index.styl';

class DropdownMenu extends Component {
    static propTypes = {
        // A custom element for this component.
        componentClass: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ]),

        // Whether or not the scroll bar is visible.
        scrollable: PropTypes.bool,

        // The maximum height of the dropdown menu.
        maxHeight: PropTypes.number,

        // Dropdown
        open: PropTypes.bool,
        pullRight: PropTypes.bool,
        onClose: PropTypes.func,
        onSelect: PropTypes.func,
        rootCloseEvent: PropTypes.oneOf([
            'click',
            'mousedown'
        ])
    };
    static defaultProps = {
        dropdownRole: 'menu', // Accessed by Dropdown
        componentClass: 'ul',
        scrollable: false,
        maxHeight: 150,

        // Dropdown
        open: false,
        pullRight: false
    };

    actions = {
        handleKeyDown: (event) => {
            if (event.keyCode === 40) { // Down
                this.focusNext();
                event.preventDefault();
                return;
            }

            if (event.keyCode === 38) { // up
                this.focusPrevious();
                event.preventDefault();
                return;
            }

            if (event.keyCode === 27 || event.keyCode === 9) { // esc or tab
                this.props.onClose(event);
                return;
            }
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    getItemsAndActiveIndex() {
        const items = this.getFocusableMenuItems();
        const activeIndex = items.indexOf(document.activeElement);

        return { items, activeIndex };
    }
    getFocusableMenuItems() {
        const node = ReactDOM.findDOMNode(this);
        if (!node) {
            return [];
        }

        return Array.from(node.querySelectorAll('[tabIndex="-1"]:not([disabled])'));
    }
    focusNext() {
        const { items, activeIndex } = this.getItemsAndActiveIndex();
        if (items.length === 0) {
            return;
        }

        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        items[nextIndex].focus();
    }
    focusPrevious() {
        const { items, activeIndex } = this.getItemsAndActiveIndex();
        if (items.length === 0) {
            return;
        }

        const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        items[prevIndex].focus();
    }
    render() {
        const {
            componentClass: Component,
            scrollable,
            maxHeight,
            open,
            pullRight,
            onClose,
            onSelect,
            rootCloseEvent,
            className,
            style = {},
            children,
            ...props
        } = this.props;

        delete props.dropdownRole; // Accessed by Dropdown

        const activeMenuItems = [];
        const menuItems = React.Children.map(children, child => {
            if (!React.isValidElement(child)) {
                return child;
            }

            if (child.props.active) {
                activeMenuItems.push(child);
            }

            return cloneElement(child, {
                onKeyDown: chainedFunction(
                    child.props.onKeyDown,
                    this.actions.handleKeyDown
                ),
                onSelect: chainedFunction(
                    child.props.onSelect,
                    onSelect
                )
            });
        });

        const classes = {
            [styles.dropdownMenu]: true,
            [styles.dropdownMenuSelected]: activeMenuItems.length > 0,
            [styles.pullRight]: pullRight
        };

        if (scrollable) {
            style.maxHeight = maxHeight;
            style.overflowY = 'auto';
        }

        return (
            <RootCloseWrapper
                disabled={!open}
                onRootClose={onClose}
                event={rootCloseEvent}
            >
                <Component
                    {...props}
                    role="menu"
                    className={classNames(className, classes)}
                    style={style}
                >
                    {menuItems}
                </Component>
            </RootCloseWrapper>
        );
    }
}

export default DropdownMenu;
