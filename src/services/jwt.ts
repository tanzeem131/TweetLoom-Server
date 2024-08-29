import JWT from "jsonwebtoken";
import { User } from "@prisma/client";
import { JWTUser } from "../interfaces";

const JWT_SECRET = "$all@143.";

class JWTService {
  public static generateTokenForUser(user: User) {
    try {
      const payload: JWTUser = {
        id: user?.id,
        email: user?.email,
      };
      const token = JWT.sign(payload, JWT_SECRET);
      return token;
    } catch (error) {
      return null;
    }
  }
  public static decodeToken(token: string) {
    try {
      return JWT.verify(token, JWT_SECRET) as JWTUser;
    } catch (error) {
      return null;
    }
  }
}

export default JWTService;
