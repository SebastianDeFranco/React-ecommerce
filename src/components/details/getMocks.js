
const Comics = 
        {
            id:1,
            nombre:"Captain America",
            precio:10000,
            picUrl:""
        }
        


    const task = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(Comics);
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