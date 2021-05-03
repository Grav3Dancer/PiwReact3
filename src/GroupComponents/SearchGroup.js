import React from 'react';

class SearchGroup extends React.Component {

    render() {
        return (
            <div>
                <h3>Wyszukaj grupy odpowiadające twoim zainteresowaniom :</h3>
                <label>
                    <input type="text" placeholder="Wyszukaj w opisie..." value={this.props.descSearch} onChange={(e)=>this.props.setDescSearch(e.target.value)} />
                    <p> lub </p>
                    <input type="text" placeholder="Wpisz szukany tag..." value={this.props.tagSearch}  onChange={(e)=>this.props.setTagSearch(e.target.value)} />
                </label>
            </div>
        );
    }
}

export default SearchGroup;