export interface User {
    token: string,
    roleName: string,
    roleId: string,
    userId: string,
    username: string,
    profile?: Profile,
    specialist?: Specialist
}

export interface Profile {
    email: string,
    profileId: string,
    profileName: string,
    profileLastname: string,
    documentType: string,
    documentNumber: string,
    avatarUrl: string,
    birth: string,
    address: string,
    cityId?: number,
    cityName?: string,
    departmentId?: number,
    departmentName?: string,
    countryId?: number
    countryName?: string,
}

export interface Specialist {
    specialistId: string,
    specialistCode: string,
    specialtyId?: number,
    specialtyName?: string,
    bookingPrice?: number,
    reputation?: number,
    specialistName: string,
    specialistLastname: string
}

export interface Specialty {
    specialtyId: number,
    specialtyName: string,
    specialtyDescription: string,
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