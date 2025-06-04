import { Router } from "express";
import { ChatController } from "../controllers/chat.controller";
import chatsServices from "../../core/services/chat.services";

const router = Router();

const chatController = new ChatController(chatsServices);

router.get("/messages", chatController.getMessages);

export { router as chatRouter };
