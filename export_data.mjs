import { DEMO_CONTENTS } from './frontend/src/data/demoContent.js';
import fs from 'fs';

fs.writeFileSync('backend/demo_export.json', JSON.stringify(DEMO_CONTENTS, null, 2));
console.log("Successfully exported to backend/demo_export.json");
