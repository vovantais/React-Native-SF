import {
   StyleSheet,
   Text,
   View,
} from 'react-native';

function StandartStyle() {
	return(
		<View>
			<Text style={styles.container}>Hello</Text>
			<Text style={styles.item}>world!</Text>
		</View>
	);
}


	const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: 22,
			backgroundColor: 'white',
		},
		item: {
			padding: 10,
			fontSize: 18,
			height: 44,
		}
});

export default StandartStyle;