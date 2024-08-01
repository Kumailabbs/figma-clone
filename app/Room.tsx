"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react";
import { RoomProvider } from "@/liveblocks.config";

export function Room({ children }: { children: ReactNode }) {
  return (
      <RoomProvider id="my-room" initialPresence={{}}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
  );
}