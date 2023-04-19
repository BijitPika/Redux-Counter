export const upValue=(data)=>{

    return {
        type:'increment',
        data
    }
}
export const downValue=(data)=>{

    return {
        type:'decrement',
        data
    }
}
export const clearValue=(data)=>{
    // console.log(data);
    return {
        type:'reset',
        data
    }
}