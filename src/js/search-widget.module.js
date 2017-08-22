import searchWidget from "./search-widget.component";
import "../sass/search-widget.scss";

export default angular
  .module("npmSearchWidget", ['ui.bootstrap'])
  .component("npmSearchWidget", searchWidget).name;