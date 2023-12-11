// import '../styles/Dashboard.css';

import { useContext, useState } from 'react';
import AuthStoreContextProvider from '../auth_store';

import DashboardMapListView from './DashboardComponents/DashboardMapListView';
import DashboardMyProfileView from './DashboardComponents/DashboardMyProfileView';
import DashboardCreateOrEditMapView from './DashboardComponents/DashboardCreateOrEditMapView';
import DashboardSearchMapView from './DashboardComponents/DashboardSearchMapView';

import bear from "../assets_img/dashboard_bear.svg";



export default function Dashboard(){
    const { auth_store } = useContext(AuthStoreContextProvider);

    //function to handle open the selected view screen 
    const openViewScreen = () => {
        auth_store.openViewScreen()
    }

    //Handles changing the selected view.
    const handleSelectedViewChange = (event) => {
        auth_store.openEdit(true)
        setSelectedView(event)
    }
    const handleEditView = () => {
        setSelectedView(<DashboardCreateOrEditMapView />)
    }

    //Stores the currently selected view (Dash Board, My Profile, Create Map, Search Map)
    const [selectedView, setSelectedView] = useState(<DashboardMapListView handleEditView={handleEditView}/>);

    const [isDarkMode, setIsDarkMode] = useState(false); 
    const handleToggle = () => {
      setIsDarkMode(!isDarkMode);
    };
      
    return (
        <div className='container'>
            <div className={`sidebar ${isDarkMode ? 'sidebar-dark' : 'sidebar-bright'}`}>
                <div className="darkmodebutton">
                    <span className={`sidebar-buttons ${isDarkMode ? 'sidebar-buttons-dark' : 'sidebar-buttons'}`} style={{fontSize:'15px'}}>Dark Mode</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={handleToggle}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            <img className="bear" src={bear} style={{padding:"20px 10px 0px"}}alt="My SVG" />
                <div className={`profile ${isDarkMode ? 'profile-dark' : ''}`}>Hello {auth_store.user?auth_store.user.username:''}</div>
                <div className="sidebar-buttons">
                    <button
                        className={`sidebar-buttons ${isDarkMode ? 'sidebar-buttons-dark' : 'sidebar-buttons'}`}
                        onClick={() => handleSelectedViewChange(<DashboardMapListView handleEditView={handleEditView} isDarkMode={isDarkMode} />)}>Dashboard</button>
                </div>
                <div className="sidebar-buttons">
                    <button
                        className={`sidebar-buttons ${isDarkMode ? 'sidebar-buttons-dark' : 'sidebar-buttons'}`}
                        onClick={() => handleSelectedViewChange(<DashboardMyProfileView isDarkMode={isDarkMode} />)}>My Profile</button>
                </div>
                <div className="sidebar-buttons">
                    <button
                        className={`sidebar-buttons ${isDarkMode ? 'sidebar-buttons-dark' : 'sidebar-buttons'}`} 
                        onClick={() => handleSelectedViewChange(<DashboardCreateOrEditMapView isDarkMode={isDarkMode}/>)}>Create Map</button>
                </div>
                <div className="sidebar-buttons">
                    <button
                        className={`sidebar-buttons ${isDarkMode ? 'sidebar-buttons-dark' : 'sidebar-buttons'}`}
                        onClick={() => handleSelectedViewChange(<DashboardSearchMapView isDarkMode={isDarkMode}/>)}>Search Map</button>
                </div>
                {/* <div className="darkmodebutton">
                    <div className={`sidebar-buttons ${isDarkMode ? 'sidebar-buttons-dark' : 'sidebar-buttons'}`}>Dark Mode</div>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={handleToggle}
                        />
                        <span className="slider"></span>
                    </label>
                </div> */}
            </div>
            <div className={`selectedDashboard ${isDarkMode ? 'selectedDashbord-dark' : 'selectedDashbord'}`} style={{ overflowX: "hidden" }}>{auth_store.user?selectedView:''}</div>
        </div>

    )

}