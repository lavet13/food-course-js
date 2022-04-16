const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    if(!res.ok) {
        throw new HttpError(res);
    }

    return await res.json();
};

class HttpError extends Error {
    constructor(response) {
        super(`Could not fetch ${response.url}, status: ${response.status}`);
        this.name = "HttpError";
        this.response = response;
    }
}

const getResource = async (url) => {
    const res = await fetch(url);

    if(!res.ok) {
        throw new HttpError(res);
    }

    return await res.json();
};



export {postData, getResource, HttpError};