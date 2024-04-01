export type Area = {
    id?: string
    nome: string;
    eventoId?: string | null;
    comissaoId?: string | null;
}
export interface IAreaRepository {
    create(Area: Area): Promise<Area>;
    read(): Promise<Area[]>;
    readArea(id: string): Promise<Area | null>;
    update(Area: Area): Promise<Area>;
    delete(id: string): Promise<Area>;
};