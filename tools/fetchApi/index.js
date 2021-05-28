const fetchApi = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const response = await fetch("https://emergencynumberapi.com/api/data/all", requestOptions);
    const data = await response.json();
    return data;
};

export default fetchApi;