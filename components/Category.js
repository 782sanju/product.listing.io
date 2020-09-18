import React from 'react';

export default function Category({name, image}) {
    return (
        <li class="category ">
            <a href="#">
                <div class="image" style={{backgroundColor: 'rgb(229, 188, 126)'}}>
                    {image?
                    <img alt="Pulses" class="gm-added gm-lazy" src={image} />
                    : <span class="gm-added gm-lazy" >H</span>
                    }
                </div>
                <h3>{name}</h3>
            </a>
        </li>
    );
}
