import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { movePage } from '../redux'
import { store } from '../redux'
import { 
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/AntDesign';
import { mainFlex, windowWidth } from "../config/setting";


export class MyVideo extends Component {
    constructor(props) {
        super(props);
    }
    handleIconClick(name) {
        this.props.movePage(name)
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.video_button}>
                    <TouchableOpacity
                            onPress={() => this.handleIconClick("top")}>
                        <View style={styles.icon_view}>
                            <Icon name="left"
                                color='#000000'
                                size={20}/>
                            <Text style={styles.video_button_text}>メニューに戻る</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                            onPress={() => this.handleIconClick("method")}>
                        <View style={styles.icon_view}>
                            <Icon name="form"
                                color='#000000'
                                size={20}/>
                            <Text style={styles.video_button_text}>文字を読む</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <SafeAreaView style={styles.video_safeareaview}>
                    <Video
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode={Video.RESIZE_MODE_CONTAIN}
                        shouldPlay
                        isLooping
                        style={styles.video}
                    />
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
    video_button: {
        flex: 2,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'space-around',
    },
    video_button_text: {
        fontSize:18,
    },
    video_safeareaview: {
        flex: mainFlex-1,
    },
    video: {
        height: "100%",
        width: "100%",
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
)(MyVideo)
