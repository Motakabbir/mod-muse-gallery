import fs from "fs";
import path from "path";

const root = process.cwd();
const srcAssets = path.join(root, "src/assets");
const destAssets = path.join(root, ".vercel/output/static/src/assets");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync(srcAssets)) {
  console.log("Copying src/assets directly to .vercel/output/static/src/assets...");
  copyDir(srcAssets, destAssets);
  console.log("✓ Copy completed successfully.");
} else {
  console.warn("Warning: src/assets directory not found.");
}
