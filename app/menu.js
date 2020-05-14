import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign';
import { TrainingIcon } from "../assets/icon.js";

import { movePage } from '../redux'
import {store} from '../redux'

export class Menu extends Component {
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
                <Icon name="questioncircleo" size={50} onPress={() => this.props.movePage('inquiry')} />
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

const mapStateToProps = state => ({
    // nameにjsonから取って来たデータを代入 
    name: state.user.name
})
  
const mapDispatchToProps = {
    // importしたactionCreator
    movePage
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)