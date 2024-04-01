export type Aluno = {
    id?: string
    name: string;
    email: string;
    senha: string;
    cpf: string;
    instituicao: string;
    certificado?: string | null;
    periodo: string | undefined;
    curso: string;
    autor: boolean;
    apresentador: boolean | null;
    presenca: boolean | null;
}
export interface IAlunoRepository {
    create(Aluno: Aluno): Promise<Aluno>;
    read(): Promise<Aluno[]>;
    readAluno(id: string): Promise<Aluno | null>;
    update(Aluno: Aluno): Promise<Aluno>;
    delete(id: string): Promise<Aluno>;
};