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
import { stretchWide, stretchFullWidth } from '@wordpress/icons';

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
registerBlockType( "headspin/slider-text", {
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
		const onButtonLinkChange = ( newValue ) => setAttributes( { btnLink: newValue } );
		const onProtectionChange = ( newValue ) => setAttributes( { protection: newValue } );
		const onBlindsChange = ( newValue ) => setAttributes( { blinds: newValue } );
		const onSunscreensChange = ( newValue ) => setAttributes( { sunscreens: newValue } );
		const onSunphadeChange = ( newValue ) => setAttributes( { sunphade: newValue } );
		const onButtonTextChange = newValue => setAttributes({ btnLink: { ...attributes.btnLink, title: newValue } });
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
				<BlockControls>
					<DropdownMenu
						icon={ attributes.align === "wide" ? stretchWide : stretchFullWidth }
						label={ "Change alignment" }
						className="image-text-alignment-dropdown"
						controls={ [
							{
								title: "Full width",
								icon: stretchFullWidth,
								isActive: attributes.align !== "wide",
								onClick: () => setAttributes({ align: "full" }),
							},
							{
								title: "Wide width",
								icon: stretchWide,
								isActive: attributes.align === "wide",
								onClick: () => setAttributes({ align: "wide" }),
							},
						] }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title="Layout">

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

				<div {...useBlockProps()}>
					<div className='swiper'>
						<div
							className={ classnames(
								'slider-text__image',
								'fit-image-container',
							) }
						>
							<img className='swiper-slide' src={`/wp-content/themes/sunphade/assets/images/slider_galery/1.png`}/>

						</div>
							<div className='swiper-autoplay-option'>Choose your solar control</div>
							<div className='protection-description-wrapper protection'>

								<div className='protection-description'>
									<p>No protection</p>
									<RichText
										tagName="p"
										value={ attributes.protection }
										onChange={ onProtectionChange }
										placeholder={ __( "Protection description..." ) }
									/>
								</div>
							</div>
							<div className='protection-description-wrapper blinds'>

								<div className='protection-description'>
								<p>Blinds</p>
									<RichText
										tagName="p"
										value={ attributes.blinds }
										onChange={ onBlindsChange }
										placeholder={ __( "Protection description..." ) }
									/>
								</div>
							</div>
							<div className='protection-description-wrapper sunscreens'>

								<div className='protection-description'>
									<p>Screens</p>
									<RichText
										tagName="p"
										value={ attributes.sunscreens }
										onChange={ onSunscreensChange }
										placeholder={ __( "Protection description..." ) }
									/>
								</div>
							</div>
							<div className='protection-description-wrapper sunphade'>

							<div className='protection-description'>
								<p>Sunphade</p>
								<RichText
									tagName="p"
									value={ attributes.sunphade }
									onChange={ onSunphadeChange }
									placeholder={ __( "Protection description..." ) }
								/>
							</div>
							</div>

					</div>
					<div className={`slider-text__content`}>
						<div className="slider-text__content-wrapper">
                        <img src={`/wp-content/themes/sunphade/assets/images/slider-text-icon.png`}/>
							{ attributes.useInnerBlocks ? (
								<InnerBlocks
									allowedBlocks={ allowedBlocks }
								/>
							) : (
								<Fragment>
									<RichText
										tagName="p"
										className="slider-text__subheading"
										value={ attributes.subheading }
										onChange={ onSubHeadingChange }
										placeholder={ __( "Subheading..." ) }
									/>
									<RichText
										tagName="h1"
										className="slider-text__heading is-style-gradient"
										value={ attributes.heading }
										onChange={ onHeadingChange }
										placeholder={ __( "Heading..." ) }
									/>
									<RichText
										tagName="p"
										className="slider-text__preamble"
										value={ attributes.preamble }
										onChange={ onPreambleChange }
										placeholder={ __( "Add a preamble here..." ) }
									/>
									<div className="slider-text__btn-group">
										<Tooltip
											text={ attributes.btnLink && attributes.btnLink.url ? "Click to edit link" : "Click to set link" }
											position="top center"
											style={ { display: attributes.btnLink && attributes.btnLink.url ? "block" : "none" } }
										>
											<div className="wp-block-button">
												<div
													className={ classnames( "wp-block-button__link", { "not-set": !(attributes.btnLink && attributes.btnLink.url) } ) }
													onClick={ () => setPopover( true ) }
												>
													{ attributes.btnLink && attributes.btnLink.title ? attributes.btnLink.title : "Read more..." }
													{ isSelected && showURLPopover && (
														<URLPopover onClose={ () => setPopover( false ) }>
															<div className="button-link-popover">
																{ attributes.btnLink && attributes.btnLink.url &&
																	<TextControl
																		className="button-link-popover__title-input"
																		label="Button text"
																		value={ attributes.btnLink && attributes.btnLink.title ? attributes.btnLink.title : "" }
																		onChange={ onButtonTextChange }
																	/>
																}
																<LinkControl
																	value={ attributes.btnLink }
																	onChange={ onButtonLinkChange }
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

					attributes.align === "wide" ? "alignwide" : "alignfull",
					{ "close-gap": attributes.removeMargins && attributes.align !== "wide" },
			)})}>
				<div
					className="swiper"
				>

					<div
						className={ classnames(
							'slider-text__image',
							'fit-image-container',
							'swiper-wrapper'
						) }
					>
						<img
							className="swiper-slide"
							src="/wp-content/themes/sunphade/assets/images/slider_galery/2.webp"
							alt={ attributes.imgAlt }
							data-protection='sunphade'

							
						/>
						<img
							className="swiper-slide"
							src="/wp-content/themes/sunphade/assets/images/slider_galery/1.webp"
							alt={ attributes.imgAlt }
							data-protection='protection'

							
						/>
							<img
								className="swiper-slide"
								src="/wp-content/themes/sunphade/assets/images/slider_galery/4.webp"
								alt={ attributes.imgAlt }
								data-protection='blinds'
	
								
							/>
						<img
							className="swiper-slide"
							src="/wp-content/themes/sunphade/assets/images/slider_galery/3.webp"
							alt={ attributes.imgAlt }
							data-protection='sunscreens'

							
						/>
					</div>
					<div className='swiper-autoplay-option'>Choose your solar control</div>

					<div className='protection-description-wrapper protection'>
						<div className='protection-description '>
							{ attributes.protection &&
								<ul>
									{attributes.protection.split("<br>").map(t => <li>{t}</li>)}
								</ul>
							}
						</div>
					</div>
					<div className='protection-description-wrapper blinds'>
						<div className='protection-description '>
							{ attributes.blinds &&
								<ul>
									{attributes.blinds.split("<br>").map(t => <li>{t}</li>)}
								</ul>
							}
						</div>
					</div>

					<div className='protection-description-wrapper sunscreens'>
						<div className='protection-description '>
							{ attributes.sunscreens &&
								<ul>
									{attributes.sunscreens.split("<br>").map(t => <li>{t}</li>)}
								</ul>
			
							}
						</div>
					</div>

					<div className='protection-description-wrapper sunphade'>
						<div className='protection-description '>
							{ attributes.sunphade &&
								<ul>
									{attributes.sunphade.split("<br>").map(t => <li>{t}</li>)}
								</ul>
							}
						</div>
					</div>

					<div className="swiper-pagination"></div>
				</div>

				<div className={`slider-text__content`}>
					<div className="slider-text__content-wrapper">

                            <img 
                            
                            src="/wp-content/themes/sunphade/assets/images/slider-text-icon.webp"
                            alt="sunphade icon"
							width={42}
							height={64}
                            /> 

                       

						{ attributes.useInnerBlocks ? (
							<InnerBlocks.Content />
						) : (
							<Fragment>
								{ attributes.subheading &&
									<RichText.Content
										tagName="p"
										className="slider-text__subheading"
										value={ attributes.subheading }
									/>
								}
								<RichText.Content
									tagName="h1"
									className="slider-text__heading is-style-gradient"
									value={ attributes.heading }
								/>

								{ attributes.preamble &&
									<RichText.Content
										tagName="p"
										className="slider-text__preamble"
										value={ attributes.preamble }
									/>
								}
								<div className="slider-text__btn-group">
									{ attributes.btnLink && attributes.btnLink.url &&
										<div className="wp-block-button">
											<a className="wp-block-button__link" href={ attributes.btnLink.url }>{ attributes.btnLink.title }</a>
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
