
const path = require('path');

module.exports = function() {
	return {
		devtool: "source-map", 
		devServer: {
			contentBase: path.join(__dirname, 'dist'),	// Can also be an array, or: contentBase: "http://localhost/",
			// compress: true,								// Set this if you want to enable gzip compression for assets
			port: 9000,
			stats: 'errors-only',						// show in node console info type 
			open: false 								// opens the url in default browser (for webpack-dev-server versions > 2.0).
		}
	}
}

// --content-base <file/directory/url/port>: base path for the content.
// --quiet: don’t output anything to the console.
// --no-info: suppress boring information.
// --colors: add some colors to the output.
// --no-colors: don’t use colors in the output.
// --compress: use gzip compression.
// --host <hostname/ip>: hostname or IP. 0.0.0.0 binds to all hosts.
// --port <number>: port.
// --inline: embed the webpack-dev-server runtime into the bundle.
// --hot: adds the HotModuleReplacementPlugin and switch the server to hot mode. Note: make sure you don’t add HotModuleReplacementPlugin twice.
// --hot --inline also adds the webpack/hot/dev-server entry.
// --public: overrides the host and port used in --inline mode for the client (useful for a VM or Docker).
// --lazy: no watching, compiles on request (cannot be combined with --hot).
// --https: serves webpack-dev-server over HTTPS Protocol. Includes a self-signed certificate that is used when serving the requests.
// --cert, --cacert, --key: Paths the certificate files.
// --open: opens the url in default browser (for webpack-dev-server versions > 2.0).
// --history-api-fallback: enables support for history API fallback.
// --client-log-level: controls the console log messages shown in the browser. Use error, warning, info or none.