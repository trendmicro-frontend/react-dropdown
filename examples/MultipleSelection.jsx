import React, { Component } from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

let selectedCount = 0;

export default class extends Component {
    state = {
        products: [
            {
                id: 1,
                name: 'Product 1',
                checked: true
            },
            {
                id: 2,
                name: 'Product 2',
                checked: true
            },
            {
                id: 3,
                name: 'Product 3',
                checked: false
            },
            {
                id: 4,
                name: 'Product 4',
                checked: false
            }
        ]
    };
    actions = {
        handleChange: () => {
        }
    };

    render() {
        return (
            <Section className="row-md-5 row-xl-5">
                <div className={styles.sectionGroup}>
                    <h3>Multiple Selection</h3>
                    <p>Use checkboxes in a dropdown menu to indicate item selection. As a summary, you can display the number of selected items. Separate the listed items with commas, and put ellipsis (...) at the end to indicate omission if the list is too long to fit into one line.</p>
                    <Dropdown open>
                        <Dropdown.Toggle title={`Product (${selectedCount})`} />
                        <Dropdown.Menu>
                            {this.state.products.map((product, index) => (
                                <MenuItem key={product.id}>
                                    <span className="checkbox">
                                        <input
                                            type="checkbox"
                                            name={`menuitem-${index}`}
                                            id={`menuitem-${index}`}
                                            className="input-checkbox"
                                            checked={product.checked}
                                            onChange={(event) => {
                                                this.setState({
                                                    products: this.state.products.map((product, idx) => {
                                                        if (index === idx) {
                                                            return {
                                                                name: product.name,
                                                                checked: !product.checked
                                                            };
                                                        }

                                                        return product;
                                                    })
                                                });
                                            }}
                                        />
                                        <label htmlFor={`menuitem-${index}`}>
                                            {product.name}
                                        </label>
                                    </span>
                                </MenuItem>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Section>
        );
    }
}
