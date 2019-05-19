import React from 'react';

let ShowroomCard = (props)=>{
        return <div className='col-md-4'>
        <div className="card" style={{width: '20rem', height:'500px', marginTop: '40px'}}>
            <img src={props.showroom.showroomLogo}></img>
            <div className="card-body">
                <h3 className="card-title"><strong>Name: </strong>{props.showroom.showroomName}</h3>
                
                {/* <button className="btn btn-primary" onClick={props.details.bind(props.car.id)}>Details</button> */}
            </div>
        </div>
    </div>
}

class ShowroomList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showroomList:[],
        }
    }

    componentDidMount(){
        let showrooms = JSON.parse(localStorage.getItem('showroom'));
        console.log(showrooms);
        this.setState({showroomList:showrooms});
    }

    render(){
        let show = this.state.showroomList.map((showroom, index)=>{
            return <ShowroomCard showroom={showroom} key={index}/>
        })
        return <div className='rontainer'>
            <div className='row'>
                {show}
            </div>
        </div>
    }
}

export default ShowroomList;