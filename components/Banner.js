import React from 'react';

export default function Banner() {
    return (
        <div className="banner-container">
            <div className="slick-slider slick-initialized">
                <div className="slick-list">
                    <div className="slick-track" style={{ width: '740px', opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
                        <div data-index={0} className="slick-slide slick-active slick-current" tabIndex={-1} aria-hidden="false" style={{ outline: 'none', width: '740px' }}>
                            <div>
                                <img data-src="https://pogo91-static.s3.amazonaws.com/media/banners/fl1.jpg" tabIndex={-1} className="gm-added gm-lazy" style={{ width: '100%', display: 'inline-block' }} src="https://pogo91-static.s3.amazonaws.com/media/banners/fl1.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
