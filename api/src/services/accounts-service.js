import { AccountsProvider } from '../providers/accounts-provider.js';

export class AccountsService {
	constructor() {
		this.accountsProvider = new AccountsProvider();
	}

	createAccount = async (email, password) => {
		return await this.accountsProvider.createAccount(email, password);
	};

	getAccount = async email => {
		return await this.accountsProvider.getAccount(email);
	};
}
