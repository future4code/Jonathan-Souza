import * as jwt from "jsonwebtoken";
import { authenticationToken } from "../model/types";

export const getData = (token: string): authenticationToken => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as authenticationToken;
  const result = {
    id: payload.id,
    role: payload.role
  };
  return result;
};