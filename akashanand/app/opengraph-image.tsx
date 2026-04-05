import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Akash Anand portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #08101d 0%, #0f1729 45%, #183b79 100%)",
          color: "#f8fafc",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: "40px",
            padding: "48px",
            background: "rgba(15, 23, 42, 0.65)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                fontSize: "22px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#7dd3fc",
              }}
            >
              Senior Software Engineer
            </div>
            <div
              style={{
                fontSize: "72px",
                fontWeight: 700,
                lineHeight: 1.05,
                maxWidth: "900px",
              }}
            >
              Akash Anand
            </div>
            <div
              style={{
                fontSize: "32px",
                lineHeight: 1.4,
                maxWidth: "860px",
                color: "rgba(248,250,252,0.8)",
              }}
            >
              Backend platforms, distributed systems, cloud infrastructure,
              reliability, and automation.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              fontSize: "24px",
              color: "rgba(248,250,252,0.75)",
            }}
          >
            <span>APIs</span>
            <span>•</span>
            <span>Observability</span>
            <span>•</span>
            <span>Platform Engineering</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
