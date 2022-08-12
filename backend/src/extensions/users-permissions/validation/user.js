'use strict';

const { yup, validateYupSchema } = require('@strapi/utils');

const deleteRoleSchema = yup.object().shape({
  role: yup.strapiID().required(),
});

const createUserBodySchema = yup.object().shape({
  wallet_address: yup
    .string()
    .min(1)
    .required(),
  nonce: yup
    .number()
    .min(1)
    .required(),
});

const updateUserBodySchema = yup.object().shape({
  wallet_address: yup
    .string()
    .min(1),
  nonce: yup.number().min(1)
});

module.exports = {
  validateCreateUserBody: validateYupSchema(createUserBodySchema),
  validateUpdateUserBody: validateYupSchema(updateUserBodySchema),
  validateDeleteRoleBody: validateYupSchema(deleteRoleSchema),
};
