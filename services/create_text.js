import React from 'react';
import { 
    Text,
    View,
} from 'react-native';

const splitSentence = function(text, linefeed=10) {
    var text_array = []
    var tmp = ""
    var tmp_count = 0
    var max_char = linefeed
    text.split('').map( function(char) {
        if (tmp_count >= max_char) {
            text_array.push(tmp)
            tmp = ""
            tmp_count = 0
        }
        if (char != ":") {
            tmp += char
            tmp_count += 1
        } else {
            text_array.push(tmp)
            tmp = ""
            tmp_count = 0
        }
    })
    if (tmp != "") {
        text_array.push(tmp)
    }
    return text_array
}
const convVertical = function(sentence, fontsize=20) {
    return (sentence.split('').map(function(char, index) {
            if (char == "「" || char == "」" || char == "）") {
                return (
                    <Text key={index} style={{ fontSize: fontsize, transform: [{ rotate: '270deg' }] }}>{char}</Text>
                )
            } else if (char == "（" ) { 
                return (
                    <Text key={index} style={{ fontSize: fontsize, transform: [{ rotate: '270deg' }] }}> {char}</Text>
                )
            } else if (char == "。" ) { 
                return (
                    <Text key={index} style={{ fontSize: fontsize, transform: [{ rotate: '90deg' }] }}>{char}</Text>
                )
            } else if (char == "、" ) { 
                return (
                    <Text key={index} style={{ fontSize: fontsize }}>{char}</Text>
                )
            } else if (char == "ー" ) { 
                return (
                    <Text key={index} style={{ fontSize: fontsize, transform: [{ rotate: '90deg' }] }}>{char}</Text>
                )
            } else {
                return (
                    <Text key={index} style={{ fontSize: fontsize, transform: [{ rotate: '180deg' }]  }}>{char}</Text>
                )
            }
        })
    )
}
const convSentence = function(sentences, fontsize=20) {
    return (sentences.map(function(sentence, index) {
            return (
                <View key={index} style={{flexDirection: 'column-reverse'}}>
                    { convVertical(sentence, fontsize) }
                </View>
            )
        })
    )
}
export const createText = function(text, fontsize=20, linefeed=10) {
    var sentences = splitSentence(text, linefeed)
    return (
        <View style={{flexDirection: 'row'}}>
            { convSentence(sentences, fontsize) }
        </View>
    )
}
