export type InteractionNav = {
    name: string
    interaction: false | {
        link: string
    }
}
export type NavElements = {
    name: string
    type: string
    interaction: false | {
        link: string
    }
    subMenu: false | InteractionNav[]
}
export type DefaultParams = {
    interaction: false
    subMenu: false
}

const defaultParams: DefaultParams = {
    interaction: false,
    subMenu: false
}
export const navElements: NavElements[] = [
    {
        ...defaultParams,
        name: "about",
        type: "standard",
        subMenu: [
            {
                name: "About Me",
                interaction: {
                    link: "/about"
                }
            },
            {
                name: "testimonials",
                interaction: {
                    link: "/testimonials"
                }
            },
            {
                name: "awards",
                interaction: {
                    link: "/awards"
                }
            }
        ]
    },
    {
        ...defaultParams,
        name: "conditions",
        type: "standard",
        subMenu: [
            {
                name: "sexual dysfunction",
                interaction: {
                    link: "/sexual-dysfunction"
                }
            },
            {
                name: "incontinence",
                interaction: {
                    link: "/incontinence"
                }
            },
            {
                name: "lichen-sclerosus",
                interaction: {
                    link: "/lichen-sclerosus"
                }
            }
        ]
    },
    {
        ...defaultParams,
        name: "female orgasm system",
        type: "standard",
        interaction: {
            link: "/female-orgasm-system"
        }
    },
    {
        ...defaultParams,
        name: "gallery",
        type: "standard",
        subMenu: [
            {
                name: "photo",
                interaction: {
                    link: "/photos"
                }
            },
            {
                name: "videos",
                interaction: {
                    link: "/videos"
                }
            }
        ]
    },
    {
        ...defaultParams,
        name: "faqs",
        type: "standard",
        interaction: {
            link: "/faqs"
        }
    },
    {
        ...defaultParams,
        name: "press",
        type: "standard",
        interaction: {
            link: "/press"
        }
    },
    {
        ...defaultParams,
        name: "training",
        type: "standard",
        interaction: {
            link: "/training"
        }
    },
    {
        ...defaultParams,
        name: "contact us",
        type: "standard",
        interaction: {
            link: "/contact"
        }
    },
    {
        ...defaultParams,
        name: "",
        type: "separator",
    },
    {
        ...defaultParams,
        name: "+44 0207 467 5340",
        type: "phone",
        interaction: {
            link: "tel:+4402074675340"
        }
    }
]