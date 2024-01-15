/**
 * BLOCK: headspin-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
import { registerBlockType } from "@wordpress/blocks"; // Import registerBlockType() from wp.blocks
import { useBlockProps } from '@wordpress/block-editor';
const { __ } = wp.i18n; // Import __() from wp.i18n
const{ Fragment } = wp.element;
const { RichText } = wp.blockEditor;

const icon = <svg fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24"><path fill-rule="nonzero" d="M21.011 8.498H3.002c-.569 0-1.001.464-1.001.999 0 .118-.105-.582 1.694 10.659.077.486.496.842.988.842h14.635c.492 0 .911-.356.988-.842 1.801-11.25 1.693-10.54 1.693-10.66 0-.553-.449-.991-.988-.998zm-.92 3.5-1.2 7.5H5.109l-1.2-7.5zm-.076-6.517H3.986c-.524 0-1.001.422-1.001 1.007 0 .081-.011.016.139 1.01h17.752c.152-1.012.139-.931.139-1.009 0-.58-.469-1.008-1-1.008zm-15.973-1h15.917c.057-.436.054-.426.054-.482 0-.671-.575-1.001-1.001-1.001H4.989c-.536 0-1.001.433-1.001 1 0 .056-.004.043.054.483z"/></svg>;
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
registerBlockType("headspin/advantages", {

    edit: ({attributes, setAttributes}) => {
        const onBlindsHeaderChange = (newValue) => setAttributes({blinds_header: newValue});
        const onSunphadeHeaderChange = (newValue) => setAttributes({sunphade_header: newValue});
        const onSunscreenHeaderChange = (newValue) => setAttributes({sunscreen_header: newValue});
        const onBlindsListChange = (newValue) => setAttributes({blinds_list: newValue});
        const onSunphadeListChange = (newValue) => setAttributes({sunphade_list: newValue});
        const onSunscreenListChange = (newValue) => setAttributes({sunscreen_list: newValue});
        return(
            <Fragment>
                <div {...useBlockProps()}>
                    <div className="advantages-content">
                        <div className="advantages-content__item">
                        <div className="advantages-content__item-wrapper">
                            <img src={`/wp-content/themes/sunphade/assets/images/blinds.png`}/>
                        </div>

                            <RichText
                                tagName="h3"
                                value={ attributes.blinds_header }
                                onChange={ onBlindsHeaderChange}
                                placeholder={ __( "Header..." ) }
                            />
                            
                            <RichText
                                tagName="p"
                                value={attributes.blinds_list}
                                onChange={onBlindsListChange}
                                placeholder={__("Description...")}
                            />
                            
                        </div>
                        <div className="advantages-content__item">
                        <div className="advantages-content__item-wrapper">
                            <img src={`/wp-content/themes/sunphade/assets/images/sunphade.png`}/>
                        </div>

                            <RichText
                                tagName="h3"
                                value={ attributes.sunphade_header }
                                onChange={ onSunphadeHeaderChange}
                                placeholder={ __( "Header..." ) }
                            />
                            
                            <RichText
                                tagName="p"
                                value={attributes.sunphade_list}
                                onChange={onSunphadeListChange}
                                placeholder={__("Description...")}
                            />
                            
                        </div>
                        <div className="advantages-content__item">
                            <div className="advantages-content__item-wrapper">
                                <img src={`/wp-content/themes/sunphade/assets/images/sunscreen.png`}/>
                            </div>
                            <RichText
                                tagName="h3"
                                value={ attributes.sunscreen_header }
                                onChange={ onSunscreenHeaderChange}
                                placeholder={ __( "Header..." ) }
                            />
                            
                            <RichText
                                tagName="p"
                                value={attributes.sunscreen_list}
                                onChange={onSunscreenListChange}
                                placeholder={__("Description...")}
                            />
                            
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    },
    save: ({attributes}) => {
        return(
            <div {...useBlockProps.save()}>
                <div className="advantages-content">
                    <div className="advantages-content__item">
                        <div className="advantages-content__item-wrapper">
                        <img 
                            src={`/wp-content/themes/sunphade/assets/images/blinds.png`} 
                            alt="sunphade film technologies sketch"
                            width={190}
                            height={285}
                        />
                        </div>
                        { attributes.blinds_header &&
                            <RichText.Content
                                tagName="h3"
                                value={ attributes.blinds_header }
                            />
                        }
                        { attributes.blinds_list &&

                            <ul>
                                {attributes.blinds_list.split("<br>").map(t => <li>{t}</li>)}
                            </ul>
                        }
                    </div>
                    <div className="advantages-content__item">
                    <div className="advantages-content__item-wrapper">
                        <img 
                            src={`/wp-content/themes/sunphade/assets/images/sunphade.png`} 
                            alt="sunphade film technologies sketch"
                            width={190}
                            height={285}
                        />
                    </div>

                        { attributes.sunphade_header &&
                            <RichText.Content
                                tagName="h3"
                                value={ attributes.sunphade_header }
                            />
                        }
                        { attributes.sunphade_list &&

                            <ul>
                                {attributes.sunphade_list.split("<br>").map(t => <li>{t}</li>)}
                            </ul>
                        }
                    </div>
                    <div className="advantages-content__item">
                    <div className="advantages-content__item-wrapper">
                        <img 
                            src={`/wp-content/themes/sunphade/assets/images/sunscreen.png`} 
                            alt="sunphade film technologies sketch"
                            width={190}
                            height={285}
                        />
                    </div>

                        { attributes.sunscreen_header &&
                            <RichText.Content
                                tagName="h3"
                                value={ attributes.sunscreen_header }
                        />
                        }
                        { attributes.sunscreen_list &&

                            <ul>
                                {attributes.sunscreen_list.split("<br>").map(t => <li>{t}</li>)}
                            </ul>
                        }
                    </div>

                </div>
            </div>
        )
    }
})