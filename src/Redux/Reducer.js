const initalValue = {
    value: 0
}
export const myReducer = (data = initalValue, action) => {

    // console.log(action,'action');
    if (action.type === 'increment') {
        return {
            value: action.data+1
        }
    }
    else if (action.type === 'decrement') {
        if(data.value>0){
            // console.log(data);
            return {
                value: action.data-1
            }
        }
    }
    else if(action.type==='reset'){
        // console.log(data);
        return {
            value:0
        }
    }
    return data
}
