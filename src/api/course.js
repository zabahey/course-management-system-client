const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
export async function getCourses(token) {
  const response = await fetch(`${BASE_API_URL}/courses`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}
