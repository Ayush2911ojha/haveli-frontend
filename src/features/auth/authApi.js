export function createUser(userData) {
  console.log(userData, "user");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/users', { 
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      resolve({ data });
    } catch (error) {
      console.error('Error:', error);
      reject(error);
    }
  });
}
export function loginUser(userData) {
  return new Promise(async (resolve, reject) => {
    try {
      // Check if user exists in JSON Server
      const usersResponse = await fetch('http://localhost:8080/users');
      if (!usersResponse.ok) {
        throw new Error('Failed to fetch users');
      }
      const users = await usersResponse.json();
      const foundUser = users.find(user => user.email === userData.email && user.password === userData.password);
      
      if (!foundUser) {
        throw new Error('User not found');
      }

      // Proceed with login request
      const loginResponse = await fetch('http://localhost:8080/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!loginResponse.ok) {
        throw new Error('Login failed');
      }

      const data = await loginResponse.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}
