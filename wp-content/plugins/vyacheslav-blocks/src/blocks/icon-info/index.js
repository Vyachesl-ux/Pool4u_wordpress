/**
 * BLOCK: headspin-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import { IconPicker, IconPickerSave } from "../../_components";
// import "./editor.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const { Fragment } = wp.element;
const { RichText, useBlockProps } = wp.blockEditor;

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
registerBlockType("headspin/icon-info", {
    icon: icon,
    edit: ({className, attributes, setAttributes}) => {
        const onIconChange = (newValue) => setAttributes({ icon: newValue });
		const onHeadingChange = (newValue) => setAttributes({ heading: newValue });
		const onBodyChange = (newValue) => setAttributes({ body: newValue });

        return(
            <div {...useBlockProps()}>
                <Fragment>
                    <div className="icon-info-list__item">
						<div className="icon-info__header">
							<IconPicker
								value={attributes.icon}
								onChange={onIconChange}
								size={48}
							/>
						</div>
						<div className="icon-info__body">
							<RichText
								tagName="div"
								className="icon-info__heading semibold"
								value={attributes.heading}
								onChange={onHeadingChange}
								placeholder={__("Write something...")}
								withoutInteractiveFormatting={true}
								allowedFormats={[]}
							/>
							<RichText
								tagName="p"
								className="icon-info__body-text"
								value={attributes.body}
								onChange={onBodyChange}
								placeholder={__("Write something...")}
								withoutInteractiveFormatting={true}
								allowedFormats={[]}
							/>
						</div>
					</div>

                </Fragment>
            </div>
        )

    },
    save: ({attributes}) =>{
        return(
            <div{...useBlockProps.save()}>
                <div className="icon-info__header">
                    {!attributes.icon ? null : (
                        <IconPickerSave
                            iconName={attributes.icon}
                            height={48}
                            width={48}
                        />
                    )}
                </div>
                <div className="icon-info__body">
                    <RichText.Content
                        tagName="div"
                        className="icon-info__heading"
                        value={attributes.heading}
                    />
                    <RichText.Content
                        tagName="p"
                        className="icon-info__body-text"
                        value={attributes.body}
                    />
                </div>

            </div>
        )
    }
})