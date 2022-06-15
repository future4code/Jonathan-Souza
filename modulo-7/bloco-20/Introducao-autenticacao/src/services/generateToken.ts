import * as jwt from "jsonwebtoken";
import { authenticationToken } from "../model/types";

const expiresIn = "1min"

export const generateToken = (input: authenticationToken): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}