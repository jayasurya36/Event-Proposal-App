import { useAppContext } from "../contexts/ContextProvider";

const BASE_URL = 'http://localhost:5000';


function register(data, userType) {
    return fetch(`${BASE_URL}/${userType}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}
function login(data, userType) {
    return fetch(`${BASE_URL}/${userType}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

function getVendorSpecificProposals(id) {
    return fetch(`${BASE_URL}/proposal/vendor/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json"
        }
    }).then(res => res.json())
}

function getAllProposals() {
    return fetch(`${BASE_URL}/proposals`).then(res => res.json());
}

function deleteVendorProposal(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "POST"
    }).then(res => res.json())
}

function getProposalById(id) {
    return fetch(`${BASE_URL}/proposal/${id}`).then(res => res.json());
}

function addtoSelectedList(userId , data) {
    return fetch(`${BASE_URL}/selected/${userId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json"
        },
        body : JSON.stringify(data)
    }).then(res => res.json())
}

export {
    register,
    login,
    getVendorSpecificProposals,
    getAllProposals,
    deleteVendorProposal,
    getProposalById,
    addtoSelectedList
}