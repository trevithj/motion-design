const BASE = 'http://localhost:8181';

const doGet = path => () => fetch(`${BASE}\${path}`)
	.then(response => response.json());

export const getColours = doGet('data');
export const getColours = doGet('colours');
export const getMaterials = doGet('materials');
export const getSuburbs = doGet('suburbs');

export const postData = (data = {}) => {
  // Default options are marked with *
    return fetch(`${BASE}\data`, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json());
};
