export const Method = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

export const apiRequest = (endpoint, method = Method.GET, body = null) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;
  
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) options.body = JSON.stringify(body);

  return fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP Error! status: ${res.status}`);
      }
      return res.json();
    });
};