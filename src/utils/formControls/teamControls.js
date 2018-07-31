import { Input } from './formModel';

export const teamControls = {
  name: new Input('input', 'Team Name*', {required: true}),
  project_manager: new Input('input', 'Project Manager*', {required: true}),
  leader: new Input('input', 'Team Leader*', {required: true}),
  slack: new Input('input', 'Team Slack Channel', {required: false}),
}