import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle("Posts")
    }
    async getHtml(){
        return `
        <h1>Posts</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum est sem, sagittis a neque in, eleifend luctus arcu. Cras hendrerit leo vel ligula finibus, in vehicula dolor accumsan. 
        </p>

        <p><a href="/posts" linked>View all Posts</a></p>
        `
    }
}