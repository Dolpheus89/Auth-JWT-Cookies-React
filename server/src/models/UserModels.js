import { db } from "../utils/db.js";

export const User = {
	create: (credential) => {
		const query = "INSERT INTO user ( username , password ) VALUES ( ? , ? )";
		const params = [credential.username, credential.password];

		return new Promise((resolve, reject) => {
			db.run(query, params, (err) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	},

	findUserByUsername: (username) => {
		const query = "SELECT * FROM user WHERE username = ?";
		const params = [username];

		return new Promise((resolve, reject) => {
			db.get(query, params, (err, row) => {
				if (err) {
					reject(err);
				} else {
					resolve(row);
				}
			});
		});
	},
};
