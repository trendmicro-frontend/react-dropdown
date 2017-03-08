import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Divider</h3>
            <p>Use a divider to separate two sets of dropdown options.</p>
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
                    <MenuItem>
                        Menu item four
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
