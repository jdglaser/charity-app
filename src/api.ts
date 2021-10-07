export function create(data: any) {
  return fetch('/.netlify/functions/createNewItem', {
      body: JSON.stringify(data),
      method: 'POST'
  }).then(response => {
      return response.json()
  })
}