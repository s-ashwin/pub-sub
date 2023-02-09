import React, { useSyncExternalStore } from "react";
import { globalStore } from "../../globalStore";

export default function PlatformDisplay() {
  const platform = useSyncExternalStore((cb) => {
    globalStore.platformService.subscribe(cb,["name"]);
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
        Platform (listening name):{" "}
        <span style={{ color: "#5DA3FA" }}>{platform.name}</span>{" "}
      </span>
      <button
        style={{ width: "fit-content" }}
        onClick={() =>
          globalStore.platformService.publish({
            name: platform.name+"p"
          })
        }
      >
        Change name
      </button>
    </div>
  );
}
