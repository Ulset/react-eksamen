let coffe = [
    {
        name: "Filterkaffe",
        desc: "Denne har du smakt før",
        price: 32,
        cat: "kaffe",
        img: "https://www.metallskilt.no/users/metallskilt_mystore_no/images/88831_NA_Coffee_First_Your_Bullshit_Second_6.png"
    },
    {
        name: "Cappuccino",
        desc: "Feelin fancy are ya",
        price: 42,
        cat: "kaffe",
        img: "https://pornovape.com/images/thumbnails/250/250/detailed/1/Cappuccino@2x.png"
    },
    {
        name: "Americano",
        desc: "Når du ikke er helt tøff nok for espresso",
        price: 36,
        cat: "kaffe",
        img: "https://mixcafe.co/wp-content/uploads/2017/09/americano-mix.png"
    },
    {
        name: "Iskaffe",
        desc: "Varm dag?",
        price: 42,
        cat: "kaffe",
        img: "https://www.monin.com/us/media/catalog/product/cache/715e3bd7e68644be70dcb763021c03d6/8/f/8fa59f07-1232-4009-ab39-b7c32ea3b5d0-2.png"
    },
    {
        name: "Caffè Mocha",
        desc: "Kaffe på lørdagskveld",
        price: 46,
        cat: "kaffe",
        img: "https://i.pinimg.com/originals/84/91/28/849128e37ef58ebecbeb3cd5febd00f6.png"
    },
    {
        name: "Caffè Latte",
        desc: "Flere kalorier en du tror!",
        price: 48,
        cat: "kaffe",
        img: "https://img.pngio.com/download-free-png-caffe-latte-dlpngcom-latte-png-400_276.png"
    },
    {
        name: "Macchiato",
        desc: "Søt, men også fyldig",
        price: 51,
        cat: "kaffe",
        img: "https://cdn.shopify.com/s/files/1/0016/2188/4964/products/lattemacchiato_588x540.png?v=1584633491"
    },
    {
        name: "Espresso",
        desc: "Jeg må våkne - NÅ",
        price: 38,
        cat: "kaffe",
        img: "https://www.philips.no/c-dam/b2c/category-pages/Household/coffee/master/faq/cups/Productimg_Lungo.png"
    },
    {
        name: "Cortado",
        desc: "Eksotisk!",
        price: 40,
        cat: "kaffe",
        img: "https://www.monin.com/us/media/catalog/product/cache/715e3bd7e68644be70dcb763021c03d6/3/8/38574fe5-b6d5-4ea7-9066-029cff1f98f7-2.png"
    },
    {
        name: "Iste",
        desc: "Jeg vil sove",
        price: 47,
        cat: "kaffe",
        img: "https://www.cfacdn.com/img/order/menu/Online/Drinks/tea_pdp.png"
    },
]

let dessert = [
    {
        name: "Brownies",
        desc: "Hardt på utsiden, myk inni",
        price: 44,
        cat: "dessert",
        img: "https://www.breadsmith.com/wp-content/uploads/2015/09/Brownie.png"
    },
    {
        name: "Oreokake",
        desc: "2 favoritter i en",
        price: 54,
        cat: "dessert",
        img: "https://3brothersbakery.com/wp-content/uploads/2018/05/Cake8Oreo1.png"
    },
    {
        name: "Kanelbolle",
        desc: "Smaker jul",
        price: 46,
        cat: "dessert",
        img: "https://harvestbakery.com/wp-content/uploads/2016/04/CinnamonBunw_CCIcing_clipped_rev_1.png"
    },
    {
        name: "Croissant",
        desc: "Fransk",
        price: 38,
        cat: "dessert",
        img: "https://medias.bridordefrance.com/media/sys_master/images/h58/h5e/8801910063134.png"
    },
    {
        name: "Chiapudding",
        desc: "God.",
        price: 42,
        cat: "dessert",
        img: "https://eventsand.co/wp-content/uploads/2020/02/Events-and-Co-Catering-Matcha-Chia-Pudding.png"
    },
    {
        name: "Brioche",
        desc: "Vet ikke helt hva dette er.",
        price: 44,
        cat: "dessert",
        img: "https://assets.stickpng.com/thumbs/58b16cef102ddecdee0dd025.png"
    },
    {
        name: "Scones",
        desc: "Rart rundstykke",
        price: 37,
        cat: "dessert",
        img: "https://assets.stickpng.com/thumbs/5895fc35cba9841eabab609d.png"
    },
]


let items = []
for(let el of coffe){
    items.push(el)
}
for(let el of dessert){
    items.push(el)
}

export default items