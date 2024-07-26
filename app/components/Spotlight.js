import styles from '../styles'
import {
  Image,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  Animated
} from "react-native";

const Spotlight = () => {
    return (
    <TouchableOpacity style={styles.spotlightContainer}>
        <Text style={styles.spotlight}> Spotlight </Text>
        <Image 
            source={require("../assets/forward-icon.png")}
            style={styles.spotlightForward}/>
        <TouchableOpacity style={styles.cardsContainer}> 
          <Image 
          source={require("../assets/forward-icon.png")}
          style={styles.memberForward}/>
          </TouchableOpacity>
        <TouchableOpacity style={styles.claimsContainer}> 
        </TouchableOpacity>
      </TouchableOpacity>
);
}

export default Spotlight;