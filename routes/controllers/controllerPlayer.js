const express = require('express');
const router = express.Router();
const Joi = require('joi');
const globalFunction = require('../../utils/globalFunction');
const serviceAddress = require('../services/serviceAddress');
const CONSTANTS = require('../../utils/constants');
const CONSTANTS_MSG = require('../../utils/constantsMessage');
const apiSuccessRes = globalFunction.apiSuccessRes;
const apiErrorRes = globalFunction.apiErrorRes;


async function createAddress(req, res) {

  const registerParamSchema = Joi.object({
    address1: Joi.string().required(),
    address2: Joi.string().required(),
    userId: Joi.string().required(),
  });
  try {
    await registerParamSchema.validate(req.body, {
      abortEarly: true
    });
  } catch (error) {
    return apiErrorRes(req, res, error.details[0].message);
  }
  // console.log('req.body: ',req.body)
  // let modelData = await serviceAddress.getAddressByName(req.body.title);
  // // console.log("modelData:",modelData)
  // if (modelData.statusCode === CONSTANTS.SUCCESS) {
  //   return apiErrorRes(req, res, "Address already available!");
  // } else if (modelData.data == null) {
  let modeldataRes = await serviceAddress.saveAddress(req.body);
  if (modeldataRes.statusCode == CONSTANTS.SUCCESS) {
    return apiSuccessRes(req, res, CONSTANTS_MSG.SUCCESS, modeldataRes.data);
  } else if (modeldataRes.statusCode == 11000) {
    return apiErrorRes(req, res, "Address already available!");
  } else {
    return apiErrorRes(req, res, CONSTANTS_MSG.FAILURE);
  }
  // } else {
  //   return apiErrorRes(req, res, CONSTANTS_MSG.FAILURE);
  // }
}
async function getAddressList(req, res) {

  const registerParamSchema = Joi.object({
    keyWord: Joi.string().empty(""),
    pageNo: Joi.number().integer().min(1),
    size: Joi.number().integer().min(1),
  });

  try {
    await registerParamSchema.validate(req.body, {
      abortEarly: true
    });
  } catch (error) {
    console.log(error);
    return apiErrorRes(req, res, error.details[0].message);
  }
  let resData = await serviceAddress.getAddressList(req.body);

  if (resData.statusCode === CONSTANTS.SUCCESS) {

    return apiSuccessRes(req, res, 'Success', resData.data);
  } else {
    return apiErrorRes(req, res, 'Restaurent not found.', []);
  }
}
async function getAddressListByUserid(req, res) {

  const registerParamSchema = Joi.object({
    keyWord: Joi.string().empty(""),
    userId: Joi.string().required(),
    pageNo: Joi.number().integer().min(1),
    size: Joi.number().integer().min(1),
  });

  try {
    await registerParamSchema.validate(req.body, {
      abortEarly: true
    });
  } catch (error) {
    console.log(error);
    return apiErrorRes(req, res, error.details[0].message);
  }
  let resData = await serviceAddress.getAddressList(req.body);

  if (resData.statusCode === CONSTANTS.SUCCESS) {

    return apiSuccessRes(req, res, 'Success', resData.data);
  } else {
    return apiErrorRes(req, res, 'Restaurent not found.', []);
  }
}
async function getAllAddress(req, res) {
  let resData = await serviceAddress.getAllAddress();
  if (resData.statusCode === CONSTANTS.SUCCESS) {
    return apiSuccessRes(req, res, 'Success', resData.data);
  } else {
    return apiErrorRes(req, res, 'Restaurent not found.', []);
  }
}
async function updateAddress(req, res) {

  const registerParamSchema = Joi.object({
    id: Joi.string().required(),
    address1: Joi.string().required(),
    address2: Joi.string().required(),
    userId: Joi.string().required(),
  });

  try {
    await registerParamSchema.validate(req.body, {
      abortEarly: true
    });
  } catch (error) {
    return apiErrorRes(req, res, error.details[0].message);
  }
  let modelData = await serviceAddress.getAddressById(req.body.id);
  if (modelData.statusCode === CONSTANTS.SUCCESS) {
    modelData.data.address1 = req.body.address1;
    modelData.data.address2 = req.body.address2;
    modelData.data.userId = req.body.userId;
    await modelData.data.save();
    return apiSuccessRes(req, res, CONSTANTS_MSG.PROFILE_PASSWORD_SUCCESS, modelData.data);
  } else if (modelData.statusCode === CONSTANTS.NOT_FOUND) {
    return apiErrorRes(req, res, CONSTANTS_MSG.NOT_FOUND);
  } else {
    return apiErrorRes(req, res, CONSTANTS_MSG.FAILURE);
  }
}
async function deleteAddress(req, res) {

  const registerParamSchema = Joi.object({
    id: Joi.string().required(),
  });

  try {
    await registerParamSchema.validate(req.body, {
      abortEarly: true
    });
  } catch (error) {
    return apiErrorRes(req, res, error.details[0].message);
  }
  let modelData = await serviceAddress.getAddressById(req.body.id);
  if (modelData.statusCode === CONSTANTS.SUCCESS) {
    await modelData.data.remove();
    return apiSuccessRes(req, res, CONSTANTS_MSG.USER_DELETE_SUCCESS);
  } else if (modelData.statusCode === CONSTANTS.NOT_FOUND) {
    return apiErrorRes(req, res, CONSTANTS_MSG.NOT_FOUND);
  } else {
    return apiErrorRes(req, res, CONSTANTS_MSG.FAILURE);
  }
}
async function updateAddressStatus(req, res) {

  const registerParamSchema = Joi.object({
    id: Joi.string().required(),
  });

  try {
    await registerParamSchema.validate(req.body, {
      abortEarly: true
    });
  } catch (error) {
    return apiErrorRes(req, res, error.details[0].message);
  }
  let modelData = await serviceAddress.getAddressById(req.body.id);
  if (modelData.statusCode === CONSTANTS.SUCCESS) {
    modelData.data.isDisable = !modelData.data.isDisable;
    await modelData.data.save();
    return apiSuccessRes(req, res, CONSTANTS_MSG.SUCCESS, modelData.data);
  } else if (modelData.statusCode === CONSTANTS.NOT_FOUND) {
    return apiErrorRes(req, res, CONSTANTS_MSG.NOT_FOUND);
  } else {
    return apiErrorRes(req, res, CONSTANTS_MSG.FAILURE);
  }
}
router.post('/getAddressList', getAddressList);
router.post('/deleteAddress', deleteAddress);
router.post('/updateAddress', updateAddress);
router.post('/createAddress', createAddress);
router.post('/updateAddressStatus', updateAddressStatus);
router.post('/getAllAddress', getAllAddress);
router.post('/getAddressListByUserid', getAddressListByUserid);

module.exports = router;