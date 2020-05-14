import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
} from 'react-native';


export default class Inquiry extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <View style={styles.container} >
            <View style={styles.row} >
                <Text>問い合わせページ</Text>
            </View>
        </View>
        );
    }
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //backgroundColor: '#4169e1',
      //alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    row: {
      //flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });

  