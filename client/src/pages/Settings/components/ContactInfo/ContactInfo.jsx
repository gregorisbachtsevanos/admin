import React from "react";
import { useForm } from "react-hook-form";

import { Input } from "src/components/Input";
import { Button } from "src/components/Button/Button";
import { Textarea } from "src/components/Textarea";

import { UserService } from "src/services/userApi";
import { setLocalStorage } from "src/utils/storage";
import { useContextProvider } from "src/hooks/useContextProvider";

import "./ContactInfo.scss";

export const ContactInfo = () => {
	const { user, dispatch } = useContextProvider();
	const userService = new UserService();

	const { register, handleSubmit, control } = useForm({
		defaultValues: {
			email: user?.email,
			contact: user?.extra_info?.contact,
		},
	});

	const onSubmit = async (data) => {
		// return console.log(data);
		await userService.updateUserInfo(data, user._id);

		await userService.getUserInfo(user._id).then((data) => {
			setLocalStorage("user", JSON.stringify(data));
			dispatch({ type: "USER", payload: data });
		});
	};
	return (
		<div className="settings_contact_info-container">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="settings_email-container settings_input">
					<Input name="email" label="Email" {...register("email")} />
				</div>

				<div className="settings_contact_info-container">
					<Textarea
						name="contact_info"
						label="Contact Info"
						{...register("contact")}
					/>
				</div>

				<div className="settings_btn-container">
					<Button role="text" value="Save" />
				</div>
			</form>
		</div>
	);
};
