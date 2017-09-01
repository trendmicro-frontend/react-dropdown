import chainedFunction from 'chained-function';
import classNames from 'classnames';
import activeElement from 'dom-helpers/activeElement';
import contains from 'dom-helpers/query/contains';
import PropTypes from 'prop-types';
import React, { PureComponent, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import uncontrollable from 'uncontrollable';
import warning from 'warning';
import { ButtonGroup } from '@trendmicro/react-buttons';
import DropdownToggle from './DropdownToggle';
import DropdownMenuWrapper from './DropdownMenuWrapper';
import DropdownMenu from './DropdownMenu';
import DropdownSubMenu from './DropdownSubMenu';
import styles from './index.styl';
import {
    DROPDOWN_TOGGLE_ROLE,
    DROPDOWN_MENU_ROLE
} from './constants';

class Dropdown extends PureComponent {
    static propTypes = {
        // A custom element for this component.
        componentClass: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ]),

        // The menu will open above the dropdown button, instead of below it.
        dropup: PropTypes.bool,

        // Whether or not component is disabled.
        disabled: PropTypes.bool,

        // Whether or not the dropdown is visible.
        open: PropTypes.bool,

        // Whether to open the dropdown on mouse over.
        autoOpen: PropTypes.bool,

        // Align the menu to the right side of the dropdown toggle.
        pullRight: PropTypes.bool,

        // A callback fired when the dropdown closes.
        onClose: PropTypes.func,

        // A callback fired when the dropdown wishes to change visibility. Called with the requested
        // `open` value.
        //
        // ```js
        // function(Boolean isOpen) {}
        // ```
        onToggle: PropTypes.func,

        // A callback fired when a menu item is selected.
        //
        // ```js
        // (eventKey: any, event: Object) => any
        // ```
        onSelect: PropTypes.func,

        // If `'menuitem'`, causes the dropdown to behave like a menu item rather than a menu button.
        role: PropTypes.string,

        // Which event when fired outside the component will cause it to be closed.
        rootCloseEvent: PropTypes.oneOf([
            'click',
            'mousedown'
        ])
    };

    static defaultProps = {
        componentClass: ButtonGroup,
        dropup: false,
        disabled: false,
        pullRight: false,
        open: false
    };

    actions = {
        handleClick: (event) => {
            if (this.props.disabled) {
                return;
            }

            this.toggleOpen('click');
        },
        handleKeyDown: (event) => {
            if (this.props.disabled) {
                return;
            }

            if (event.keyCode === 38) { // up
                if (!this.props.open) {
                    this.toggleOpen('keyup');
                } else if (this.menu.focusPrevious) {
                    this.menu.focusPrevious();
                }
                event.preventDefault();
                return;
            }

            if (event.keyCode === 40) { // down
                if (!this.props.open) {
                    this.toggleOpen('keydown');
                } else if (this.menu.focusNext) {
                    this.menu.focusNext();
                }
                event.preventDefault();
                return;
            }

            if (event.keyCode === 27 || event.keyCode === 9) { // esc or tab
                this.actions.handleClose(event);
                return;
            }
        },
        handleClose: (event) => {
            if (!this.props.open) {
                return;
            }

            this.toggleOpen(null);
        }
    };
    menu = null; // <DropdownMenu ref={c => this.menu = c} />
    toggle = null; // <DropdownToggle ref={c => this.toggle = c} />
    _focusInDropdown = false;
    lastOpenEventType = null;

    componentDidMount() {
        this.focusOnOpen();
    }
    componentWillUpdate(nextProps) {
        if (!nextProps.open && this.props.open) {
            this._focusInDropdown = this.menu && contains(ReactDOM.findDOMNode(this.menu), activeElement(document));
        }
    }
    componentDidUpdate(prevProps) {
        const { open } = this.props;
        const prevOpen = prevProps.open;

        if (open && !prevOpen) {
            this.focusOnOpen();
        }

        if (!open && prevOpen) {
            // if focus hasn't already moved from the menu lets return it to the toggle
            if (this._focusInDropdown) {
                this._focusInDropdown = false;
                this.focus();
            }
        }
    }
    toggleOpen(eventType) {
        const open = !this.props.open;

        if (open) {
            this.lastOpenEventType = eventType;
        }

        if (this.props.onToggle) {
            this.props.onToggle(open);
        }
    }
    focusOnOpen() {
        const menu = this.menu;

        if (this.lastOpenEventType === 'keydown' || this.props.role === 'menuitem') {
            menu.focusNext && menu.focusNext();
            return;
        }

        if (this.lastOpenEventType === 'keyup') {
            menu.focusPrevious && menu.focusPrevious();
            return;
        }
    }
    focus() {
        const toggle = ReactDOM.findDOMNode(this.toggle);

        if (toggle && toggle.focus) {
            toggle.focus();
        }
    }
    renderToggle(child, props) {
        let ref = c => {
            this.toggle = c;
        };

        if (typeof child.ref === 'string') {
            warning(false,
                'String refs are not supported on `<Dropdown.Toggle>` components. ' +
                'To apply a ref to the component use the callback signature:\n\n ' +
                'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute'
            );
        } else {
            ref = chainedFunction(child.ref, ref);
        }

        return cloneElement(child, {
            ...props,
            ref,
            onClick: chainedFunction(
                child.props.onClick,
                this.actions.handleClick
            ),
            onKeyDown: chainedFunction(
                child.props.onKeyDown,
                this.actions.handleKeyDown
            )
        });
    }
    renderMenu(child, { id, onClose, onSelect, rootCloseEvent, ...props }) {
        let ref = c => {
            this.menu = c;
        };

        if (typeof child.ref === 'string') {
            warning(false,
                'String refs are not supported on `<Dropdown.Menu>` components. ' +
                'To apply a ref to the component use the callback signature:\n\n ' +
                'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute'
            );
        } else {
            ref = chainedFunction(child.ref, ref);
        }

        return cloneElement(child, {
            ...props,
            ref,
            onClose: chainedFunction(
                child.props.onClose,
                onClose,
                this.actions.handleClose,
            ),
            onSelect: chainedFunction(
                child.props.onSelect,
                onSelect,
                this.actions.handleClose
            ),
            rootCloseEvent
        });
    }
    render() {
        const {
            componentClass: Component,
            dropup,
            disabled,
            pullRight,
            open,
            autoOpen,
            onClose,
            onSelect,
            className,
            rootCloseEvent,
            children,
            ...props
        } = this.props;

        delete props.onToggle;

        if (Component === ButtonGroup) {
            props.dropdownOpen = open;
        }

        return (
            <Component
                {...props}
                className={classNames(
                    className,
                    styles.dropdown,
                    {
                        [styles.open]: open,
                        [styles.autoOpen]: autoOpen,
                        [styles.disabled]: disabled,
                        [styles.dropup]: dropup
                    }
                )}
            >
                {React.Children.map(children, child => {
                    if (!React.isValidElement(child)) {
                        return child;
                    }

                    if (child.props.dropdownRole === DROPDOWN_TOGGLE_ROLE) {
                        return this.renderToggle(child, {
                            disabled, open
                        });
                    }

                    if (child.props.dropdownRole === DROPDOWN_MENU_ROLE) {
                        return this.renderMenu(child, {
                            open, pullRight, onClose, onSelect, rootCloseEvent
                        });
                    }

                    return child;
                })}
            </Component>
        );
    }
}

const UncontrollableDropdown = uncontrollable(Dropdown, {
    // Define the pairs of prop/handlers you want to be uncontrollable
    open: 'onToggle'
});

UncontrollableDropdown.Toggle = DropdownToggle;
UncontrollableDropdown.Menu = DropdownMenu;
UncontrollableDropdown.MenuWrapper = DropdownMenuWrapper;
UncontrollableDropdown.SubMenu = DropdownSubMenu;

export default UncontrollableDropdown;
