const responsiveStyles = {
    // ✅ Text Responsiveness
    text: {
      small: "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl",
      medium: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl",
      large: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
      extraLarge: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
    },
  
    // ✅ Background Responsiveness
    background: {
      default: "bg-gray-200",
      gradient: "bg-gradient-to-r from-[#3FAE39] to-[#A56BC2]",
      dark: "bg-gray-900 text-white",
      light: "bg-white text-black",
      responsive:
        "bg-gray-100 sm:bg-gray-200 md:bg-gray-300 lg:bg-gray-400 xl:bg-gray-500",
    },
  };
  
  export default responsiveStyles;