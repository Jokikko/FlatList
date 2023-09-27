import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, Text, View } from 'react-native';
import {DATA} from './Data';
import Row from './components/Row';

/*
function renderItem({item}) {
  return (<Text>{item.lastname}</Text>);
}
*/
/*
const renderItem = ({item}) => (
  (<Text>{item.lastname}</Text>)
);
*/

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>List of people:</Text>
      <FlatList
        data={DATA}
        renderItem= {({item}) => (
          <Row item={item} />
        )}
      />
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    
    
    
  },
  text: {
    fontSize: 30,
    marginTop: 70
  }

});
