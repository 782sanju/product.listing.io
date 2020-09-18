import React from 'react';

export default function Header() {
    return (
        <header className="main_header">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-1">
              <div className="menu_toggle">
                <span>
                </span>
                <span>
                </span>
                <span>
                </span>
              </div>
            </div>
            <div className="col-1 pl-1" />
            <div className="col-4">
              <div className="site_logo text-center">
                <div className="header-title">
                  <img alt="POGO91" src="https://pogo91.s3.ap-south-1.amazonaws.com/media/pogo91_42beFQH.png" className="gm-added gm-lazy" />
                </div>
              </div>
            </div>
            <div className="col-1">
            </div>
            <div className="col-2">
              <div className="search_toggle">
                <img alt="search" className="search_toggle_img gm-added gm-lazy" src="https://tshop.pogo91.com/images/search.png" />
              </div>
            </div>
            <div className="col-12"><a href="/cake-shop/address">
                <div className="top_wtSep pt-2">
                  <span className="address">
                  </span>
                  <h6 className="mb-1">
                    <i className="fa fa-caret-down" aria-hidden="true">
                    </i>
                  </h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
}
