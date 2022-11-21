// src/pages/_app.tsx
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.scss";
import { trpc } from "../utils/trpc";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    // <SessionProvider session={session}>
    <>
      <Component {...pageProps} />
      <NextNProgress color="#F4C648" />
    </>
    // </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
