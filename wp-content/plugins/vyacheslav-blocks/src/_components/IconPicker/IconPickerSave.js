import icons from "./icons";
const { Icon } = wp.components;

const IconPickerSave = ({ iconName, availableIcons = icons, height = 72, width = 72 }) => {
	if(! availableIcons[ iconName ]) return null;
	return (
		<Icon
			width={ width }
			height={ height }
			icon={ availableIcons[ iconName ] }
		/>
	);
}

export default IconPickerSave;
