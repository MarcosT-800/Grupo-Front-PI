import { AxiosInstance } from "axios";
import axiosInstance from "../../http/client/axios.client";

export type Event = {
    formato: string,
    nome: string,
    descricao: string,
    local: string,
    dataInicio: Date,
    dataFim: Date,
    _links: {
        self: {
            href: string
        },
        admin: {
            href: string
        },
        rule: {
            href: string
        }
    }
}

export type Rule = {
    beginDateInsPar: string,
    finalDateInsPar: string,
    beginDateSubArt: string,
    finalDateSubArt: string,
    beginDateAva: string,
    finalDateAva: string,
    beginDateApre: string,
    finalDateApre: string,
}

type IEventRepository = {
    getAll: () => Promise<Event[]>;
    getById: (id: number) => Promise<Event>;
    getByName: (name: string) => Promise<Event>;
    getByEmail: (email: string) => Promise<Event>;
};

export function EventRepository(axios: AxiosInstance): IEventRepository {
    return {
        getAll: async () => (await axios.get("/people")).data,
        getById: async (id: number) => (await axios.get(`/people/${id}`)).data,
        getByName: async (name: string) =>
            (await axios.get(`/people?name=${name}`)).data,
        getByEmail: async (email: string) =>
            (await axios.get(`/people?email=${email}`)).data,
    };
}

export default EventRepository(axiosInstance);