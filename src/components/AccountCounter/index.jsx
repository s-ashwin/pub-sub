import React, { useSyncExternalStore } from "react";
import { globalStore } from "../../globalStore";

export default function AccountCounter() {
  const account = useSyncExternalStore(
    globalStore.accountService.subscribe,
    globalStore.accountService.getSnapshot
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        border: "0.5px solid white",
        padding: 20,
        borderRadius: 10
      }}
    >
      <span>
        Account (listenins everything):{" "}
        <span style={{ color: "#5DA3FA" }}>{account.count}</span>{" "}
      </span>
      <button
        style={{ width: "fit-content" }}
        onClick={() =>
          globalStore.accountService.publish({ count: account.count + 1 })
        }
      >
        Increment
      </button>
      <button
        style={{ width: "fit-content" }}
        onClick={() =>
          globalStore.accountService.publish({ count: account.count - 1 })
        }
      >
        Decrement
      </button>
    </div>
  );
}
