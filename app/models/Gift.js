export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url || "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80"
        this.opened = data.opened
        this.creatorId = data.creatorId
    }

    get sanboxGiftTemplate() {
        return `
        <div class="col-3  m-3">
            <img onclick="app.SandboxController.toggleOpen('${this.id}')" class="w-100 h-100" src="${this.url}">
            <span>${this.tag}</span>
        </div>
        `
    }



}


// put request
// splice old image
// draw