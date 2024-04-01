import { publicApi } from "@/services";
import { Aluno, IAlunoRepository } from "./index.repository";

export class AlunoRequest implements IAlunoRepository {
    async create(aluno: Aluno): Promise<Aluno> {
        const response = (await publicApi.post('/aluno', aluno)).data;
        return response.data
    }
    async read(): Promise<Aluno[]> {
        const response: Aluno[] = (await publicApi.get('/aluno')).data;
        return response
    }
    async readAluno(id: string): Promise<Aluno | null> {
        const response: Aluno | null = (await publicApi.get(`/aluno/${id}`)).data;
        return response
    }
    async update(Aluno: Aluno): Promise<Aluno> {
        const response = (await publicApi.put(`/aluno/${Aluno.id}`, Aluno)).data;
        return response.data
    }
    delete(id: string): Promise<Aluno> {
        return publicApi.delete(`/aluno/${id}`)
    }
}