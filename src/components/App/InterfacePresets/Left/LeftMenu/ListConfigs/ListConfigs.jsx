import React, {useState} from 'react'

import {Home, Person, Email, Group} from '@material-ui/icons'

import api from '../../../../../../services/API_CONFIG'

import {Link} from 'react-router-dom'

function ListConfigs({id}) {
    const [friendNumber, setFriendNumber] = useState(0)

    const [messageNumber, setMessageNumber] = useState(0)

    const [isFriendRequestFinished, setIsFriendRequestFinished] = useState(true)
    const [isMessageRequestFinished, setIsMessageRequestFinished] = useState(true)

    if(isFriendRequestFinished) {
        setIsFriendRequestFinished(false)

        api.get(`/notification?db_user_id=${id}`).then(response => {
            setFriendNumber(response.data.friendsLength) 
            setIsFriendRequestFinished(true)
        })
        .catch(err => {console.log(err)})
    }

    if(isMessageRequestFinished) {
        setIsMessageRequestFinished(false)
        
        api.get(`/messagelist?db_user_id=${id}&notification=true`).then(response => {
            setMessageNumber(response.data.notSawMessages)
            setIsMessageRequestFinished(true)
        })
        .catch(err => {console.log(err)})
    }


    return (
        <div className='ListConfigs'>
            <ul>
                <Link to='/home'>
                    <li>
                        <Home />
                        <h4>Home page</h4>
                    </li>
                </Link>
                <Link to={`/profile/${id}`}>
                    <li>
                        <Person />
                        <h4>Profile</h4>
                    </li>
                </Link>
                <Link to={`/messages`}>
                    <li>
                        <Email />
                        <h4>Messages</h4>

                        <div className='Notification'>{messageNumber}</div>
                    </li>
                </Link>
                <Link to={`/friends/${id}`}>
                    <li>
                        <Group />
                        <h4>Friends</h4>

                        <div className='Notification'>{friendNumber}</div>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default ListConfigs