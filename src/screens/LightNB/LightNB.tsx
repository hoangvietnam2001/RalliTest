import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Image,
	FlatList,
	Switch,
	Dimensions,
	Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoadingNB from './LoadingNB';
import ItemNB from '../../components/ItemNB';
import {URL_GET_LIGHTS} from '../../utils/config';
import {Icon} from 'react-native-elements';
import ModalAdd from '../../components/layout/ModalAdd';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
interface Item {
	_id: string;
	project: string;
	STATUS: boolean;
}
interface Props {
	data: Item[] | null | undefined;
}
export default function LightNB({navigation}: {navigation: any}) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [showAdd, setShow] = useState(false);

	// call API to load data
	useEffect(() => {
		fetchData();
	}, []);

	// fetch data
	const fetchData = async () => {
		try {
			const response = await axios.get(URL_GET_LIGHTS);
			setLoading(false);
			setData(response.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	const handleShowAdd = () =>{
		setShow(true);
	}
	const handleSave = () =>{
		setShow(false)
	} 

	return (
		<>
			{loading ? (
				<LoadingNB />
			) : (
				<SafeAreaView style={[styles.container, {backgroundColor: showAdd?'#CCCCCC': '#FFF'}]}>
					{/* <LoadingNB /> */}
					<View style={styles.header}>
						<TouchableOpacity style={{}} onPress={handleShowAdd}>
							<Icon name="add-box" size={24} type="material" style={{padding:0,margin:0}} />
						</TouchableOpacity>
						<Text style={styles.textHeader}>Danh sách đèn NB</Text>
						<TouchableOpacity
							style={{}}
							onPress={() => navigation.navigate('Scanner')}>
							<Icon name="camera-alt" size={24} type="material" style={{padding:0,margin:0}} />
						</TouchableOpacity>
					</View>
					<View style={styles.listNB}>
						<FlatList
							data={data}
							renderItem={({item}: {item: Item}) => {
								return (
									<ItemNB
										onPress={() => navigation.navigate('Update', {item})}
										item={item}
									/>
								);
							}}
							keyExtractor={item => item._id}
						/>
					</View>
					{
						showAdd && (
							<ModalAdd
							onSave={handleSave}
							/>
						)
					}
				</SafeAreaView>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// height:HEIGHT
	},
	header: {
		flexDirection: 'row',
		width: 343,
		height: 48,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginHorizontal: 35,
		marginTop: 16,
		alignSelf: 'center',
	},
	// icon: {
	// 	width: 24,
	// 	height: 24,
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// },
	// imgIcon: {
	// 	width: 24,
	// 	height: 24,
	// 	resizeMode: 'stretch',
	// },
	textHeader: {
		fontFamily: 'ABeeZee-Regular',
		fontWeight: '400',
		fontSize: 18,
		lineHeight: 21.28,
		textAlign: 'center',
		color: '#005A6F',
	},
	listNB: {
		width: WIDTH - 16,
		alignSelf: 'center',
		marginBottom: 72,
		// height: '100%',
	},
});
