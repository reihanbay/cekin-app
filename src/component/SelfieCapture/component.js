import * as React from 'react'
import ImagePicker from 'react-native-image-picker'
import { Mixins } from '../../styles'

export const cameraLaunchChangePicture = () => {
    console.log('open camera')
    let options = {
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
        includeBase64: true,
        noData: true,
        quality: 1,
        maxWidth: Mixins.scaleSize(512),
        maxHeight: Mixins.scaleSize(512),
    };
    console.log('close pop up')
    return new Promise(resolve => {
        setTimeout(() => {
            ImagePicker.launchCamera({
                mediaType: 'photo',
                includeBase64: true,
                maxHeight: 512,
                maxWidth: 512,
            }, (res) => {
                console.log('launching camera')
                //console.log('Response = ', res)
                //console.log('FileData: ' + res.data)
                console.log('File uri: ' + res.uri)
                if (res.didCancel) {
                    console.log('User cancelled image picker')
                } else if (res.error) {
                    console.log('ImagePicker Error: ', res.error)
                } else if (res.customButton) {
                    console.log('User tapped custom button: ', res.customButton)
                    alert(res.customButton)
                } else {
                    const source = res
                    resolve(source)
                }
            });
        }, 300)
    })

}