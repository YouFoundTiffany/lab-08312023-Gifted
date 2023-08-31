import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { sandboxService } from "../services/SandboxService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js"

function _drawGifts() {
    // console.log("Drawing Gifts")
    let gifts = AppState.sandboxgifts
    let template = ''
    gifts.forEach(gift => template += gift.sanboxGiftTemplate)
    setHTML('gifts', template)
}
export class SandboxController {
    constructor() {
        console.log('Sandbox controller connected')
        this.getGifts()
        AppState.on('sandboxgifts', _drawGifts)


    }
    async getGifts() {
        try {
            await sandboxService.getGifts()
        } catch (error) {
            Pop.error(error)
        }
    }

    async toggleOpen(id) {
        try {
            await sandboxService.toggleOpen(id)
            this.getGifts()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createGift() {
        try {
            // @ts-ignore
            window.event.preventDefault()
            // @ts-ignore
            const form = window.event.target
            const formData = getFormData(form)
            await sandboxService.createGift(formData)
        } catch (error) {
            Pop.error(error)
        }
    }

}