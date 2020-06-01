import React from 'react'

import SearchIcon from '@material-ui/icons/Search';

import Zoom from '@material-ui/core/Zoom'

function SearchMenu(props){
    return(
        <Zoom in='true'>
            <div className='SearchPageHeader'>
                <img src={window.location.origin + '/fds/95791762_2894799623888750_6357181261760430080_n.jpg'} className='PostUserIcon' onClick={() => {
                    document.querySelector('.Left').classList.add('isLeftClicked')
                    document.querySelector('.LeftMenu').classList.add('isLeftMenuClicked')}}
                 />
                <div className='SearchMenu'>
                    <span> <SearchIcon style={{fill: 'white'}}/> </span>
                    <input type='text' placeholder='Search' />
                </div>
                <h5>{props.title}</h5>
            </div>
        </Zoom>
    )
}

export default SearchMenu