import { Button } from '@trendmicro/react-buttons';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Dropdown from './Dropdown';

class DropdownButton extends PureComponent {
    static propTypes = {
        ...Dropdown.propTypes,

        // One of: 'lg', 'md', 'sm', 'xs'
        btnSize: Button.propTypes.btnSize,

        // One of: 'default', 'primary', 'emphasis', 'flat', 'link'
        btnStyle: Button.propTypes.btnStyle,

        // Title content.
        title: PropTypes.node.isRequired,

        // Whether to prevent a caret from being rendered next to the title.
        noCaret: PropTypes.bool
    };
    static defaultProps = {
        btnStyle: 'flat'
    };

    render() {
        const { btnSize, btnStyle, title, children, ...props } = this.props;

        // Split component props
        const dropdownProps = {};
        const toggleProps = {};
        Object.keys(props).forEach(entry => {
            const [propName, propValue] = entry;
            if (Dropdown.ControlledComponent.propTypes[propName]) {
                dropdownProps[propName] = propValue;
            } else {
                toggleProps[propName] = propValue;
            }
        });

        return (
            <Dropdown
                {...dropdownProps}
                btnSize={btnSize}
            >
                <Dropdown.Toggle
                    {...toggleProps}
                    btnStyle={btnStyle}
                >
                    {title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {children}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default DropdownButton;
