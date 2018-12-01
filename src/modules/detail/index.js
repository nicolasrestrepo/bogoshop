
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import classNames from "classnames/bind";
import { Row, Col, Card, Icon, Button, Dropdown, Menu } from "antd";
import env from "../../env";
import styles from "./styles.scss";

const cx = classNames.bind(styles);


function menuSize(sizes){
    const [size, setSize] = useState(null);
    const menu = (
        <Menu >
            {sizes.map(item => (<Menu.Item key={item} onClick={()=> setSize('M')}>M</Menu.Item>))}
        </Menu>
    )
    return { size, menu }
}

function Detail({ id }) {
	const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(null);
    const { menu, size } = menuSize(product ? product.sizes : []);

    const menuQuantity = (
        <Menu >
        <Menu.Item key="1" onClick={()=> setQuantity(1)}>1</Menu.Item>
        <Menu.Item key="2" onClick={()=> setQuantity(2)}>2</Menu.Item>
        <Menu.Item key="3"onClick={()=> setQuantity(3)}>3</Menu.Item>
        </Menu>
    )

    // get product from api, sending like parameters the product.id
	const useFetch = async () => {
		try {
			const { data } = await axios.get(`${env.apiUrl}/api/products/${id}`);
			setProduct(data.product);
			setLoading(false);
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		useFetch();
	}, []);

	return (
		<React.Fragment>
			{loading ? (
				<div>Loading....</div>
			) : (
				<div>
					<Row>
						<Col span={12}>
							<Link to="/">
								<Icon type="arrow-left" /> <span>Inicio</span>
							</Link>
						</Col>
					</Row>
					<section className={cx("container-detail")}>
						<Row type="flex" justify="center">
							<Col span={6}>
								<img src={product.image} alt="product detail" width="300" />
							</Col>
							<Col span={6}>
								<Card title={product.title}>
                                    <div className={cx('card-container')}>
                                        <div className={cx('item-card')}> 
                                            <strong>Descripcion</strong>
									        <span>{product.description}</span>
                                        </div>
                                        <div className={cx('item-card')}>
                                            <strong>Precio</strong>
									        <span>${product.price}</span>
                                        </div>
                                        <div className={cx('item-card')}>
                                            <strong>Talla</strong>
                                            <Dropdown overlay={menu} placement="bottomLeft">
                                                <Button>{size || 'Seleccione la talla'}</Button>
                                            </Dropdown>
                                        </div>
                                        <div className={cx('item-card')}>
                                            <strong>Cantidad</strong>
                                            <Dropdown overlay={menuQuantity} placement="bottomLeft">
                                                <Button>{quantity || 'cantidad'}</Button>
                                            </Dropdown>
                                        </div>
                                    </div>
								</Card>
								<Button className={cx("button-card")}>
									Agregar al carrito
								</Button>
							</Col>
						</Row>
					</section>
				</div>
			)}
		</React.Fragment>
	);
}
export default Detail;
