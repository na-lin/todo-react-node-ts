import { Priority } from '../../createTaskForm/enums/priority';

export const renderPriorityBorderColor = (
  priority: string,
): string => {
  switch (priority) {
    case Priority.normal:
      return 'gray.900';
    case Priority.high:
      return 'error.light';
    case Priority.low:
      return 'info.light';
    default:
      return 'gray.900';
  }
};
