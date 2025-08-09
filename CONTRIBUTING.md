# Contributing to Restaurant Manager 🤝

Thank you for your interest in contributing to Restaurant Manager! We welcome contributions from developers of all skill levels. This document provides guidelines and information to help you contribute effectively.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Feature Requests](#feature-requests)

## 🤖 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- **Be respectful**: Treat everyone with respect and kindness
- **Be inclusive**: Welcome newcomers and help them feel included
- **Be collaborative**: Work together constructively
- **Be patient**: Help others learn and grow
- **Be professional**: Maintain a professional tone in all communications

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** (v20.19.0 or higher)
- **npm** (v10.0.0 or higher)
- **Angular CLI** (v20.1.5 or higher)
- **Git** for version control
- A code editor (VS Code recommended)

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Restaurant_Manager.git
   cd Restaurant_Manager
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/khaledrokaya/Restaurant_Manager.git
   ```

## 🛠️ Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Verify the setup**: Open `http://localhost:4200` in your browser

## 🎯 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug fixes**
- ✨ **New features**
- 📚 **Documentation improvements**
- 🎨 **UI/UX enhancements**
- ⚡ **Performance improvements**
- 🧪 **Tests**
- 🔧 **Refactoring**

### Contribution Workflow

1. **Create a branch** for your work:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/issue-description
   ```

2. **Make your changes** following our coding standards

3. **Test your changes** thoroughly

4. **Commit your changes** with a descriptive message

5. **Push to your fork**:
   ```bash
   git push origin your-branch-name
   ```

6. **Create a Pull Request** on GitHub

## 📝 Coding Standards

### Angular/TypeScript Guidelines

- **Follow Angular Style Guide**: Adhere to the [official Angular style guide](https://angular.io/guide/styleguide)
- **Use TypeScript strict mode**: Enable strict type checking
- **Component naming**: Use PascalCase for component names
- **File naming**: Use kebab-case for file names
- **Use standalone components**: All new components should be standalone

### Code Quality

- **ESLint**: Follow the project's ESLint configuration
- **Prettier**: Use Prettier for code formatting
- **Comments**: Add meaningful comments for complex logic
- **Type safety**: Use proper TypeScript types

### Example Component Structure

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  // Component logic here
}
```

### CSS/SCSS Guidelines

- **Use Bootstrap classes** when possible
- **Follow BEM methodology** for custom CSS
- **Responsive design**: Ensure mobile-first approach
- **Consistent spacing**: Use Bootstrap spacing utilities

## 📝 Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests
- **chore**: Changes to the build process or auxiliary tools

### Examples

```bash
feat: add restaurant search functionality
fix: resolve navigation issue on mobile devices
docs: update installation instructions
style: improve button styling consistency
refactor: optimize data service performance
```

## 🔄 Pull Request Process

### Before Submitting

- [ ] Ensure your code follows the coding standards
- [ ] Test your changes thoroughly
- [ ] Update documentation if necessary
- [ ] Ensure your branch is up to date with main

### Pull Request Template

When creating a pull request, include:

1. **Description**: Clear description of what your PR does
2. **Type of change**: Bug fix, new feature, documentation, etc.
3. **Testing**: How you tested your changes
4. **Screenshots**: For UI changes, include before/after screenshots
5. **Related issues**: Link any related issues

### Review Process

1. **Automatic checks**: Ensure all CI/CD checks pass
2. **Code review**: Wait for maintainer review
3. **Address feedback**: Make requested changes
4. **Merge**: Once approved, your PR will be merged

## 🐛 Issue Reporting

### Bug Reports

When reporting bugs, include:

- **Description**: Clear description of the bug
- **Steps to reproduce**: Step-by-step instructions
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: Browser, OS, Node.js version
- **Screenshots**: If applicable

### Bug Report Template

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. Windows 10]
 - Browser: [e.g. Chrome 91]
 - Node.js: [e.g. v20.19.0]
 - Angular: [e.g. 20.1.0]
```

## 💡 Feature Requests

We love feature ideas! When requesting features:

- **Search existing issues** first
- **Provide clear use case** and rationale
- **Include mockups** or detailed descriptions
- **Consider implementation complexity**

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Portfolio**: [khaled-mostafa.me](https://www.khaled-mostafa.me/)
- **LinkedIn**: [Khaled Mostafa](https://www.linkedin.com/in/khaled-mostafa-jr)

## 🏆 Recognition

Contributors will be:

- Listed in the project's contributors section
- Credited in release notes for significant contributions
- Invited to join the core team for sustained contributions

## 📚 Resources

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

---

Thank you for contributing to Restaurant Manager! 🎉

**Questions?** Feel free to open an issue or reach out to [Khaled Mostafa](https://www.khaled-mostafa.me/).
