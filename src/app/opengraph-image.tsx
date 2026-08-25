import { ImageResponse } from "next/og";

export const alt = "Peludinhos Dermatologia Veterinária — atendimento especializado para cães e gatos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fcfbf8",
          color: "#25215f",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "68%",
            padding: "72px 70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "76px",
                height: "76px",
                borderRadius: "20px",
                background: "#4a4599",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div style={{ width: "42px", height: "14px", borderRadius: "5px", background: "white", position: "absolute" }} />
              <div style={{ width: "14px", height: "42px", borderRadius: "5px", background: "white", position: "absolute" }} />
              <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#f7aa16", position: "absolute", left: "17px", top: "19px" }} />
              <div style={{ width: "19px", height: "19px", borderRadius: "50%", background: "#f25549", position: "absolute", right: "15px", bottom: "16px" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "34px", fontWeight: 800, letterSpacing: "-1px", color: "#4a4599" }}>PELUDINHOS</div>
              <div style={{ fontSize: "20px", color: "#666573" }}>Dermatologia Veterinária</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ fontSize: "58px", lineHeight: 1.03, fontWeight: 800, letterSpacing: "-2.2px", maxWidth: "720px" }}>
              Dermatologia veterinária especializada para cães e gatos.
            </div>
            <div style={{ fontSize: "25px", lineHeight: 1.4, color: "#5d5b66", maxWidth: "690px" }}>
              Investigação e acompanhamento de problemas de pele, pelos e ouvidos.
            </div>
          </div>

          <div style={{ display: "flex", gap: "18px", fontSize: "18px", color: "#4a4599", fontWeight: 700 }}>
            <span>Americana</span><span>•</span><span>Campinas</span><span>•</span><span>Sumaré</span><span>•</span><span>Hortolândia</span>
          </div>
        </div>

        <div
          style={{
            width: "32%",
            background: "#312c78",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ width: "220px", height: "220px", borderRadius: "50%", background: "#f7aa16", position: "absolute", top: "72px", right: "72px", opacity: .96 }} />
          <div style={{ width: "150px", height: "150px", borderRadius: "50%", background: "#f25549", position: "absolute", bottom: "82px", left: "34px", opacity: .96 }} />
          <div style={{ width: "74px", height: "320px", borderRadius: "38px", background: "rgba(255,255,255,.16)", position: "absolute", transform: "rotate(35deg)" }} />
        </div>

        <div style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: "10px", background: "#f7aa16" }} />
      </div>
    ),
    size,
  );
}
