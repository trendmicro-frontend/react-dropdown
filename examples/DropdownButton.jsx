import { Button } from '@trendmicro/react-buttons';
import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-8">
        <div className={styles.sectionGroup}>
            <h3>Dropdown Buttons</h3>
            <div style={{ display: 'inline-block', marginRight: 20 }}>
                <h5>Basic</h5>
                <Dropdown>
                    <Dropdown.Toggle btnStyle="flat" title="Dropdown" />
                    <Dropdown.Menu>
                        <MenuItem>Action</MenuItem>
                        <MenuItem>Another Action</MenuItem>
                        <MenuItem>Something else here</MenuItem>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div style={{ display: 'inline-block', marginRight: 20 }}>
                <h5>Text</h5>
                <Dropdown>
                    <Dropdown.Toggle btnStyle="link" title="All devices" />
                    <Dropdown.Menu>
                        <MenuItem>Action</MenuItem>
                        <MenuItem>Another Action</MenuItem>
                        <MenuItem>Something else here</MenuItem>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div className={styles.sectionGroup}>
            <h5>Split</h5>
            <p>A split dropdown button contains an arrow that is divided from its menu. An selected option can be clicked to perform the action.</p>
            <Dropdown>
                <Button btnStyle="flat">
                    Default
                </Button>
                <Dropdown.Toggle />
                <Dropdown.Menu>
                    <MenuItem>Action</MenuItem>
                    <MenuItem>Another Action</MenuItem>
                    <MenuItem>Something else here</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className={styles.sectionGroup}>
            <h5>Icon</h5>
            <p>Icon dropdown contains an icon in the dropdown menus.</p>
            <Dropdown>
                <Dropdown.Toggle btnStyle="link">
                    <i className="fa fa-database" />
                    All devices
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <MenuItem>Action</MenuItem>
                    <MenuItem>Another Action</MenuItem>
                    <MenuItem>Something else here</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className={styles.sectionGroup}>
            <h5>Label</h5>
            <Dropdown>
                <Dropdown.Toggle>
                    <span style={{ color: '#888' }}>Type:</span>
                    &nbsp;All
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <MenuItem>All</MenuItem>
                    <MenuItem>File</MenuItem>
                    <MenuItem>IP Address</MenuItem>
                    <MenuItem>URL</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className={styles.sectionGroup}>
            <h5>Size</h5>
            <Dropdown>
                <Dropdown.Toggle btnSize="lg">
                    Large
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <MenuItem>Action</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle btnSize="md">
                    Medium (Default)
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <MenuItem>Action</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle btnSize="sm">
                    Small
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <MenuItem>Action</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle btnSize="xs">
                    Extra small
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <MenuItem>Action</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
