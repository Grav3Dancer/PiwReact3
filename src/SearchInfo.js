import React from 'react';

class SearchInfo extends React.Component {

    constructor(props){
        super(props);
        let stud="";
        let found="";
        let end="";
    }
    
    render(){
        if (this.props.amout===1 || this.props.amount===0) this.stud = "studenta pasującego";
        else if(this.props.amount>1) this.stud="studentów pasujących";

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
                <h3>{this.found} {this.props.amount>0? this.props.amount : ""} {this.stud}<br/> do twojego zespołu{this.end}</h3>
            </div>
        );
    }
}

export default SearchInfo;