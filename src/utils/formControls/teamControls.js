import { Input } from './formModel';

export const teamControls = {
  team_name: new Input('input', 'Team Name*', {required: true}),
  project_manager: new Input('input', 'Project Manager*', {required: true}),
  team_leader: new Input('input', 'Team Leader*', {required: true}),
  team_slack_channel: new Input('input', 'Team Slack Channel', {required: false})
}