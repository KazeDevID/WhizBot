const {
	render
} = require('cfonts')

const {
	banner_string,
	banner_font,
	banner_align,
	banner_colors
} = require('../config')

const config = {
	font: banner_font,
	align: banner_align,
	colors: banner_colors
}

const banner = () => {
	return render(banner_string, config).string
}

module.exports = banner
