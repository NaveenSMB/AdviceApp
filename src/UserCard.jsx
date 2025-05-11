const userData=[
    {
        name:"SMB",
        city: "coimbatore",
        desc: "dev",
        skills: ["UK","U"],
        online: true,
        profile: "images/me.jpg",
    },
    {
        name:"Nav",
        city: "coimbatore",
        desc: "dev",
        skills: ["UI","UX"],
        online: false,
        profile: "images/me.jpg",
    },
    {
        name:"een",
        city: "coimbatore",
        desc: "dev",
        skills: ["UI"],
        online: true,
        profile: "images/me.jpg",
    },
    {
        name:"een",
        city: "coimbatore",
        desc: "dev",
        skills: ["UI"],
        online: true,
        profile: "images/me.jpg",
    },
];

function User(props){
    return <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} alt="me" className="image"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.desc}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {/* <li>HTML & CSS</li>  
                <li>JS</li>
                <li>Java</li>
                <li>AWS</li> */}
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
}

export const UserCard = () => {

//  return(
//         <User name="SMB" city="Kovai" desc="dev" skills={["HTML","CSS","PYTHON"]} online={true} profile="images/me.jpg"/>
//   )

return <>
    {
        userData.map((user,index)=>(
            <User key={index}
            name={user.name}
            city={user.city}
            desc={user.desc}
            online={user.online}
            profile={user.profile}
            skills={user.skills}
            />
        ))
    }
</>
}
