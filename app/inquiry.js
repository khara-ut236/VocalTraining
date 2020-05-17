import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    Linking,
} from 'react-native';
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import { movePage } from '../redux'
import {store} from '../redux'
const Config = require('../config')


export class Inquiry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open_icon_animation: "zoomInUp",
            icon_size: 50,
            icon_color: "#000",
        }
        this.menuAnimationRef
        this.mail1AnimationRef
        this.mail2AnimationRef
        this.openMailFunc = this.openMailFunc.bind(this)
    }
    pressIcon(name) {
        switch (name) {
            case 'menu': 
                this.menuAnimationRef.bounce()
                break
            case 'mail1': 
                this.mail1AnimationRef.bounce()
                this.openMailFunc("dev")
                return
            case 'mail2':
                this.mail2AnimationRef.bounce()
                this.openMailFunc("training")
                return
            }
        // animationを表示するために0.5秒待たせる
        setTimeout(function() {
            this.props.movePage(name);
        }.bind(this), 500)
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
            <View style={styles.container} >
                <View style={styles.col1} >
                    <View>
                    </View>
                    <View style={styles.view_icon}>
                        <Animatable.View ref={ref => (this.menuAnimationRef = ref)}>
                            <Animatable.View animation={this.state.open_icon_animation}>
                                <Icon name="home"                        
                                    color={this.state.icon_color}
                                    size={this.state.icon_size}
                                    onPress={() => this.pressIcon("menu")} />
                            </Animatable.View>
                        </Animatable.View>
                        <Text>ホーム</Text>
                    </View>
                </View>
                <View style={styles.col2} >
                    <View style={styles.col2_row1}>
                        <View style={styles.view_text}>
                            <Text style={{ fontSize: 20 }}>
                                アプリ開発者とトレーニング考案者は別の人です。
                            </Text>
                            <Text style={{ fontSize: 20 }}>
                                問い合わせ先も別になります。
                            </Text>
                        </View>
                    </View>
                    <View style={styles.col2_row2}>
                        <View style={styles.view_icon}>
                            <Animatable.View ref={ref => (this.mail1AnimationRef = ref)}>
                                <Animatable.View animation={this.state.open_icon_animation}>
                                    <Icon name="mail"
                                        color={this.state.icon_color}
                                        size={this.state.icon_size}
                                        onPress={() => this.pressIcon("mail1")} />
                                </Animatable.View>
                            </Animatable.View>
                            <Text>アプリについての問い合わせ</Text>
                        </View>
                        <View style={styles.view_icon}>
                            <Animatable.View ref={ref => (this.mail2AnimationRef = ref)}>
                                <Animatable.View animation={this.state.open_icon_animation}>
                                    <Icon name="mail"
                                        color={this.state.icon_color}
                                        size={this.state.icon_size}
                                        onPress={() => this.pressIcon("mail2")} />
                                </Animatable.View>
                            </Animatable.View>
                            <Text>トレーニングについての問い合わせ</Text>
                        </View>
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
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    col1: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    col2: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    col2_row1: {
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    },
    col2_row2: {
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent:'space-around',
    },
    view_icon: {
        alignItems:'center',
        justifyContent:'center',
        width: 100,
    },
    view_text: {
        alignItems:'stretch',
        justifyContent:'center',
    }
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
)(Inquiry)
