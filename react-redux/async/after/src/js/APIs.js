const url = 'http://localhost:3000';

export const getEmployees = () => {
    return fetch(
        url + '/employees'
    ).then((response) => {
        if (response.ok) {
            return response.json().then((data) => {
                return data;
            });
        } else {
            return Promise.reject(response.statusText);
        }
    }).catch((error) => {
        console.log('error....')
        return Promise.reject(error);
    })
}

export const addEmployee = (item) => {
    return fetch(
        url + '/employee',
        {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(item)
        }
    ).then((response) => {
        if (response.ok) {
            return response;
        } else {
            // send error so that UI can be updated to show the error
            return Promise.reject('error while adding employee' + response.statusText);
        }
    }).catch((error) => {
        console.log('error....')
        return Promise.reject(error);
    });
}
