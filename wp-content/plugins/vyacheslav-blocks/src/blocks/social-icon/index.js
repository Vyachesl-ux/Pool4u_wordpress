/**
 * BLOCK: vyacheslav-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks


const {
   Button,
	PanelBody,
} = wp.components;

const {
	useBlockProps,
	InspectorControls,
	RichText,
   MediaUpload,
   MediaUploadCheck,
	__experimentalLinkControl: LinkControl,

} = wp.blockEditor;

import classnames from "classnames";



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
registerBlockType( 'pool4u/social-icon', {
// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.

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

edit: ( {attributes, setAttributes} ) => {

	const onLinkChange = ( newValue ) => setAttributes( { link: newValue } );
   const onFileSelect = ( img ) => {
      setAttributes({
         imgURL: ("full" in img.sizes) ? img.sizes.full.url : img.url,
         imgID: img.id,
         imgAlt: img.alt,
      });
   }

	return (
		<div { ...useBlockProps() } >
			<InspectorControls>
					<PanelBody>
						<h3 style={{ marginBottom: 0 }}>Lenke</h3>
						<LinkControl
							label="Ссылка"
							value={ attributes.link }
							onChange={ onLinkChange }
						/>
					</PanelBody>


				</InspectorControls>

			<a>
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
			</a>
		</div>
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
	save: ( {attributes} ) => {
		console.log('imgAlt in save:', attributes.imgAlt);

		return (

			<div { ...useBlockProps.save()} >
				<a
					href={ attributes.link?.url }
					target={ attributes.link?.opensInNewTab && "_blank" }
					rel={ attributes.link?.opensInNewTab && "noopener noreferrer" }
				>
					<div
						className={ classnames(
							'image-text__image',
							'fit-image-container',
						) }
					>
						<img
							src={ attributes.imgURL }
							alt={ attributes.imgAlt }
						/>

					</div>
				</a>
			</div>
		);
	},
} );
