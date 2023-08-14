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
	ToastAndroid,
	RefreshControl,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import LoadingNB from './LoadingNB';
import ItemNB from '../../components/ItemNB';
import { URL_GET_LIGHTS } from '../../utils/config';
import { Icon } from 'react-native-elements';
import ModalAdd from '../../components/layout/ModalAdd';
import Rall from '../../services/API';

const API = new Rall();

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
export default function LightNB({ navigation }: { navigation: any }) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showAdd, setShow] = useState(false);
	const [dataAdd, setDataAdd]: any = useState([]);
	const [isFetching, setIsFetching] = useState(false); //load du lieu
	// call API to load data

	useEffect(() => {
		fetchData();
		console.log('re-render');
		setIsFetching(false)
	}, [isFetching,]);

	// fetch data
	const fetchData = async () => {
		try {
			const response = await axios.get(URL_GET_LIGHTS);
			setLoading(false);
			setData(response.data);
			setIsFetching(false);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const handleShowAdd = () => {
		setShow(true);
	};
	const handleSave = () => {
		let kt = 100;
		if (dataAdd.length === 0) {
			kt = -1
		}
		else {
			for (let i = 0; i < dataAdd.length; i++) {
				if (dataAdd[i].data === '') {
					kt = i;
					break;
				}
			};
		}
		if (kt <= 9) {
			ToastAndroid.show('Chưa nhập đủ thông tin', ToastAndroid.SHORT);
		}
		else {
			if (isNaN(dataAdd[2].data)) {
				ToastAndroid.show('Port sai định dạng số', ToastAndroid.SHORT);
			}
			else {
				setShow(false)
				API.Create(dataAdd);
				setDataAdd([])
				console.log('Ok');
				setIsFetching(true);
			}
		}
	}
	const FetchData = (value: any) => {
		setDataAdd(value);
	};

	// set isFetching
	const handleSetIsFetching = () => {
		setIsFetching(true);
	};
	const handleCancle = () => {
		setShow(false);
		setDataAdd([])
	}
	const handleRefresh = () =>{
		setIsFetching(true);
		setTimeout(() => {
			setIsFetching(false)
		}, 1500);
	}
	return (
		<>
			{loading ? (
				<LoadingNB />
			) : (
				<SafeAreaView
					style={[
						styles.container,
						{ backgroundColor: showAdd ? '#CCCCCC' : '#FFF' },
					]}>
					{/* <LoadingNB /> */}
					<View style={styles.header}>
						<TouchableOpacity onPress={handleShowAdd}>
							<Icon
								name="add-box"
								size={24}
								type="material"
								style={{ padding: 0, margin: 0 }}
							/>
						</TouchableOpacity>
						<Text style={styles.textHeader}>Danh sách đèn NB</Text>
						<TouchableOpacity
							onPress={() => navigation.navigate('Scanner')}>
							<Icon
								name="camera-alt"
								size={24}
								type="material"
								style={{ padding: 0, margin: 0 }}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.listNB}>
						<FlatList
							refreshControl={<RefreshControl refreshing = {isFetching} onRefresh={handleRefresh}/>}
							data={data}
							renderItem={({ item }: { item: Item }) => {
								return (
									<ItemNB
										onPress={() => navigation.navigate('Update', { item, 'handleSetFetching': handleSetIsFetching })}
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
								onSubmit={handleSave}
								onSave={FetchData}
								onCancle={handleCancle}
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
		marginBottom: 82,
		height: HEIGHT - 82 - 88,
	},
});
