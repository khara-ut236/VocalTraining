import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'

import * as Animatable from 'react-native-animatable';

import Icon from 'react-native-vector-icons/AntDesign';
import { TrainingIcon } from "../assets/icon.js";

import { movePage } from '../redux'
import {store} from '../redux'

export class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open_icon_animation: "zoomInUp",
            icon_size: 50,
            icon_color: "#000",
        }
        this.trainingAnimationRef
        this.InquiryAnimationRef
        this.methodAnimationRef
        this.warningAnimationRef
        this.pressIcon = this.pressIcon.bind(this)
    }
    pressIcon(name) {
        switch (name) {
            case 'training': 
                this.trainingAnimationRef.bounce()
                break
            case 'inquiry': 
                this.InquiryAnimationRef.bounce()
                break
            case 'method':
                this.methodAnimationRef.bounce()
                break
            case 'warning':
                this.warningAnimationRef.bounce()
                break
            }
        // animationを表示するために0.5秒待たせる
        setTimeout(function() {
            this.props.movePage(name);
        }.bind(this), 500)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row} >
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
                        <Animatable.View ref={ref => (this.InquiryAnimationRef = ref)}>
                            <Animatable.View animation={this.state.open_icon_animation}>
                                <Icon name="questioncircleo"
                                    color={this.state.icon_color}
                                    size={this.state.icon_size}
                                    onPress={() => this.pressIcon("inquiry")} />
                            </Animatable.View>
                        </Animatable.View>
                        <Text>問い合わせ</Text>
                    </View>
                </View>
                <View style={styles.row} >
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
                        <Animatable.View ref={ref => (this.warningAnimationRef = ref)}>
                            <Animatable.View animation={this.state.open_icon_animation}>
                                <Icon name="warning"
                                    color={this.state.icon_color}
                                    size={this.state.icon_size}
                                    onPress={() => this.pressIcon("warning")} />
                            </Animatable.View>
                        </Animatable.View>
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
        //transform: [{ rotate: '90deg'}]
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    view_icon: {
        alignItems:'center',
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
)(Menu)