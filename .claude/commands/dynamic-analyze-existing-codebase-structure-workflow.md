description: Orchestrated workflow for: Analyze existing codebase structure
argument-hint: "<task_path>"
---
# Context
This workflow command was dynamically created to orchestrate agents for:

**Analyze existing codebase structure**

1. Review the Next.js 16 application structure in football-booking/
2. Identify current features: booking interface, ground listings, modal form
3. Document existing state management and data model
4. Note the tech stack: React 19, TypeScript 5, Tailwind CSS 4

Parent Task: Develop a tdd for fishing goods selling store. (2)

# Workflow
This command orchestrates the following agent sequence:

1. **senior-software-engineer** analyzes requirements and current codebase
2. **senior-software-engineer** executes: Review the Next.js 16 application structure in football-booking/
3. **code-reviewer** executes: Identify current features: booking interface, ground listings, modal form
4. **code-reviewer** executes: Document existing state management and data model
5. **code-reviewer** executes: Note the tech stack: React 19, TypeScript 5, Tailwind CSS 4

# Agents Orchestrated
- **senior-software-engineer**: Primary implementation and coding
- **code-reviewer**: Quality assurance and code review

**Note**: This command coordinates the agents - it doesn't do the implementation itself.
Each agent brings their specialized expertise to their part of the workflow.

# Artifacts
- Implementation code (from implementation agent)
- Tests (from implementation agent)
- Code review notes (from code-reviewer)
- Documentation updates (if applicable)

# Execution
The workflow runs agents in sequence, with each agent's output feeding into the next step.
Review checkpoints occur between major phases to ensure quality.
