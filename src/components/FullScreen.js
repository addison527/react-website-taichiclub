import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreen = ({ children, footerHeight, isDarkBackground, ...boxProps }) => {
  const [viewportHeight, setViewportHeight] = React.useState(window.innerHeight);
  const contentHeight = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (contentHeight.current) {
      const contentActualHeight = contentHeight.current.clientHeight;
      if (contentActualHeight + footerHeight <= viewportHeight) {
        contentHeight.current.style.minHeight = `calc(100vh - ${footerHeight}px)`;
      } else {
        contentHeight.current.style.minHeight = "100vh";
      }
    }
  }, [viewportHeight, footerHeight]);

  return (
    <VStack backgroundColor={boxProps.backgroundColor} color={isDarkBackground ? "white" : "black"}>
      <VStack ref={contentHeight} maxWidth="1280px"  display = "flex" flexDirection ="column" {...boxProps}> {/*minHeight="100vh"*/}
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreen;
