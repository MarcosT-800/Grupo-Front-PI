import { AxiosInstance } from "axios";
import axiosInstance from "../../http/client/axios.client";

export type Person = {}

export type User = {
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

type IAdminRepository = {
    getAll: () => Promise<Admin[]>;
    getById: (id: number) => Promise<Admin>;
    create: (admin: Admin) => Promise<Admin>;
    putAdmin: (id: number, admin: Admin) => Promise<Admin>;
    putchAdmin: (id: number, admin: Admin) => Promise<Admin>;
};

export function AdminRepository(axios: AxiosInstance): IAdminRepository {
    return {
        getAll: async () => (await axios.get("/admin")).data,
        getById: async (id: number) => (await axios.get(`/admin/${id}`)).data,
        create: async (admin: Admin) => (await axios.post("/admin", admin)).data,
        putAdmin: async (id: number, admin: Admin) => (await axios.put(`/admin/${id}`, admin)).data,
        putchAdmin: async (id, admin) => (await axios.put(`/admin/${id}`, admin)).data
    };
}

export default AdminRepository(axiosInstance);