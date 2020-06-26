import React, { useState, useEffect } from 'react'

import InterfacePresets from '../../InterfacePresets/InterfacePresets'

import FriendRequestArea from './FriendRequestArea/FriendRequestArea'
import Friend from './Friend/Friend'

import axios from 'axios'
import jwt from 'jsonwebtoken'

function FriendsPage() {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios.post('/friendlist', {db_user_id}).then(response => {
            setUserList(response.data)
        })
        .catch(err => {console.log(err)})
    })
    return (
        <div className='FriendsPage'>
            <InterfacePresets />

            <div className='FriendsContent'>
                <h1>Friends</h1>
                <FriendRequestArea />
                
                {userList.map(data => {
                    return <Friend frienddata={data} />
                })}
            </div>
        </div> 
    )
}

export default FriendsPage