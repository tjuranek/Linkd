import mongoose from 'mongoose';
import shortId from 'shortid';
import { getUTCDateTime } from '../../services/datetime-service.js';

const linkSchema = new mongoose.Schema({
	accountId: {
		type: String,
		required: true
	},
	key: {
		type: String,
		required: true,
		default: shortId.generate
	},
	url: {
		type: String,
		required: true
	},
	dateCreated: {
		type: Date,
		required: true,
		default: getUTCDateTime()
	},
	dateDeleted: {
		type: Date
	}
});

export const Link = mongoose.model('links', linkSchema);
