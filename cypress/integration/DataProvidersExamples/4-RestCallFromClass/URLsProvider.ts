export default class URLsProvider {
  getUrls = () => {
    const urls = require("./urls.json");
    return urls;
  };
}
