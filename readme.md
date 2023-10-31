# ABIsolutions

- [ABIsolutions](#abisolutions)
- [Prerequisites](#prerequisites)
  - [Node.js](#nodejs)
    - [Windows Installation](#windows)
    - [Mac Installation](#mac)
  - [Git](#git)
- [Getting Started](#getting-started)
  - [Clone Repository to Your Local Machine](#clone-repository-to-your-local-machine)
- [Basic Git Commands](#basic-git-commands)
- [Resources](#resources)

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

## Basic Git Commands

### 1. Initialize a New Git Repository

To start tracking a project with Git, you need to initialize a new repository. This creates a `.git` directory, which stores all the information needed for version control.

```bash
git init
```

### 2. Clone a Git Repository

To create a copy of an existing Git repository on your local machine, you can use the `git clone` command.

```bash
git clone <repository_url>
```

Replace `<repository_url>` with the URL of the Git repository you want to clone.

### 3. Check the Status of Your Repository

You can check the status of your Git repository to see which files have been modified and are ready to be committed.

```bash
git status
```

### 4. Stage Changes for Commit

To prepare changes for a commit, you need to stage them. You can use the `git add` command to stage changes.

```bash
git add <file_name>
```

You can replace `<file_name>` with the name of the specific file you want to stage, or use `.` to stage all changes.

### 5. Commit Changes

After staging changes, you can create a commit with a message to describe the changes.

```bash
git commit -m "Your commit message"
```

Replace `"Your commit message"` with a brief, descriptive message about the changes in this commit.

### 6. View Commit History

You can view the commit history of your repository, including commit messages and details.

```bash
git log
```

### 7. Create a New Branch

You can create a new branch to work on a specific feature or fix. Use the `git branch` command to create a new branch.

```bash
git branch <branch_name>
```

Replace `<branch_name>` with the name of the new branch.

### 8. Switch to a Different Branch

To switch to a different branch, you can use the `git checkout` command.

```bash
git checkout <branch_name>
```

Replace `<branch_name>` with the name of the branch you want to switch to.

### 9. Merge Changes from One Branch to Another

To merge changes from one branch into another, use the `git merge` command.

```bash
git merge <source_branch>
```

Replace `<source_branch>` with the name of the branch you want to merge into the current branch.

### 10. Push Changes to a Remote Repository

If you want to share your local changes with a remote repository, you can use the `git push` command.

```bash
git push origin <branch_name>
```

Replace `<branch_name>` with the name of the branch you want to push.

### 11. Pull Changes from a Remote Repository

To update your local repository with changes from a remote repository, use the `git pull` command.

```bash
git pull origin <branch_name>
```

Replace `<branch_name>` with the name of the branch you want to pull from.

### 12. Discard Local Changes

If you want to discard local changes and revert to the last committed state, use the `git reset --hard` command.

```bash
git reset --hard
```

**Note:** Be cautious when using this command, as it discards all local changes.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [SST Documentation](https://docs.sst.dev/)

Happy coding!
