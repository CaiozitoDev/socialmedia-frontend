import React, {useState} from 'react'

import {Fab} from '@material-ui/core'
import {Send} from '@material-ui/icons'

import api from '../../../../../services/API_CONFIG'

function NewChatForm(props) {
    const [txtValue, setTxtValue] = useState('')

    const [isDisabled, setIsDisabled] = useState(false)

    function handleTxtValue(e) {
        const {name, value} = e.target

        setTxtValue(value)
    }

    function postMessage() {
        setIsDisabled(true)

        if(txtValue.length == 0) {
            document.querySelector('.Chattxtarea').setAttribute('placeholder', 'Empty area, please reinsert')
            setIsDisabled(false)
        } else if(txtValue.length > 400) {
            document.querySelector('.Chattxtarea').setAttribute('placeholder', 'Max length: 400 characters')
            setIsDisabled(false)
        } else {
            api.post('/newmessage', {
                    chatid: props.chatid, 
                    db_user_id: props.chatData.myProfile.userid,
                    username: props.chatData.myProfile.username, 
                    userPhoto: props.chatData.myProfile.userPhoto,
                    messagetext: txtValue
                })
                .then(response => {
                    console.log(response.data)
                    setIsDisabled(false)
                    setTxtValue('')
                })
                .catch(err => {console.log(err)})
        }
    }

    return (
        <div className='NewChatForm'>
            <textarea placeholder='Send a message' onChange={handleTxtValue} value={txtValue} className='Chattxtarea'></textarea>
            <Fab onClick={postMessage} disabled={isDisabled}>
                <Send />
            </Fab>
        </div>
    )
}

export default NewChatForm