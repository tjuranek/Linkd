import mongoose from 'mongoose';
import { ACCOUNT_TYPES } from '../../constants/account-types.js';
import { getUTCDateTime } from '../../services/datetime-service.js';

const accountSchema = new mongoose.Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	dateCreated: {
		type: Date,
		required: true,
		default: getUTCDateTime()
	},
	dateRegistered: {
		type: Date
	},
	dateDeleted: {
		type: Date
	},
	type: {
		type: Number,
		required: true,
		default: ACCOUNT_TYPES.GHOST
	}
});

export const Account = mongoose.model('accounts', accountSchema);
