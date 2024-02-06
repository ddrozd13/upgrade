import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from './button.styles.js';

export default function Button({ label, theme, onPress }) {
  const primary = theme === "primary";
  return (
    <View style={[styles.buttonContainer, primary && { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
      {primary && (
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      )}
      {!primary && (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      )}
    </View>
  );
}
