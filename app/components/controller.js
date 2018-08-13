import SwapiService from "./service.js";

let swapiService = new SwapiService;
export default class SwapiController {
    constructor() {
        draw()
        
    }
    test(){
        swapiService.test();
        console.log("Hello from Controller")
    }
    getPersons(){
        swapiService.getPersons(drawPersons)
    }
    getSpecies(){
        swapiService.getSpecies(drawSpecies)
    }
    getFilms(){
        swapiService.getFilms(drawFilms)
    }
}

let results;
function draw(){
    let template = `
    <div class="buttons">
        <button onclick="app.controllers.swapiController.test()">test</button>
        <button onclick="app.controllers.swapiController.getPersons()">Star Wars People</button>
        <button onclick="app.controllers.swapiController.getSpecies()">Star Wars Species</button>
        <button onclick="app.controllers.swapiController.getFilms()">Star Wars Films</button>
    </div>
    <div class="results"></div>
    `
    document.querySelector(".app").innerHTML = template;
    results = document.querySelector(".results");
}
function drawPersons(data){
    console.log(data)
    let template = '';
    data.forEach(p => {
        template += `
        <div>
            ${p.name}
        </div>
        `
    });
    results.innerHTML = template;
}
function drawSpecies(data){
    let template = '';
    data.forEach(s => {
        template += `
        <div>
            ${s.name}
        </div>
        `
    })
    results.innerHTML = template
}
function drawFilms(data){
    let template = '';
    data.forEach(f => {
        template += `
        <div>
            ${f.title}
        </div>
        `
    })
    results.innerHTML = template;
}
