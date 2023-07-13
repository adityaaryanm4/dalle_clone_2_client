import { surpriseMePrompts } from '../constants'

const getRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]
    if (randomPrompt === prompt)
        getRandomPrompt(prompt)
    return randomPrompt
}

export {
    getRandomPrompt
}