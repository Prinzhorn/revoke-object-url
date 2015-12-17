var revokeObjectURL;

if(self.URL) {
	revokeObjectURL = URL.revokeObjectURL;
} else if(self.webkitURL) {
	revokeObjectURL = webkitURL.revokeObjectURL;
} else {
	revokeObjectURL = function() {};
}

module.exports = revokeObjectURL;