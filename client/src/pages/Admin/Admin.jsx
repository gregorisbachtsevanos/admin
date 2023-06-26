import React from "react";
import { useForm } from "react-hook-form";

import { setCookie, setLocalStorage, getCookie } from "src/utils/storage";
import { AuthService } from "src/services/authApi";
import { Button } from "src/components/Button/Button";
import { Input } from "src/components/Input";
import { pageReload } from "src/utils/helpers";

import "./Admin.scss";

const Admin = () => {
	const authService = new AuthService();
	const { register, handleSubmit, control } = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data) => {
		authService.register(data).then((data) => {
			setLocalStorage("user", JSON.stringify(data.user));
			setCookie("refreshToken", data.refreshToken);
			setCookie("accessToken", data.accessToken);
			pageReload();
		});
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			autoComplete="off"
			className="admin-container"
		>
			<div className="admin_email-container admin_input">
				<Input
					name="email"
					label="Email"
					{...register("email", { required: true })}
				/>
			</div>
			<div className="admin_password-container admin_input">
				<Input
					name="password"
					type="password"
					label="Password"
					{...register("password", { required: true })}
				/>
			</div>
			<div className="admin_btn-container">
				<Button role="text" value="Save" />
			</div>
		</form>
	);
};

export default Admin;
