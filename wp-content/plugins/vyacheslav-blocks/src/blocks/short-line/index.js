/**
 * BLOCK: headspin-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import { useBlockProps } from '@wordpress/block-editor';
const icon = <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 11.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>;


registerBlockType("headspin/short-line", {
    icon: icon,
    edit: ()=>{
        return(
            <div{...useBlockProps()}>
                <div className='short-line__container'>
                    <div className='short-line__container-line--before'></div>
                    <div className='short-line__container-line--center'></div>
                    <div className='short-line__container-line--after'></div>
                </div>
            </div>
        )
    }, 
    save: ()=>{
        return(
            <div{...useBlockProps.save()}>
            <div className='short-line__container'>
                <div className='short-line__container-line--before'></div>
                <div className='short-line__container-line--center'></div>
                <div className='short-line__container-line--after'></div>
            </div>
            </div>
        )

    }
})