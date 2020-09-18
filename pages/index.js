import Head from 'next/head'

import swr from "swr";
import fetch from "isomorphic-unfetch";

import Banner from '../components/Banner'
import Header from '../components/Header'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'

//import styles from '../styles/style.css'
const fetcher = async function (...args) {
  const res = await fetch(...args);
  return res.json();
};

export default function Home({categories, products}) {
  console.log("First: "+JSON.stringify(products))
  return (
    <div className="main_wraper">
      <Header />
      <div>
        <div>
          <div className="main_content homepage">
            <div className="container-fluid">
              <Banner />
              <SectionOne categories={categories} />
              <SectionTwo products={products} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

Home.getInitialProps = async () => {
  const url = `https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop&page=1&&host_name=http://locahost:3000`;
  // ${API_URL}/api/online-store/store/product/?store_prefix=cake-shop
	// 		&page=1&host_name=${window.location.hostname}`
		
  const response = await fetcher(url);
  const url2 = `https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=1&&host_name=http://locahost:3000`//`https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop&page=1&&host_name=http://locahost:3000`;
    // `${API_URL}/api/online-store/store/product/?store_prefix=${store_name}
	// 		&page=${params}&host_name=${window.location.hostname}`
		
    // ${API_URL}/api/online-store/store/product/?store_prefix=cake-shop
      // 		&page=1&host_name=${window.location.hostname}`
          
    const response2 = await fetcher(url2);
  //console.log(JSON.stringify(data.categories))
  return { categories: response.category, products: response2.products };
};