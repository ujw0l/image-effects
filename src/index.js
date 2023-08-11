/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('image-eff/image-effects', {

	keywords: [__('Image effetcs', 'image-effects'), __('image effects', 'image-effects')],
	attributes: {
		filter: { type: 'String', default: '' },
		mediaUrl: { type: 'String', default: '' },
		blur: { type: 'String', default: '' },
		blurVal: { type: 'Number', default: 0 },
		brightness: { type: 'String', default: '' },
		brightnessVal: { type: 'Number', default: 0 },
		contrast: { type: 'String', default: '' },
		contrastVal: { type: 'Number', default: 0 },
		grayScale: { type: 'String', default: '' },
		grayScaleVal: { type: 'Number', default: 0 },
		hueRotate: { type: 'String', default: '' },
		hueRotateVal: { type: 'Number', default: 0 },
		invert: { type: 'String', default: '' },
		invertVal: { type: 'Number', default: 0 },
		opacity: { type: 'String', default: '' },
		opacityVal: { type: 'Number', default: 0 },
		saturate: { type: 'String', default: '' },
		saturateVal: { type: 'Number', default: 0 },
		sepia: { type: 'String', default: '' },
		sepiaVal: { type: 'Number', default: 0 },
		dropShadow: { type: 'String', default: '' },
		dsOffX: { type: 'String', default: '0px' },
		dsOffXVal: { type: 'Number', default: 0 },
		dsOffY: { type: 'String', default: ' 0px' },
		dsOffYVal: { type: 'Number', default: 0 },
		dsBlurRad: { type: 'String', default: ' 0px' },
		dsBlurRadVal: { type: 'Number', default: 0 },
		dsColor: { type: 'String', default: ' #000000' },
		imgWd:{type:"Number",default:''},
		imgHt:{type:'Number',default:''}

	},



	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
