import React from 'react';

class GroupSearchInfo extends React.Component {

    constructor(props){
        super(props);
        let grps="";
        let found="";
        let end="";
    }
    
    render(){
        if (this.props.amount===0) this.grps = "grupy pasującej";
        else if (this.props.amount===1) this.grps = "grupę pasującą";
        else if(this.props.amount===2 || this.props.amount===3 || this.props.amount===4 ) this.grps="grupy pasujące";
        else this.grps="grup pasujących"

        if (this.props.amount===0){
            this.found="Nie znaleziono";
            this.end=" :(";
        }
        else {
            this.found = "Znaleziono";
            this.end=" :D";
        }
        return (
            <div>
                <h3>{this.found} {this.props.amount>0? this.props.amount : ""} {this.grps}<br/> do twoich zainteresowań{this.end}</h3>
            </div>
        );
    }
}

export default GroupSearchInfo;