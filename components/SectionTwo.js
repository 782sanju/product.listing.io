import React from 'react';
import fetch from "isomorphic-unfetch";
import ReactPaginate from 'react-paginate';

import Product from './Product';
const data = {}
const fetcher = async function (...args) {
    const res = await fetch(...args);
    return res.json();
};

class SectionTwo extends React.Component {

    //let [ products ] = this.props;
    state = {
        pageCount: this.props.products.length,
        start: 0,
        end: 5
    }
    componentDidMount() {
        //console.log(this.state.end);
        console.log(JSON.stringify(this.props.products));
    }
    handlePageClick = (data) => {
        const that = this;
        let selected = data.selected;
        that.setState({
            start: selected,
            end: selected + 5
        })
    }
    render() {
        return (
            <div class="component-container">
                <div>
                    <div class="Toastify">
                    </div>
                    <div class="row">
                        <div class="product_listing">

                            <div class="infinite-scroll-component" style={{ height: 'auto', overflow: 'auto' }}>
                                {
                                    this.props.products.slice(this.state.start, this.state.end).map((item, i) => 
                                    <Product key={i} 
                                    name={item.product_name} 
                                    name_2={item.price_stock[0].name}
                                    oldprice={item.price_stock[0].mrp}
                                    newprice={item.price_stock[0].selling_price} 
                                    image={item.image_url} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            //pageRangeDisplayed={5}
                            containerClassName="paginationContainer"
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default SectionTwo;
