import Jasmine from "jasmine"

console.log("fooooo")

const jasmine = new Jasmine()
jasmine.loadConfigFile("./tests/plugin/jasmine.json") // TODO: put jasmine config directly here
jasmine.execute()
