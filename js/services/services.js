const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: data,
  });

  if (res.status == 200) {
    return await res.json();
  }
};

class HttpError extends Error {
  constructor(response) {
    super(`Could not fetch ${response.url}, status: ${response.status}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

const getResource = async url => {
  const res = await fetch(url);

  if (res.status == 200) {
    return await res.json();
  }

  throw new HttpError(res);
};

export { postData, getResource, HttpError };
