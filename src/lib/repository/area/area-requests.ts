import { publicApi } from "@/services";
import { Area, IAreaRepository } from "./index.repository";

export class AreaRequest implements IAreaRepository {
    async create(Area: Area): Promise<Area> {
        const response = (await publicApi.post('/area', Area)).data;
        return response.data
    }
    async read(): Promise<Area[]> {
        const response: Area[] = (await publicApi.get('/areas')).data;
        return response
    }
    async readArea(id: string): Promise<Area | null> {
        const response: Area | null = (await publicApi.get(`/area/${id}`)).data;
        return response
    }
    async update(area: Area): Promise<Area> {
        const response = (await publicApi.put(`/area/${area.id}`, area)).data;
        return response.data
    }
    delete(id: string): Promise<Area> {
        return publicApi.delete(`/area/${id}`)
    }
}