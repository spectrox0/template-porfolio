import {MultiLang} from "../models/Multilang";
import {Skill} from '../models/Skill'
import {paletteColorsDark} from "../styles/variables";
import {Service} from "../models/Service";

export const imgProfile: string = require('images/profileImage.jpeg?webp');

export const descriptionAboutMe: MultiLang = {
    "es": "Hola soy Viviana",
    'en': "Hi i'm Viviana"
}

export const urlCV = ''

export const infoBiography: { name: string, value: string | number } [] = [{
    name: "age",
    value: 24
},
    {name: 'freelance', value: 'available'},
    {name: 'experience', value: '3 years'},
    {name: 'email', value: 'vivinaruto@gmail.com'},
    {
        name: 'degree', value: 'bachelor'
    }
]

export const skills: Skill [] = [
    {
        category: 'sap',
        key: 'sap',
        name: 'SAP',
        percentage: 80
    },
    {
        category: 'web',
        key: 'typescript',
        name: 'Typescript',
        percentage: 80
    },
    {
        category: 'design',
        key: 'figma',
        name: 'Figma',
        percentage: 70
    },
    {
        category: 'design',
        key: 'adobe xd',
        name: 'Adobe XD',
        percentage: 60
    },
    {
        category: 'web',
        key: 'css3',
        name: 'CSS3',
        percentage: 70
    },
    {
        category: 'web',
        key: 'angular',
        name: 'Angular +2',
        percentage: 70
    },
    {
        category: 'web',
        key: 'vue',
        name: 'Vue.js',
        percentage: 70
    },
    {
        category: 'web',
        key: 'react',
        name: 'React.js',
        percentage: 40
    },
    {
        category: 'web',
        key: 'firebase',
        name: 'Firebase',
        percentage: 70
    }
]

export const interest = []

interface SocialNetworks {
    linkedin: string,
    github: string
    telegram: string
}

export const socialNetwork: SocialNetworks = {
    linkedin: "",
    github: "",
    telegram: ""
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

export const categoriesWork: CategoriesWork[] = [
    {
        key: "sap",
        name: "SAP"
    },
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
}