import { ImageResponse } from "next/og";

interface OgImageProps {
  title: string;
  subtitle?: string;
  category?: string;
}

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export function generateOgImage({ title, subtitle, category }: OgImageProps) {

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          backgroundColor: "#fbfbf9",
          backgroundImage: "linear-gradient(rgba(22, 163, 74, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(22, 163, 74, 0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          padding: "70px 90px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Glow Effects */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(22, 163, 74, 0.12) 0%, rgba(251, 251, 249, 0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(5, 150, 105, 0.05) 0%, rgba(251, 251, 249, 0) 70%)",
            display: "flex",
          }}
        />

        {/* Outer Border */}
        <div
          style={{
            position: "absolute",
            inset: "20px",
            border: "1px solid rgba(15, 23, 42, 0.06)",
            pointerEvents: "none",
            display: "flex",
          }}
        />

        {/* Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          {/* Top Header Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: 850, color: "#0f172a" }}>Class Nex</span>
            <div
              style={{
                display: "flex",
                padding: "6px 14px",
                backgroundColor: "rgba(22, 163, 74, 0.06)",
                border: "1px solid rgba(22, 163, 74, 0.15)",
                borderRadius: "9999px",
                color: "#16a34a",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              AI-POWERED SCHOOL ERP
            </div>
          </div>

          {/* Main Title & Subtitle Area */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              maxWidth: "90%",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            {category && (
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#16a34a",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </span>
            )}

            <h1
              style={{
                fontSize: title.length > 55 ? "50px" : "60px",
                fontWeight: 800,
                backgroundImage: "linear-gradient(90deg, #16a34a, #059669, #047857)",
                backgroundClip: "text",
                color: "transparent",
                margin: 0,
                padding: 0,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 400,
                  color: "#475569",
                  lineHeight: 1.4,
                  margin: 0,
                  padding: 0,
                  marginTop: "4px",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Footer Row */}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(15, 23, 42, 0.08)",
              paddingTop: "24px",
            }}
          >
            <div style={{ display: "flex", color: "#64748b", fontSize: "16px", fontWeight: 500 }}>
              AI-Powered School Management System
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#16a34a" }} />
              <span style={{ color: "#0f172a", fontSize: "18px", fontWeight: 700 }}>
                www.classnext.ai
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
