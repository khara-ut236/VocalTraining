import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
} from 'react-native';
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import { movePage } from '../redux'
import {store} from '../redux'

const warning_text = "\n注意事項\n\n本アプリは吃音の症状緩和を目的にした発声練習方法を紹介するものであり、"+
                                          "症状の改善を保証するものではありません。\n\n"+
                                          "また、本アプリを有償・無償を問わず商用利用することを禁止します。\n\n"+
                                          "ご質問がある方は問い合わせページからご連絡ください。\n\n"+
                                          "アプリ開発者\n"

var Fontsize = 25;
var Width = Dimensions.get('window').width;
var Height = Dimensions.get('window').height;
var Twidth = Math.floor(Width*4/5);
var STwidth = Math.floor(Twidth*0.95);
var STheight = Math.floor(Height*0.95);


export class Warning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open_icon_animation: "zoomInUp",
            icon_size: 50,
            icon_color: "#000",
            controller_size: 50,
            controller_color: "#000",
        }
        this.inquiryAnimationRef
        this.menuAnimationRef
    }
    pressIcon(name) {
        switch (name) {
            case 'menu': 
                this.menuAnimationRef.bounce()
                break
            case 'inquiry': 
                this.inquiryAnimationRef.bounce()
                break
        }
        // animationを表示するために0.5秒待たせる
        setTimeout(function() {
            this.props.movePage(name);
        }.bind(this), 500)
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.col1} >
                    <View style={styles.view_icon}>
                        <Animatable.View ref={ref => (this.inquiryAnimationRef = ref)}>
                            <Animatable.View animation={this.state.open_icon_animation}>
                                <Icon name="questioncircleo"                        
                                    color={this.state.icon_color}
                                    size={this.state.icon_size}
                                    onPress={() => this.pressIcon("inquiry")} />
                            </Animatable.View>
                        </Animatable.View>
                        <Text>問い合わせ</Text>
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
                    <View style={styles.col2_row}>
                        <ScrollView style={styles.rectangle}>
                            <Text style={styles.text}>{ warning_text }
                                <Text style={styles.text}></Text>
                            </Text>
                        </ScrollView>
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
    col2_row: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        height: STheight,
        width: STwidth,
        backgroundColor: '#e0ffff',
        borderWidth: 3,
        borderColor: '#000',
    },
    view_icon: {
        alignItems:'center',
        justifyContent:'center',
        width: 100,
    },
    view_chapter: {
        fontSize: 30 
    },
    rectangle: {
    },
    text: {
        fontSize: Fontsize
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
)(Warning)
