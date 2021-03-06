import { StyleSheet } from 'react-native';

PRIMARY_BUTTON_COLOR = '#30A0EF';
PRIMARY_BUTTON_TEXT_COLOR = '#FFFFFF';

PRIMARY_BACKGROUND_COLOR = '#FFFFFF'

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: PRIMARY_BACKGROUND_COLOR,
    },
    container_end: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: PRIMARY_BACKGROUND_COLOR,
    },
    container_row_end: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: PRIMARY_BACKGROUND_COLOR,
    },
    // Camera styles
    camera_picker_container: {
        flex: 1,
        width: '100%',
    },
      camera_container: {
          flex: 1,
          flexDirection: 'row',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      capture:{
          flex: 0,
          marginBottom: 10,
          borderRadius: 5,
          backgroundColor: PRIMARY_BUTTON_COLOR,
          textAlign: 'center',
          fontSize: 20,
          color: PRIMARY_BUTTON_TEXT_COLOR,
          padding: 10,
          margin: 5,
      },
    logo_container: {
      flex: 3,
      alignItems: 'center',
      backgroundColor: PRIMARY_BACKGROUND_COLOR,
      width: "100%"
    },
      logo_style: {
        width: 200,
        height: 200,
        margin: 25,
      },
      tagline: {
        flex: 1,
        fontSize: 30,
        margin: 15,
      },
    button_container: {
      flex: 1,
      paddingBottom: 30,
      width: '100%',
      backgroundColor: PRIMARY_BACKGROUND_COLOR
    },
      register_button_style:{
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#FFFFFF',
        borderColor: "#2070E8",
        borderRadius: 35,
        borderWidth: 3,
      },
      login_button_style:{
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "#2070E8",
        borderRadius: 35,
      },
      login_button_wechat_style:{
        marginTop: 5,
        marginBottom: 5,   
        backgroundColor: "#20E008",
        borderRadius: 35,      
      },
      button_to_camera: {
        flex: 0,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: PRIMARY_BUTTON_COLOR,
        width: '95%',
        textAlign: 'center',
        fontSize: 20,
        color: PRIMARY_BUTTON_TEXT_COLOR,
        padding: 10,
        margin: 5,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    search_container: {
      flexDirection: 'row',
      backgroundColor: "white",
      width: '95%',
      padding: 5,
      margin: 5
    },
    bottom_search_container: {
      flexDirection: 'row',
      backgroundColor: "white",
      width: '95%',
      padding: 5,
      margin: 5,
    },
      search_profile_icon: {
        height: 100,
        width: 100
      },
      search_input: {
        width: '100%',
      },
      bottom_search_button: {
        flexDirection: 'row',
        width: '50%',
      },
      bottom_search_text: {
        fontSize: 20
      },
      bottom_container_button: {
        width: '33.33%',
        alignItems: 'center',
        borderColor: '#000000',
        borderWidth: 1
      },
    card: {
      width: '100%',
    },
      card_container:{
        width: '100%',
        margin: 0,
        padding: 0,
      },
      card_image: {
        width: '100%'
      },
      card_container_button: {
        alignItems: 'center',
        width: '50%'
      }
  });