

export default function ProposalCard({data}){
    console.log(data.vendorId);
    return <div className="ProposalCard">
        <img src={data.images[0]}/>
        <div>{data.vendorId.name}</div>
        <div>{data.budget}</div>
        <div>{data.eventPlace}/-</div>
    </div>
}