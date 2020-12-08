import bcrypt from 'bcrypt';

export function generatePassword(password) {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(password, salt);
}

export class PasswordService {
	generatePassword = async password => {
		
	};

	verifyPassword = async (password, hash) => {
		return await bcrypt.compare(password, hash);
	};
}
