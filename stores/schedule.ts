// stores/schedule.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { DaySchedule, ScheduleData, ScheduleItem } from '~/types/schedule'
import scheduleData from '@/data/schedule.json'

export const useScheduleStore = defineStore('schedule', () => {
    const schedule = ref<DaySchedule[]>((scheduleData as ScheduleData).schedule)

    const generateId = () => {
        const maxId = Math.max(...schedule.value.flatMap(day =>
            day.items.map(item => parseInt(item.id))
        ))
        return (maxId + 1).toString()
    }

    const deleteActivity = async (day: string, itemId: string) => {
        const daySchedule = schedule.value.find(s => s.day === day)
        if (daySchedule) {
            daySchedule.items = daySchedule.items.filter(item => item.id !== itemId)
            await saveToJSON()
        }
    }

    const addActivity = async (day: string, newActivity: Omit<ScheduleItem, 'id'>) => {
        const daySchedule = schedule.value.find(s => s.day === day)
        if (daySchedule) {
            const newItem: ScheduleItem = {
                id: generateId(),
                ...newActivity
            }
            daySchedule.items.push(newItem)
            await saveToJSON()
            return newItem
        }
    }

    const saveToJSON = async () => {
        try {
            await $fetch('/api/schedule', {
                method: 'POST',
                body: { schedule: schedule.value }
            })
        } catch (error) {
            console.error('Error saving schedule:', error)
        }
    }

    const updateDaySchedule = async (day: string, items: ScheduleItem[]) => {
        const daySchedule = schedule.value.find(s => s.day === day)
        if (daySchedule) {
            daySchedule.items = items
            await saveToJSON()
        }
    }

    const moveItem = async (fromDay: string, toDay: string, itemId: string) => {
        const fromSchedule = schedule.value.find(s => s.day === fromDay)
        const toSchedule = schedule.value.find(s => s.day === toDay)

        if (!fromSchedule || !toSchedule) return

        const item = fromSchedule.items.find(i => i.id === itemId)
        if (!item) return

        fromSchedule.items = fromSchedule.items.filter(i => i.id !== itemId)
        toSchedule.items.push(item)
        await saveToJSON()
    }

    const resetToDefault = async () => {
        schedule.value = (scheduleData as ScheduleData).schedule
        await saveToJSON()
    }

    return {
        schedule,
        addActivity,
        deleteActivity,
        updateDaySchedule,
        moveItem,
        resetToDefault
    }
}, {
    persist: true
})