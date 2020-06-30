import React from 'react'
import ReactDOM from 'react-dom'

import CorrectDevice from './components/functions/verifyDeviceScreen/verifyDeviceScreen'

CorrectDevice.style == 'desktop' ?  document.body.style = require('./components/App/styles.css') : document.body.style = require('./components/AppSmartphone/phone.css')


ReactDOM.render(CorrectDevice.component, document.querySelector('#root'))
