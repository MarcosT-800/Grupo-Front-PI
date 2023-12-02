export type Sala = {
    id?: string
    andar: number;
    tipo: string;
    numero: number;
    limitePessoas: number;
    temaSala: string;
    eventId?: string;
}
export interface ISalaRepository {
    create(Sala: Sala): Promise<Sala>;
    read(): Promise<Sala[]>;
    readSala(id: string): Promise<Sala | null>;
    update(Sala: Sala): Promise<Sala>;
    delete(id: string): Promise<Sala>;
};