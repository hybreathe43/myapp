export const incnum =()=>({
    type:"increament"
})

export const dec =(num)=>({
    type:"dec",
    payload:num
})

export const add =(num)=>({
    type:"add",
    payload:num
})

export const sub = (num)=>({
    type:"sub",
    payload:num
})