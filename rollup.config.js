import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';


export default {
	input: 'src/index.js',
	output: {
		file: 'lib/main.js',
		format: 'cjs'
	},
	external: ['react', 'prop-types', 'antd'],
	plugins: [
		postcss(),
		babel({
			exclude: 'node_modules/**',
			plugins: ['external-helpers']
		})
	]
};