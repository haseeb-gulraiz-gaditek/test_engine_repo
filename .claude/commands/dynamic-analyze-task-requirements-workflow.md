description: Orchestrated workflow for: Analyze task requirements
argument-hint: "<task_path>"
---
# Context
This workflow command was dynamically created to orchestrate agents for:

**Analyze task requirements**

1. Review the task description and requirements provided
2. Identify the specific features or changes needed
3. Determine which files and components will be affected
4. Document any dependencies or prerequisites

Parent Task: Add a new tdd for music listening app (2)

# Workflow
This command orchestrates the following agent sequence:

1. **senior-software-engineer** analyzes requirements and current codebase
2. **senior-software-engineer** executes: Review the task description and requirements provided
3. **code-reviewer** executes: Identify the specific features or changes needed
4. **code-reviewer** executes: Determine which files and components will be affected
5. **code-reviewer** executes: Document any dependencies or prerequisites

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
