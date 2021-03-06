/**
 * @constructor
 */
function AppWindow() {}

AppWindow.prototype.onClosed = {};
/**
 * @param {function} callback
 */
AppWindow.prototype.onClosed.addListener = function(callback) {};
/**
 * @type {Window}
 */
AppWindow.prototype.contentWindow = {};

/**
 * @constructor
 */
function TextApp() {}
/**
 * @param {boolean} v
 */
TextApp.prototype.setHasChromeFrame = function(v) {};
/**
 * @param {Array.<FileEntry>} entries
 */
TextApp.prototype.openEntries = function(entries) {};
TextApp.prototype.openNew = function() {};
/**
 * @return {Array.<FileEntry>}
 */
TextApp.prototype.getFilesToRetain = function() {};

/**
 * @type {TextApp}
 */
window.textApp = {};
