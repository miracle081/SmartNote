import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Theme } from "../Services/Theme";

export function AppButton({ onPress, style, disabled, loading, children, color, mode }) {
    return (
        <>
            <Button
                style={style || styles.btn}
                onPress={onPress}
                disabled={disabled}
                loading={loading}
                color={color || Theme.colors.maroon900}
                mode={mode || "contained"}

            >
                {children}
            </Button>
        </>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 5,
        marginVertical: 3
    }
})