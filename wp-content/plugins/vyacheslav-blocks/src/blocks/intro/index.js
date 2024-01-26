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
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

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
registerBlockType( "pool4u/intro", {
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
		const onHeadingChange = ( newValue ) => setAttributes( { heading: newValue } );
		const onPreambleChange = ( newValue ) => setAttributes( { preamble1: newValue } );
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
        const allowedBlocks = [
			"core/heading",
			"core/paragraph",
			"core/columns",
			"core/list",
			"core/quote",
			"core/spacer",
		];

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
							'intro',
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
                        <div className={`intro-content wrapper wide`}>
                            <InnerBlocks
                                allowedBlocks={ allowedBlocks }
                            />
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
						'intro',
					) }
					style={ 
						{ 
						  background: `url(${attributes.imgURL}) no-repeat right / cover`,
						}
						
					 }
				>
                    <div className={`intro-content wrapper wide`}>
                        <InnerBlocks.Content />
                    </div>
				</div>

			</div>
		);
	},
} );
