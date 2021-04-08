import { Dimensions } from "react-native";

export const {width,height} = Dimensions.get('window')


export const Orientation = () => {
   const dimension =  Dimensions.get('window')

   return dimension.height > dimension.width
}


// const [orientation,setOrientation] = React.useState(Orientation() ?'Portrait':'Landscape')

  
//   Dimensions.addEventListener('change',()=>{
//     setOrientation(Orientation() ? "Portrait" : "Landscape")
//   })
 



//   if(orientation === 'Portrait'){
//     return(
//       <View style={styles.main}>
//         <Text>
//             Portrait
//         </Text>
//       </View>
//     )
//   }
//   if(orientation === 'Landscape'){
//     return(
//       <View style={styles.main}>
//         <Text>
//             Landscape
//         </Text>
//       </View>
//     )
//   }
  