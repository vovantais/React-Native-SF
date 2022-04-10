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
	ORDER,
	FAILED_AUTHENTICATE,
	CARS
} from '../Consts/Consts'


function Products() {
	const [state, setState] = useState();
	const [toggleCheckBox, setToggleCheckBox] = useState([]);

		useEffect(() => {
			oauth.getAuthCredentials(
					() => fetchData(), // already logged in
					() => {
						oauth.authenticate(
							() => fetchData(),
							error => console.log(FAILED_AUTHENTICATE + error)
						);
					});
		}, [fetchData]);

		const fetchData =  () => { 
			net.query(QUERY_PRODUCTS, response => setState(response.records));
		};

		const createAdress = (name) => {
			let result = CARS.map(item => {
				return item[name];
			});
			return result.join('');  
		}

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
									return newValue;
								})}
							/>
							<ItemName>{item.Model__c}</ItemName> 
							<Image
								key={index}
								style={{ width: '50%', height: '250%', marginTop: '-9%'  }}
								resizeMode='contain'
								source={{uri : createAdress(item.Model__c.toLowerCase())}} 
							/>	
							<ItemPrice>{`${item.Price__c} $`}</ItemPrice>
							
						</Card>
						}
						keyExtractor={(item, index) => 'key_' + index} 
					/>

					<Button
						title={ORDER}
						color="#841584"
					/>
				</Container>
			);
	};

export default Products;