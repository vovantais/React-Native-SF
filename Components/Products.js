import React, { useState, useEffect } from 'react';
import CheckBox from '@react-native-community/checkbox';
import {oauth, net} from 'react-native-force';
import {
   FlatList,
	Button,
	Image
} from 'react-native';
import {
	Container,
	Card,
	ItemName,
	ItemPrice
	} from './Styles'
import {
	QUERY_PRODUCTS,
	ORDER_BUTTON_TEXT,
	FAILED_AUTHENTICATE,
	CARS,
	API_URI,
	ORDER_BUTTON,
	ORDER_SUCCESS,
	ORDER_ERROR
} from '../Consts/Consts'
import axios from 'axios';


let productIds = [];

function Products() {
	const [state, setState] = useState();
	const [toggleCheckBox, setToggleCheckBox] = useState([]);
	const [token, setToken] = useState('');

		useEffect(() => {
			oauth.getAuthCredentials(
					response => fetchData(response) , // already logged in
					() => {
						oauth.authenticate(
							() => fetchData(),
							error => console.log(FAILED_AUTHENTICATE + error)
						);
					});
		}, [fetchData]);

		const fetchData = (response) => { 
			setToken(response.accessToken);
			net.query(QUERY_PRODUCTS, response => setState(response.records));
		};

		const createAdressForImg = (name) => {
			let result = CARS.map(item => {
				return item[name];
			});
			return result.join('');  
		};

		const filterProductIds = (itemId) => {
			if (!productIds.includes(itemId)) {
				productIds.push(itemId);
			} else {
				productIds = productIds.filter(id => id != itemId);
			}		
		};

		const productsFetch = (productIds) => {
			axios.post(API_URI, { ...productIds }, {
				headers: {
						"Authorization": 'Bearer ' + token 
					},
			})
			.then(response => {
				if (response.status == 200) {
					alert(ORDER_SUCCESS);
					productIds = [];
					setToggleCheckBox([]);
				}
			})
			.catch(error => {
				if (error) {
					alert(ORDER_ERROR);
					productIds = [];
					setToggleCheckBox([]);
				}
			})
		};

		return (
				<Container style={{height: '100%'}}>
					<FlatList
						data={state}
						renderItem={({item, index}) => 
						<Card>
							<CheckBox 
								value={toggleCheckBox[index]}
								onValueChange={newValue => setToggleCheckBox(oldValue => {
									newValue = [...oldValue];
									newValue[index] = !newValue[index] 
									filterProductIds(item.Id);
									return newValue;
								})}
							/>
							<ItemName>{item.Model__c}</ItemName> 
							<Image
								key={index}
								style={{ width: '50%', height: '250%', marginTop: '-9%'  }}
								source={{uri : createAdressForImg(item.Model__c.toLowerCase())}}  
							/>	
							<ItemPrice>{`${item.Price__c} $`}</ItemPrice>
						</Card>
						}
						keyExtractor={(item, index) => 'key_' + index} 
					/>

					<Button
						title={ORDER_BUTTON_TEXT}
						color={ORDER_BUTTON}
						onPress={() => productsFetch(productIds)}
					/>
				</Container> 
			);
	};

export default Products;