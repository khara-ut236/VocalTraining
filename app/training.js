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
import { createText } from '../services/create_text'
import { chapter_texts, max_chapter } from '../chapters/get_chapter'

var Fontsize = 25;
var Width = Dimensions.get('window').width;
var Height = Dimensions.get('window').height;
var Twidth = Math.floor(Width*4/5);
var Theight = Math.floor(Height*4/5);
var STwidth = Math.floor(Twidth*0.95);
var STheight = Math.floor(Theight*0.95);
var Charlen = 10;


export class Training extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open_icon_animation: "zoomInUp",
            icon_size: 50,
            icon_color: "#000",
            controller_size: 50,
            controller_color: "#000",
            chapter: 1,
            max_chapter: max_chapter,
            chapter_texts: chapter_texts,
        }
        this.methodAnimationRef
        this.menuAnimationRef
        this.leftAnimationRef
        this.rightAnimationRef
    }
    pressIcon(name) {
        switch (name) {
            case 'menu': 
                this.menuAnimationRef.bounce()
                break
            case 'method': 
                this.methodAnimationRef.bounce()
                break
        }
        // animationを表示するために0.5秒待たせる
        setTimeout(function() {
            this.props.movePage(name);
        }.bind(this), 500)
    }
    pressController(side) {
        switch (side) {
            case 'left': 
                this.leftAnimationRef.shake()
                break
            case 'right': 
                this.rightAnimationRef.shake()
                break
        }
        if (side == "left") {
            if (this.state.chapter >= this.state.max_chapter) {
                this.setState({
                    chapter: 1
                })
            } else {
                this.setState({
                    chapter: this.state.chapter + 1
                })
            }
        } else {
            if (this.state.chapter <= 1) {
                this.setState({
                    chapter: this.state.max_chapter
                })
            } else {
                this.setState({
                    chapter: this.state.chapter - 1
                })
            }
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.col1} >
                    <View style={styles.view_icon}>
                        <Animatable.View ref={ref => (this.methodAnimationRef = ref)}>
                            <Animatable.View animation={this.state.open_icon_animation}>
                                <Icon name="form"                        
                                    color={this.state.icon_color}
                                    size={this.state.icon_size}
                                    onPress={() => this.pressIcon("method")} />
                            </Animatable.View>
                        </Animatable.View>
                        <Text>練習方法</Text>
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
                        <ScrollView style={styles.rectangle}
                            horizontal={true}>
                            {createText(this.state.chapter_texts[this.state.chapter-1], Fontsize, Charlen)}
                        </ScrollView>
                    </View>
                    <View style={styles.col2_row2}>
                        <View style={styles.view_icon}>
                            <Animatable.View ref={ref => (this.leftAnimationRef = ref)}>
                                <Icon name="left"
                                    color={this.state.controller_color}
                                    size={this.state.controller_size}
                                    onPress={() => this.pressController("left")} />
                            </Animatable.View>
                        </View>
                        <Text style={styles.view_chapter} >チャプター{this.state.chapter}</Text>
                        <View style={styles.view_icon}>
                            <Animatable.View ref={ref => (this.rightAnimationRef = ref)}>
                                <Icon name="right"
                                    color={this.state.controller_color}
                                    size={this.state.controller_size}
                                    onPress={() => this.pressController("right")} />
                            </Animatable.View>
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
        flex: 4,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        height: STheight,
        width: STwidth,
    },
    col2_row2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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
        backgroundColor: '#e0ffff',
        borderWidth: 3,
        borderColor: '#000',
        transform: [{ rotate: '180deg' }]
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
)(Training)
