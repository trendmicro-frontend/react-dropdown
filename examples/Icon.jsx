import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Icon</h3>
            <Dropdown open onToggle={() => {}}>
                <Dropdown.Toggle iconOnly noCaret>
                    <i className="fa fa-cog" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <MenuItem>
                        <i className="fa fa-refresh fa-fw" style={{ marginRight: 6 }} />
                        Refresh
                    </MenuItem>
                    <MenuItem>
                        <i className="fa fa-edit fa-fw" style={{ marginRight: 6 }} />
                        Edit
                    </MenuItem>
                    <MenuItem>
                        <i className="fa fa-share fa-fw" style={{ marginRight: 6 }} />
                        Share
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
