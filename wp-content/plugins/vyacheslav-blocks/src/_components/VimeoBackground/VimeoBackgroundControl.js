const { useInstanceId } = wp.compose;
const { forwardRef } = wp.element;
const { Button } = wp.components;

import { BaseControl } from "@wordpress/components";

import useVimeo from "./useVimeo";

import "./editor.scss";

const VimeoBackgroundControl = (
	{
		label,
		value,
		onChange,
		hideLabelFromVision,
		help,
		className,
		onLoad,
		...props
	},
	ref
) => {
	const instanceId = useInstanceId( VimeoBackgroundControl );
	const id = `inspector-vimeo-background-control-${instanceId}`;

	const handleKeyDown = e => {
		if (e.keyCode === 13) useVimeo(value, onLoad);
	}

	return (
		<BaseControl
			label={ label }
			hideLabelFromVision={ hideLabelFromVision }
			id={ id }
			help={ help }
			className={ className }
		>
			<div className="vimeo-background-control__input-container">
				<input
					className="components-text-control__input"
					type="text"
					id={ id }
					value={ value }
					onChange={ e => onChange( e.target.value ) }
					onKeyDown={ handleKeyDown }
					ref={ ref }
					{ ...props }
				/>
				<Button
					icon="saved"
					onClick={ () => useVimeo(value, onLoad) }
					isPrimary
				/>
			</div>
		</BaseControl>
	)
}

VimeoBackgroundControl.defaultAttributes = {
	videoID: null,
	width: null,
	height: null,
	error: null,
};

export default forwardRef( VimeoBackgroundControl );
