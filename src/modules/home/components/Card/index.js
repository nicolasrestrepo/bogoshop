import React, { memo } from "react";
import { Card} from "antd";
import { Link } from '@reach/router';
import PropTypes from "prop-types";

const { Meta } = Card;

function CardProduct({ image, name, price, id }) {
	return (
		<Card
			style={{ width: 300, marginTop: '1em'}}
			cover={<img alt="product" src={image} />}
			actions={[<Link key={1} to={`detail/${id}`}>Ver detalles</Link>]}
		>
			<Meta title={name} description={`$${price}`}/>
		</Card>
	);
}

CardProduct.defaultProps = {
    image: "",
    name: "camiseta hombre",
    price: 50000
}

CardProduct.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
}

export default memo(CardProduct);
