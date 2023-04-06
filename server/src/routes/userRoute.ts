import { Router, Request, Response } from "express";
import { client } from "../database/client";

const route = Router()

/**
 * Route for updating existing user 
 * @param {UserObj} req.body - user object {email, name?, bio?, education?, profession?, interests?} 
 */
route.post("/update", async (req: Request, res: Response) => {
  try {
    const email = req.body.email
    if (!email) return res.json({ statusCode: 400, body: "Email is required and cannot be empty" });

    const collection = client.db("cipherschools").collection("users");
    const curUser = await collection.findOne({ email })
    if (!curUser) return res.json({ statusCode: 404, body: "User with the given email not found" });

    const newUser = {
      name: req.body.name || curUser.name,
      bio: req.body.bio || curUser.bio || null,
      education: req.body.education || curUser.education || null,
      profession: req.body.education || curUser.profession || null,
      interests: req.body.interests || curUser.interests || [],
    }

    const result = await collection.updateOne({ email }, { $set: newUser })
    res.json({ statusCode: 200, body: JSON.stringify(result) });

  } catch (err) {
    console.log('Updating data:', err);
    res.json({ statusCode: 500, body: JSON.stringify(err) });
  }
})

export default route