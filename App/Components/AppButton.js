import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Theme } from "../Services/theme";

export function AppButton({ onPress, style,disabled,loading,children, color,mode }) {
    return (
        <>
            <Button
                style={styles.btn || style}
                onPress={onPress}
                disabled={disabled}
                loading={loading}   
                color={Theme.colors.maroon900 || color}
                mode={mode|| "contained"}

            >
                {children}
            </Button>
        </>
    )
}

const styles = StyleSheet.create({
    btn:{
        paddingVertical:5,
        marginVertical:3
    }
})