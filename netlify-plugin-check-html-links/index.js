module.exports = {
    onPostBuild: ({inputs}) => {
      console.log('Hello world from onPreBuild event!')
      console.log(inputs.docfolder)

      const cli = new CheckHtmlLinksCli();
      cli.run();
    },
}