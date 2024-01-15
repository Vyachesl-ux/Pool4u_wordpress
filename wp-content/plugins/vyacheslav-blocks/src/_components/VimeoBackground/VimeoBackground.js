// const { Spinner } = wp.components;

const VimeoBackground = ({ videoID, width, height, error, placeholder, placeholderPosition }) => {
	const style = {
		paddingBottom: `${(height / width) * 100}%`,
		backgroundImage: placeholder ? `url(${placeholder})` : null,
		backgroundPosition: placeholder && placeholderPosition ? placeholderPosition : null,
	};

	return (
		<div className="video-background">
			{ error && (
				<div className="error">{ error }</div>
			)}
			<div className="vimeo-video">
				<div className="vimeo-video__wrapper" style={ style }>
					{ videoID && (
						<iframe
							src={`https://player.vimeo.com/video/${videoID}?background=1`}
							className="vimeo-video__video"
							data-height={ height }
							data-width={ width }
							frameborder="0"
							allow="autoplay; fullscreen; picture-in-picture"
							allowfullscreen
						/>
					) }
				</div>
			</div>
		</div>
	);
}

export default VimeoBackground;
