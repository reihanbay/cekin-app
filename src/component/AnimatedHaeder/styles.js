import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Mixins } from '../../styles'

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginBottom: Mixins.scaleSize(20),
        backgroundColor: '#03A9F4',
        overflow: 'hidden',
    },
})

export default styles