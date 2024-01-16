/**
 * BLOCK: vyacheslav-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
import { stretchWide, stretchFullWidth } from '@wordpress/icons';
import classNames from 'classnames';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const { useSelect } = wp.data;

const {
	useEffect,
	Fragment,
} = wp.element;

const {
	InnerBlocks,
	useBlockProps,
	BlockControls
} = wp.blockEditor;

const { DropdownMenu } = wp.components;

//  Import CSS.
import './editor.scss';

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
registerBlockType( 'pool4u/social-icons', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-16.91 1.584l8 4.363v8.607l-8-4.268v-8.702zm10 12.97v-8.6l8-4.269v8.6l-8 4.269zm6-9.534v4.066l-4 2.134v-4.066l4-2.134z"/></svg>, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.

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
	edit: ( { className, setAttributes, attributes, clientId} ) => {
	const allowedBlocks = [
		"pool4u/social-icon",
	];

	const template = [ [ "pool4u/card-box" ] ];

	const { cardCount } = useSelect( select => ( {
		cardCount: select( 'core/block-editor' ).getBlockCount( clientId ),
	} ) );

	useEffect( () => {
		setAttributes( { cardCount } );
	}, [ cardCount ] );

	const renderAppender = () => {
		return ( attributes.cardCount < 4 ) ? (
			<InnerBlocks.ButtonBlockAppender />
		) : false;
	};

	return (
		<div {...useBlockProps()}>
			<BlockControls>
				<DropdownMenu
					icon={ attributes.align === "wide" ? stretchWide : stretchFullWidth }
					label={ "Change alignment" }
					className="social-icons-alignment-dropdown"
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
			<div className="social-icons__container">
				<Fragment>
					<InnerBlocks
						allowedBlocks={ allowedBlocks }
						template={ template }
						orientation="horizontal"
						renderAppender={ renderAppender }
					/>
				</Fragment>
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
	save: ( { attributes, className } ) => {
		return (
			<div {...useBlockProps.save({ 
				className: classNames(`${className}`,
				attributes.align === "wide" ? "alignwide" : "alignfull" 
				)})}>
				<div className="social-icons__container">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} );
