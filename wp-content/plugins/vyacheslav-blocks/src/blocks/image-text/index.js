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
	PanelRow,
	__experimentalRadio,
	__experimentalRadioGroup,
	TextControl,
	ToggleControl,
	Tooltip,
	FocalPointPicker,
	DropdownMenu,
} = wp.components;

const Radio = __experimentalRadio;
const RadioGroup = __experimentalRadioGroup;

const {
	RichText,
	InspectorControls,
	__experimentalLinkControl,
	URLPopover,
	MediaUpload,
	MediaUploadCheck,
	InnerBlocks,
	BlockControls,
} = wp.blockEditor;

const LinkControl = __experimentalLinkControl;

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
registerBlockType( "headspin/image-text", {
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
		const onPreambleChange = ( newValue ) => setAttributes( { preamble: newValue } );
		const onButtonLink1Change = ( newValue ) => setAttributes( { btnLink1: newValue } );
		const onButtonLink2Change = ( newValue ) => setAttributes( { btnLink2: newValue } );
		const onButtonText1Change = newValue => setAttributes({ btnLink1: { ...attributes.btnLink1, title: newValue } });
		const onButtonText2Change = newValue => setAttributes({ btnLink2: { ...attributes.btnLink2, title: newValue } });
		const onImgPlacementChange = ( newValue ) => setAttributes( { imgPlacement: newValue } );
		const onImgPositionChange = ( newValue ) => setAttributes( { imgPosition: newValue } );
		const onColumnLayoutChange = ( newValue ) => setAttributes( { columnLayout: newValue } );
		const onUseInnerBlocksChange = ( newValue ) => setAttributes( { useInnerBlocks: newValue } );
		const onRemoveMarginsChange = ( newValue ) => setAttributes( { removeMargins: newValue } );

		const [ showURLPopover, setPopover ] = useState( false );
		const [ showURLPopover2, setPopover2 ] = useState( false );

		const onFileSelect = ( img ) => {
			setAttributes({
				imgURL: ("full" in img.sizes) ? img.sizes.full.url : img.url,
				imgID: img.id,
				imgAlt: img.alt,
			});
		}

		const positions = [
			{ label: __( "Left" ), value: "left" },
			{ label: __( "Right" ), value: "right" },
		];

		const layouts = [
			{ label: "45/55", value: "4555" },
			{ label: "50/50", value: "5050" },
			{ label: "55/45", value: "5545" },
		];

		const allowedBlocks = [
			"core/heading",
			"core/paragraph",
			"core/list",
			"core/quote",
			"core/spacer",
			"core/buttons",
		];

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Layout">
						<h3 style={{ margin: 0 }}>Use inner blocks</h3>
						<PanelRow>
							<ToggleControl
								style={{ marginTop: "16px" }}
								label="Freely add inner blocks inside this block"
								checked={ attributes.useInnerBlocks }
								onChange={ onUseInnerBlocksChange }
							/>
						</PanelRow>
						<h3 style={{ margin: "16px 0 0" }}>Column layout</h3>
						<RadioGroup
							onChange={ onColumnLayoutChange }
							defaultChecked="5050"
							checked={ attributes.columnLayout }
						>
							{ layouts.map( layout =>
								<Radio value={ layout.value } key={ layout.value }>{ layout.label }</Radio>
							) }
						</RadioGroup>
						{ attributes.align !== "wide" && (
							<Fragment>
								<h3 style={{ margin: "16px 0 0" }}>Remove margins</h3>
								<PanelRow>
									<ToggleControl
										style={{ marginTop: "16px" }}
										label="Remove margins to next and previous block"
										checked={ attributes.removeMargins }
										onChange={ onRemoveMarginsChange }
									/>
								</PanelRow>
							</Fragment>
						)}
					</PanelBody>
					<PanelBody title="Image position">
						<RadioGroup
							label={ __( "Image position" ) }
							onChange={ onImgPlacementChange }
							defaultChecked="left"
							checked={ attributes.imgPlacement }
						>
							{ positions.map( position =>
								<Radio value={ position.value } key={ position.value }>{ position.label }</Radio>
							) }
						</RadioGroup>
						{ attributes.imgID && (
							<Fragment>
								<h3 style={{ marginTop: '16px' }}>Focus point</h3>
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

				<div {...useBlockProps({ className: `image-${attributes.imgPlacement} cols-${attributes.columnLayout}` })}>
					<div
						className={ classnames(
							'image-text__image',
							'fit-image-container',
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
										{ ( attributes.imgURL ) ? __( "Replace image" ) : __( "Select image" ) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</div>
					<div className={`image-text__content`}>
						<div className="image-text__content-wrapper">
							{ attributes.useInnerBlocks ? (
								<InnerBlocks
									allowedBlocks={ allowedBlocks }
								/>
							) : (
								<Fragment>
									<RichText
										tagName="div"
										className="image-text__subheading is-style-orange"
										value={ attributes.subheading }
										onChange={ onSubHeadingChange }
										placeholder={ __( "Subheading..." ) }
									/>
									<RichText
										tagName="div"
										className="image-text__heading"
										value={ attributes.heading }
										onChange={ onHeadingChange }
										placeholder={ __( "Heading..." ) }
									/>
									<RichText
										tagName="p"
										className="image-text__preamble"
										value={ attributes.preamble }
										onChange={ onPreambleChange }
										placeholder={ __( "Add a preamble here..." ) }
									/>
									<div className="image-text__btn-group is-layout-flex">
										<Tooltip
											text={ attributes.btnLink1 && attributes.btnLink1.url ? "Click to edit link" : "Click to set link" }
											position="top center"
											style={ { display: attributes.btnLink1 && attributes.btnLink1.url ? "block" : "none" } }
										>
											<div className="wp-block-button">
												<div
													className={ classnames( "wp-block-button__link", { "not-set": !(attributes.btnLink1 && attributes.btnLink1.url) } ) }
													onClick={ () => setPopover( true ) }
												>
													{ attributes.btnLink1 && attributes.btnLink1.title ? attributes.btnLink1.title : "Read more..." }
													{ isSelected && showURLPopover && (
														<URLPopover onClose={ () => setPopover( false ) }>
															<div className="button-link-popover">
																{ attributes.btnLink1 && attributes.btnLink1.url &&
																	<TextControl
																		className="button-link-popover__title-input"
																		label="Button text"
																		value={ attributes.btnLink1 && attributes.btnLink1.title ? attributes.btnLink1.title : "" }
																		onChange={ onButtonText1Change }
																	/>
																}
																<LinkControl
																	value={ attributes.btnLink1 }
																	onChange={ onButtonLink1Change }
																	placeholder={ __( 'Type URL' ) }
																/>
															</div>
														</URLPopover>
													)}
												</div>
											</div>
										</Tooltip>
										<Tooltip
											text={ attributes.btnLink2 && attributes.btnLink2.url ? "Click to edit link" : "Click to set link" }
											position="top center"
											style={ { display: attributes.btnLink2 && attributes.btnLink2.url ? "block" : "none" } }
										>
											<div className="wp-block-button">
												<div
													className={ classnames("wp-block-button__link", { "not-set": !(attributes.btnLink2 && attributes.btnLink2.url) } ) }
													onClick={ () => setPopover2( true ) }
												>
													{ attributes.btnLink2 && attributes.btnLink2.title ? attributes.btnLink2.title : "Read more..." }
													{ isSelected && showURLPopover2 && (
														<URLPopover onClose={ () => setPopover2( false ) }>
															<div className="button-link-popover">
																{ attributes.btnLink2 && attributes.btnLink2.url &&
																	<TextControl
																		className="button-link-popover__title-input"
																		label="Button text"
																		value={ attributes.btnLink2 && attributes.btnLink2.title ? attributes.btnLink2.title : "" }
																		onChange={ onButtonText2Change }
																	/>
																}
																<LinkControl
																	value={ attributes.btnLink2 }
																	onChange={ onButtonLink2Change }
																	placeholder={ __( 'Type URL' ) }
																/>
															</div>
														</URLPopover>
													)}
												</div>
											</div>
										</Tooltip>
									</div>
								</Fragment>
							)}
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
					`image-${attributes.imgPlacement}`,
					`cols-${attributes.columnLayout}`,
					// attributes.align === "wide" ? "alignwide" : "alignfull",
					{ "close-gap": attributes.removeMargins && attributes.align !== "wide" },
			)})}>
				<div
					className={ classnames(
						'image-text__image',
						'fit-image-container',
					) }
					style={ { backgroundPosition: `${attributes.imgPosition.x * 100}% ${attributes.imgPosition.y * 100}%` } }
				>
					<img
						src={ attributes.imgURL }
						alt={ attributes.imgAlt }
						style={ { objectPosition: `${attributes.imgPosition.x * 100}% ${attributes.imgPosition.y * 100}%` } }
					/>
				</div>

				<div className={`image-text__content`}>
					<div className="image-text__content-wrapper">
						{ attributes.useInnerBlocks ? (
							<InnerBlocks.Content />
						) : (
							<Fragment>
								{ attributes.subheading &&
									<RichText.Content
										tagName="div"
										className="image-text__subheading is-style-orange"
										value={ attributes.subheading }
									/>
								}
								<RichText.Content
									tagName="div"
									className="image-text__heading is-style-gradient"
									value={ attributes.heading }
								/>

								{ attributes.preamble &&
									<RichText.Content
										tagName="p"
										className="image-text__preamble"
										value={ attributes.preamble }
									/>
								}
								<div className="image-text__btn-group is-layout-flex">
									{ attributes.btnLink1 && attributes.btnLink1.url &&
										<div className="wp-block-button">
											<a className="wp-block-button__link" href={ attributes.btnLink1.url }>{ attributes.btnLink1.title }</a>
										</div>
									}
									{ attributes.btnLink2 && attributes.btnLink2.url &&
										<div className="wp-block-button">
											<a className="wp-block-button__link" href={ attributes.btnLink2.url }>{ attributes.btnLink2.title }</a>
										</div>
									}
								</div>
							</Fragment>
						)}
					</div>
				</div>
			</div>
		);
	},
} );
