const { RecyclerViewBackedScrollView } = require("react-native");

class ScreenTwoVisuals extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        return(
            <View>
                <View style={{ flex: 1 }}>

                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>Click on the three components that make up the train carriage</Text>
                </View>

                {/* Outer box  */}
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 2 }}>
                        {/* BLANK */}
                    </View>
                    {/* Inner box  */}
                    <TouchableOpacity
                        style={[{ flex: 3 }, styles.boxcar]}
                        onPress={() => {
                            this.setState((state) => {
                                return {
                                    boxcarPressed: true
                                }
                            })
                        }}>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                            <TouchableOpacity
                                style={[{ flex: 1 }, styles.flourbags]}
                                onPress={() => {
                                    this.setState((state) => {
                                        return {
                                            flourbagsPressed: true
                                        }
                                    })
                                }}>
                                {/* Flour */}
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                            <TouchableOpacity
                                style={[{ flex: 1 }, styles.flourbags]}
                                onPress={() => {
                                    this.setState((state) => {
                                        return {
                                            flourbagsPressed: true
                                        }
                                    })
                                }}>
                                {/* Flour */}
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                            <TouchableOpacity
                                style={[{ flex: 1 }, styles.flourbags]}
                                onPress={() => {
                                    this.setState((state) => {
                                        return {
                                            flourbagsPressed: true
                                        }
                                    })
                                }}>
                                {/* Flour */}
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                            <TouchableOpacity
                                style={[{ flex: 1 }, styles.flourbags]}
                                onPress={() => {
                                    this.setState((state) => {
                                        return {
                                            flourbagsPressed: true
                                        }
                                    })
                                }}>
                                {/* Flour */}
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={[{ flex: 1 }, styles.connector]}
                            onPress={() => {
                                this.setState((state) => {
                                    return {
                                        connectorPressed: true
                                    }
                                })
                            }}>
                            {/* Connector */}
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 2 }}>
                        {/* BLANK */}
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
            </View>
        )
    }
}