import { useNavigate } from "react-router";
import { useAppContext } from "../contexts/ContextProvider"


export default function ProfileCard(){
    const {userDetails, setUserDetails} = useAppContext();
    const navigate = useNavigate();
    function logout(){
        setUserDetails('');
        navigate('/')
    }

    // console.log(userDetails);
    return <div className="profileCard">
        <div className="card1">{userDetails.user.contact}</div>
        <div className="card1">{userDetails.user.email}</div>
        <div className="card1">Change Profile Pic</div>
        <div className="card1"
            onClick={() => {
                logout()
            }}
        >LogOut</div>
    </div>
}