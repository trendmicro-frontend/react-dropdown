import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Dropdown Menu Wrapper</h3>
            <Dropdown
                open
                onToggle={() => {}}
                style={{ width: '100%' }}
            >
                <Dropdown.Toggle title="Custom range" />
                <Dropdown.MenuWrapper>
                    <Dropdown.Menu>
                        <MenuItem eventKey={'1d'}>
                            Last 24 hours
                        </MenuItem>
                        <MenuItem eventKey={'7d'}>
                            Last 7 days
                        </MenuItem>
                        <MenuItem eventKey={'30d'}>
                            Last 30 days
                        </MenuItem>
                        <MenuItem eventKey={'90d'}>
                            Last 90 days
                        </MenuItem>
                        <MenuItem eventKey={'custom'}>
                            Custom range
                        </MenuItem>
                    </Dropdown.Menu>
                    <div
                        style={{
                            display: 'inline-block',
                            padding: 12,
                            borderLeft: '1px solid #ddd',
                            height: 200
                        }}
                    >
                        <p>Specify a date/time range.</p>
                        <div className="row">
                            <div className="col-sm-6" style={{ marginBottom: 10 }}>
                                <label>Start date:</label>
                                <input type="text" className="form-control" placeholder="YYYY-MM-DD" />
                            </div>
                            <div className="col-sm-6" style={{ marginBottom: 10 }}>
                                <label>Start time:</label>
                                <input type="text" className="form-control" placeholder="hh:mm:ss" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6" style={{ marginBottom: 10 }}>
                                <label>End date:</label>
                                <input type="text" className="form-control" placeholder="YYYY-MM-DD" />
                            </div>
                            <div className="col-sm-6" style={{ marginBottom: 10 }}>
                                <label>End time:</label>
                                <input type="text" className="form-control" placeholder="hh:mm:ss" />
                            </div>
                        </div>
                    </div>
                </Dropdown.MenuWrapper>
            </Dropdown>
        </div>
    </Section>
);
