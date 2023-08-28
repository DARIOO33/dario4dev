import img from '../../app/assets/me2.png'
const array = [
    {
        "id": 1,
        "name": "Msi Monitor",
        "description": "Envision your triumph with the MSI MAG342CQR Curved Gaming monitor. With a 3440x1440 resolution, 144Hz refresh rate, and 1ms response time panel, the MAG342CQR provides the competitive edge you need to defeat your opponents. Equipped with adaptive sync, this monitor can match the display's refresh rate with your GPU for ultra-smooth gameplay. With all the latest technologies built-in, the MSI Curved Gaming monitor ensures you hit your mark for competitive play.",
        "price": "369.99",
        "category": "electronics",
        "images": ["msi", "msi2"]

    },
    {
        "id": 2,
        "name": "Bluetooth Headphones",
        "description": "This is another product.",
        "price": 69,
        "category": "electronics",
        "images": [img, "headset2"]

    },
    {
        "id": 3,
        "name": "Weight For Training",
        "description": "This is another product.",
        "price": 225,
        "category": "sport"
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