/**
 * BLOCK: headspin-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./editor.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const { InnerBlocks, useBlockProps } = wp.blockEditor;
const { useSelect } = wp.data;
const { useEffect, Fragment } = wp.element;

import classnames from "classnames";

const icon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path d="M22 14H2v-2h20v2zm-2 1H2v1.8h18V15zm0 2.6H2v1.8h18v-1.8zm0 2.6H2V22h18v-1.8zM12 5.5c0-.8-.7-1.5-1.5-1.5S9 4.7 9 5.5 9.7 7 10.5 7 12 6.3 12 5.5zM8 5c0-1.7-1.3-3-3-3S2 3.3 2 5s1.3 3 3 3 3-1.3 3-3zm3 4c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
	</svg>
);
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
registerBlockType("headspin/icon-info-list",{
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
    edit: ({  attributes, clientId, setAttributes }) => {
        const allowedBlocks = ["headspin/icon-info"];

		const template = [["headspin/icon-info"]];

		const { iconInfoCount } = useSelect((select) => ({
			iconInfoCount: select("core/block-editor").getBlockCount(clientId),
		}));

		useEffect(() => {
			setAttributes({ iconInfoCount });
		}, [iconInfoCount]);

		const renderAppender = () => {
			return attributes.iconInfoCount < 5 ? (
				<InnerBlocks.ButtonBlockAppender />
			) : (
				false
			);
		};

        return(
            <div {...useBlockProps()}>
				<div className={classnames("icon-info-list")}>
                    <Fragment>
                        <InnerBlocks
                            allowedBlocks={allowedBlocks}
                            template={template}
                            __experimentalMoverDirection="horizontal"
                            renderAppender={renderAppender}
                        />
                    </Fragment>
				</div>

            </div>
        )
    },
    save: ({ attributes, className }) => {
        return(
            <div {...useBlockProps.save({
                className: classnames(`${className}`,
                attributes.align === "wide" ? "alignwide" : "alignfull"
                )})}>
            
                <div className="icon-info-list">
					<InnerBlocks.Content />
				</div>

            </div>
        )
    }
})