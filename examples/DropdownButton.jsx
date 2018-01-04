import { Button } from '@trendmicro/react-buttons';
import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-10">
        <h3>Dropdown Buttons</h3>
        <div className={styles.sectionGroup}>
            <div style={{ display: 'inline-block', marginRight: 20 }}>
                <h5>General</h5>
                <Dropdown>
                    <Dropdown.Toggle btnSize="lg" btnStyle="flat">
                        Large
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another Action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle btnSize="md" btnStyle="flat">
                        Medium
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another Action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle btnSize="sm" btnStyle="flat">
                        Small
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another Action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle btnSize="xs" btnStyle="flat">
                        Extra Small
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another Action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div className={styles.sectionGroup}>
            <h5>Split</h5>
            <p>A split dropdown button contains an arrow that is divided from its menu. An selected option can be clicked to perform the action.</p>
            <Dropdown>
                <Button btnStyle="flat" btnSize="lg">
                    Large
                </Button>
                <Dropdown.Toggle btnSize="lg" />
                <Dropdown.Menu>
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another Action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Button btnStyle="flat" btnSize="md">
                    Medium #1
                </Button>
                <Button btnStyle="flat" btnSize="md">
                    Medium #2
                </Button>
                <Dropdown.Toggle btnSize="md" />
                <Dropdown.Menu>
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another Action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Button btnStyle="flat" btnSize="sm">
                    Small
                </Button>
                <Dropdown.Toggle btnSize="sm" />
                <Dropdown.Menu>
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another Action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Button btnStyle="flat" btnSize="xs">
                    Extra Small
                </Button>
                <Dropdown.Toggle btnSize="xs" />
                <Dropdown.Menu>
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another Action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
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
                    <MenuItem eventKey="all">All</MenuItem>
                    <MenuItem eventKey="file">File</MenuItem>
                    <MenuItem eventKey="ipaddr">IP Address</MenuItem>
                    <MenuItem eventKey="url">URL</MenuItem>
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
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another Action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className={styles.sectionGroup}>
            <h5>Text</h5>
            <Dropdown>
                <Dropdown.Toggle btnStyle="link" title="All devices" />
                <Dropdown.Menu>
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another Action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className={styles.sectionGroup}>
            <h5>Dropup</h5>
            <p>Dropdown menus can be changed to expand upwards (instead of downwards) by adding the <code>dropup</code> prop.</p>
            <Dropdown dropup>
                <Dropdown.Toggle btnStyle="flat" title="Dropdown" />
                <Dropdown.Menu>
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another Action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
