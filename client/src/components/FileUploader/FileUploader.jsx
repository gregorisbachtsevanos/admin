import React, { forwardRef, useEffect, useState } from "react";
import ReactCrop from "react-image-crop";
import "./FileUploader.scss";

export const FileUploader = forwardRef(({ name, ...rest }, ref) => {
	const [crop, setCrop] = useState();
	const [src, setSrc] = useState();
	const [error, setError] = useState();
	const [imageUpload, setImageUpload] = useState([]);

	const setImageOnChange = (e) => {
		let imageIndex = e.target.files;
		let imageArray = [];
		if (imageIndex.length > 3)
			return setError("* You can select up to three images per project.");
		for (let el of imageIndex) {
			let name = el.name;
			let src = URL.createObjectURL(el);
			imageArray.push({ name, src });
			// imageArray.name[i] = imageIndex[i].name;
		}

		setImageUpload(imageArray);
	};

	return (
		<>
			<div className="file-container">
				{imageUpload.length === 0 ? (
					<>
						<p className="file_option-title">
							Choose files to upload
							{error && <span className="error">{error}</span>}
						</p>
					</>
				) : (
					<>
						<div className="image-preview">
							<div className="preview_image_src-container">
								{imageUpload?.map((image, index) => (
									// <ReactCrop
									// 	crop={crop}
									// 	key={image}
									// 	onChange={(c) => setCrop(c)}
									// >
									// 	<img src={image} />
									// </ReactCrop>
									<img
										key={index}
										className="preview_image_src"
										src={image.src}
										alt={image.name}
									/>
								))}
							</div>
							<div className="preview_image_name-container">
								{imageUpload?.map((image, index) => (
									// <ReactCrop
									// 	crop={crop}
									// 	key={image}
									// 	onChange={(c) => setCrop(c)}
									// >
									// 	<img src={image} />
									// </ReactCrop>
									<span key={index} className="preview_image_name">
										{image.name}
									</span>
								))}
							</div>
						</div>
						<span className="file_option-title change">
							Choose different files
						</span>
					</>
				)}

				<input
					accept="image/png, image/jpeg"
					className="file-input"
					name={name}
					type="file"
					{...rest}
					ref={ref}
					onChange={setImageOnChange}
				/>
			</div>
		</>
	);
});
