import {Pressable, StyleSheet} from 'react-native';
import { Icon } from '@rneui/themed';


function IconButton({icon, color, onPress}) {
    return <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed }>
        <Icon
        raised
        name={icon}
        type='font-awesome'
        color={color}
        />
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
,    }
})