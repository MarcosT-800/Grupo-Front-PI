
export type Person = {}

export type User = {
    username: string,
    user_password: string,
    atuation: string,
    admin: string
}
export type UserResponse = {
    username: string,
    user_password: string,
    atuation: string,
    admin: string,
    _links: {
        self: {
            href: string
        },
        admin: {
            href: string
        },
    }
}

export type Admin = {
    nome: string;
    cargo: string,
    instituicao: string,
    cpf: string,
}

export type AdminResponse = {
    nome: string;
    cargo: string,
    instituicao: string,
    cpf: string,
    _links: {
        self: {
            href: string
        },
        admin: {
            href: string
        },
        event: {
            href: string
        },
        user: {
            href: string
        }
    }
}

export interface IAdminRepository {
    getAll: () => Promise<Admin[] | null>;
    getById: (id: number) => Promise<Admin | null>;
    create: (admin: Admin) => Promise<Admin | null>;
    putAdmin: (id: number, admin: Admin) => Promise<Admin | null>;
    patchAdmin: (id: number, admin: Admin) => Promise<Admin | null>;
};
export interface IUserRepository {
    getAll: () => Promise<User[] | null>;
    getById: (id: number) => Promise<User | null>;
    create: (user: User) => Promise<User | null>;
    putUser: (id: number, user: User) => Promise<User | null>;
    patchUser: (id: number, user: User) => Promise<User | null>;
};