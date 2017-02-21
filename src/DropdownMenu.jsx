import chainedFunction from 'chained-function';
import classNames from 'classnames';
import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import shallowCompare from 'react-addons-shallow-compare';
import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper';
import styles from './index.styl';

class DropdownMenu extends Component {
    static propTypes = {
        // Set a custom element for this component
        componentClass: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ]),

        open: PropTypes.bool,
        noPadding: PropTypes.bool,
        pullRight: PropTypes.bool,
        scrollable: PropTypes.bool,
        maxHeight: PropTypes.number,
        onClose: PropTypes.func,
        onSelect: PropTypes.func,
        rootCloseEvent: PropTypes.oneOf([
            'click',
            'mousedown'
        ])
    };
    static defaultProps = {
        componentClass: 'ul',
        dropdownRole: 'menu',
        open: false,
        noPadding: false,
        pullRight: false,
        scrollable: false,
        maxHeight: 150
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
            open,
            noPadding,
            pullRight,
            scrollable,
            maxHeight,
            onClose,
            onSelect,
            rootCloseEvent,
            className,
            style = {},
            children,
            ...props
        } = this.props;

        delete props.dropdownRole;

        const classes = {
            [styles.dropdownMenu]: true,
            [styles.noPadding]: noPadding,
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
                    {React.Children.map(children, child => {
                        if (!React.isValidElement(child)) {
                            return child;
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
                    })}
                </Component>
            </RootCloseWrapper>
        );
    }
}

export default DropdownMenu;
