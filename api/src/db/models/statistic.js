import mongoose from 'mongoose';
import { getUTCDateTime } from '../../services/datetime-service.js';

const statisticSchema = mongoose.Schema({
	linkId: {
		type: String,
		required: true
	},
	dateCreated: {
		type: Date,
		required: true,
		default: getUTCDateTime()
	},
	type: {
		type: Number,
		required: true
	}
});

export const Statistic = mongoose.model('statistics', statisticSchema);
