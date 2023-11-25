import Script from "next/script";

export default function TestPage() {
  return (
    <div>
      <div id="container">
        <div id="editor"></div>
      </div>
      <Script defer src="/script/create-content-action/init-editor.js" />
    </div>
  );
}
