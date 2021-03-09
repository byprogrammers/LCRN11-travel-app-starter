export const countries = [
    {
        id: 1,
        name: "Malaysia",
        image: require("../assets/images/malaysia/malaysia_map.png"),
        places: [
            {
                id: 1,
                name: "Kuching",
                description: "Kuching, officially the City of Kuching, is the capital and the most populous city in the state of Sarawak in Malaysia. It is also the capital of Kuching Division.",
                image: require("../assets/images/malaysia/kuching.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 1.557177,
                    longitude: 110.351902,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "1",
                        name: "Riverside Majestic Hotel",
                        image: require("../assets/images/malaysia/kuching/riverside_majestic_hotel.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 1.557907,
                            longitude: 110.352079,
                        },
                    },
                    {
                        id: "2",
                        name: "Grand Margherita Hotel",
                        image: require("../assets/images/malaysia/kuching/grand_margherita_hotel.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 1.558163,
                            longitude: 110.352813,
                        },
                    },
                    {
                        id: "3",
                        name: "Hilton Kuching",
                        image: require("../assets/images/malaysia/kuching/hilton_kuching.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 1.557144,
                            longitude: 110.350496,
                        },
                    },
                ]
            },
            {
                id: 2,
                name: "Kuala Lumpur",
                description: "Kuala Lumpur is the capital of Malaysia. Its modern skyline is dominated by the 451m-tall Petronas Twin Towers, a pair of glass-and-steel-clad skyscrapers with Islamic motifs.",
                image: require("../assets/images/malaysia/kuala_lumpur.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 3.135662,
                    longitude: 101.687128,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "1",
                        name: "Hilton Kuala Lumpur",
                        image: require("../assets/images/malaysia/kuala_lumpur/hilton_kuala_lumpur.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 3.135308,
                            longitude: 101.685729,
                        },
                    },
                    {
                        id: "2",
                        name: "Le Méridien Kuala Lumpur",
                        image: require("../assets/images/malaysia/kuala_lumpur/le_meridien_kuala_lumpur.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 3.135843,
                            longitude: 101.686544,
                        },
                    },
                    {
                        id: "3",
                        name: "The St. Regis Kuala Lumpur",
                        image: require("../assets/images/malaysia/kuala_lumpur/the_st_regis_kuala_lumpur.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 3.136902,
                            longitude: 101.688924,
                        },
                    },
                ]
            },
            {
                id: 3,
                name: "Penang",
                description: "George Town is the colorful, multicultural capital of the Malaysian island of Penang.",
                image: require("../assets/images/malaysia/penang.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "1",
                        name: "Sunrise Gurney",
                        image: require("../assets/images/malaysia/penang/sunrise_gurney.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.432874,
                            longitude: 100.316750,
                        },
                    },
                    {
                        id: "2",
                        name: "Sunrise Gurney Homestay",
                        image: require("../assets/images/malaysia/penang/sunrise_gurney_homestay.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.431626,
                            longitude: 100.317848,
                        },
                    },
                    {
                        id: "3",
                        name: "Evergreen Laurel Hotel Penang",
                        image: require("../assets/images/malaysia/penang/evergreen_laurel_hotel_penang.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.431288,
                            longitude: 100.317898,
                        },
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: "India",
        image: require("../assets/images/india/india_map.png"),
        places: [
            {
                id: 1,
                name: "Goa",
                description: "Known for its gorgeous beaches, stellar nightlife, delish seafood, world-heritage listed monuments, Goa is where all the fun is in India.",
                image: require("../assets/images/india/goa.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 15.498931,
                    longitude: 73.767945,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "1",
                        name: "Taj Holiday Village",
                        image: require("../assets/images/india/goa/taj_holiday_village.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 15.499815,
                            longitude: 73.769295,
                        },
                    },
                    {
                        id: "2",
                        name: "Taj Fort Aguada",
                        image: require("../assets/images/india/goa/taj_fort_aguada.jpeg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 15.497798,
                            longitude: 73.767097,
                        },
                    },
                ]
            },
            {
                id: 2,
                name: "Jaipur",
                description: "The Pink City, Jaipur is a destination you cannot miss when visiting India. Jaipur is a perfect reflection of what the royal state of Rajasthan is about.",
                image: require("../assets/images/india/jaipur.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 26.928055,
                    longitude: 75.788295,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "1",
                        name: "Umaid Mahal",
                        image: require("../assets/images/india/jaipur/umaid_mahal.webp"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 26.927940,
                            longitude: 75.789056,
                        },
                    },
                ]
            },
            {
                id: 3,
                name: "Agra",
                description: "Home to the symbol of love, Taj Mahal, Agra in Uttar Pradesh finds its spot on the world heritage map.",
                image: require("../assets/images/india/agra.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 27.168123,
                    longitude: 78.049032,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "1",
                        name: "The Oberoi Amarvilas",
                        image: require("../assets/images/india/agra/the_oberoi_amarvilas.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 27.168123,
                            longitude: 78.049032,
                        },
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Indonesia",
        image: require("../assets/images/indonesia/indonesia_map.png"),
        places: [
            {
                id: 1,
                name: "Bali",
                description: "Bali has it all. Scenic mountains, sacred temples, rich culture, sandy beaches, surf-worthy waves, lively nightlife, exciting shopping… and the list goes on.",
                image: require("../assets/images/indonesia/bali.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.422605,
                    longitude: 115.274697,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "1",
                        name: "The Kayon Jungle Resort",
                        image: require("../assets/images/indonesia/bali/the_kayon_jungle_resort.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422426,
                            longitude: 115.275185,
                        },
                    },
                    {
                        id: "2",
                        name: "Green View Private Villas",
                        image: require("../assets/images/indonesia/bali/green_view_private_villas.webp"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422203,
                            longitude: 115.275142,
                        },
                    },
                ]
            },
            {
                id: 2,
                name: "Jakarta",
                description: "Jakarta may seem like a daunting megacity, but it also has a couple of interesting places that are worth a stopover.",
                image: require("../assets/images/indonesia/jakarta.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -6.227687,
                    longitude: 106.826979,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "1",
                        name: "Oakwood Premier Cozmo",
                        image: require("../assets/images/indonesia/jakarta/oakwood_premier_cozmo.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227846,
                            longitude: 106.825391,
                        },
                    },
                    {
                        id: "2",
                        name: "JW Marriott Hotel",
                        image: require("../assets/images/indonesia/jakarta/jw_marriott_hotel.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227036,
                            longitude: 106.827333,
                        },
                    },
                ]
            },
            {
                id: 3,
                name: "Nusa Penida",
                description: "If you are in Bali and you want to go off-beat, go to Nusa Penida. Nusa Penida is the biggest of the three Nusa Islands just off from mainland Bali.",
                image: require("../assets/images/indonesia/nusa_penida.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.703571,
                    longitude: 115.439826,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "1",
                        name: "Purist Beach",
                        image: require("../assets/images/indonesia/nusa_penida/purist_beach.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.703571,
                            longitude: 115.439826,
                        },
                    },
                ]
            }
        ]
    },
]

const dummyData = { countries };

export default dummyData;