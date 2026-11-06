// Gera proposta.pdf a partir de proposta.html.
// Uso: SITE_URL=https://seu-projeto.vercel.app node proposta/gerar-pdf.cjs
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const SITE_URL = process.env.SITE_URL || "https://dr-otavio-viano.vercel.app";
const dir = __dirname;
const logo = `<img src="${path.join(dir, "..", "public", "logo-simbolo.png")}" style="height:11mm" />`;
const data = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

const html = fs.readFileSync(path.join(dir, "proposta.html"), "utf8")
  .replaceAll("{{SITE_URL}}", SITE_URL)
  .replaceAll("{{SITE_URL_LABEL}}", SITE_URL.replace(/^https?:\/\//, ""))
  .replaceAll("{{DATA}}", data)
  .replaceAll("{{LOGO}}", logo);

const tmp = path.join(dir, ".render.html");
fs.writeFileSync(tmp, html);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + tmp, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: path.join(dir, "Proposta-Site-Dr-Otavio-Viano.pdf"), format: "A4", printBackground: true, preferCSSPageSize: true });
  await browser.close();
  fs.unlinkSync(tmp);
  console.log("PDF gerado com link:", SITE_URL);
})();
