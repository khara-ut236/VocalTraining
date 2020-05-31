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
} from 'react-native';
import { mainFlex } from "../config/setting";
import { get_warning } from "../services/service";


export class Warning extends Component {
    constructor(props) {
        super(props);
    }
    handleIconClick() {
        this.props.movePage("top")
    }
    render() {
        return (
            <View style={styles.main}>
                <SafeAreaView style={styles.warning_safeareaview}>
                    <ScrollView style={styles.warning_scrollview}>
                        <Text style={styles.warning_text}>
                            {get_warning()}
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
    warning_safeareaview: {
        flex: mainFlex-1,
        borderTopWidth: 1,
        borderTopColor: '#808080',
    },
    warning_scrollview: {
        flex: 1,
    },
    warning_text: {
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
)(Warning)