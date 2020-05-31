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
import { get_chapter } from "../services/service";


export class Training extends Component {
    constructor(props) {
        super(props);
    }
    handleIconClick() {
        this.props.movePage("top")
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.training_button}>
                    <TouchableOpacity
                            onPress={() => this.handleIconClick()}>
                        <View style={styles.icon_view}>
                            <Icon name="left"
                                color='#000000'
                                size={20}/>
                            <Text style={styles.training_button_text}>メニューに戻る</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <SafeAreaView style={styles.training_safeareaview}>
                    <ScrollView style={styles.training_scrollview}>
                        <Text style={styles.training_text}>
                            {get_chapter(this.props.chapter_id)}
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
    training_button: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    training_button_text: {
        fontSize:18,
    },
    training_safeareaview: {
        flex: mainFlex-1,
        borderTopWidth: 1,
        borderTopColor: '#808080',
    },
    training_scrollview: {
        flex: 1,
    },
    training_text: {
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
)(Training)