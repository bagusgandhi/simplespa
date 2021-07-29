import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor(){
        this.setTitle("Dashboard")
    }
    async getHtml(){
        return `
        <h3>Holla</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum est sem, sagittis a neque in, eleifend luctus arcu. Cras hendrerit leo vel ligula finibus, in vehicula dolor accumsan. 
        </p>
        `
    }
}