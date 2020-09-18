import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';

class SectionOne extends React.Component {
    //const { end, setEnd } = useState(5);
//const { start, setStart } = useState(1);
state = {
    start: 0,
    end: 5
}

handleLoadMore = () => {
  this.setState({
      start: 0,
      end: this.state.end + 5
  })
}
render(){
    return (
        <div className="component-container category-list">
            <div className="header">
                <h1 className="title">CATEGORIES</h1>
                <a onClick={this.handleLoadMore}> SEE MORE </a>
            </div>
            <CategoryList categories={this.props.categories} start={this.state.start} end={this.state.end} />
        </div>
    );
}
 }


// SectionOne.getInitialProps = async () => {

//     const { end, setEnd } = useState(5);
//     const { start, setStart } = useState(1);

//             return {

//                 end, 
//                 start

//             }
//           }

export default SectionOne;