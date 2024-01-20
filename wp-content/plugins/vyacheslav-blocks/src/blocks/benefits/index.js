/**
 * BLOCK: headspin-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';

import classnames from "classnames";

import { registerBlockType } from "@wordpress/blocks"; // Import registerBlockType() from wp.blocks
import { useBlockProps } from '@wordpress/block-editor';
import {
	stretchWide,
	stretchFullWidth,
} from '@wordpress/icons';

const { __ } = wp.i18n; // Import __() from wp.i18n

const { Fragment, useState } = wp.element;

const {
	Button,
	PanelBody,
	__experimentalRadio,
	__experimentalRadioGroup,

	FocalPointPicker,

} = wp.components;

const {
	RichText,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,

} = wp.blockEditor;


const icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 20H0V4h13v16zm11-9h-8v2h8v-2zm0 4h-8v2h8v-2zm0-8h-8v2h8V7z"/></svg>;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( "pool4u/benefits", {
	icon: icon,
	getEditWrapperProps( attributes ) {
		return { 'data-align': attributes.align ?? "full" };
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( { attributes, setAttributes, isSelected } ) => {
		const onSubHeadingChange = ( newValue ) => setAttributes( { subheading: newValue } );
		const onHeadingChange = ( newValue ) => setAttributes( { heading: newValue } );
		const onPreamble1Change = ( newValue ) => setAttributes( { preamble1: newValue } );
		const onPreamble2Change = ( newValue ) => setAttributes( { preamble2: newValue } );
		const onPreamble3Change = ( newValue ) => setAttributes( { preamble3: newValue } );
		const onImgPositionChange = ( newValue ) => setAttributes( { imgPosition: newValue } );


		const [ showURLPopover, setPopover ] = useState( false );
		const [ showURLPopover2, setPopover2 ] = useState( false );

		const onFileSelect = ( img ) => {
			setAttributes({
				imgURL: ("full" in img.sizes) ? img.sizes.full.url : img.url,
				imgID: img.id,
				imgAlt: img.alt,
			});
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Позиционирование фотографии">

						{ attributes.imgID && (
							<Fragment>
								<h3 style={{ marginTop: '16px' }}>Точка фокуса</h3>
								<FocalPointPicker
									url={ attributes.imgURL }
									dimension={{
										width: 400,
										height: 100,
									}}
									value={ attributes.imgPosition }
									onChange={ onImgPositionChange }
								/>
							</Fragment>
						) }
					</PanelBody>
				</InspectorControls>

				<div {...useBlockProps()}>
					<div
						className={ classnames(
							'benefits',
							{
								'img-set': attributes.imgURL,
							},
						) }
						style={ {
							backgroundImage: ( attributes.imgURL ) ? `url(${attributes.imgURL})` : null,
							backgroundPosition: `${attributes.imgPosition.x * 100}% ${attributes.imgPosition.y * 100}%`,
						} }
					>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onFileSelect }
								allowedTypes={ [ 'image' ] }
								addToGallery={ true }
								value={ attributes.imgID }
								render={ ( { open } ) => (
									<Button onClick={ open }>
										{ ( attributes.imgURL ) ? __( "Заменить фон" ) : __( "Выбрать фон" ) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					<div className={`benefits-content wrapper wide`}>
						<Fragment>
							<div className="benefits-content__header">
										<RichText
											tagName="h2"
											className="benefits-content__title"
											value={ attributes.subheading }
											onChange={ onSubHeadingChange }
											placeholder={ __( "Заголовок..." ) }
										/>
										<RichText
											tagName="p"
											className="benefits-content__text"
											value={ attributes.heading }
											onChange={ onHeadingChange }
											placeholder={ __( "Переваги текст..." ) }
											/>
							</div>
							<div className='benefits-content__wrapper'>
								<div className='benefits-content__item'>
									<RichText
										tagName="div"
										className="benefits-content__item--text"
										value={ attributes.preamble1 }
										onChange={ onPreamble1Change }
										placeholder={ __( "Текст та цифри..." ) }
									/>

								</div>
								<div className='benefits-content__item'>
									<RichText
										tagName="div"
										className="benefits-content__item--text"
										value={ attributes.preamble2 }
										onChange={ onPreamble2Change }
										placeholder={ __( "Текст та цифри..." ) }
									/>

								</div>
								<div className='benefits-content__item'>
									<RichText
										tagName="div"
										className="benefits-content__item--text"
										value={ attributes.preamble3 }
										onChange={ onPreamble3Change }
										placeholder={ __( "Текст та цифри..." ) }
									/>

								</div>
							</div>
						</Fragment>
					</div>
					</div>
				</div>
			</Fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( { attributes } ) => {

		return (
			<div {...useBlockProps.save({
				className: classnames(
					`image-${attributes.imgPlacement}`
			)})}>
				<div
					className={ classnames(
						'benefits',
					) }
					style={ 
						{ 
						  background: `url(${attributes.imgURL})`,
						}
						
					 }
				>
				<div className={`benefits-content wrapper wide`}>
					<Fragment>
						<div className="benefits-content__header">
									{ attributes.subheading &&
										<RichText.Content
											tagName="h2"
											className="benefits-content__title"
											value={ attributes.subheading }
										/>
									}
									<RichText.Content
										tagName="p"
										className="benefits-content__text"
										value={ attributes.heading }
									/>

						</div>
						<div className='benefits-content__wrapper'>
							<div className='benefits-content__item'>
									{ attributes.preamble1 &&
										<RichText.Content
											tagName="div"
											className="benefits-content__item--text"
											value={ attributes.preamble1 }
										/>
									}
							</div>
							<div className='benefits-content__item'>
									{ attributes.preamble2 &&
										<RichText.Content
											tagName="div"
											className="benefits-content__item--text"
											value={ attributes.preamble2 }
										/>
									}
							</div>
							<div className='benefits-content__item'>
									{ attributes.preamble3 &&
										<RichText.Content
											tagName="div"
											className="benefits-content__item--text"
											value={ attributes.preamble3 }
										/>
									}
							</div>

						</div>
							</Fragment>
						
				</div>
				</div>

			</div>
		);
	},
} );
