import React from 'react';
import Section from './Section';
import Space from './Space';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Header</h3>
            <p>Separate different option groups with capitalized heading.</p>
            <Dropdown open onToggle={() => {}}>
                <Dropdown.Toggle title="Select an option" />
                <Dropdown.Menu>
                    <MenuItem header>
                        Dropdown Header
                    </MenuItem>
                    <MenuItem>
                        <Space width={16} />
                        Menu item one (16px padding)
                    </MenuItem>
                    <MenuItem>
                        <Space width={24} />
                        Menu item two (24px padding)
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem header>
                        Dropdown Header
                    </MenuItem>
                    <MenuItem>
                        Menu item three
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem>
                        Menu item four
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
