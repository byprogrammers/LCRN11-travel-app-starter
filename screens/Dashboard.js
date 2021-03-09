import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const Dashboard = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Dashboard</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Place")}
            >
                <Text>Navigate to Place</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Dashboard;