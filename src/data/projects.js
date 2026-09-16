const base = import.meta.env.BASE_URL;

export default [

    {
        title: "BookYourHotel",

        category: "Hotel Management SaaS",

        subtitle: "Hotel Management SaaS",

        featured: true,

        features:[
            "Room management",
            "Inventory calendar"
        ],

        technologies: [
            "Laravel",
            "Livewire",
            "Alpine.js",
            "Tailwind CSS",
            "MySQL"
        ],

        description:
            "Multi-hotel management platform featuring room inventory, supplier dashboard, seasonal pricing and role management.",

        github:
            "https://github.com/BojanDjurdjevic/BookYourHotel",

        demo: "https://bookyourhotelapp.com/",

        image:
            "/images/hotel.webp"
    },

    {
        title: "KombiTransfer",

        category: "Reservation Platform",

        subtitle: "Reservation Platform",

        technologies: [
            "PHP",
            "Vue.js",
            "Vuetify",
            "MySQL"
        ],

        description:
            "Passenger transport reservation platform with online booking and route management.",

        github:
            "https://github.com/BojanDjurdjevic/kombitransfer",

        demo:
            "https://kombitransfer.com",

        image:
            `${base}/images/projects/kombitransfer.png`
    },

    {
        title: "Automarket",

        category: "Car Marketplace",

        subtitle: "Car Marketplace",

        technologies: [
            "Laravel API",
            "TypeScript",
            "Vite"
        ],

        description:
            "Modern car marketplace built with Laravel API and TypeScript frontend.",

        github:
            "https://github.com/BojanDjurdjevic/Automarket2",

        demo: null,

        image:
            `${base}/images/projects/automarket.png`
    }

];