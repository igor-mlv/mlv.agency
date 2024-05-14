import { list } from "postcss";

export const navbarLinks = [
    {
        id: "aboutUs",
        title: "About Us",
    },
    {
        id: "services",
        title: "Services",
    },
    {
        id: "contact",
        title: "Contact Us",
    },
];

export const heroSection = {
    title: "We don't just build websites - we build the future of your business online.",
    btnText: "Get free quote",
    vectorUrlLargeScreen: "/assets/heroSection/VectorBGLgScreen.svg",
    vectorUrlSmallScreen: "/assets/heroSection/vectorUrlSmallScreen.svg",
};

export const aboutUsSection = {
    title: "About us",
    firstParagraph: {
        text: "At <span className='text-violet'>MLV Web</span> Agency, we create unique websites from scratch.",
    },
    secondParagraph: {
        text: "We increase profits by introducing online marketing tools",
        dollarText: "$$=$$<span className='text-violet'>$$</span>",
    },
    thirdParagraph: {
        text: "Our use of advanced technologies ensures optimal website performance.",
        iconUrl: "/assets/aboutUsSection/50PercentageIcon.svg",
    },
    igorPhotoUrl: "/assets/aboutUsSection/IgorPicture.png",
    igorPhotoTitle: "Founder <span className='text-violet'>Igor Malov</span>",
    igorPhotoAlt: "Founder Igor Malov",
};

export const portfolioSection = {
    title: "Latest roject",
    project: {
        title: "RenoMotion",
        paragraph: "Website designed for Renomotion Inc., specializing in transforming bathrooms, basements, and kitchens with innovative designs and quality craftsmanship",
        btnText: "Visit website",
        btnUrl: "https://www.renomotion.ca/",
        description: [
            {
                text: "(Landing Page Development)"
            },
            {
                text: "(Two weeks)"
            },
            {
                text: "(Fully Managed Hosting)"
            },
        ],
        portfolioImgUrl: "/assets/portfolioSection/Portfolio.png",
        photoBGImgUrl: "/assets/portfolioSection/PhotoBG.png",
        containerBGImgUrl: "/assets/portfolioSection/ContainerBG.png",
    },
}

export const workStagesSection = {
    title: "Work stages",
    stages: [
        {
            id: "(1)",
            title: "Introduction and briefing",
            list: [
                "Define website goals and objectives.",
                "Research target audience and competitors.",
                "Determine budget and timeline.",
            ]
        },
        {
            id: "(2)",
            title: "Design Exploration",
            list: [
                "Create wireframes and mockups for website layout.",
                "Design a visually appealing and user-friendly interface.",
                "Select color scheme and typography that reflects the brand.",
                "Ensure responsive design for mobile compatibility.",
            ]
        },
        {
            id: "(3)",
            title: "Building Process",
            list: [
                "Set up hosting and domain name registration.",
                "Develop website structure and navigation.",
                "Integrate e-commerce functionality for ordering products, services online.",
                "Implement secure payment gateways.",
                "Add features like search, filters, and shopping cart.",
            ]
        },
        {
            id: "(4)",
            title: "Testing Stage",
            list: [
                "Perform usability testing to ensure smooth navigation.",
                "Test functionality across different devices and browsers.",
                "Check for broken links and errors.",
                "Test the checkout process and payment gateway.",
            ]
        },
        {
            id: "(5)",
            title: "Launch Preparation",
            list: [
                "Finalize website content and graphics.",
                "Set up basic SEO elements like meta tags and keywords.",
            ]
        },
        {
            id: "(6)",
            title: "Post-launch Management",
            list: [
                "Monitor website performance and traffic using analytics.",
                "Gather feedback from users and make necessary improvements.",
                "Update content regularly to keep it fresh and relevant."
            ]
        },
    ]
}

export const servicesSection = {
    title: "Services",
    cards: [
        {
            id: 1,
            title: "Landing Page Package",
            startsFrom: "Starts From",
            price: "$2490",
            list: [
                "Development of one web page",
                "Responsive design for mobile compatibility",
                "Basic SEO optimization",
            ]
        },
        {
            id: 2,
            title: "Basic Website Package",
            startsFrom: "Starts From",
            price: "$4990",
            list: [
                "Development of multiple web pages",
                "Responsive design for mobile compatibility",
                "Basic SEO optimization",
            ]
        },
        {
            id: 3,
            title: "E-commerce Website Package",
            startsFrom: "Starts From",
            price: "$7990",
            list: [
                "Custom design and development tailored to e-commerce needs",
                "Responsive design for mobile compatibility",
                "Advanced e-commerce features such as product catalog, shopping cart, and checkout system",
                "Integration of secure payment gateways",
                "Product management system for easy inventory management",
                "Enhanced SEO optimization for product pages",
            ]
        },
    ],
    btnText: "Contact",

}

export const subscriptionSection = [
    {
        id: 1,
        title: "Self-Management Plan",
        price: "$0",
        month: "/month",
        list: [
            "Transfer all website files and access to you for self-management.",
            "Full access to website files and backend, allowing you to manage and update your website independently."
        ],
    },
    {
        id: 2,
        title: "Fully Managed Hosting Plan",
        price: "~$99",
        month: "/month",
        list: [
            "We handle everything from managing website files to server management and maintenance.",
            "Comprehensive management of your website, ensuring optimal performance and security, with regular backups and updates.",
        ],
    },
    {
        id: 3,
        title: "Pro Plan with SEO Optimization",
        price: "~$390",
        month: "/month",
        list: [
            "Enhance your website's visibility with professional SEO optimization.",
            "Tailored SEO strategies to improve search engine rankings, increase organic traffic, and boost your online presence.",
        ],
    },
]

export const contactUsSection = {
    title: "Let's build something <span className='text-violet'>special</span> together",
}

export const contactUsForm = {
    title: "Discuss the project",
    paragraph: "(contact us at any time)",
    sociaMediaBtns: [
        {
            iconSrc: "/assets/conatcUsForm/telegramIcon.svg",
            btnText: "Telegram",
            alt: "Contact us via Telegram",
            width: "w-[164px]",
            href: "https://t.me/igorMLV"
        },
        {
            iconSrc: "/assets/conatcUsForm/mailIcon.svg",
            btnText: "Mail",
            alt: "Contact us via Mail",
            width: "w-[130px]",
            href: "mailto: test@gmail.com"

        },
    ],
}