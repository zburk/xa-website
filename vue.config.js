module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/staff',
        '/men',
        '/women',
        '/give'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
