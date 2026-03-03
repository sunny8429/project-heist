# Claude Setup Steps

## Getting Started with Claude

1. **Login to Claude**
   - Run the Claude application to authenticate
   - This establishes your connection to Claude's services

## Useful Claude Commands

1. **`claude -r`** - Resume a Previous Session
   - Lets you go back to an earlier conversation or session
   - Useful for continuing work from a past interaction

2. **`claude -c`** - Continue Current/Last Session
   - Reopens the most recent conversation context
   - Picks up where you left off

3. **`/model`** - View or Switch Model
   - Shows the current AI model in use
   - Allows switching between models (Opus, Sonnet, Haiku)

4. **`/doctor`** - Check Installation
   - Verifies your Claude Code installation is configured correctly
   - Identifies and reports any setup issues

5. **`/usage`** - View Usage Statistics
   - Shows current session usage and weekly usage totals
   - Displays extra usage if enabled
   - Press Escape to exit the usage screen

6. **`/config`** - Configure Global Settings
   - Modify global settings for Claude Code
   - Toggle tips display, thinking mode, or verbose output
   - Verbose output shows reasoning in the chat window
   - Press Enter or Space to toggle options

7. **`/theme`** - Change Theme
   - Switch the current visual theme in Claude Code

8. **`/login` / `/logout`** - Session Management
   - Log in to or log out of Claude Code

9. **`/upgrade`** - Upgrade Plan
   - Upgrade your Claude subscription plan

## Working with Projects

1. **Initialize the Session with `/init`**
   - Analyzes the codebase and creates a `CLAUDE.md` file in the project root
   - Stores project context: tech stack, CSS libraries, coding conventions, architecture, and testing procedures
   - Allows Claude to reference a single file for project context instead of scanning the entire codebase each time
   - Run this command when first working with an existing project
   - Re-run `/init` whenever the project changes (new libraries, folder structure updates) to keep `CLAUDE.md` up to date

2. **Add Context to Your Prompts**
   - Use `@` symbol followed by a file path to include specific files
   - Use `@` with a folder path to add entire directories
   - Use `@` with an image path to attach images, or simply copy-paste images directly
   - This gives Claude direct access to the content you want to work with

3. **Manage Context Window with `/compact`**
   - Claude automatically triggers this command when the session reaches 95% capacity, or you can run it manually
   - Compresses the entire chat history and manually added files into a concise summary
   - The summary is preserved in the session context for continuity
   - All previous chat messages are removed, freeing up space for new interactions
   - Helps maintain long-running sessions without losing important context

4. **Clear Context with `/clear`**
   - Removes all chat history similar to `/compact`, but without creating a summary
   - Completely clears everything as if starting a brand new chat session
   - Use when you want a fresh start without preserving previous context

5. **Rewind Session with `/rewind`**
   - Type `/rewind` or press Escape twice to activate
   - Claude Code automatically creates checkpoints throughout your session history
   - Navigate through checkpoints using up and down arrow keys
   - Select a previous checkpoint to return to that point in the conversation
   - Useful for undoing recent changes or exploring different paths

6. **Understanding Claude Code Tools**
   - Tools are how Claude Code performs actions in your application autonomously
   - The AI model can reason, plan, and generate text, but relies on tools to interact with your project
   - Tools bridge the gap between the AI model and your codebase, file system, and development environment
   - When you make a request, Claude automatically selects the appropriate tools to complete the task
   - You can see which tools Claude is using in real-time during execution
   - Common tool categories include:
     - **File Operations**: Reading, writing, searching, and modifying files
     - **Code Analysis**: Searching codebase semantically, finding patterns with grep
     - **Terminal**: Running shell commands and scripts
     - **Browser**: Navigating and interacting with web pages for testing
     - **Linting**: Checking and fixing code quality issues

7. **Manage Tool Permissions with `/permission`**
   - Controls which tools Claude Code can use during your session
   - Allows you to grant or restrict access to specific tool categories
   - Common permission categories include:
     - **File system access**: Read, write, and modify files
     - **Shell commands**: Execute terminal commands and scripts
     - **Browser access**: Open and interact with web pages
     - **Network requests**: Fetch data from external sources
   - You can enable "Ask me first" mode to review each tool action before it executes
   - Helps maintain control over sensitive operations like file deletion or system commands

8. **Custom Commands**
   - Create custom slash commands in the `.claude/commands/` folder
   - Each command is a markdown file that defines a reusable prompt template
   - Invoke them with `/<command-name>` during a session
   - Use frontmatter to add metadata like `description` and `allowed-tools`
   - Great for automating repetitive workflows (e.g., commit messages, component scaffolding, code reviews)

9. **Bash Mode with `!`**
   - Type `!` in the chat window to switch into bash mode
   - Allows you to run shell commands directly without leaving the session