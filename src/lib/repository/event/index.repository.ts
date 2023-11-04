
export type Event = {
    formato: string,
    nome: string,
    descricao: string,
    local: string,
    dataInicio: Date,
    dataFim: Date,
}

export type EventResponse = {
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

export interface IEventRepository {
    getAll: () => Promise<Event[] | null>;
    getById: (id: number) => Promise<Event | null>;
    create: (event: Event) => Promise<Event | null>;
    putEvent: (id: number, event: Event) => Promise<Event | null>;
    patchEvent: (id: number, event: Event) => Promise<Event | null>;
};