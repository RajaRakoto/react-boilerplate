import type React from "react";

export type T_FunctionComponent = React.ReactElement | null;

export type T_Mail = `${string}@${string}.com`;

export interface I_User {
	id: string;
	email: T_Mail;
	name: string;
	admin: boolean;
}
