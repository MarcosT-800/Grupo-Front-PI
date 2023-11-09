
export type Event = {
    id?: string;
    emailEvento: string;
    nomeEvento: string;
    descricao: string;
    tipo: string;
    assuntoPrincipal: string;
    local?: string;
    dataInicio?: string;
    dataFinal?: string;
    horarioInicio?: string;
    horarioFim?: string;
    privado: boolean;
    anais: boolean;
    certificados: boolean;
    logo?: string | null;
    periodo: string;
    createdAt?: Date;    
    comissaoId: string;
    cep?: string;
}

export interface IEventRepository {
    create(event: Event): Promise<Event>;
    read(): Promise<Event[]>;
    readEvent(id: string): Promise<Event | null>;
    update(event: Event): Promise<Event>;
    delete(id: string): Promise<Event>;
};