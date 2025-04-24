import fs from 'fs';
import path from 'path';

function printTree(dir, prefix = '') {
  const files = fs.readdirSync(dir);

  files.forEach((file, index) => {
    // Skip the node_modules directory
    if (file === 'node_modules') {
      return;
    }

    const filePath = path.join(dir, file);
    const isLast = index === files.length - 1;

    console.log(prefix + (isLast ? '└── ' : '├── ') + file);

    // Recursively print the tree for directories (except node_modules)
    if (fs.statSync(filePath).isDirectory()) {
      printTree(filePath, prefix + (isLast ? '    ' : '│   '));
    }
  });
}

// Start printing the tree from the current directory
printTree('.');