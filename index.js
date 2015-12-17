var revokeObjectURL;

if(self.URL) {
	revokeObjectURL = URL.revokeObjectURL.bind(URL);
} else if(self.webkitURL) {
	revokeObjectURL = webkitURL.revokeObjectURL.bind(webkitURL);
} else {
	revokeObjectURL = function() {};
}

module.exports = revokeObjectURL;