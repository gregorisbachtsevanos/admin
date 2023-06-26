import { useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";

import { Input } from "src/components/Input";
import { Button } from "src/components/Button/Button";
import { Textarea } from "src/components/Textarea";
import { Select } from "src/components/Select/Select";

import { LangService } from "src/services/langApi";
import { UserService } from "src/services/userApi";
import { useContextProvider } from "src/hooks/useContextProvider";
import { setLocalStorage } from "src/utils/storage";
import {
	themeOptions,
	projectStatus,
	languageOptions,
} from "src/constants/variables";

import "./Profile.scss";

export const Profile = () => {
	const { user, dispatch } = useContextProvider();

	const langService = new LangService();
	const userService = new UserService();

	const [lang, setLang] = useState([]);

	const { register, handleSubmit, control } = useForm({
		defaultValues: {
			firstname: user?.firstname,
			lastname: user?.lastname,
			occupation: user?.occupation,
			language: user?.extra_info?.language,
			theme: user?.extra_info?.theme,
			status: user?.extra_info?.status ? "Online" : "Offline",
			about: user?.extra_info?.about,
		},
	});

	const onSubmit = async (data) => {
		// data.theme = selectTheme?.current.value;
		// data.language = selectLanguage?.current.value;
		// data.status = selectStatus?.current.value;

		// return console.log(data);
		await userService.updateUserInfo(data, user._id);

		await userService.getUserInfo(user._id).then((data) => {
			setLocalStorage("user", JSON.stringify(data));
			dispatch({ type: "USER", payload: data });
		});
	};

	useEffect(() => {
		langService.getSupportedLang().then((data) => setLang(data));
	}, []);

	return (
		<div className="settings_profile-container">
			<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				<div className="settings_firstname-container settings_input">
					<Input
						name="firstname"
						// placeholder={user?.firstname}
						label="Firstname"
						{...register("firstname")}
					/>
				</div>
				<div className="settings_lastname-container settings_input">
					<Input
						name="lastname"
						// placeholder={user?.lastname}
						label="Lastname"
						{...register("lastname")}
					/>
				</div>
				<div className="settings_occupation-container settings_input">
					<Input
						name="occupation"
						// placeholder={user?.occupation}
						label="Occupation"
						{...register("occupation")}
					/>
				</div>
				<div className="settings_status-container settings_select">
					<Select
						title="Status"
						options={projectStatus}
						{...register("status")}
						// ref={selectStatus}
					/>
				</div>
				<div className="settings_lang-container settings_select">
					<Select
						title="Language"
						options={languageOptions}
						{...register("language")}
						// ref={selectLanguage}
					/>
				</div>
				<div className="settings_theme-container settings_select">
					<Select
						title="Theme"
						options={themeOptions}
						{...register("theme")}
						// ref={selectTheme}
					/>
				</div>
				<div className="settings_password-container settings_input">
					<Input
						name="password"
						label="New Password"
						type="password"
						{...register("New Password")}
					/>
				</div>
				<div className="settings_password-container settings_input">
					<Input
						name="repeat_password"
						label="Repeat Password"
						type="password"
						{...register("Repeat Password")}
					/>
				</div>
				<div className="settings_about-container">
					<Textarea name="about" label="about" {...register("about")} />
				</div>
				<div className="settings_btn-container">
					<Button role="text" value="Save" />
				</div>
			</form>
		</div>
	);
};
