import data from '../data/data';


    const task = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data);
        },2000);
        setTimeout(()=>{
            reject(console.log('Error'));
        },3000);
    });
    export const getItem = () =>{
        return(
            task
        ) 
    }