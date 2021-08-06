import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as authController from "../controller/auth.js";
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

const validateCredntial = [body("username").trim().notEmpty().withMessage("3글자 이상 작성해주세요"), body("password").trim().isLength({ min: 3 }).withMessage("3자리 이상 적어주세요"), validate];

const validateSignup = [
  ...validateCredntial,
  body("name").notEmpty().withMessage("이름을 적어주세요"),
  body("email").isEmail().normalizeEmail().withMessage("불가능한 이메일입니다."),
  body("url").isURL().withMessage("없는 url").optional({ nullable: true, checkFalsy: true }, validate),
];

router.post("/signup", validateSignup, authController.signup);

router.post("/login", validateCredntial, authController.login);

router.get("/me", isAuth, authController.me)

export default router;
