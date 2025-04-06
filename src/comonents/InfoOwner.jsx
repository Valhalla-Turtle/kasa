function InfoOwner({host}) {
    return (
        <div className='host'>
            <p className='hostname'>
                {host.name}
            </p>
            <img src={host.picture}></img>
        </div>
    );
}

export default InfoOwner