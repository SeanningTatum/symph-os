import { Input } from './formModel';

export const projectControls = {
  project_name: new Input('input', 'Project Name*', {required: true}),
  total_no_of_budgeted_blocks: new Input('input', 'Total # of Budgeted Blocks*', {required: true})
}