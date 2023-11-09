import { publicApi } from "@/services";
import { Event, IEventRepository } from "./index.repository";

export class EventRequest implements IEventRepository {
    async create(Event: Event): Promise<Event> {
        const response = (await publicApi.post('/event', Event)).data;
        return response.data
    }
    async read(): Promise<Event[]> {
        const response: Event[] = (await publicApi.get('/event')).data;
        return response
    }
    async readEvent(id: string): Promise<Event | null> {
        const response: Event | null = (await publicApi.get(`/event/${id}`)).data;
        return response
    }
    async update(Event: Event): Promise<Event> {
        const response = (await publicApi.put(`/event/${Event.id}`, Event)).data;
        return response.data
    }
    delete(id: string): Promise<Event> {
        return publicApi.delete(`/event/${id}`)
    }
}