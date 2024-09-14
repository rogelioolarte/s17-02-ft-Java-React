export interface User {
    token: string,
    roleName: string,
    roleId: string,
    userId: string,
    username: string,
    email?: string,
    profileId?: string,
    profileName?: string,
    profileLastname?: string,
    documentType?: string,
    documentNumber?: string,
    avatarUrl?: string,
    birth?: string,
    address?: string,
    cityName?: string,
}

export interface Department {
    departmentId: number,
    departmentName: string,
    cities: City[]
}

export interface City {
    cityId: number,
    cityName: string
}
