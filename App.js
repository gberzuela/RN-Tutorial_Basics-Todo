import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './components/Header';

const App = () => {
	const [todos, setTodos] = useState([
		{ text: 'buy coffee', key: '1' },
		{ text: 'create an app', key: '2' },
		{ text: 'play bideo bames', key: '3' },
	]);

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				{/* todo form */}
				<View style={styles.list}>
					<FlatList
						data={todos}
						renderItem={({ item }) => <Text>{item.text}</Text>}
					/>
				</View>
			</View>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		padding: 40,
	},
	list: {
		marginTop: 20,
	},
});

export default App;
