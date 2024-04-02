export type UserSignUp = {
	email: string;
	password: string;
	username: string;
};

export type UserSignIn = {
	email: string;
	password: string;
};

export type RouteChild = {
	children: JSX.Element;
};

export type Course = {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	created: Date;
};

export type CourseModule = {
	id: string;
	title: string;
	description: string;
};

export type Content = {
	id: string;
	title: string;
	description: string;
	textFirst: string;
	textSecond: string;
	imageUrl?: string;
	videoUrl?: string;
};

export type UpdateUser = {
	username: string;
	email: string;
};

export type UserData = {
	id: string;
	email: string;
	username: string;
	avatar: string;
	role: string;
};

export type CustomMutationError = {
	status: number;
	data: {
		error: string;
		message: string;
		statusCode: number;
	};
};

export type IsInstructor = {
	instructor: boolean;
};
