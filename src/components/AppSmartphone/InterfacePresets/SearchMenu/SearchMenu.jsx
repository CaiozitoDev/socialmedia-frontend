import React, {useContext, useState} from 'react'

import SearchIcon from '@material-ui/icons/Search';

import {Slide} from '@material-ui/core'

import SearchTab from './SearchTab/SearchTab'

import {AuthContext} from '../../../Contexts'

function SearchMenu(props) {
    const {userData} = useContext(AuthContext)

    if(!userData) {
        userData.photo = 'https://i.ya-webdesign.com/images/loading-png-gif.gif'
        userData.username = 'Not found'
    }

    const [isInputClicked, setIsInputClicked] = useState(false)

    const [txtValue, setTxtValue] = useState('')

    function handleTxtValue(e) {
        const value = e.target.value

        setTxtValue(value)
    }

    return(
        <Slide direction='down' in timeout={1000} mountOnEnter>
            <div className='SearchPageHeader'>
                <img src={userData.photo} className='SearchMenuIcon' onClick={() => {
                    document.querySelector('.Left').classList.add('isLeftClicked')
                    document.querySelector('.LeftMenu').classList.add('isLeftMenuClicked')}}
                alt='img' />
                <div className='SearchMenu'>
                    <span> <SearchIcon style={{fill: 'white'}}/> </span>
                    <input type='text' placeholder='Find a profile' 
                        onFocus={() => {setIsInputClicked(true)}}
                        onBlur={() => {setIsInputClicked(false);setTxtValue('')}}
                        onChange={handleTxtValue}
                        value={txtValue}
                     />
                </div>
                <h5>{props.title}</h5>
                <SearchTab isClicked={isInputClicked} txtValue={txtValue} />
            </div>
        </Slide>
    )
}

export default SearchMenu