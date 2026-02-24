# AI Coding Agent Instructions for This Codebase

## Overview
This codebase contains JavaScript files organized into chapters, each focusing on specific JavaScript concepts. The structure is designed for learning and experimentation, with each file demonstrating a particular topic or operator.

### Key Directories
- `chapter1/`: Basics of JavaScript, including setup and hot code reloading.
- `chapter2_JSConcepts/`: Core JavaScript concepts like comments, identifiers, and hoisting.
- `chapter3_identifier_literal_operator/`: Detailed exploration of identifiers, literals, and operators.
- `chapter04_operators/`: Focused on JavaScript operators, including assignment, comparison, logical, and ternary operators.

## Developer Workflows

### Running Files
Each file is standalone and can be executed using Node.js. For example:
```bash
node <filename.js>
```
Example:
```bash
node assignment_operator.js
```

### Debugging
Use `console.log` statements to debug the code. Each file is small and self-contained, making it easy to isolate issues.

### Adding New Files
1. Place the file in the appropriate chapter directory.
2. Follow the naming convention: `<number>_<description>.js`.
3. Ensure the file demonstrates a single concept clearly.

## Project-Specific Conventions
- **File Naming**: Use descriptive names that reflect the content, e.g., `assignment_operator.js`.
- **Code Style**: Follow consistent indentation and use `const`/`let` instead of `var`.
- **Comments**: Include comments to explain the purpose of the code, especially for educational examples.

## Examples of Patterns

### Ternary Operator Example
File: `chapter04_operators/ternery_operator.js`
```javascript
const age = 18;
const canVote = age >= 18 ? 'Yes' : 'No';
console.log(`Can vote: ${canVote}`);
```

### Hoisting Example
File: `chapter2_JSConcepts/07_hoisting_var.js`
```javascript
console.log(a); // undefined
var a = 5;
```

## Suggestions for AI Agents
- When adding examples, ensure they are concise and focused on a single concept.
- Maintain the educational tone of the codebase.
- Avoid introducing external dependencies unless necessary for the concept.

## Future Improvements
- Add a `README.md` to each chapter directory summarizing its contents.
- Include tests for each concept to validate understanding.
