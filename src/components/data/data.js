const data = [
    {
        id:'1',
        title:"Capitan America",
        price:10000,
        categoria:"Marvel",
        img:"/assets/img/capitan-america.jpg"
    },
    {
        id:'2',
        title:"Spiderman Simbionte",
        price:8000,
        categoria:"Marvel",
        img:"/assets/img/spiderman-simbionte.jpg"
    },
    {
        id:'3',
        title:"Spiderman y Venom",
        price:8000,
        categoria:"Marvel",
        img:"/assets/img/spiderman-venom.jpg"
    },
    {
        id:'4',
        title:"Batman",
        price:15000,
        categoria:"DC",
        img:"/assets/img/batman.jpg"
    },
    {
        id:'5',
        title:"Flash",
        price:10000,
        categoria:"DC",
        img:"/assets/img/flash.jpg"
    },
    {
        id:'6',
        title:"Flash",
        price:12000,
        categoria:"DC",
        img:"/assets/img/flash-2.jpg"
    },
];
const getItemList = () => {
    return [
    { id: "1", title: "Capitan America", img: "/assets/img/capitan-america.jpg" }
    ];
};

const itemsPromise = new Promise((rej, res) => {
    setTimeout(() => {
        rej(data);
    }, 2000);
});

export const itemPromise = new Promise((rej, res) => {
    setTimeout(() => {
    rej(getItemList());
    }, 2000);
});

export default itemsPromise;
// export default data