import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

// T_o_D_o: this
accountSchema.methods

export const Account = mongoose.model('accounts', accountSchema);
