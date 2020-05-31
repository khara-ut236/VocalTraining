import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { movePage } from '../redux'
import { store } from '../redux'
import { 
    View,
    StyleSheet,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { mainFlex } from "../config/setting";
import { get_method } from "../services/service";


export class Method extends Component {
    constructor(props) {
        super(props);
    }
    handleIconClick(name) {
        this.props.movePage(name)
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.method_button}>
                    <TouchableOpacity
                            onPress={() => this.handleIconClick("top")}>
                        <View style={styles.icon_view}>
                            <Icon name="left"
                                color='#000000'
                                size={20}/>
                            <Text style={styles.method_button_text}>メニューに戻る</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                            onPress={() => this.handleIconClick("video")}>
                        <View style={styles.icon_view}>
                            <Icon name="playcircleo"
                                color='#000000'
                                size={20}/>
                            <Text style={styles.method_button_text}>動画を見る</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <SafeAreaView style={styles.method_safeareaview}>
                    <ScrollView style={styles.method_scrollview}>
                        <Text style={styles.method_text}>
                            {get_method()}
                        </Text>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    icon_view: {
        flexDirection: 'row',
    },
    method_button: {
        flex: 2,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'space-around',
    },
    method_button_text: {
        fontSize:18,
    },
    method_safeareaview: {
        flex: mainFlex-1,
        borderTopWidth: 1,
        borderTopColor: '#808080',
    },
    method_scrollview: {
        flex: 1,
    },
    method_text: {
        fontSize: 20,
    },
})

const mapStateToProps = state => ({
    // nameにjsonから取って来たデータを代入 
    name: state.user.name,
    id: state.user.id
})
  
const mapDispatchToProps = {
    // importしたactionCreator
    movePage
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Method)