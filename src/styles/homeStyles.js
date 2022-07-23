import { StyleSheet } from "react-native"
import { black, white, purple1, shadow } from '../constant/index';

const homeStyles = StyleSheet.create({

    container: {
      backgroundColor: white,
      flex: 1,
    },

    wrapperSearch: {
      marginTop: 20,
      marginHorizontal: 10,
      
    },
  
    wrapperPagerView: {
      alignItems: 'center',
      marginTop: 25,
      marginBottom: 10,
      marginHorizontal: 10,
      paddingVertical: 3,
      backgroundColor: white,
      elevation: 10,
      borderRadius: 10,
    },
  
    pagerview: {
      elevation: 4,
      width: 315,
      height: 160,     
    },
  
    image: {
      width: 315,
      height: 160,
      borderRadius: 10,
    },
  
    name: {
      color: black
    },
  
  
    wrapperCategory: {
      marginVertical: 20,
    },
  
    categoryButton: {
      // backgroundColor: purple1,
      marginRight: 10,
      height: 45,
      padding: 12,
      borderRadius: 8,
      marginLeft: 10,
      flexDirection: 'row',
    },
  
    categoryName: {
      color: white,
      fontWeight: '500',
    },
    categoryIcon: {
      marginRight: 8,
    },
  
    nextPrevious: {
      width: '40%',
      height: 30,
      marginHorizontal: 15,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: purple1,
      borderRadius: 8
    },
  
    textPage: {
      color: black,
      fontWeight: '500',
    }
  
  })

  export default homeStyles