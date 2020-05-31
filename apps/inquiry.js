import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { movePage } from '../redux'
import { store } from '../redux'
import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
const Config = require('../config/config')


export class Inquiry extends Component {
    constructor(props) {
        super(props);
        this.mail1AnimationRef
        this.mail2AnimationRef
    }
    handleIconClick(name) {
        switch (name) {
            case 'dev': 
                this.mail1AnimationRef.bounce()
                setTimeout(function() {
                    this.openMailFunc("dev")
                }.bind(this), 500)
                return
            case 'trainer':
                this.mail2AnimationRef.bounce()
                setTimeout(function() {
                    this.openMailFunc("training")
                }.bind(this), 500)
                return
            }
    }
    openMailFunc(name) {
        var to = ""
        if (name == "dev") {
            to = Config.dev_mail_address
        } else {
            to = Config.training_mail_address
        }
        Linking.openURL(
            'mailto:'+String(to)+'?subject=問い合わせ')
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.inquiry_view}>
                    <View style={styles.row1}>
                        <Animatable.View ref={ref => (this.mail1AnimationRef = ref)}>
                            <TouchableOpacity
                                onPress={() => this.handleIconClick("dev")}
                                activeOpacity={1.0}>
                                <View style={styles.icon_view}>
                                    <Icon name="smileo"
                                        color='#000000'
                                        size={50}/>
                                    <View>
                                        <Text style={styles.inquiry_text}>アプリについての</Text>
                                        <Text style={styles.inquiry_text}>　問い合わせ</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Animatable.View>
                        <Animatable.View ref={ref => (this.mail2AnimationRef = ref)}>
                            <TouchableOpacity
                                onPress={() => this.handleIconClick("trainer")}
                                activeOpacity={1.0}>
                                <View style={styles.icon_view}>
                                    <Icon name="smileo"
                                        color='#000000'
                                        size={50}/>
                                    <View>
                                        <Text style={styles.inquiry_text}>トレーニングについての</Text>
                                        <Text style={styles.inquiry_text}>　問い合わせ</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                    <View style={styles.row2}>
                        <Text style={styles.inquiry_text}>アプリ開発者とトレーニング考案者は別の人です。{"\n"}問い合わせページ先も別になります。
                        </Text>
                    </View>
                </View>
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
    inquiry_view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    row1: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    row2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    inquiry_text: {
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
)(Inquiry)