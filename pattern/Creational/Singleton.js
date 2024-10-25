class Config {
    constructor() {}
    start(){ console.log('App has started') }  
    update(){ console.log('App has updated') }
}
  
const instance = new Config()
Object.freeze(instance)

instance.start()
instance.update()

instance.name = 'Config'
console.log(instance.name) // undefined