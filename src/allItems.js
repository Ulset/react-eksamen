let coffe = [
    {
        name: "Filterkaffe",
        desc: "Denne har du smakt før",
        price: 32,
        cat: "kaffe",
        img: "https://www.drinktrade.com/img/onboarding/question-1.png"
    },
    {
        name: "Cappuccino",
        desc: "Feelin fancy are ya",
        price: 42,
        cat: "kaffe",
        img: "https://cdn5.mystore4.no/thumb/600_600/metallskilt/88831_NA_Coffee_First_Your_Bullshit_Second_8.png"
    },
    {
        name: "Americano",
        desc: "Når du ikke er helt tøff nok for espresso",
        price: 36,
        cat: "kaffe",
        img: "https://www.nostalgia.no/users/nostalgia_mystore_no/images/45487_Nostalgic_Art_Krus_-_Have_A_Coffee_1.png"
    },
    {
        name: "Iskaffe",
        desc: "Varm dag?",
        price: 42,
        cat: "kaffe",
        img: "https://www.cfacdn.com/img/order/COM/Menu_Refresh/Treats/Treats%20PDP/_0000s_0004_%5BFeed%5D_0005s_0000_Treats_Frosted-Coffee.png"
    },
    {
        name: "Caffè Mocha",
        desc: "Kaffe på lørdagskveld",
        price: 46,
        cat: "kaffe",
        img: "https://cdn3.mystore4.no/thumb/600_600/metallskilt/54975_NA_All_Types_of_Coffee_1.png"
    },
    {
        name: "Caffè Latte",
        desc: "Flere kalorier en du tror!",
        price: 48,
        cat: "kaffe",
        img: "https://kuacoffee.co/static/14c0c0e596800b7693e5d9635458f8c5/ddb9e/cup-4.png"
    },
    {
        name: "Macchiato",
        desc: "Søt, men også fyldig",
        price: 51,
        cat: "kaffe",
        img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_300,h_300/https://www.coffeeworks.co.th/wp-content/uploads/2018/07/coffee-cup-small-lighter_03-300x300.png"
    },
    {
        name: "Espresso",
        desc: "Jeg må våkne - NÅ",
        price: 38,
        cat: "kaffe",
        img: "https://brewcoffeehouse.com/wp-content/uploads/2020/07/coffee.png"
    },
    {
        name: "Cortado",
        desc: "Eksotisk!",
        price: 40,
        cat: "kaffe",
        img: "https://kuacoffee.co/static/06b311464afb29df3392f8d9d8738ed0/ddb9e/cup-2.png"
    },
    {
        name: "Iste",
        desc: "Jeg vil sove",
        price: 47,
        cat: "kaffe",
        img: "https://static.wixstatic.com/media/159d55_c47eefa4b2384d5a89376aafb703339a~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
    },
]

let dessert = [
    {
        name: "Brownies",
        desc: "Hardt på utsiden, myk inni",
        price: 44,
        cat: "dessert",
        img: "https://www.drinktrade.com/img/onboarding/question-1.png"
    },
    {
        name: "Oreokake",
        desc: "2 favoritter i en",
        price: 54,
        cat: "dessert",
        img: "https://www.drinktrade.com/img/onboarding/question-1.png"
    },
    {
        name: "Kanelbolle",
        desc: "Smaker jul",
        price: 46,
        cat: "dessert",
        img: "https://www.drinktrade.com/img/onboarding/question-1.png"
    },
    {
        name: "Croissant",
        desc: "Fransk",
        price: 38,
        cat: "dessert",
        img: "https://www.drinktrade.com/img/onboarding/question-1.png"
    },
    {
        name: "Chiapudding",
        desc: "God.",
        price: 42,
        cat: "dessert",
        img: "https://www.drinktrade.com/img/onboarding/question-1.png"
    },
    {
        name: "Brioche",
        desc: "Vet ikke helt hva dette er.",
        price: 44,
        cat: "dessert",
        img: "https://www.drinktrade.com/img/onboarding/question-1.png"
    },
    {
        name: "Scones",
        desc: "Rart rundstykke",
        price: 37,
        cat: "dessert",
        img: "https://www.drinktrade.com/img/onboarding/question-1.png"
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