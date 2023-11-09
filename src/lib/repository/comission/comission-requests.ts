import { publicApi } from "@/services";
import { Comissao, IComissaoRepository } from "./index.repository";

export class ComissaoRequest implements IComissaoRepository {
    async create(comissao: Comissao): Promise<Comissao> {
        const response = (await publicApi.post('/comission', comissao)).data;
        return response.data
    }
    async read(): Promise<Comissao[]> {
        const response: Comissao[] = (await publicApi.get('/comission')).data;
        return response
    }
    async readComissao(id: string): Promise<Comissao | null> {
        const response: Comissao | null = (await publicApi.get(`/comission/${id}`)).data;
        return response
    }
    async update(comissao: Comissao): Promise<Comissao> {
        const response = (await publicApi.put(`/comission/${comissao.id}`, comissao)).data;
        return response.data
    }
    delete(id: string): Promise<Comissao> {
        return publicApi.delete(`/comission/${id}`)
    }
}