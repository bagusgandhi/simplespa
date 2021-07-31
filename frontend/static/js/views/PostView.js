import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        // this.postId = params.id
        this.setTitle("Lihat Postingan Terbaru")
    }
    async getHtml(){
        console.log(this.params.id)
        const content = [1,2,3,4]
        if(this.params.id == content[0]){
            return `
            <h1>All Posts</h1>
            <p>Viewing Poaa</p>
            `
        }
        else{
            return `
            <h1>Not found</h1>

            `
        }

    }
}