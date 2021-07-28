
const Comics = 
[
    {
        id:1,
        title:"Capitan America",
        price:10000,
        categoria:"Marvel",
        picUrl:"/assets/img/capitan-america.jpg"
    },
    {
        id:2,
        title:"Spiderman Simbionte",
        price:10000,
        categoria:"Marvel",
        picUrl:"/assets/img/spiderman-simbionte.jpg"
    },
    {
        id:3,
        title:"Spiderman y Venom",
        price:10000,
        categoria:"Marvel",
        picUrl:"/assets/img/spiderman-venom.jpg"
    },
    {
        id:4,
        title:"Comic 4",
        price:10000,
        categoria:"DC",
        picUrl:"/assets/img/batman.jpg"
    },
    {
        id:5,
        title:"Comic 5",
        price:10000,
        categoria:"DC",
        picUrl:"/assets/img/flash.jpg"
    },
    {
        id:6,
        title:"Comic 6",
        price:10000,
        categoria:"DC",
        picUrl:"/assets/img/flash-2.jpg"
    },
];
        


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