import * as React from 'react'
import {MultiLang} from "../models/Multilang";
import {Skill} from '../models/Skill'
import {SiTypescript,SiAdobexd,SiFirebase} from 'react-icons/si'
import {FaAngular, FaReact,FaVuejs, FaFigma} from 'react-icons/fa'

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
        category: 'web',
        name: 'typescript',
        percentage: 80
    },
    {
        category: 'design',
        name: 'figma',
        percentage: 70
    },
    {
        category: 'design',
        name: 'adobe xd',
        percentage: 60
    },
    {
        category: 'web',
        name: 'css3',
        percentage: 70
    },
    {
        category: 'web',
        name: 'angular',
        percentage: 70
    },
    {
        category: 'web',
        name: 'vue',
        percentage: 70
    },
    {
        category: 'web',
        name: 'react',
        percentage: 40
    },
    {
        category: 'web',
        name: 'firebase',
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