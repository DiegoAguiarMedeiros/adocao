import storage from "../utils/storage";

export const id = storage.getAnotherUser()?.value ?? "";
