import React, { useSyncExternalStore } from "react";
import { globalStore } from "../../globalStore";

export default function PlatformCounter() {
  const platform = useSyncExternalStore((cb) => {
    globalStore.platformService.subscribe(cb, ["count"]);
  }, globalStore.platformService.getSnapshot);

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
        Platform (listening count):{" "}
        <span style={{ color: "#5DA3FA" }}>{platform.count}</span>{" "}
      </span>
      <button
        style={{ width: "fit-content" }}
        onClick={() =>
          globalStore.platformService.publish({
            count: platform.count + 1
          })
        }
      >
        Increment
      </button>
      <button
        style={{ width: "fit-content" }}
        onClick={() =>
          globalStore.platformService.publish({
            count: platform.count - 1
          })
        }
      >
        Decrement
      </button>
    </div>
  );
}
