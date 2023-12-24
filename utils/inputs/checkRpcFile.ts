import { existsSync } from "fs-extra";
import { validateRpcUrl } from "./validateRpcUrl";

export const checkRpcFile = (rpcPath: string) => {
  if (!existsSync(rpcPath)) return { type: "RpcFileNotFound" as const };
  return validateRpcUrl(rpcPath);
};
