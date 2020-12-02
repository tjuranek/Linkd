import bcrypt from 'bcrypt';

export class PasswordService {
	generatePassword = async password => {
		const salt = await bcrypt.genSalt(10);
		return await bcrypt.hash(password, salt);
	};

	verifyPassword = async (password, hash) => {
		return await bcrypt.compare(password, hash);
	};
}
