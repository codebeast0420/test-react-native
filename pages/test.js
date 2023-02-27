import React from "react";
import {View, Text, Button} from 'react-native'

const Test = () => {
	return (
		<View>
			<Test>Success</Test>
			<Button
          title="Back to home"
          onPress={() =>
            navigation.navigate('Home')
          }
        />
		</View>
	)
}

export default Test;