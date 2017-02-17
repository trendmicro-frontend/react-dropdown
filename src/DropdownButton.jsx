import React, { Component, PropTypes } from 'react';
import splitComponentProps from './splitComponentProps';
import Dropdown from './Dropdown';

class DropdownButton extends Component {
    static propTypes = {
        ...Dropdown.propTypes,

        // Toggle props.
        btnSize: PropTypes.string,
        btnStyle: PropTypes.string,
        title: PropTypes.node.isRequired,
        noCaret: React.PropTypes.bool,

        children: React.PropTypes.node
    };
    static defaultProps = {
        btnStyle: 'flat'
    };

    render() {
        const { btnSize, btnStyle, title, children, ...props } = this.props;
        const [dropdownProps, toggleProps] = splitComponentProps(props, Dropdown.ControlledComponent);

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
