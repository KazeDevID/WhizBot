const getGroupAdmins = (participants) => {
	const admins = []

	for (const user of participants) {
		if (user.admin == 'admin') admins.push(user.id)
		if (user.admin == 'superadmin') admins.push(user.id)
	}

	return admins
}

module.exports = getGroupAdmins
