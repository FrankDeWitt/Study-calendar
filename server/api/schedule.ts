// server/api/schedule.ts
import { writeFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'POST') {
        const body = await readBody(event)

        try {
            const filePath = resolve('./data/schedule.json')
            await writeFile(filePath, JSON.stringify(body, null, 2))
            return { success: true }
        } catch (error) {
            throw createError({
                statusCode: 500,
                message: 'Error saving schedule'
            })
        }
    }
})