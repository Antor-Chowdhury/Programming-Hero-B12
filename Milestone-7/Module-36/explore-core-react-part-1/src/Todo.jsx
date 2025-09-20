// export default function Todo({ task, isDone }) {
//   //   props.task = "Java";
//   return <li>Task: {task}</li>;
// }

// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Done: {task}</li>;
//   } else {
//     return <li>Pending: {task}</li>;
//   }
// }

export default function Todo({ task, isDone, time = 0 }) {
  if (isDone === true) {
    return (
      <li>
        Done: {task} & Duration: {time}
      </li>
    );
  }
  return <li>To be done: {task}</li>;
}
