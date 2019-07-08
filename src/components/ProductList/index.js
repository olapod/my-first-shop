import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Product from '../Product';
import "./productList.scss";

class ProductsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
      };

    this.dataHomeSet = this.props.data.map((a, i) => (
      <Product key={i} {...a} />
      ));
      this.pageSize = 6;
      this.pagesCount = Math.ceil(this.dataHomeSet.length / this.pageSize);
  }

  handleClick(e, index) {
    e.preventDefault();
    this.setState({
      currentPage: index
    });
  }

  render() {
    const { currentPage } = this.state;

    return (<div className="products-list">
            <div className="products-list_container">
              {this.props.data
                .map(a => <Product key={`product-${a.id}`} {...a} />)
                .slice(
                  currentPage * this.pageSize,
                  (currentPage + 1) * this.pageSize
                )
                .map((data, i) => (
                    <div className="product-list_item" key={i}>
                      {data}
                    </div>
                ))}
            </div>
            <div className="pagination-wrapper">
            <Pagination
                className="pagination-main"
                aria-label="Page navigation example"
            >
              <PaginationItem disabled={currentPage <= 0}>
                <PaginationLink
                  onClick={e => this.handleClick(e, currentPage - 1)}
                  previous
                  href="#"
                />
                <i className="far fa-chevron-square-left" />
              </PaginationItem>

              {[...Array(this.pagesCount)].map((page, i) => (
              <PaginationItem
                onClick={e => this.handleClick(e, i)}
                active={i === currentPage}
                key={i}
              >
                <PaginationLink
                  onClick={e => this.handleClick(e, i)}
                  href="#"
                >
                {i + 1}
                </PaginationLink>
              </PaginationItem>
              ))}

              <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                <PaginationLink
                  onClick={e => this.handleClick(e, currentPage + 1)}
                  next
                  href="#"
                />
              </PaginationItem>
            </Pagination>
          </div>
        </div>
    );
  }
}

export default ProductsList;