/**
 * BLOCK: vl-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */


import { registerBlockType } from "@wordpress/blocks"; // Import registerBlockType() from wp.blocks
import { useBlockProps } from '@wordpress/block-editor';

const { RichText, InnerBlocks } = wp.blockEditor;


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
registerBlockType( "pool4u/accordion-item", {
	icon: () => (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		  <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z"/>
		</svg>
	  ),
	  

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
		const ontitleChange = ( newValue ) => setAttributes( { title: newValue } );
		const onnumChange = ( newValue ) => setAttributes( { num: newValue } );

		const allowedBlocks = [
			"core/heading",
			"core/paragraph",
			"core/columns",
			"core/list",
			"core/quote",
			"core/spacer",
		];

		return (
			<div {...useBlockProps({ className: isSelected && "expanded" })}>
				<div className="accordion-header__wrapper">
					<RichText
						className="accordion__num"
						value={ attributes.num }
						onChange={ onnumChange }
						placeholder="Номер..."
						withoutInteractiveFormatting={ true }
						allowedFormats={ [] }
					/>
					<RichText
						className="accordion__title"
						value={ attributes.title }
						onChange={ ontitleChange }
						placeholder="Добавить вопрос..."
						withoutInteractiveFormatting={ true }
						allowedFormats={ [] }
					/>
				</div>
				<div className="accordion__subtitle-container">
				<InnerBlocks
									allowedBlocks={ allowedBlocks }
								/>
				</div>
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
	save: ( { attributes } ) => {
		return (
			<div {...useBlockProps.save()}>
				<div className="accordion-header__wrapper">
					<RichText.Content
						className="accordion__num"
						tagName="div"
						value={ attributes.num }
					/>
					<RichText.Content
						className="accordion__title"
						tagName="div"
						value={ attributes.title }
					/>

				</div>
				<div className="accordion__subtitle-container">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} );
