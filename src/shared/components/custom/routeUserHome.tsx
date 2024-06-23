import { NextPage } from "next";
import { redirect } from "next/navigation";

const RouteUserHome: NextPage<{}> = async () => {
  redirect("/");

  return <main className="flex min-h-screen justify-center p-10"></main>;
};

export default RouteUserHome;
