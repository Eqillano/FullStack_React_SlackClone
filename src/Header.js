import React from 'react'
import './Header.css'
import { Avatar} from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcom from "@material-ui/icons/Search";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { useStateValue } from './StateProvider';

function Header() {

   const [{user}] = useStateValue()

    return (
        <div className='header'>
            <div clasName='header__left'>
<Avatar className='header__avatar' alt={user?.displayName} src={user?.photoURL}  />
            </div>
            <div className='header__search'>
                <SearchIcon />

            </div>
            <div className='header__right'>
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
