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
        <Text style={styles.spotlightText}> Spotlight </Text>
        <Image 
            source={require("../assets/forward-icon.png")}
            style={styles.spotlightForward}/>
        <TouchableOpacity style={styles.spotlightNewsContainer}> 
            <Text style={styles.spotlightNewsText}>Happy National Immunization Awareness Month!</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.spotlightMonthContainer}>
          <Text style={styles.month}> 
            Aug
          </Text>
        <Image 
            source={require("../assets/calendar.png")}
            style={styles.spotlightCalendar}/> 
        </TouchableOpacity>
      </TouchableOpacity>
);
}

export default Spotlight;