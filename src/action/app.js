export const increment = () => {
    return {
        type: 'Increment'
    }
}

export const decrement = () => {
    return {
        type: 'Decrement'
    }
}

export const getData = (data) => {
    return {
        type: 'Message',
        payload: data
    }
}

export const getDataAsyn = (data) => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            dispatch({
               type: 'MessageAsyc',
               payload: json[0].name
            })
        })
    }
}
