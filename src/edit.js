

import { useEffect} from 'react';
import {  PanelBody, Button, RangeControl, ColorPicker } from '@wordpress/components';


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {


	useEffect(() => {

		setAttributes({ filter: `${attributes.blur}${attributes.brightness}${attributes.contrast} ${attributes.grayScale}${attributes.hueRotate}${attributes.invert}${attributes.opacity}${attributes.saturate}${attributes.sepia}${attributes.dropShadow}` });
	}, [attributes.blur, attributes.brightness, attributes.contrast, attributes.grayScale, attributes.hueRotate, attributes.invert, attributes.opacity, attributes.saturate, attributes.sepia, attributes.dropShadow])

	
	return (
		<div {...useBlockProps()}>
			<div style={{width:'100%'}} >
				{0 < attributes.mediaUrl.length ? <img style={{ 'filter': `${attributes.filter}`,  width:'100%',marginLeft:'auto', marginRight:'auto', display:'block' }} src={attributes.mediaUrl} /> : ''}
			</div>
			{0 < attributes.mediaUrl.length ? <br /> : ''}
			<div style={{ padding: '10px', width: 'auto', border:'1px solid #21759b', backgroundColor: 'rgba(255,255,255,1)' }}>
				<h5 style={{ color: 'rgba(0,0,0,1)' }} className='dashicons-before dashicons-format-image' >{__('Image Effects', 'image-effects')}</h5>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={media => setAttributes({ mediaUrl: media.url })}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button style={{ border: '1px solid rgba(0,0,0,1)', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} onClick={open}>{__('Select Image', 'image-efftects')}</Button>
						)}
					/>
				</MediaUploadCheck>
			</div>

			<InspectorControls>

				<PanelBody>

				<RangeControl
						label={__('Imgae Width (px)', 'image-effects')}
						min={100}
						max={1000}
						onChange={val => setAttributes({imgWd:val}) }
						value={attributes.imgWd}
					/>			

				</PanelBody>
				<PanelBody>
					<h3> {__('Select effects to apply', 'image-effects')} </h3>
					<RangeControl
						label={__('Blur (px)', 'image-effects')}
						min={0}
						max={100}
						onChange={val => {
							setAttributes({ blur: ` blur(${val}px)` })
							setAttributes({ blurVal: val })
						}
						}
						value={attributes.blurVal}

					/>
					<RangeControl
						label={__('Brightness (%)', 'image-effects')}
						min={1}
						max={200}
						onChange={val => {
							setAttributes({ brightness: ` brightness(${val}%)` })
							setAttributes({ brightnessVal: val })
						}}
						value={attributes.brightnessVal}
					/>
					<RangeControl
						label={__('Contrast (%)', 'image-effects')}
						min={1}
						max={200}
						onChange={val => {
							setAttributes({ contrast: ` contrast(${val}%)` })
							setAttributes({ contrastVal: val })
						}}
						value={attributes.contrastVal}
					/>

					<RangeControl
						label={__('GrayScale (%)', 'image-effects')}
						min={1}
						max={100}
						onChange={val => {
							setAttributes({ grayScale: ` grayscale(${val}%)` })
							setAttributes({ grayScaleVal: val })
						}}
						value={attributes.grayScaleVal}
					/>
					<RangeControl
						label={__('Hue Rotate (deg)', 'image-effects')}
						min={1}
						max={360}
						onChange={val => {
							setAttributes({ hueRotate: ` hue-rotate(${val}deg)` })
							setAttributes({ hueRotateVal: val })

						}}
						value={attributes.hueRotateVal}
					/>

					<RangeControl
						label={__('Invert (%)', 'image-effects')}
						min={1}
						max={100}
						onChange={val => {
							setAttributes({ invert: ` invert(${val}%)` })
							setAttributes({ invertVal: val })
						}}
						value={attributes.invertVal}
					/>

					<RangeControl
						label={__('Opacity (%)', 'image-effects')}
						min={1}
						max={100}
						onChange={val => {
							setAttributes({ opacity: ` opacity(${val}%)` })
							setAttributes({ opacityVal: val })
						}}
						value={attributes.opacityVal}
					/>

					<RangeControl
						label={__('Saturate(%)', 'image-effects')}
						min={1}
						max={1000}
						onChange={val => {
							setAttributes({ saturate: ` saturate(${val}%)` })
							setAttributes({ saturateVal: val })
						}}
						value={attributes.saturateVal}
					/>
					<RangeControl
						label={__('Sepia(%)', 'image-effects')}
						min={1}
						max={100}
						onChange={val => {
							setAttributes({ sepia: ` sepia(${val}%)` })
							setAttributes({ sepiaVal: val })
						}}
						value={attributes.sepiaVal}
					/>
					<div style={{ paddinLeft: '10px' }}>
						<h5>{__('Box shadow', 'image-effects')}</h5>
						<RangeControl
							label={__('OffsetX(px)', 'image-effects')}
							min={1}
							max={300}
							onChange={val => {
								setAttributes({ dsOffX: `${val}px` })
								setAttributes({ dsOffXVal: val })
								setAttributes({ dropShadow: ` drop-shadow(${attributes.dsOffX}${attributes.dsOffY}${attributes.dsBlurRad}${attributes.dsColor})` });
							}}
							value={attributes.dsOffXVal}
						/>
						<RangeControl
							label={__('OffsetY(px)', 'image-effects')}
							min={1}
							max={300}
							onChange={val => {
								setAttributes({ dsOffY: ` ${val}px` })
								setAttributes({ dsOffYVal: val })
								setAttributes({ dropShadow: ` drop-shadow(${attributes.dsOffX}${attributes.dsOffY}${attributes.dsBlurRad}${attributes.dsColor})` });
							}}
							value={attributes.dsOffYVal}
						/>
						<RangeControl
							label={__('Blur Radius(px)', 'image-effects')}
							min={1}
							max={300}
							onChange={val => {
								setAttributes({ dsBlurRad: ` ${val}px` })
								setAttributes({ dsBlurRadVal: val })
								setAttributes({ dropShadow: ` drop-shadow(${attributes.dsOffX}${attributes.dsOffY}${attributes.dsBlurRad}${attributes.dsColor})` });
							}}
							value={attributes.dsBlurRadVal}
						/>
						<i> {__('Select shadow color', 'image-effects')}</i>
						<ColorPicker
							color={attributes.dsColor}
							onChangeComplete={value => {
								setAttributes({ dsColor: ` ${value.hex}` })
								setAttributes({ dropShadow: ` drop-shadow(${attributes.dsOffX}${attributes.dsOffY}${attributes.dsBlurRad}${attributes.dsColor})` });
							}}
						/>
					</div>
				</PanelBody>
			</InspectorControls>

		</div >
	);
}
