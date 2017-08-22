import searchWidget from "./search-widget.component";
import "../sass/search-widget.scss";

export default angular
  .module("abSearchWidget", ['ui.bootstrap'])
  .component("abSearchWidget", searchWidget).name;