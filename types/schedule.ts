// types/schedule.ts
export type ActivityType = 'japanese' | 'typescript' | 'hacking'

export interface ScheduleItem {
    id: string
    time: string
    activity: string
    duration: string
    type: ActivityType
}

export interface DaySchedule {
    day: string
    items: ScheduleItem[]
}

// Para el JSON
export interface ScheduleData {
    schedule: DaySchedule[]
}