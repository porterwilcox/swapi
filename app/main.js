import SwapiController from "./components/controller.js";


class App{
    constructor(){
        this.controllers = {
            swapiController: new SwapiController
        }
    }
}

window.app = new App;