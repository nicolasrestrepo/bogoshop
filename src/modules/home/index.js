import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row, Col } from 'antd';
import Card from './components/Card';
import env from '../../env';

function Home() {
	const [ products, setProducts ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	
	const useFetch = async () => {
		try{
			const { data } = await axios.get(`${env.apiUrl}/api/products`)
			setProducts(data.products)
			setLoading(false)
		}catch(error){
			console.log('error', error);
		}
	}

	useEffect(() => {
		useFetch()
	}, [])


	return (	
		<React.Fragment>
			{loading ? <div>Loading....</div> : (
			<div>
				<Row type="flex" justify="space-around">
					{products.map(product => (
					<Col span={6} key={product.id}>
						<Card {...product} />
					</Col>
					)) }
				</Row>
			</div>
			)}
		</React.Fragment>
	);
}

export default Home;
