import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TrainingIcon } from "../assets/icon.js";

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <View style={styles.container} >
            <View style={styles.row} >
            <View>
                <TrainingIcon size={50} />
                <Text>トレーニング</Text>
            </View>
            <View>
                <Icon name="questioncircleo" size={50} />
                <Text>問い合わせ</Text>
            </View>
            </View>
            <View style={styles.row} >
            <View>
                <Icon name="form" size={50} />
                <Text>練習方法</Text>
            </View>
            <View>
                <Icon name="warning" size={50} />
                <Text>注意事項</Text>
            </View>
            </View>
        </View>
        );
    }
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });

  