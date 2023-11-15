export type Sessao = {
    id?: string
    tempoSessao: number;
    tempoApresentacao: number;
    anfiteatro?: boolean | null;
    salaId?: string;
    horario: number;
    comissaoId?: string;
}
export interface ISessaoRepository {
    create(Sessao: Sessao): Promise<Sessao>;
    read(): Promise<Sessao[]>;
    readSessao(id: string): Promise<Sessao | null>;
    update(Sessao: Sessao): Promise<Sessao>;
    delete(id: string): Promise<Sessao>;
};