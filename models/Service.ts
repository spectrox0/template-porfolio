import {EnumIcon} from "./Icon";

export interface Service {
    key: string,
    name: string,
    icon: keyof typeof EnumIcon,
    description: string
}