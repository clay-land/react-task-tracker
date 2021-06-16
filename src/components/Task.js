import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'rgba(251, 247, 245, 0.9)', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <h4>{task.day}</h4>
    </div>
  )
}

export default Task
