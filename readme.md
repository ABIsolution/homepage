# ABIsolutions

- [Prerequisites](#prerequisites)
  - [Node.js](#nodejs)
  - [Git](#git)

## Prerequisites

### Node.js

**Node.js:** version 18.18.2.

You can download and install Node.js version 18.18.2 from [this link](https://nodejs.org/download/release/v18.18.2/).

**Windows**

1. Download the Windows Installer (MSI) package for Node.js version 18.18.2 from the provided link.

2. Run the downloaded MSI installer package. Follow the installation wizard's instructions, and make sure to add Node.js to your system's PATH during the installation process.

   To check if Node.js is installed correctly, open a Command Prompt or PowerShell window and run the following commands:

   ```bash
   node -v
   ```

   It should display the installed Node.js version, which should be v18.18.2.

   ```bash
   npm -v
   ```

   This should display the version of npm installed.

**Mac**

1. Download the macOS Installer (PKG) package for Node.js version 18.18.2 from the provided link.

2. Run the downloaded PKG installer package and follow the installation instructions.

   To verify the Node.js installation, open a Terminal and run the following commands:

   ```bash
   node -v
   ```

   This should display the installed Node.js version, which should be v18.18.2.

   ```bash
   npm -v
   ```

   This should display the version of npm installed.

### Git

- **Git:** You'll also need Git for version control. If you don't have Git installed, you can download and install it from [the official Git website](https://git-scm.com/).

  To check if you have Git installed, run:

  ```bash
  git --version
  ```

## Getting Started

### Clone repository to your local machine

1. Create a new directory or navigate to an existing one:

   **New directory (example):**

   ```bash
   mkdir my-project
   ```

   This command creates a new directory named "my-project." Replace "my-project" with your preferred directory name.

   **Existing directory (example):**

   ```bash
   cd existing-directory
   ```

   This command navigates to an existing directory. Replace "existing-directory" with the actual path to your existing directory.

2. Clone the project repository from GitHub:

   ```bash
   git clone https://github.com/ABIsolution/homepage.git
   ```

   This command clones the project repository from the specified GitHub URL.

3. Navigate to the project directory:

   ```bash
   cd homepage
   ```

   This command moves you into the "homepage" directory, which is the project folder you just cloned.

4. Install project dependencies:

   Using npm (example):

   ```bash
   npm install
   ```

   Using yarn (example):

   ```bash
   yarn install
   ```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [SST Documentation](https://docs.sst.dev/)

Happy coding!
