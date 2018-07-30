import { Input } from './formModel';

export const projectControls = {
  project_name: new Input('input', 'Project Name*', {required: true}),
  client: new Input('input', 'Client*', {required: true}),
  client_contact: new Input('input', 'Client Contact*', {required: true}),
  project_manager: new Input('input', 'Project Manager*', {required: true}),
  team: new Input('input', 'Team*', {required: true}),
  total_no_of_budgeted_blocks: new Input('input', 'Total # of Budgeted Blocks*', {required: true})
}