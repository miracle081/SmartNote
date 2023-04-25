import { useContext } from 'react';
import { StyleSheet, View, } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { AppContext } from './Appcontext';

export function Preloader() {
    const { preloader } = useContext(AppContext);
    return (
        <>
            {
                preloader ?
                    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
                        <AnimatedLottieView
                            style={{ width: 300, height: 300 }}
                            source={require('../../assets/loader.json')}
                            autoPlay
                            loop
                            speed={1.5}
                        />
                    </View>
                    : null
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d066d85',
        zIndex: 2
    },
});

