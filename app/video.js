
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
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/AntDesign';
import { TrainingIcon } from "../assets/icon";
import { movePage } from '../redux'
import {store} from '../redux'


var Fontsize = 25;
var Width = Dimensions.get('window').width;
var Height = Dimensions.get('window').height;
var Twidth = Math.floor(Width*4/5);
var Theight = Math.floor(Height*4/5);
var STwidth = Math.floor(Twidth*0.9);
var STheight = Math.floor(Theight*0.9);


export class MyVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open_icon_animation: "zoomInUp",
            icon_size: 50,
            icon_color: "#000",
            controller_size: 50,
            controller_color: "#000",
        }
        this.trainingAnimationRef
        this.menuAnimationRef
        this.methodAnimationRef
    }
    pressIcon(name) {
        switch (name) {
            case 'menu': 
                this.menuAnimationRef.bounce()
                break
            case 'training': 
                this.trainingAnimationRef.bounce()
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
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.col1} >
                    <View style={styles.view_icon}>
                        <Animatable.View ref={ref => (this.trainingAnimationRef = ref)}>
                            <Animatable.View animation={this.state.open_icon_animation}>
                                <TrainingIcon
                                    color={this.state.icon_color}
                                    size={this.state.icon_size}
                                    onPress={() => this.pressIcon("training")} />
                            </Animatable.View>
                        </Animatable.View>
                        <Text>トレーニング</Text>
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
                        <Video
                            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            resizeMode="cover"
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                    </View>
                    <View style={styles.col2_row2}>
                        <View style={styles.view_icon}>
                            <Animatable.View ref={ref => (this.methodAnimationRef = ref)}>
                                <Icon name="form"
                                    color={this.state.controller_color}
                                    size={this.state.controller_size}
                                    onPress={() => this.pressIcon("method")} />
                            </Animatable.View>
                        </View>
                        <Text style={styles.view_text} >練習方法</Text>
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
        justifyContent: 'flex-start',
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    col2_row1: {
        flex: 4,
        alignItems:'center',
        justifyContent:'center',
        height: STheight,
        width: STwidth,
    },
    col2_row2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view_icon: {
        alignItems:'center',
        justifyContent:'center',
        width: 100,
    },
    view_text: {
        fontSize: 30 
    },
    video: {
        height: STheight,
        width: STwidth,
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
)(MyVideo)
