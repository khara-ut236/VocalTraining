import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { movePage } from './redux'
import { store } from './redux'
import { 
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TrainingIcon } from "./assets/icon";
import { baseColor, mainFlex } from "./config/setting";
import Top from "./apps/top";
import Training from "./apps/training";
import Method from "./apps/method";
import MyVideo from "./apps/video";
import Warning from "./apps/warning";
import Inquiry from "./apps/inquiry";


class TabBar extends Component {
    constructor(props) {
        super(props);
        this.base_icon_color = "#a9a9a9"
        this.clicked_icon_size = 35
        this.icon_size = 30
        this.state = {
            icon : {
                "top_size" : this.clicked_icon_size,
                "top_color" : baseColor,
                "inquiry_size" : this.icon_size,
                "inquiry_color" : this.base_icon_color,
                "warning_size" : this.icon_size,
                "warning_color" : this.base_icon_color,    
            }
        }
   }
    gotoPage(name) {
        switch (name) {
            case 'top':
                return 'top'
            case 'warning':
                return 'warning'
            case 'inquiry':
                return 'inquiry'
            case 'training':
                return 'top'
            case 'method':
                return 'top'
            case 'video':
                return 'top'
        }
    }
    pressIcon(name) {
        // 本当のページ
        const current_page = this.props.page_name
        // 表記上のページ
        const conv_current_page = this.gotoPage(current_page)
        const next_page = this.gotoPage(name)
        if (conv_current_page != next_page) {
            var icon = this.state.icon
            icon[conv_current_page+"_size"] = this.icon_size
            icon[conv_current_page+"_color"] = this.base_icon_color
            icon[next_page+"_size"] = this.clicked_icon_size
            icon[next_page+"_color"] = baseColor
            this.setState({
                icon: icon
            })
            this.props.movePage(next_page, 1)
        }
        if (conv_current_page != current_page) {
            this.props.movePage(name, 1)
        }
    }
    render() {
        return (
            <View style={styles.tabbar}>
                <View style={styles.tabbar_icon}>
                    <TrainingIcon
                        color={this.state.icon["top_color"]}
                        size={this.state.icon["top_size"]}
                        onPress={() => this.pressIcon("top")} />
                    <Text style={{color: this.state.icon["top_color"]}} >トレーニング</Text>
                </View>
                <View style={styles.tabbar_icon}>
                    <Icon name="questioncircleo"
                        color={this.state.icon["inquiry_color"]}
                        size={this.state.icon["inquiry_size"]}
                        onPress={() => this.pressIcon("inquiry")} />
                    <Text style={{color: this.state.icon["inquiry_color"]}} >問い合わせ</Text>
                </View>
                <View style={styles.tabbar_icon}>
                    <Icon name="warning"
                        color={this.state.icon["warning_color"]}
                        size={this.state.icon["warning_size"]}
                        onPress={() => this.pressIcon("warning")} />
                    <Text style={{color: this.state.icon["warning_color"]}} >注意事項</Text>
                </View>
            </View>
        );
    }
}


class Header extends Component {
    constructor(props) {
        super(props);
        this.header_text1 = "　　　吃音練習"
        this.header_text2 = "　　　問い合わせ"
        this.header_text3 = "　　　注意事項"
    }
    getPageName(name) {
        switch (name) {
            case 'top':
                return this.header_text1
            case 'warning':
                return this.header_text3
            case 'inquiry':
                return this.header_text2
            case 'training':
                return this.header_text1
            case 'method':
                return this.header_text1
            case 'video':
                return this.header_text1
        }
    }
    render() {
        const name = this.props.page_name
        const header_text = this.getPageName(name)
        return (
            <Text style={styles.header_text}>{header_text}</Text>
        );
    }
}


class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        switch (this.props.page_name) {
            case "top":
                return <Top />
            case "training":
                return <Training chapter_id={this.props.page_id}/>
            case "method":
                return <Method />
            case "video":
                return <MyVideo />
            case "warning":
                return <Warning />
            case "inquiry":
                return <Inquiry />
            default:
                return <Top />
        }
    }
}

export class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var state = store.getState()
        var page_name = state.user.name
        var page_id = state.user.id
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header page_name={page_name}/>
                </View>
                <Image
                    style={styles.header_line}
                    source={require('./assets/line.png')}
                />
                <View style={styles.main}>
                    <Main page_name={page_name} page_id={page_id} />
                </View>
                <View style={styles.footer}>
                    <TabBar page_name={page_name} movePage={this.props.movePage}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1.2,
        flexDirection: 'column',
        backgroundColor: baseColor,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    header_text: {
        color: '#ffffff',
        fontSize: 22
    },
    header_line: {
        flex: 1,
        flexDirection: 'column',
    },
    main: {
        flex: mainFlex,
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderTopWidth: 1,
        borderTopColor: '#808080',
    },
    tabbar: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    tabbar_icon: {
        alignItems:'center',
        justifyContent:'center',
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
)(Home)