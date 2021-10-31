const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export async function login(username, password) {
  const response = await fetch(`${BASE_API_URL}/user/login`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
}

export async function signup(username, password, firstName, lastName, role) {
  const response = await fetch(`${BASE_API_URL}/user/signup`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      firstName,
      lastName,
      role,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
}
