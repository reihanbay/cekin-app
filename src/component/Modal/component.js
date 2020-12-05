import * as React from 'react'
import Indicator from './Indicator/component'
import PopUp from './PopUp/component'

const ModalSelector = ({ type = 'loading', message = 'this is message', visible = false, duration = 2000, onDurationEnd }) => {
    switch (type) {
        case 'loading':
            return <Indicator visible={visible} />
            break;
        case 'popup':
            return <PopUp visible={visible} msg={message} duration={duration} onDurationEnd={() => onDurationEnd()} />
            break;
        default:
            return <Indicator visible={visible} />
            break;
    }
}

export default ModalSelector