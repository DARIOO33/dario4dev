const array = [
    {
        "id": 1,
        "name": "Msi Monitor",
        "description": "Envision your triumph with the MSI MAG342CQR Curved Gaming monitor. With a 3440x1440 resolution, 144Hz refresh rate, and 1ms response time panel, the MAG342CQR provides the competitive edge you need to defeat your opponents. Equipped with adaptive sync, this monitor can match the display's refresh rate with your GPU for ultra-smooth gameplay. With all the latest technologies built-in, the MSI Curved Gaming monitor ensures you hit your mark for competitive play.",
        "price": "369.99",
        "category": "electronics",
        "images": ["https://res.cloudinary.com/dizjoy6v5/image/upload/v1693216055/ecommerce/msi_pe2l9f.png",
            "https://res.cloudinary.com/dizjoy6v5/image/upload/v1693216063/ecommerce/msi2_aqtkhp.png"]

    },
    {
        "id": 2,
        "name": "Bluetooth Headset",
        "description": "JBL PURE BASS SOUND: For over 70 years, JBL has engineered the precise, impressive sound found in big venues around the world. These headphones reproduce that same JBL sound, punching out bass that’s both deep and powerful.",
        "price": 69,
        "category": "electronics",
        "images": ["https://res.cloudinary.com/dizjoy6v5/image/upload/v1693216050/ecommerce/headset2_f1gp6k.png",
            "https://res.cloudinary.com/dizjoy6v5/image/upload/v1693215987/ecommerce/headset_s7yz5p.png"]

    },
    {
        "id": 3,
        "name": "Dumbbell for gym",
        "description": "Weight training dumbbells made of best quality rubber. ${<br/>} A combination of professional dumbbells for the perfect workout & can be used in home or in gym <br/> Long lasting & durable material.",
        "price": 225,
        "category": "sport",
        "images": ["https://res.cloudinary.com/dizjoy6v5/image/upload/v1693218719/ecommerce/dumbell_2_ffmfsv.png",
            "https://res.cloudinary.com/dizjoy6v5/image/upload/v1693218708/ecommerce/dumbell_1_dcicku.png"]

    },
    {
        "id": 4,
        "name": "Shoes For Men",
        "description": "This is another product.",
        "price": 140,
        "category": "fashion"
    },
    {
        "id": 5,
        "name": "Gaming Mouse Razer",
        "description": "This is another product.",
        "price": 110,
        "category": "electronics"
    },
    {
        "id": 6,
        "name": "Gym Equipement",
        "description": "This is another product.",
        "price": 200,
        "category": "sport"
    },
    {
        "id": 7,
        "name": "360 Camera",
        "description": "This is another product.",
        "price": 599,
        "category": "sport"
    },
    {
        "id": 8,
        "name": "Fashion Stainless Steel Men",
        "description": "Fashion Stainless Steel Men Curb Cuban Chain Bracelet Women Bracelet On Hand For Couple Unisex Wrist Hand Jewelry Gift Party.",
        "price": 9,
        "category": "fashion"
    }
]
export default function handler(req, res) {
    res.status(200).json(array)

}