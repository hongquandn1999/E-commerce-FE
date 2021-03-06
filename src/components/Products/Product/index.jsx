import React from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
Product.propTypes = {};

function Product(props) {
	const { product } = props;
	console.log(product);
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media} image='' title={product.name} />
			<CardContent>
				<div className={classes.cardContent}>
					<Typography variant='h5' gutterBottom>
						{product.name}
					</Typography>
					<Typography variant='h5'>{product.price}</Typography>
				</div>
				<Typography variant='h2' color='textSecondary'>
					{product.description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing className={classes.cardActions}>
				<IconButton aria-label='Add to cart'>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default Product;
