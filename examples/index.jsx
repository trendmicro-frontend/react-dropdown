/* eslint no-alert: 0 */
import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';
import Disabled from './Disabled';
import Divider from './Divider';
import SingleSelection from './SingleSelection';
import MultipleSelection from './MultipleSelection';
import Header from './Header';
import Icon from './Icon';
import Badge from './Badge';
import MultiLevelDropdown from './MultiLevelDropdown';
import Scrollable from './Scrollable';
import SearchFilter from './SearchFilter';
import styles from './index.styl';

class App extends React.Component {
    render() {
        const name = 'React Dropdown';
        const url = 'https://github.com/trendmicro-frontend/react-dropdown';

        return (
            <div>
                <Nav name={name} url={url} />
                <div className={styles.container}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <DropdownButton />
                            </div>
                            <div className="col-md-12 col-lg-6 col-xs-4">
                                <DropdownMenu />
                            </div>
                            <div className="col-md-12 col-lg-6 col-xs-4">
                                <Disabled />
                            </div>
                            <div className="col-md-12 col-lg-6 col-xs-4">
                                <Divider />
                            </div>
                            <div className="col-md-12 col-lg-6 col-xs-4">
                                <SingleSelection />
                            </div>
                            <div className="col-md-12 col-lg-6 col-xs-4">
                                <MultipleSelection />
                            </div>
                            <div className="col-md-12 col-lg-6 col-xs-4">
                                <Header />
                            </div>
                            <div className="col-md-12 col-lg-6 col-xs-4">
                                <Icon />
                            </div>
                            <div className="col-md-12 col-lg-6 col-xs-4">
                                <Badge />
                            </div>
                            <div className="col-md-12 col-lg-6 col-xs-4">
                                <MultiLevelDropdown />
                            </div>
                            <div className="col-md-12 col-lg-6 col-xs-4">
                                <Scrollable />
                            </div>
                            <div className="col-md-12 col-lg-6 col-xs-4">
                                <SearchFilter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
