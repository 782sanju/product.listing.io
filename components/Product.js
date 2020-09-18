import React from 'react';

export default function Product({name, name_2, oldprice, newprice, image}) {
    
    return (
        <div className="product_item d-flex">
            <div class="p_i_image ">
                <div class="p_off">4 %</div>
                <img src={image} alt="product" class="gm-added gm-lazy" />
                </div>
                <div class="p_i_content">
    <h4>{name}</h4>
                    <div class="varient_div select-arrow">
                       <span>{name_2}</span>
                    </div>
                    <div class="p_price">
                        <div>
    <span class="old">₹ {oldprice}</span>
    <span class="new">₹ {newprice}</span>
                        </div>
                    </div>
                </div>
                <div class="p_add_to_cart">
                    <a class="addToCart">Add <span class="plus_icon">
                    </span>
                    </a>
                </div>
            </div>
    );
}
