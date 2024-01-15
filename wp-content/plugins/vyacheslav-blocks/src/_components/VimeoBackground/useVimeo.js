const useVimeo = ( url, onLoad ) => {

	fetch(`https://vimeo.com/api/oembed.json?url=${url}`)
	.then(response => {
		if (!response.ok) throw Error("Could not get the Video");

		return response.json();
	})
	.then(data => {
		onLoad({
			videoID: data.video_id,
			width: data.width,
			height: data.height,
			isLoading: false,
			error: null,
		});
	})
	.catch(e => {
		onLoad({
			videoID: null,
			width: null,
			height: null,
			isLoading: false,
			error: e.message,
		});
	});

};

export default useVimeo;
