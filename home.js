import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { movePage } from './redux'
import { store } from './redux'
import { 
    View,
    StyleSheet,
    Text,
    Image,
    FlatList,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TrainingIcon } from "./assets/icon";
import Top from "./app/top";

const base_color = "#6495ed"

const FooterHeight = 62;
const WindowHeight = Dimensions.get('window').height;
const MainHeight = WindowHeight - 2*FooterHeight;
const MainFlex = Math.floor(MainHeight*10.0/FooterHeight)*0.1;

class TabBar extends Component {
    constructor(props) {
        super(props);
        this.base_icon_color = "#a9a9a9"
        this.clicked_icon_size = 35
        this.icon_size = 30
        this.state = {
            current_page: 'top',
        }
        this.icon = {
            "top_size" : this.clicked_icon_size,
            "top_color" : base_color,
            "inquiry_size" : this.icon_size,
            "inquiry_color" : this.base_icon_color,
            "warning_size" : this.icon_size,
            "warning_color" : this.base_icon_color,    
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
        }
    }
    pressIcon(name) {
        const current_page = this.state.current_page
        const next_page = this.gotoPage(name)
        if (current_page != next_page) {
            this.icon[current_page+"_size"] = this.icon_size
            this.icon[current_page+"_color"] = this.base_icon_color
            this.icon[next_page+"_size"] = this.clicked_icon_size
            this.icon[next_page+"_color"] = base_color
            this.setState({
                current_page: next_page
            })
        }
    }
    render() {
        return (
            <View style={styles.tabbar}>
                <View style={styles.tabbar_icon}>
                    <TrainingIcon
                        color={this.icon["top_color"]}
                        size={this.icon["top_size"]}
                        onPress={() => this.pressIcon("top")} />
                    <Text style={{color: this.icon["top_color"]}} >トレーニング</Text>
                </View>
                <View style={styles.tabbar_icon}>
                    <Icon name="questioncircleo"
                        color={this.icon["inquiry_color"]}
                        size={this.icon["inquiry_size"]}
                        onPress={() => this.pressIcon("inquiry")} />
                    <Text style={{color: this.icon["inquiry_color"]}} >問い合わせ</Text>
                </View>
                <View style={styles.tabbar_icon}>
                    <Icon name="warning"
                        color={this.icon["warning_color"]}
                        size={this.icon["warning_size"]}
                        onPress={() => this.pressIcon("warning")} />
                    <Text style={{color: this.icon["warning_color"]}} >注意事項</Text>
                </View>
            </View>
        );
    }
}

import Icon1 from './assets/suisen.png'
import Icon2 from './assets/kaeru.png'
import Icon3 from './assets/kasa.png'
import Icon4 from './assets/teruteru.png'

const DATA = [
    {
        id: '1',
        title: '枕草子',
        img: Icon1,
    },
    {
        id: '2',
        title: '竹取物語',
        img: Icon2,
    },
    {
        id: '3',
        title: '平家物語',
        img: Icon3,
    },
    {
        id: '4',
        title: '徒然草',
        img: Icon4,
    },
];

function Item({ title, img }) {
    return (
      <View style={styles.item}>
        <Text style={styles.item_title}>　{title}</Text>
        <Image
            style={styles.item_img}
            source={img}
            />
      </View>
    );
}

// class Top extends Component {
//     constructor(props) {
//         super(props);
//     }
//     pressIcon(name) {
//     }
//     render() {
//         return (
//                 <View style={styles.main}>
//                     <View style={styles.top_button}>
//                         <Text style={styles.top_button_text}>練習方法はこちら</Text>
//                         <Icon name="right"
//                             color='#000000'
//                             size={20}
//                             onPress={() => this.pressIcon("training")} />
//                     </View>
//                     <View style={styles.top_listview}>
//                         <FlatList
//                             data={DATA}
//                             renderItem={({ item }) => <Item title={item.title} img={item.img}/>}
//                             keyExtractor={item => item.id}
//                         />
//                     </View>
//                 </View>
//         );
//     }
// }

export class Home extends Component {
    constructor(props) {
        super(props);
    }
    pressIcon(name) {
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.header_text}>　　　吃音練習</Text>
                </View>
                <Image
                    style={styles.header_line}
                    source={require('./assets/line.png')}
                />
                <View style={styles.main}>
                    {/* <View style={styles.top_button}>
                        <Text style={styles.top_button_text}>練習方法はこちら</Text>
                        <Icon name="right"
                            color='#000000'
                            size={20}
                            onPress={() => this.pressIcon("training")} />
                    </View>
                    <View style={styles.top_listview}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => <Item title={item.title} img={item.img}/>}
                            keyExtractor={item => item.id}
                        />
                    </View> */}
                    <Top />
                </View>
                <View style={styles.footer}>
                    <TabBar />
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
        backgroundColor: base_color,
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
        flex: MainFlex,
    },
    top_button: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    top_button_text: {
        fontSize:18,
    },
    top_listview: {
        flex: MainFlex-1,
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
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
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#f0f8ff',
        height: 140,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    item_title: {
        flex: 1,
        fontSize: 25,
    },
    item_img: {
        flex: 1,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
})

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
)(Home)