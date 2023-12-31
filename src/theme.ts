import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,

};

const theme = extendTheme({
    
    config,

    font:{
        heading: `'Quicksand' , sans-serif`,
        body: `'Quicksand' , sans-serif`
    },
    
});
export default theme;