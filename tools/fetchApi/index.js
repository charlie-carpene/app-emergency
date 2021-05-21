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
        console.log(json);
    })
    .catch((error) => {
        console.error(error);
    });
};

export default fetchApi;