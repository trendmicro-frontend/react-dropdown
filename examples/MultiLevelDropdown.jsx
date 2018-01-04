import React, { PureComponent } from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default class extends PureComponent {
    state = {
        selected: ''
    };

    render() {
        const { selected } = this.state;

        return (
            <Section className="row-md-5 row-xl-5">
                <div className={styles.sectionGroup}>
                    <h3>Multi-Level Dropdown</h3>
                    <Dropdown
                        open
                        onToggle={() => {
                        }}
                        onSelect={(eventKey, event) => {
                            this.setState({ selected: eventKey });
                        }}
                    >
                        <Dropdown.Toggle>
                            {selected ? `Level ${selected}` : 'Select an option'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <MenuItem eventKey="1">
                                Level 1
                            </MenuItem>
                            <MenuItem eventKey="2">
                                Level 2
                            </MenuItem>
                            <MenuItem eventKey="3">
                                Level 3
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4">
                                Level 4
                                <MenuItem eventKey="4.1">
                                    Level 4.1
                                </MenuItem>
                                <MenuItem eventKey="4.2">
                                    Level 4.2
                                    <MenuItem eventKey="4.2.1">
                                        Level 4.2.1
                                        <MenuItem eventKey="4.2.1.1">
                                            Level 4.2.1.1
                                        </MenuItem>
                                        <MenuItem eventKey="4.2.1.2">
                                            Level 4.2.1.2
                                        </MenuItem>
                                    </MenuItem>
                                </MenuItem>
                                <MenuItem eventKey="4.3">
                                    Level 4.3
                                    <MenuItem eventKey="4.3.1">
                                        Level 4.3.1
                                        <MenuItem eventKey="4.3.1.1">
                                            Level 4.3.1.1
                                        </MenuItem>
                                        <MenuItem eventKey="4.3.1.2">
                                            Level 4.3.1.2
                                        </MenuItem>
                                    </MenuItem>
                                </MenuItem>
                            </MenuItem>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Section>
        );
    }
}
