import { z } from "zod";

const routeAccessTypes = z.enum(["authenticated", "public"]);

export interface baseRouteInterface<T> {
  element: JSX.Element;
  route: T;
}

export interface routeInterface<T = unknown>
  extends baseRouteInterface<routeTypes> {
  type: z.infer<typeof routeAccessTypes>;
  subRoutes?: baseRouteInterface<T>[];
}

export const routeTypeEnums = z.enum([
  "",
  "login",
  "signup",
  "cart",
  "checkout",
  "course",
  "instructors",
  "learning",
  "profile",
  "profile/messages",
  "profile/my-reviews",
  "profile/settings",
]);

export type routeTypes = z.infer<typeof routeTypeEnums>;
