import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Product from './Product';
Products.propTypes = {};

const products = [
	{
		id: 1,
		name: 'Sinon',
		description: 'Sword Art Online',
		price: '$50',
	},
	{ id: 2, name: 'Moe', description: 'Moe in rainbow', price: '$500' },
	{ id: 3, name: 'Noelle', description: 'Black Clover', price: '$5000' },
];

function Products(props) {
	return (
		<main>
			<Grid container justify='center' spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
}

export default Products;
