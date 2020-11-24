import database from '@react-native-firebase/database'

export const WriteToDatabase = (ref, data, push, onSuccess, onError) => {
    const refKey = push ? database().ref(ref).push() : database().ref(ref)
    refKey
        .set(data)
        .then(() => onSuccess())
        .catch(error => onError(error))
}

export const ReadDatabase = (ref, onSuccess, onError) => {
    database().ref(ref)
        .once('value')
        .then((snapshot) => onSuccess(snapshot.val()))
        .catch((error) => onError(error))
}

export const RemoveDatabase = async (ref, onSuccess, onError) => {
    await database()
        .ref(ref)
        .remove()
        .then(() => onSuccess('Data successfully removed!'))
        .catch((error) => onError(error))
}

export const UpdateDatabase = (ref, data, onSuccess, onError) => {
    database()
        .ref(ref)
        .update(data)
        .then(() => onSuccess('Data Updated!'))
        .catch((error) => onError(error))
}