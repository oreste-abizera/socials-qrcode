import QRCode from "qrcode.react";

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div>
        <QRCode
          value="https://twitter.com/AbizeraOreste"
          style={{ marginRight: 50 }}
        />
        <p>Twitter</p>
      </div>
      <div>
        <QRCode
          value="https://www.linkedin.com/in/oreste-abizera-151bb9194/"
          style={{ marginRight: 50 }}
        />
        <p>LinkedIn</p>
      </div>
      <div>
        <QRCode
          value="https://github.com/oreste-abizera"
          style={{ marginRight: 50 }}
        />
        <p>github</p>
      </div>
      <div>
        <QRCode
          value="https://www.instagram.com/o.abizera"
          style={{ marginRight: 50 }}
        />
        <p>instagram</p>
      </div>
    </div>
  );
}
