import "./editor.scss";

import classnames from "classnames";
import icons from "./icons";

/**
 * External dependencies
 */
const { isEmpty } = lodash;

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useInstanceId } = wp.compose;
const { Button, Icon } = wp.components;
const { useState } = wp.element;

/**
 * Internal dependencies
 */
const { BaseControl } = wp.components;

export default function IconPicker( {
	help,
	label = null,
	hideLabelFromVision = false,
	onChange,
	size=32,
	canClose = true,
	className,
	value,
	availableIcons = icons,
	isOpen = false,
	...props
} ) {
	const availableIconsArray = Object.keys(availableIcons);

	if ( isEmpty( availableIconsArray ) ) return (
		<h2>{ __( "Ingen ikoner tilgjengelig.") }</h2>
	);

	const instanceId = useInstanceId( IconPicker );
	const id = `inspector-icon-picker-${ instanceId }`;

	const iconSet = value && availableIconsArray.indexOf(value) > -1;

	const [ showPopover, setPopover ] = useState( false );

	return (
		<BaseControl
			label={ label }
			hideLabelFromVision={ hideLabelFromVision }
			id={ id }
			help={ help }
			className={ classnames( "hs-icon-picker", className ) }
		>
			{ iconSet && (
				<div className="hs-icon-preview">
					<Icon
						size={size}
						icon={availableIcons[value]}
					/>
				</div>
			) }
			<Button
				isSecondary
				isDestructive={ iconSet }
				onClick={ () => setPopover( !showPopover ) }
			>{ iconSet ? __( "Replace" ) : __( "Set icon" ) }</Button>
			{ (isOpen || showPopover) && (
				<div className="hs-icon-popover-backdrop">
					<div className="hs-icon-popover">
						{ canClose ?
							<div
								className="hs-icon-popover-close"
								onClick={ () => setPopover( false )	}
							/>
						: null}
						<h2>{ __( "Choose icon" ) }</h2>
						<div className="hs-icon-popover-scroll-container">
							<div className="hs-icons-grid">
								{ availableIconsArray.map( iconName => (
									<div className="hs-icon-container" key={ iconName }>
										<div
											className="hs-icon"
											onClick={ () => {
												setPopover( false );
												onChange( iconName );
											} }
										>
											<Icon
												size={48}
												icon={availableIcons[iconName]}
											/>
										</div>
									</div>
								) ) }
							</div>
						</div>
					</div>
				</div>
			) }
		</BaseControl>
	);
}
