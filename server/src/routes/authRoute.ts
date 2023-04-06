import { Router, Request, Response } from "express";
import { client } from "../database/client";
import { hash, compare } from "bcryptjs"

const route = Router()

/**
 * Route for registering new user 
 * @param {NewUserObj} req.body - new user object {email, password, name} 
 */
route.post("/signup", async (req: Request, res: Response) => {
  try {
    const password = req.body.password
    const email = req.body.email
    const name = req.body.name
    if (!email || !password || !name) return res.json({ statusCode: 400, body: "Email, Password and Name is required" });

    hash(password, 10, async (err: any, hashed: string) => {
      const collection = client.db("cipherschools").collection("users");
      const result = await collection.insertOne({ email, password: hashed, name });
      res.json({ statusCode: 200, body: JSON.stringify(result) });
    })

  } catch (err) {
    console.log('Error registering user into MongoDB:', err);
    res.json({ statusCode: 500, body: JSON.stringify(err) });
  }
})

/**
 * Route for login existing user 
 * @param {LoginUserObj} req.body - user object {email, password} 
 */
route.post("/login", async (req: Request, res: Response) => {
  try {
    const password = req.body.password
    const email = req.body.email
    const collection = client.db("cipherschools").collection("users");
    const result = await collection.findOne({ email });
    if (!result) return res.json({ statusCode: 404, body: "User with the given email not found" });

    compare(password, result.password, async (err: any, r: boolean) => {
      if (r === true) {
        res.json({ statusCode: 200, body: result });
      } else {
        res.json({ statusCode: 200, body: "Wrong password" });
      }
    })

  } catch (err) {
    console.log('Error login user:', err);
    res.json({ statusCode: 500, body: JSON.stringify(err) });
  }
})

/**
 * Route for changing password 
 * @param {ChangePasswordObj} req.body - change password object {email, password, newpassword} 
 */
route.post("/changepassword", async (req: Request, res: Response) => {
  try {
    const password = req.body.password
    const newpassword = req.body.newpassword
    const email = req.body.email
    const collection = client.db("cipherschools").collection("users");
    const result = await collection.findOne({ email });
    if (!result) return res.json({ statusCode: 404, body: "User with the given email not found" });

    compare(password, result.password, async (err: any, r: boolean) => {
      if (r === true) {
        hash(newpassword, 10, async (err: any, hashed: string) => {
          const result = await collection.updateOne({ email }, { $set: { password: hashed } })
          res.json({ statusCode: 200, body: JSON.stringify(result) });
        })
      } else {
        res.json({ statusCode: 200, body: "Wrong password" });
      }
    })

  } catch (err) {
    console.log('Error login user:', err);
    res.json({ statusCode: 500, body: JSON.stringify(err) });
  }
})


export default route