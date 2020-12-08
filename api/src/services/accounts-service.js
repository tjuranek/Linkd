import { AccountMongooseModel } from '../db/models/account';

export const AccountModel = AccountMongooseModel;



export {
	...AccountModel,
	createAccount
}

export AccountMongooseModel;

async function createAccount(email, password) {
	return accountsService.createAccount(email, password);
} 

accountsService.createAccount = createAccount;



import { accountsService } from 'whatever';

accountsService.createAccount();


// export class AccountsService {
// 	constructor() {
// 		this.accountsProvider = new AccountsProvider();
// 	}

	// createAccount = async (email, password) => {
	// 	return this.accountsProvider.createAccount(email, password);
	// };

// 	getAccount = async email => {
// 		return await this.accountsProvider.getAccount(email);
// 	};
// }
