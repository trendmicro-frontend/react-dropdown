import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default class extends PureComponent {
    state = {
        selectedCount: 0
    };
    actions = {
        handleClick: (event) => {
            event.stopPropagation();
        },
        handleChange: (event) => {
            const el = ReactDOM.findDOMNode(this.dropdownMenu);
            const selectedCount = el.querySelectorAll('[type="checkbox"]:checked').length;
            this.setState({ selectedCount: selectedCount });
        }
    };
    dropdownMenu = null;

    render() {
        return (
            <Section className="row-md-5 row-xl-5">
                <div className={styles.sectionGroup}>
                    <h3>Multiple Selection</h3>
                    <p>Use checkboxes in a dropdown menu to indicate item selection. As a summary, you can display the number of selected items. Separate the listed items with commas, and put ellipsis (...) at the end to indicate omission if the list is too long to fit into one line.</p>
                    <Dropdown open onToggle={() => {}}>
                        <Dropdown.Toggle title={`Product (${this.state.selectedCount})`} />
                        <Dropdown.Menu
                            ref={node => {
                                this.dropdownMenu = node;
                            }}
                        >
                            <MenuItem eventKey={1}>
                                <input
                                    type="checkbox"
                                    name="menuitem-1"
                                    id="menuitem-1"
                                    className={styles.inputCheckbox}
                                    onClick={this.actions.handleClick}
                                    onChange={this.actions.handleChange}
                                />
                                <label htmlFor="menuitem-1">
                                    Product 1
                                </label>
                            </MenuItem>
                            <MenuItem eventKey={2}>
                                <input
                                    type="checkbox"
                                    name="menuitem-2"
                                    id="menuitem-2"
                                    className={styles.inputCheckbox}
                                    onClick={this.actions.handleClick}
                                    onChange={this.actions.handleChange}
                                />
                                <label htmlFor="menuitem-2">
                                    Product 2
                                </label>
                            </MenuItem>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Section>
        );
    }
}
