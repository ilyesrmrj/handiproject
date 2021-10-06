export default class Route {
  /**
   *
   * @param {Object} param0
   * @param {String} param0.name Name of the uri like "Découvrir"
   * @param {String} param0.path Target URI of the link "/discover" or "/decouvrir"
   * @param {import("react").ReactComponentElement} param0.reactComponent '<DiscoverPage />'
   */
  constructor({ name, path, reactComponent }) {
    this.name = name;
    this.path = path;
    this.reactComponent = reactComponent;
  }
}
