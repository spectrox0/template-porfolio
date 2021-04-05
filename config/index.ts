import {MultiLang} from "../models/Multilang";
import {EnumSkill, Skill} from '../models/Skill'
import {paletteColorsDark} from "../styles/variables";
import {Service} from "../models/Service";


interface SocialNetworks {
    linkedin: { name: string, value: string, href?: string }
    github: { name: string, value: string, href?: string }
    email: { name: string, value: string, href?: string }
}

enum EnumCategories {
    sap,
    web,
    design,
    certificates,
}

interface CategoriesWork {
    name: string,
    key: keyof typeof EnumCategories
}

export const firstName= 'Viviana'
export const lastName = 'Tepedino'
export const fullName = `${firstName} ${lastName}`
export const imgProfile: string = require('images/profileImage.jpg?webp')
export const imgProfileBlur: string = require('images/profileImage.jpg?lqip')
export const backgroundImage: string = require("images/background_two.jpg?webp")
export const emailFromContact: string = "alejandro.velazco@correo.unimet.edu.ve"

export const descriptionAboutMe: MultiLang = {
    "es": "Hola soy Viviana",
    'en': "Hi i'm Viviana"
}
export const urlCV = '/'
export const socialNetwork: SocialNetworks = {
    linkedin: {
        name: "Linkedin",
        value: "",
        href: "https://www.linkedin.com/in/viviana-tepedino-9469471b8/"
    },
    github: {
        name: "Github",
        value: "VivianaTC",
        href: "https://github.com/VivianaTC/"
    },
    email: {
        name: "Email",
        href:"mailto: vivitepedino@gmail.com",
        value: "vivitepedino@gmail.com"
    }
}
export const infoBiography: { name: string, value: string | number } [] = [{
    name: "age",
    value: 24
},
    {name: 'freelance', value: 'available'},
    {name: 'experience', value: '3 years'},
    {name: 'email', value: socialNetwork.email.value},
    {
        name: 'degree', value: 'bachelor'
    }
]

export const skills: Skill [] = [
    {
        category: 'sap',
        key: EnumSkill.sap,
        name: 'SAP',
        percentage: 80
    },
    {
        category: 'web',
        key: EnumSkill.typescript,
        name: 'Typescript',
        percentage: 50
    },
    {
        category: 'design',
        key: EnumSkill.figma,
        name: 'Figma',
        percentage: 80
    },
    {
        category: 'design',
        key: EnumSkill["adobe xd"],
        name: 'Adobe XD',
        percentage: 70
    },
    {
        category: 'web',
        key: EnumSkill.css3,
        name: 'CSS3',
        percentage: 50
    },
    {
        category: 'web',
        key: EnumSkill.angular,
        name: 'Angular +2',
        percentage: 50
    },
    {
        category: 'web',
        key: EnumSkill.vue,
        name: 'Vue.js',
        percentage: 40
    },
    {
        category: 'web',
        key: EnumSkill.react,
        name: 'React.js',
        percentage: 30
    },
    {
        category: 'web',
        key: EnumSkill.firebase,
        name: 'Firebase',
        percentage: 50
    }
].sort((a, b) => {
    if (a.category > b.category) return 1; else return -1
})

export const categoriesWork: CategoriesWork[] = [
    {
        key: 'web',
        name: "Web Development",
    },
    {
        key: 'design',
        name: 'UI/UX Design'
    },
    {
        key: 'certificates',
        name: 'Certificates'
    },
]
export const Services: Service[] = [
    {
        key: 'sap',
        name: 'SAP architecture',
        icon: 'sap',
        description: 'ssasas'
    },
    {
        key: 'design',
        name: 'UI/UX design',
        icon: 'design',
        description: 'ssasas'
    },
    {
        key: 'web',
        name: 'Frontend Development',
        icon: 'web',
        description: 'ssasas'
    },
]
export const colorCategory = {
    'sap': paletteColorsDark.primary,
    'design': paletteColorsDark.secondary,
    'web': paletteColorsDark.error,
    'certificate': paletteColorsDark.primary,
}




