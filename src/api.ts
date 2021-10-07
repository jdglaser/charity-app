export function create(data: any) {
  console.log(data)
  return fetch('/.netlify/functions/createNewItem', {
      body: JSON.stringify(data),
      method: 'POST'
  }).then(response => {
    console.log(response)
    return response.json()
  })
}