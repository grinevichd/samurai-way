type ContactsType = {
    contactTitle : string
    contactValue : any
}

export const Contacts = (props:ContactsType) => {
    return <div><b>{props.contactTitle}</b>: {props.contactValue}</div>
}