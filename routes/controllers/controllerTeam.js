const express = require('express');
const router = express.Router();
const Joi = require('joi');
const globalFunction = require('../../utils/globalFunction');
const serviceBook = require('../services/serviceBook');
const CONSTANTS = require('../../utils/constants');
const CONSTANTS_MSG = require('../../utils/constantsMessage');
const apiSuccessRes = globalFunction.apiSuccessRes;
const apiErrorRes = globalFunction.apiErrorRes;


async function createBook(req, res) {

  const registerParamSchema = Joi.object({
    title: Joi.string().required(),
    desc: Joi.string().required(),
  });
  try {
    await registerParamSchema.validate(req.body, {
      abortEarly: true
    });
  } catch (error) {
    return apiErrorRes(req, res, error.details[0].message);
  }
  // console.log('req.body: ',req.body)
  let modelData = await serviceBook.getBookByName(req.body.title);
  // console.log("modelData:",modelData)
  if (modelData.statusCode === CONSTANTS.SUCCESS) {
    return apiErrorRes(req, res, "Book already available!");
  } else if (modelData.data == null) {
    let modeldataRes = await serviceBook.saveBook(req.body);
    if (modeldataRes.statusCode == CONSTANTS.SUCCESS) {
      return apiSuccessRes(req, res, CONSTANTS_MSG.SUCCESS, modeldataRes.data);
    } else if (modeldataRes.statusCode == 11000) {
      return apiErrorRes(req, res, "Book already available!");
    } else {
      return apiErrorRes(req, res, CONSTANTS_MSG.FAILURE);
    }
  } else {
    return apiErrorRes(req, res, CONSTANTS_MSG.FAILURE);
  }
}
async function getBookList(req, res) {

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
  let resData = await serviceBook.getBookList(req.body);

  if (resData.statusCode === CONSTANTS.SUCCESS) {

    return apiSuccessRes(req, res, 'Success', resData.data);
  } else {
    return apiErrorRes(req, res, 'Restaurent not found.', []);
  }
}
async function getAllBook(req, res) {
  let resData = await serviceBook.getAllBook();
  if (resData.statusCode === CONSTANTS.SUCCESS) {
    return apiSuccessRes(req, res, 'Success', resData.data);
  } else {
    return apiErrorRes(req, res, 'Restaurent not found.', []);
  }
}
async function updateBook(req, res) {

  const registerParamSchema = Joi.object({
    id: Joi.string().required(),
    title: Joi.string().required(),
    desc: Joi.string().required(),
    videoLink: Joi.string().required(),
    imageLink: Joi.string().required(),
  });

  try {
    await registerParamSchema.validate(req.body, {
      abortEarly: true
    });
  } catch (error) {
    return apiErrorRes(req, res, error.details[0].message);
  }
  let modelData = await serviceBook.getBookById(req.body.id);
  if (modelData.statusCode === CONSTANTS.SUCCESS) {
    modelData.data.title = req.body.title;
    modelData.data.desc = req.body.desc;
    modelData.data.videoLink = req.body.videoLink;
    modelData.data.imageLink = req.body.imageLink;
    await modelData.data.save();
    return apiSuccessRes(req, res, CONSTANTS_MSG.PROFILE_PASSWORD_SUCCESS, modelData.data);
  } else if (modelData.statusCode === CONSTANTS.NOT_FOUND) {
    return apiErrorRes(req, res, CONSTANTS_MSG.NOT_FOUND);
  } else {
    return apiErrorRes(req, res, CONSTANTS_MSG.FAILURE);
  }
}
async function deleteBook(req, res) {

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
  let modelData = await serviceBook.getBookById(req.body.id);
  if (modelData.statusCode === CONSTANTS.SUCCESS) {
    await modelData.data.remove();
    return apiSuccessRes(req, res, CONSTANTS_MSG.USER_DELETE_SUCCESS);
  } else if (modelData.statusCode === CONSTANTS.NOT_FOUND) {
    return apiErrorRes(req, res, CONSTANTS_MSG.NOT_FOUND);
  } else {
    return apiErrorRes(req, res, CONSTANTS_MSG.FAILURE);
  }
}
async function updateBookStatus(req, res) {

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
  let modelData = await serviceBook.getBookById(req.body.id);
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
router.post('/getBookList', getBookList);
router.post('/deleteBook', deleteBook);
router.post('/updateBook', updateBook);
router.post('/createBook', createBook);
router.post('/updateBookStatus', updateBookStatus);
router.post('/getAllBook', getAllBook);

module.exports = router;