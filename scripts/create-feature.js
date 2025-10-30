import fs from "fs";
import path from "path";

const featureName = process.argv[2];

if (!featureName) {
  console.error("❌ Please provide a feature name.\nUsage: npm run create:feature <name>");
  process.exit(1);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const featureDir = path.join("app", "(features)", featureName);
const folders = ["components", "data", "hooks", "types"];
const pageFile = path.join(featureDir, "page.tsx");

if (!fs.existsSync(featureDir)) {
  fs.mkdirSync(featureDir, { recursive: true });
  console.log(`📁 Created: ${featureDir}`);
} else {
  console.log(`⚠️ Feature "${featureName}" already exists.`);
  process.exit(1);
}

folders.forEach((folder) => {
  const folderPath = path.join(featureDir, folder);
  fs.mkdirSync(folderPath);
  console.log(`📁 Created: ${folderPath}`);
});

const componentName = capitalize(featureName);
const pageContent = `
export default function ${componentName}Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">${componentName} Feature</h1>
      <p>Welcome to the ${featureName} feature page!</p>
    </div>
  );
}
`;

fs.writeFileSync(pageFile, pageContent.trim());
console.log(`📝 Created: ${pageFile}`);

console.log("✅ Feature setup complete!");
