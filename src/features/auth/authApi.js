export function createUser(userData) {
  console.log(userData,"user")
    return new Promise(async resolve => {
      const response = await fetch('http://localhost:8080/signUp', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'content-type': 'application/json' }
      })
      const data = await response.json()
      console.log(data);
      resolve({ data })
    })
  }
  