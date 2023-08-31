import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"



class SandboxService {
    async createGift(formData) {
        const response = await api.post('api/gifts', formData)
        console.log(response.data, 'creating gift')
        const newGift = new Gift(response.data)
        AppState.sandboxgifts.push(newGift)
        this.getGifts()
    }
    async getGifts() {
        const response = await api.get('api/gifts')
        console.log(response.data, 'getting the sandbox gifts')
        let mappedArr = response.data.map(dataObj => new Gift(dataObj))
        AppState.sandboxgifts = mappedArr
        console.log(AppState.sandboxgifts)
    }

    //    TODO Review after we complete our create gift 
    async toggleOpen(id) {
        // AppState.isOpen = !AppState.isOpen
        let foundGift = AppState.sandboxgifts.find(g => id == g.id)
        if (foundGift?.opened == false) {
            foundGift.opened = !foundGift.opened
            const response = await api.put(`api/gifts/${id}`, foundGift)
        }
    }

}

export const sandboxService = new SandboxService()


// console.log('found Gift', foundGift.opened);
//         if (foundGift.opened == false) {
//             foundGift.opened = !foundGift.opened
//             const response = await api.put`api/gifts/${foundGift}`
//         }