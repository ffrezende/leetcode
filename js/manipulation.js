const inputData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 4, name: 'Item 4' },
  { id: 7, name: 'Item 7' },
]

function normalize(data) {
  const response = {
    byId: new Array(),
    entries: new Object(),
  }

  inputData.forEach((data) => {
    const { id, name } = data
    response.byId.push(id)
    response.entries[id] = { id, name }
  })

  return response
}

/* Preferable Output
  {
    byId: [1, 2, 4, 7],
    entries: {
      1: {
        id: 1, 
        name: 'Item 1'
      },
      2: {
        id: 2, 
        name: 'Item 2'
      },
      4: {
        id: 4, 
        name: 'Item 4'
      },
      7: {
        id: 7, 
        name: 'Item 7'
      }
    }
  }
  
  */

console.log(normalize(inputData))
