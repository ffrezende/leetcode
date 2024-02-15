const obj = {
  name: 'Fabricio',
  returnNameByThisScope: function () {
    console.log(`My name is ${this.name}`)
  },
  returnLexicalScope: () => {
    console.log(`My name is ${this.name}`)
  },
}

obj.returnNameByThisScope()
obj.returnLexicalScope()

//JS this scope -> call
function callFunction() {
  console.log(`My name is ${this.name}`)
}
callFunction.call({ name: 'Apple' })

//JS this scope -> apply
function applyFunction(arg) {
  console.log(`I'm from ${arg} and my name is ${this.name}`)
}
applyFunction.apply({ name: 'Apple' }, ['Brazil'])

//JS this scope -> bind

function bindFunction(arg) {
  console.log(`I'm from ${arg} and my name is ${this.name}`)
}
const sendArgs = bindFunction.bind({ name: 'Orange' })
sendArgs('Canada')
