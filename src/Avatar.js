function Avatar(props){
    console.log(props);
    return <div>
        <span style={{fontSize: 16, fontStyle: "bold", marginRight: 15}}>
            {props.name}
        </span>
        <small>13 Oct 2021 - 19:27</small>
    </div>
}

export default Avatar;