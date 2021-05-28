const fetchApi = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://emergencynumberapi.com/api/data/all", requestOptions)
    .then((response) => response.json())
    .then((json) => {
        return json;
    })
    .catch((error) => {
        return error;
    });
};

export default fetchApi;