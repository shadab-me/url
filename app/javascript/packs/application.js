import Rails from "@rails/ujs";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
import "../stylesheets/application.scss";

var componentRequireContext = require.context("src", true);
Rails.start();
ActiveStorage.start(); // Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
