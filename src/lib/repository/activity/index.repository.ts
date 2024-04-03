export type Activity = {
    id?: string 
    activityTitle: string 
    activityDescription: string 
    activityDate: string 
    activityType: string 
    activityGuestName: string 
    activityGuestEmail: string 
    activityTime: string 
    eventId?: string 
}

export interface IActivityRepository{
    create(Activity: Activity): Promise<Activity>;
    read(): Promise<Activity[]>;
    readActivity(id: string): Promise<Activity | null>;
    update(Activity: Activity): Promise<Activity>;
    delete(id: string): Promise<Activity>;
}