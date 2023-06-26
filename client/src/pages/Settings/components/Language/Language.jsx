import React from "react";
import { useForm } from "react-hook-form";

import { Input } from "src/components/Input";
import { Button } from "src/components/Button/Button";

import { LangService } from "src/services/langApi";

import { Select } from "src/components/Select/Select";
import "./Language.scss";

export const Language = () => {
	const { register, handleSubmit, control } = useForm({});
	const service = new LangService();

	const onSubmit = (data) => {
		console.log(data);
		service.addNewLang(data);
	};
	const lang = ["System", "English", "Greeks"];
	const theme = ["System", "Light", "Dark"];
	return (
		<div className="settings_language-container">
			<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				<Input name="language" label="Language" {...register("language")} />
				<Button role="text" value="Save" />
			</form>
		</div>
	);
};
