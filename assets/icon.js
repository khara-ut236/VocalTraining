import React from 'react';
import { 
    TouchableOpacity
} from 'react-native';
import HatsuonIcon from "./hatsuon_icon.js";

// トレーニングアイコン
export function TrainingIcon({size=50, color="#000", onPress=func}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1.0}>
            <HatsuonIcon height={size} color={color} />
        </TouchableOpacity>
    );
}
