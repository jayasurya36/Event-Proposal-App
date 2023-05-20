const BASE_URL = 'http://localhost:5000';


function register(data , userType){
    return fetch(`${BASE_URL}/${userType}/register` , {
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json"
          },
        body : JSON.stringify(data)
    }).then(res => res.json());
}
function login(data , userType){
    return fetch(`${BASE_URL}/${userType}/login` , {
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json"
          },
        body : JSON.stringify(data)
    }).then(res => res.json());
}

function getVendorSpecificProposals(id){
    return fetch(`${BASE_URL}/proposal/vendor/${id}` , {headers: {
        'Content-Type': 'application/json',
        "accept": "application/json"
      }}).then(res => res.json())
}

export{
    register,
    login,
    getVendorSpecificProposals
}