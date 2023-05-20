import editicon from '../../Images/pencil-edit-button.svg';
import deleteicon from '../../Images/bin.svg';


export default function EachProposal({vendorProposals}) {
    return <div className="singleProposal">
        <div className="eventName">{vendorProposals.eventName}</div>
        <div className="eventDesc">{vendorProposals.description}</div>
        <div className="detailsContainer">
            <div className="details">
                <div>Event Type</div>
                <section>{vendorProposals.eventType}</section>
            </div>
            <div className="details">
                <div>Proposal Type</div>
                <section>{vendorProposals.proposaltype}</section>
            </div>
            <div className="details">
                <div>From Date</div>
                <section>{vendorProposals.from}</section>
            </div>
            <div className="details">
                <div>To Date</div>
                <section>{vendorProposals.to}</section>
            </div>
            <div className="details">
                <div>Budget</div>
                <section>{vendorProposals.budget}</section>
            </div>
            <div className="optionsContainer">
                <img src={editicon} alt="Edit"/>
                <img src={deleteicon} alt="Delete"/>
            </div>
        </div>
    </div>
}