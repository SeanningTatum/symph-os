import { Input } from './formModel';

export const teamControls = {
  name: new Input('input', 'Team Name*', {required: true}),
  slack: new Input('input', 'Team Slack Channel', {required: false}),
}