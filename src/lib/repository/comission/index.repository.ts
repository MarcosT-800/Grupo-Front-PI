// import { Area } from "../area/index.repository";

export type Comissao = {
    id?: string
    name: string;
    email: string;
    senha: string;
    cpf: string;
    instituicao: string;
    certificado?: string | null;
    turno: string | undefined;
    lattes: string;
    adm: boolean | null ;
    organizador: boolean | null ;
    avaliador: boolean | null ;
    chair: boolean | null ;
    areaConhecimento?: (string | undefined)[];
}
export interface IComissaoRepository {
    create(comissao: Comissao): Promise<Comissao>;
    read(): Promise<Comissao[]>;
    readComissao(id: string): Promise<Comissao | null>;
    update(comissao: Comissao): Promise<Comissao>;
    delete(id: string): Promise<Comissao>;
};