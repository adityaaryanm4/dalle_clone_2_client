import {surpriseMePrompts} from '../constants'

const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]
    return randomPrompt
}

export {
    getRandomPrompt
}