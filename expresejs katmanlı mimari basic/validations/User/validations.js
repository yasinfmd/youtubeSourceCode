const { check } = require('express-validator')

const UserValidations = {
    update() {
        return [
            check("name").isString(),
            check("name").notEmpty(),
            check("name").isLength({ min: 3 }),
            check("surname").isString(),
            check("surname").notEmpty(),
            check("surname").isLength({ min: 3 }),
            check("age").isNumeric(),
            check("age").notEmpty(),
            check("email").isEmail().withMessage("Email Gir"),
            check("email").notEmpty(),
            check("email").isString(),
            check("gender").notEmpty(),
            check("gender").isString(),
            check("password").isString(),
            check("password").isLength({ min: 5 }),
            check("activity_areas").isArray()
        ]
    }
}

module.exports = UserValidations