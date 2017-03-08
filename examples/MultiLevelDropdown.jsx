import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Multi-Level Dropdown</h3>
            <Dropdown open onToggle={() => {}}>
                <Dropdown.Toggle title="Select an option" />
                <Dropdown.Menu>
                    <MenuItem>
                        Menu item one
                    </MenuItem>
                    <MenuItem>
                        Menu item two
                    </MenuItem>
                    <MenuItem>
                        Menu item three
                    </MenuItem>
                    <MenuItem divider />
                    <Dropdown.SubMenu title="Menu item four" open>
                        <MenuItem>
                            Second level item one
                        </MenuItem>
                        <MenuItem>
                            Second level item two
                        </MenuItem>
                        <Dropdown.SubMenu title="Second level item three">
                            <MenuItem>
                                Third level item one
                            </MenuItem>
                        </Dropdown.SubMenu>
                    </Dropdown.SubMenu>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
