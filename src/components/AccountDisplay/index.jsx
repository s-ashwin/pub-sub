import React, { useSyncExternalStore } from "react";
import { globalStore } from "../../globalStore";

export default function AccountDisplay() {
  const account = useSyncExternalStore((cb) => {
    globalStore.accountService.subscribe(cb, ["name"]);
  }, globalStore.accountService.getSnapshot);

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
        Account (listening name):{" "}
        <span style={{ color: "#5DA3FA" }}>{account.name}</span>{" "}
      </span>
      <button
        style={{ width: "fit-content" }}
        onClick={() =>
          globalStore.accountService.publish({
            name: account.name + "a"
          })
        }
      >
        Change name
      </button>
    </div>
  );
}
