const userDataAccess = {
    async create(userModel) {
        return await userModel.save()
    }
}

module.exports = userDataAccess