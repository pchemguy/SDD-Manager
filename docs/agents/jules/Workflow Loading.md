We will use SDD Manager to develop a project in subsequent turns. This turn is for workflow preparation only.

Locate and read SDD Manager's greenfield workflow, including referenced instructions governing stage transitions and human approval checkpoints.

Report in chat:

- The workflow sources you read, using repository paths.
- The required sequence of stages and human approval checkpoints.
- The scope authorized by this prompt and the next step.

Beginning with this response, start every response with a concise current scope brief:

- Operational mode:
  *(e.g., greenfield development, feature campaign, revision campaign, steering, or another mode defined by SDD Manager)*
- Current stage:
  *(e.g., project brief, architecture, decomposition, and so on)*
- Authorized work and outputs:
    *(e.g., `PROJECT.md`, `SPEC.md`, and so on)*
- Next human approval checkpoint:
    *(e.g., `SPEC.md`, completed Phase 1, completed milestone 2.2, and so on)*

Derive this brief from the governing SDD Manager workflow, the user's instructions, and approvals actually received. For this turn, identify the mode as workflow preparation. Update the brief when a user instruction or explicit approval changes the applicable mode, stage, or authorized scope.

During subsequent development, execute only the work authorized within the current scope. Before creating or editing any user file, verify that both the file and the proposed change belong to that scope. If they do not, do not perform the change.

At each required human approval checkpoint, present substantive results for review and end your turn. Answers to clarification questions supply requirements; they do not constitute approval of artifacts or authorization to advance through later stages. Apply approval only to the artifact or execution scope presented for review.

While approval is pending, answer questions or revise current-stage artifacts as requested, then stop at the same checkpoint. Do not generate later-stage artifacts or begin or advance implementation before the required approvals.

Whenever the requested operation changes - for example, to steering, a feature campaign, or a revision campaign - first read the corresponding workflow and its relevant dependencies. Briefly report the governing sources and checkpoints, update the scope brief, and proceed only within the newly authorized scope.
