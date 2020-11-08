let coffe = [
    {
        name: "Filterkaffe",
        desc: "Klassisk kaffe fra Evergood",
        price: 32,
        cat: "kaffe",
        img: "https://cdn1.npcdn.net/image/15439990457279b422c7035f2bdcacf0459ee4a12c.png?md5id=75124f25b1db7620476f6d70697fec61&new_width=1000&new_height=1000&w=1543214181"
    },
    {
        name: "Cappuccino",
        desc: "Frisk cappuccino for deg i farta",
        price: 42,
        cat: "kaffe",
        img: "https://pornovape.com/images/thumbnails/250/250/detailed/1/Cappuccino@2x.png"
    },
    {
        name: "Americano",
        desc: "God og nytraktet americano",
        price: 36,
        cat: "kaffe",
        img: "https://i.pinimg.com/originals/fb/2c/53/fb2c53552965bc81f112092e59eb6f7f.png"
    },
    {
        name: "Iskaffe",
        desc: "Varm dag? Ta en iskaffe og kjøl deg ned",
        price: 42,
        cat: "kaffe",
        img: "https://www.monin.com/us/media/catalog/product/cache/715e3bd7e68644be70dcb763021c03d6/8/f/8fa59f07-1232-4009-ab39-b7c32ea3b5d0-2.png"
    },
    {
        name: "Caffè Mocha",
        desc: "God kaffe med ekstra krem",
        price: 46,
        cat: "kaffe",
        img: "https://i.pinimg.com/originals/84/91/28/849128e37ef58ebecbeb3cd5febd00f6.png"
    },
    {
        name: "Caffè Latte",
        desc: "Søt variant, men flere kalorier en du tror!",
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
        desc: "God og kjapp, for deg i farta",
        price: 38,
        cat: "kaffe",
        img: "https://www.philips.no/c-dam/b2c/category-pages/Household/coffee/master/faq/cups/Productimg_Lungo.png"
    },
    {
        name: "Cortado",
        desc: "Eksotisk og frisk variant",
        price: 40,
        cat: "kaffe",
        img: "https://www.monin.com/us/media/catalog/product/cache/715e3bd7e68644be70dcb763021c03d6/3/8/38574fe5-b6d5-4ea7-9066-029cff1f98f7-2.png"
    },
    {
        name: "Iste",
        desc: "Kald iste med sugerør og isbiter",
        price: 47,
        cat: "kaffe",
        img: "https://www.cfacdn.com/img/order/menu/Online/Drinks/tea_pdp.png"
    },
]

let dessert = [
    {
        name: "Brownies",
        desc: "Den klassiske, kanskje din favoritt?",
        price: 44,
        cat: "dessert",
        img: "https://www.breadsmith.com/wp-content/uploads/2015/09/Brownie.png"
    },
    {
        name: "Oreokake",
        desc: "Stor kake med oreo spredt rundt",
        price: 54,
        cat: "dessert",
        img: "https://3brothersbakery.com/wp-content/uploads/2018/05/Cake8Oreo1.png"
    },
    {
        name: "Kanelbolle",
        desc: "God og fersk fra bakeri",
        price: 46,
        cat: "dessert",
        img: "https://harvestbakery.com/wp-content/uploads/2016/04/CinnamonBunw_CCIcing_clipped_rev_1.png"
    },
    {
        name: "Croissant",
        desc: "Fransk baguette med fyldig og god smak",
        price: 38,
        cat: "dessert",
        img: "https://medias.bridordefrance.com/media/sys_master/images/h58/h5e/8801910063134.png"
    },
    {
        name: "Chiapudding",
        desc: "Fersk og nylagd pudding",
        price: 42,
        cat: "dessert",
        img: "https://eventsand.co/wp-content/uploads/2020/02/Events-and-Co-Catering-Matcha-Chia-Pudding.png"
    },
    {
        name: "Brioche",
        desc: "Bakt med hvete med smør, sukker, og egg",
        price: 44,
        cat: "dessert",
        img: "https://lh3.googleusercontent.com/proxy/_YhNPNj6mgKgLyakxgAMcBryseXNWMZFnPvXkHBbsmmn_oPwyUWPeGiVxq8Tn-p3S-VKat2VJa1mCXkKOVK7iaDvyXpEmo1BNHvzZyeX9KT_qEpw42Q"
    },
    {
        name: "Scones",
        desc: "Ferskt rundstykke bakt med bakepulver",
        price: 37,
        cat: "dessert",
        img: "https://www.pngkit.com/png/full/289-2897794_baker-and-scone-freshly-baked-scones-scones-transparent.png"
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