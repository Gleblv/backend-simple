import { Router } from "express";
import Post from "./Post.js";
import PostController from "./PostController.js";

const router = new Router();

router.get("/posts", () => {});
router.get("/posts/:id", () => {});
router.post("/posts", PostController.create);
router.put("/posts", () => {});
router.delete("/posts/:id", () => {});

export default router;
