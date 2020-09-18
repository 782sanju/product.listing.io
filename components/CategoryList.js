import React from 'react';
import Category from './Category';
const data = [
    {name: "Pulses"},
    {name: "Grocery & Staples"},
    {name: "Category1"},
    {name: "Category1"},
    {name: "Category1"},
    {name: "Category1"}
]
export default function CategoryList({categories, start, end}) {
    console.log("Data: "+JSON.stringify(start));
    return (
        <ul class="list-unstyled d-flex flex-wrap mt-3">
            {
                categories.slice(start, end).map((item, i) => 
                <Category 
                key={i} 
                name={item.name} 
                image={item.image} />)
            }
        </ul>
    );
}

CategoryList.getStaticProps = async ({categories, start, end}) => {
   
    return { categories, start, end };
  };
