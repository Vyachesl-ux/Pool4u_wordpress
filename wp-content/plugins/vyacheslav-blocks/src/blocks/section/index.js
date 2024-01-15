/**
 * BLOCK: vyacheslav-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import "./editor.scss";


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import { useBlockProps } from '@wordpress/block-editor';

const {
	InnerBlocks,
	useInnerBlocksProps,
	useSetting,
} = wp.blockEditor;

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
registerBlockType( 'pool4u/section', {
	getEditWrapperProps() {
		return { 'data-align': 'full' };
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
	edit: () => {
			

		const layoutSettings = useSetting( "layout" ) || {};

		const usedLayout = {
			...layoutSettings,
			allowSizingOnChildren: true,
		};

		const innerBlocksProps = useInnerBlocksProps(useBlockProps(), {
			__experimentalLayout: usedLayout,
		});

		return (

				<div {...innerBlocksProps} />
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
	save: ({className, attributes}) => {
		return (
			<div {...useBlockProps.save( { className: 'alignfull close-gap' } ) }>
				<div className="wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} );
