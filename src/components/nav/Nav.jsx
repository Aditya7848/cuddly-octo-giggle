import React from 'react'
import logo from './Makemytrip_logo.png'
import { Link, NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FlightIcon from '@mui/icons-material/Flight';
import TrainIcon from '@mui/icons-material/Train';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

const Nav = () => {
    return (
        <div className='nav-comp df'>
            <div className="navbar df">
                <Link to="/" >  <div className="nav-logo">
                    <img src={logo} alt="makemytrip-logo" />
                </div></Link>
                <Link to="/flights"><div className="nav-flights df fdc">
                    <FlightIcon fontSize='large' />
                    <span>Flights</span>
                </div></Link>
                <Link to="/hotels"><div className="nav-hotels df fdc">
                    <ApartmentIcon fontSize='large' />
                    <span>Hotel</span>
                </div></Link>
                <Link to="/trains"><div className="nav-trains df fdc">
                    <TrainIcon fontSize='large' />
                    <span>Train</span>
                </div></Link>
                <Link to="/buses"><div className="nav-buses df fdc">
                    <DirectionsBusIcon fontSize='large' />
                    <span>Buses</span>
                </div></Link >
            </div >
            <div className="nav-login df jcc aic">
                <AccountCircleIcon />
                <span>Log-in/Register</span>
                <ArrowDropDownIcon />
            </div>
        </div >
    )
}

export default Nav