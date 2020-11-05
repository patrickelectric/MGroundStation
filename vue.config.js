module.exports = {
    publicPath: process.env.PUBLIC_PATH === ""
        ? "/"
        : process.env.PUBLIC_PATH,

    pwa: {
        themeColor: "#2686c3",
        msTileColor: "#ffffff",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "white",
        name: "MGroundStation",
        manifestOptions: {
            background_color: "#2686c3"
        }
    }
}
